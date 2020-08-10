# C# 在多執行緒下確保只有一個物件實例化

程式碼中一定會碰到使用 static 物件的情況，而 static 物件在程式一開始執行時，會產生一個實例化，這個在單一執行緒時還不會有問題，可是如果在多執行緒的情況下，同時行時，九有可能化發生建立多個實例化的狀況 (使用單一模式時可能會發生的狀況)；為此，本篇的目的在於確保 static 物件實例化時，在多執行緒的狀況下只產生一個實例化物件。

C# 中的 lock 關鍵字可確保當關鍵區段中已有執行緒時，另一個執行緒不會進入程式碼的關鍵區段。如果另一個執行緒嘗試進入鎖定的程式碼，他將等候、封鎖直到釋放物件，範例程式如下：

```C#
class Singleton {
    private static Singleton single;

    private static readonly object sync = new object();

    private Singleton() {}

    public static Singleton GetInstance() {
        // 加入 lock 確保同一時間只會有一個執行緒可以進入
        lock(sync) {
            if (single == null) {
                single = new Singleton();
            }
        }

        return singleton;
    }
}
```

從上面程式碼看可能會有一個疑問，為什麼要特地在建立一個 sync 的物件，而不使用我們要產生的物件呢? 因為instance 連有沒有實體化過都還不知道，是不可已確定能不能 lock 的。

現在已經解決不會產生多個實體化的問題了，但是這個程式碼還可以再提升效能，我們可以在多加入一個判斷式，這樣我們不會一進入就要直接面對 lock 影響效能，修改後程式碼如下：

```C#
class Singleton {
    private static Singleton single;
    private static readonly object sync = new object();

    private Singleton(){}

    public static Singleton GetInstance() {
        if (single == null) {
            // 加入 lock 確保同一時間只會有一個執行緒可以進入
            locl (sync) {
                if (single == null) {
                    single = new Singleton();
                }
            }
        }

        return single;
    }
}
```