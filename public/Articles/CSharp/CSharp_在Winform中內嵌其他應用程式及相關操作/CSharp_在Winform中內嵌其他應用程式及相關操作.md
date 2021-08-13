# C# 在 WinForm 中內嵌其他應用程式及相關操作

最近開發的專案中，有需要將其他應用程式內嵌至 Winform 中，為此本篇將介紹，如何在自己的 Winform 程式中，內嵌其他應用程式來執行並操作；本篇將介紹三個重點，第一個是如何將其他應用程式內嵌至 WinForm 中，第二個是，如何決定內嵌程式的位置，最後一個是，偵測內嵌的程式是否有被關閉。

首先第一個是如何將應用程式內嵌至 WinForm 中，首先我們需要PInvoke的 SetParent原生 API 方法，使用 DllImport 方法將原生 dll 匯入，並使用指定所需的API方法，如下圖1所示：

`在使用 DllImport 之前須 using System.Runtime.InteropServices，的命名空間`

```C#
[DllImport("user32.dll", Charset=CharSet.Auto, SetLastError=true, ExactSpelling=true)]
public static extern int SetParent(IntPtr hWndChild, IntPtr hWndNewParent);
```
圖1、SetParent 方法引入

引入方法過後，使用 Process.Start 呼叫想要執行的程式起來，後面再呼叫一個 WaitForInputIdle 的方法，等到此應用程式被確實的呼叫起來，之後再加一個執行續暫停幾秒的功能，在這邊暫停幾秒的部分可能要測試一下，因為如果碰上需要開啟比較久的程式，往往幾秒鐘的等待都是必須的，之後就可以用剛剛的 SetParent 方法，首先低一個參數的話，舊式呼叫程式的 Handle 值，第二個參數的話，就是要放在哪一個畫面上，通常 WinForm 的話，一般都是使用 Panel 當作 Host 的方式，將程式放到 Panel 中，此範例也不例外，使用Panel 的 Handle 值，程式碼如下圖所示：

```C#
private void button1_Click(object sender, EventArgs e) {
    Process proc = Process.Start("txt1.txt");
    proc.WaitForInputIdle();
    System.Threading.Thread.Sleep(1000);
    SetParent(proc.MainWindowHandle, panel1.Handle);
}
```
圖 2、放入指定的畫面中

程式執行後，可看到如下圖3所示的畫面，一個筆記本內嵌至 WinForm 中。

![](https://BingFengHung.github.io/Articles/CSharp/CSharp_在Winform中內嵌其他應用程式及相關操作/images/01.png)

圖 3、應用程式放至 WinForm 中

但是上面的畫面會有一個問題，第一次打開時，筆記本的位置不是我們想要的起始位置，因此，就需要一個設定應用程式位置的方法；同樣的我們使用 DllImport 原生 dll ，找到我們所需的方法，MoveWindow 方法，如下圖4所示：

```C#
[DllImport("user32", SetLastError=true)]
internal static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
```
圖 4、MoveWindow 方法引入

帶入指定的參數 hWnd 為應用程式的 handle 值，X 與 Y 為程式的位置，nWidth 與 nHeight 為程式的大小，bRepaint 重新繪製應用程式，知道以上的參數之後，只要我們程式載入完成後就可以執行下圖的指令決定程式的位置以及大小。

```C#
MoveWindow(proc.MainWindowHandle, -5, -30, 500, 500, true);
```
圖 5、程式大小與位置指定

最後一個，如何知道內部的程式是否有被關閉了，一般的作法是寫個執行序偵測指定的程式是否有被關閉，在這邊介紹另外一個方法，向 Windows 註冊的方式。同樣使用引入原生 dll 的方法，引入 SetWinEventHook、WinEventDelegate、UnhookWinEvent 與 GetWindowText四個方法，與一些所需的參數，如下圖6所示：

```C#
public const uint EVENT_SYSTEM_FOREGROUND = 0x0003;
public const uint EVENT_OBJECT_DESTORY = 0x8001;
public const uint WINEVENT_OUTOFCONTEXT = 0;

public delegate void WinEventDelegate(IntPtr hWinEventHook, uint eventType, IntPtr hwnd, int idObject, int idChild, uint dwEventThread, uint dwmsEventTime);

[DllImport("user32.dll")]
public static extern IntPtr SetWinEventHook(uint eventMin, uint eventMax, IntPtr hmodWinEventProc, WinEventDelegate lpfnWinEventProc, uint idProcess, uint idThread, uint dwFlags);

[DllImport("user32.dll")]
public static extern bool UnhookWinEvent(IntPtr hWinEventHook);

[DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);
```
圖 6、引入相關函式

完成之後，我們在頁面 Loaded 的事件中，如下圖7，加入如下指令的程式碼，將委派掛起來，裡面的 WinEventDelegate 中要加入當開啟或關閉事件發生時，要執行的程式碼，如下圖8所示：

```C#
private void Form1_Load(object sender, EventArgs e) {
    if (proc != null) {
        hook = SetWinEventHook(EVENT_SYSTEM_FOREGROUND, EVENT_SYSTEM_FOREGROUND, (uint)proc.id, 0, WINEVENT_OUTOFCONTEXT);
    }
}
```
圖7、設定委派

```C#
private void WinEventProc(intPtr hWinEventHook, uint eventType, IntPtr hwnd, int idObject, int idChild, uint dwEventThread, uint dwmsEventTime) {
    string s = "Page Setup"l
    var sb = new StringBuilder(s.Length + 1);
    GetWindowText(hwnd, sb, sb.Capacity);

    if (sb.ToString() == s) 
       MessageBox.Show("Application is opened");
    else if (sb.ToString() == "") 
       MessageBox.Show("Application is closed");
}
```
圖8、委派執行函式

最後如果直接關閉主程式時，要將剛剛的委派取消註冊，如下圖9所示：

```C# 
private void Form1_FormClosing(object sender, FormClosingEventArgs e) {
    UnhookWinEvent(hook);
}
```
圖 9、取消委派註冊