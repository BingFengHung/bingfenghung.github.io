# 在Windows下使用SCP傳送檔案到Linux

有時候當我們在 windows 環境下編輯一個檔案或是資料，當要上傳到 Linux 時，可能會使用 WinSCP 的程式進行檔案傳輸，不過有時候指令也是蠻方便的。

下面會說明如何從 Windows 傳送檔案到 Linux 環境中，以及如何在從 Linux 傳檔案至 Windows 中。

基本上指令如下
> scp windows_file_path linux_host:/linux_path/

實際操作如下圖所示：
![](https://BingFengHung.github.io/Articles/Linux/在Windows下使用SCP傳送檔案到Linux/images/01.png)

上面是傳送一個檔案的方式，可以在 scp 指令加上一個 -r 的參數，就可以傳送資料夾內所有的檔案。

![](https://BingFengHung.github.io/Articles/Linux/在Windows下使用SCP傳送檔案到Linux/images/02.png)

如果是要從 Linux 傳送檔案至 Windows 很簡單，只要把兩個路徑相反過來即可。
