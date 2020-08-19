# Git Commit Message 簽章功能

## 前言
每次在撰寫 Git Commit 訊息時，若沒有統一的撰寫規範，在未來要查找相關紀錄時，會花費一些時間；本篇主要介紹如何透過 git 指令與指定 Git Commit Message Template 的方法，幫助我們每次再撰寫 git commit message 時，有一個統一的編輯規範。

首先，可以看到下圖 1 的部分，git message 的部分是空白的，導致每次編寫 commit message 時，都要在撰寫一次同樣的編輯規範，為了增加撰寫 git 的速度，下面將介紹如何建立 git commit message template。

![](https://BingFengHung.github.io/Articles/Others/GitCommitMessage簽章功能/images/01.png)

圖 1、空白的 message

首先建立一個檔名為 .git-commit-template.txt 的文字檔，在檔案中撰寫所需要的預設資訊，下面我找了大部分人會使用的編輯規範，如下圖 2 所示：

![](https://BingFengHung.github.io/Articles/Others/GitCommitMessage簽章功能/images/02.png)

圖 2、git 編輯規範

然後，我們將此份檔案的內容貼至剛剛建立的文字檔中，並另存新檔，這邊要注意編碼格式選擇 UTF-8 的編碼格式，如下圖 3 所示：

![](https://BingFengHung.github.io/Articles/Others/GitCommitMessage簽章功能/images/03.png)

圖 3、選擇 UTF-8 編碼格式

若沒有選擇 UTF-8 的編碼格式的話，裡面的內容在 git message 裡面會全部變成亂碼，如下圖 4 所示；

![](https://BingFengHung.github.io/Articles/Others/GitCommitMessage簽章功能/images/04.png)

圖4、Commit Template 訊息亂碼

完成後，我們開啟 cmd 輸入以下指令

> git config --global commit.template <git-commit-template.txt file path>

`ex. git config --global commit.template D:\.git-commit-template.txt`

完成之後，在下一次的 commit 中，可以看到 message 就變成我們是先定義好的撰寫格式了，如下圖5所示：

![](https://BingFengHung.github.io/Articles/Others/GitCommitMessage簽章功能/images/05.png)

圖 5、顯示 git commit message

經過上述的步驟之後，我們就有統一 git commit 訊息的撰寫格式的。

測試的過程中，我本來以為在 commit message 裡面的 # 會當作註解，不會被推上去，結果他沒有註解掉，導致 commit message 也把所有 # 字號後面的訊息都推上去了，目前發現須搭配 VIM 編輯器進行 commit 訊息的編輯，才不會將 # 字號的註解也一起推上去，因此關於註解的部分還在找尋其他替代方案中。
