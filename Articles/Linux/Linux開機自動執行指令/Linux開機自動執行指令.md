# Linux 開機自動執行指令

想要讓 Linux 開機時，自動執行指令很簡單，只要將指令加在 /etc/rc.local 這個指令搞中即可，這樣每次 Linux 在開機時，就會自動的被執行。

例如我有寫了一個指令搞叫做 test.sh，放在 /opt/test.sh ，要讓 linux 自動執行的話，必須先確認這個指令搞有執行權限：
> chmod +x /opt/test.sh

然後就再 /etc/rc.local 裡面，加上這上指令搞

記住，要在結尾的 exit 0 之前加上指令搞

/opt/test.sh

exit 0

這樣每次開機時，就會去自動執行我的指令搞了。