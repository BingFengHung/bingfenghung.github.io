# Node.js module.exports 與 exports 之間的差異
在 Node.js 中，module 模組提供了 exports 物件，他與 module.exports 物件指向同一個變數，因此，在修改 exports 物件時，同時也會修改到 module.exports 物件。但是可以發現，如果在 module.exports 進行操作時，在其內容不為空的情況下，會發現 exports 物件失效了，這是為什麼呢? 本篇主要探討兩個物件之間的差異，找出上述的原因：

首先介紹一下 module.exports 物件與 exports 物件的區別，如下段程式碼所示：

```javascript
// add.js 等待被引入的 js 檔案
module.exports = function(name, age) {
    this.name = name;
    this.age = age;
    this.userInfo = function() {
        console.log(`${this.name} is ${this.age} years old!`);
    };
};

exports.tag = function() {
    console.log('This is a tag function');
}
```

引入上面的 js 檔案，並 new 使用其內容

```javascript
// compare.js
var obj = require('./add.js');

var user = new obj('Joe', 25);
user.userInfo();
console.log(user.tag);
console.log('pause');
```

引入後結果如下圖 1 所示：
![](https://BingFengHung.github.io/Articles/JavaScript/Node.jsModule.exports與exports之間的差異/images/01.png)

可發現由 exports.tag 輸出的函式是 undefined。這是因為其實，module.exports 才是 module 模組的真正介面，而 exports 可以理解他為一個副本，雖然修改 exports 物件的時候也會修改 module.exports 物件，但是駔後返回給使用者是 module.exports 物件而非 exports 物件。因此，當 module.exports 物件透過賦值方式進行設定後，已經與 exports 物件指向的變數不同了，此時無論 exports 物件如何修改，都已經與 module.exports 無關了。