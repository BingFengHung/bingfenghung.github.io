# JavaScript 函式多型實作

本篇將介紹如何實作 JavaScript 的多載，所謂的多載就是讓函式根據傳入的引數來對應到實際上要做的函式，因為在 JavaScript 裡並沒有多載的概念，因此本篇會使用一些 JavaScript 函式內建的參數，並搭配一些小技巧來使 JavaScript function 擁有多載的能力。

因為在 JavaScript 裡要多載函式時，只會有一份實作，所以無法達到平常像是 C++ 或 C# 等語言的多載概念，為什麼只會有一份實作呢? 主要的原因有兩個，其中比較大的原因是因為當 function 的名稱在前面有存在，如果我們用同樣的名字的 function 再宣告一次會發生上面的 function 被下面實作 function 覆蓋掉的問題，如下圖 1 所示：

![](https://BingFengHung.github.io/Articles/JavaScript/JavaScript函式多型實作/images/01.png)

圖 1、function 被覆蓋

如上圖可以看到，我在裡面定義兩個 function ，分別具備不同的參數，結果怎麼了，在第一個 function 的地方宣告完後呼叫，可以叫用成功，但再次定義一個不同參數的 function ，變成，會發現已經無法呼叫了，這是因為當 function 的命名如果一樣時，會被覆蓋掉，因此之前定義的 function 已經不存在了，這是第一個原因。

第二個原因是因為，其實 JavaScript function 再叫用時，可以傳入無限多個參數，即使在 function 宣告時，並沒有事先定義參數，function 還是可以使用這些未事先定義的，這是因為 function 裡面有一個隱性參數，這個參數會把 function 叫用時，所用到的參數全部存在這個隱性參數 arguments 中，此參數有一個 length 的屬性，可以代表實際參數的個數，並可透過陣列索引的方式取的每一個參數值，但這邊有一個地方要注意，那就是 `arguments 並不是陣列`，一些陣列的功能在他身上並不具備，所以使用時會有些限制。因為有這個隱性參數，這會使得 JavaScript 的多載變得沒有意義，因為不管傳甚麼參數進來，都還是用同一個 function 就可以處理，這邊稍微示範一下，參考如下圖 2 所示：

![](https://BingFengHung.github.io/Articles/JavaScript/JavaScript函式多型實作/images/02.png)

圖 2、使用隱性參數 arguments 

如上圖可以看到，我定義一個 temp 的 function，但我可以傳入任意數量的參數，甚至是不同的型別都還可以作處理。

如上所述，是不是已經想到，函式多載是讓函式根據傳入的參數來做不同事情的技術，在上面我們已經知道有 arguments 的存在，那就很容易可以實作多載的概念，直接透過判斷式的方式，判斷呼叫端，傳入的引數是甚麼型別，作不同的反應，這個做法在簡單的函式裡還算可以，但如果城市很複雜，需使用多個判斷式的話，函式就會變得很冗長，這樣的作法並不好，接下來就進入本篇要介紹的技巧了，將 function 一一寫成獨立的匿名函式，程式碼如下圖 3 所示：

![](https://BingFengHung.github.io/Articles/JavaScript/JavaScript函式多型實作/images/03.png)

圖 3、實作 JavaScript 多型

上面的引數分別為：
- object -> 方法想要綁定的物件
- name -> 方法綁定的屬性名稱
- func -> 想要綁定的方法宣告

1. 儲存先前的函式，若傳入的函式沒有數量能匹配的參數，可能就要呼叫他了
2. 如果傳入的參數與 arguments 的 length 數量一樣，呼叫傳入的函式
3. 如果傳入的函式無法匹配，呼叫先前的函式


上面函式使用起來的狀況會是如下圖 4 所示：

![](https://BingFengHung.github.io/Articles/JavaScript/JavaScript函式多型實作/images/04.png)

圖 4、使用多型

這邊執行的步驟為，第一個 myFuncDef 建立的時候，此時在 func 的參數會收到外面傳入定義的匿名函式，當參數呼叫為 0 的時候，就會呼叫傳入的 func 函式，因此，外部傳入的物件就多了一個 Find 的方法，再來又在定義了一個擁有一個參數的匿名函式，傳入myFuncDef 中，此時，在裡面的變數，old 會記錄上次的 function，並將剛剛傳入的匿名函式，在一次的存起來。 [這邊有閉包的概念，因為每次 old 都會去指向舊的函式，所以在呼叫時，會透過 Scope Chain 去找到舊的函式]

說明圖如下圖 5 所示：
![](https://BingFengHung.github.io/Articles/JavaScript/JavaScript函式多型實作/images/05.png)

圖 5、多型 Scope Chain

根據上面的概念，每次我們都會從最後一次儲存的函式開始往下面去找 (從有n 個參數的函式開始找到，沒有參數為止)，因此，我們後面在呼叫不同的參數就能夠對應到不同的函式了。
