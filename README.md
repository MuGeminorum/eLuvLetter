## 本地调试

### 安装 Git
下载： <https://git-scm.com/downloads>

### 安装 XAMPP
教程： <https://www.bilibili.com/video/BV1e7411u7qY>
下载： <https://www.apachefriends.org/download.html>

### 本地部署
首先注册一个 github 账号并 fork 一份本仓库到你自己的账号
在 cmd 中切换到 XAMPP 的 htdocs 目录下，clone仓库：
git clone https://github.com/你的github用户名/eLuvLetter.git

进入 ./eLuvLetter/font/ 目录下打开 content.json，按如下说明自定义配置：

`{`
`    "to"        : "信封收件人",`
`    "from"      : "信纸落款",`
`    "recipient" : "信纸收件人",`
`    "bgm"       : "BGM URL",`
`    "text"      : "信纸内容"`
`}`

其中demo里符号 `^n` 的含义是打字机停顿n毫秒，

BGM URL可以是demo代码中带的默认mp3目录，也可以是网络mp3直链(注：最好不用API获取mp3，可能会被跨域封锁)
如果使用默认目录，可将自己的mp3重命名成 bgm.mp3 覆盖掉 ./eLuvLetter/bgm 下的 bgm.mp3 实现自定义修改BGM

### 本地展示
在 XAMPP 上打开 Apache，进入 <http://localhost/eLuvLetter>
建议使用本地展示调试完毕后再进行下一步

### 部署到 Vercel 及广域网展示
首先将修改过的本地代码同步到你的github账号上：
命令行进入 ./eLuvLetter 后
git add .
git commit -a
输入 :wq! 回车
git push

再进入 vercel 官网： <https://vercel.com/login>

使用你自己的 github 账号授权登录，点击 `+ New Project`，
在 Import Git Repository 的搜索框中键入关键字 eLuvLetter 找到之前 fork 的那个仓库，
点击 `Import`，修改 Configure Project 下的 PROJECT NAME 
保证不与别人冲突后点击 `Deploy`
部署完成后，可在广域网中访问 `%PROJECT NAME%.vercel.app` 查看网页。(其中 %PROJECT NAME% 就是刚刚 Configure Project 下修改的 PROJECT NAME)