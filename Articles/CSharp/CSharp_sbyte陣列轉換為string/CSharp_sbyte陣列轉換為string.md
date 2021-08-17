# C# sbyte 陣列轉換為 string
最近在使用第三方函式庫時，因為第三方函式庫是使用 Visual C++ 所寫的，但是我們平常是使用 C# 進行開發的，因此，有另外處理一個中介類別，主要用來處理 C# 與  Visual C++ 之間的轉換，方便讓 C# 可以直接呼叫函示使用；因為會從 Visual C++ 那邊得到 sbyte 的陣列，在 C# 這邊就要將其解讀為 string，為此，本篇的目的主要在介紹如何將 sbyte 陣列轉換回 C# 的字串使用。

以下為從 sbyte 陣列轉會為 string 的範例

在這邊就不寫出 C++ 那邊是如何回傳 sbyte，直接從 C# 這邊接受到 sbyte 陣列的後續處理方法。

```C#
sbyte[] sbyteData = new sbyte[] {77, 78, 61, 62, 63, 54}

// Convert sbyte[] to byte[]
byte[] byteData = Array.ConvertAll(sbyte, x => (byte)x);

ASCIIEncoding encoding = new ASCIIEncoding();
string code = encoding.GetString(byteData);
```

上面的範例，因為程式的編碼規則為 ASCII，所以建立一個 ASCII 的編碼器，但是他只能將 byte 型別陣列轉換成字串，所以首先要處理的就是將 List\<sbyte> 轉換為 byte 陣列，轉換成 byte 陣列之後，就可以使用編碼器，就可將 byte 轉換為字串了。