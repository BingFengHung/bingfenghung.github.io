# Python 函式基本教學
本篇將介紹 Python 函式的建立，透過函式建立的方式可以縮減大量重複程式碼的問題，讓城市看起來可讀性更高，更具備結構化設計的特行；此外，將說明一些常用的函示使用方式。

## 函式定義
函式 (Function) 建立可重複呼叫使用的程式區塊，具有三個特性(函式名稱、參數輸入與參數輸出等功能)。在 Python 中會先以 def 作為函式定義的開頭，如下列程式碼所示：

```python
# 函式定義

+def my_first_funtion(val):
    print(val)
    return None

# 呼叫函式
my_first_function(1)
```

`切記，Python 是以縮排當作程式區塊，因此要特別注意縮排的規則`

從上面的 function 中可以看到 val 代表的是輸入的參數，return 代表輸出：
- function 如果不需要輸入任何的參數就不需要寫變數名稱
- function 如果沒有輸出函數的需要是可以不用寫 return

## 一級函式 (First-Class Function)
Python 的函式與 JavaScript 一樣屬於一級函式。一級函式的意思是我們可以將函式指定給某個變數、將函式傳入另一個函式或是從函式中回傳一個函式，如同使用一般的物件操作一樣去操作函式，聽起來很複雜，參考下段程式碼所示：

```python
def my_wrapper(func):
    func(10)

my_wrapper(my_first_function)  # 10
```

上面可以看到，我剛剛將第一次所寫的 my_first_function 當作參數傳給新的 function，並且在新 function 中傳入一個 10 的參數然後進行呼叫，呼叫結果可以在畫面中看到是顯示 10。

接下來示範如何在一個函式中回傳一個函式，如下段程式碼所示：

```python
def tool():
    def add(val1, val2):
        return val1 + val2
    # 將函式輸出
    return add

add|_value = tool()

print(add_value(1, 2))
```

## 匿名函式
匿名函式是指一個無須定義識別符號 (函式名稱) 的函式，匿名函式的優點是可以省去定義函式的過程，讓程式碼可以更加精簡，如段程式碼所示：

```python
func = lambda x: x * 2
print(func(10)) # 20
```

## 函式參數預設值
當函式輸入時，在沒給定輸入參數的情況下，想要使用預設值可以使用以下方式決定函式的參數預設值，如下段程式碼所示：

```python
def my_second_function(val = 20)
    print(val)

my_second_function() # 20
```

## args 與 kwargs
當我們希望函式參數可以接受任意參數時，可使用 args (無名稱參數組成的 tuple) 以及 kwargs (無名稱參數組成的字典)，如下段程式碼所示：

```python
def my_third_function(*arg, **kwargs):
    print('unnamed args:', arg)
    print('keywords args:', kwargs)

my_third_function(1, 2, key='hello', s = 'word')
```

輸出結果

![](https://BingFengHung.github.io/Articles/Python/Python函式基本教學/images/02.png)
