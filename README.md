# 表白信封使用教程

[![license](https://img.shields.io/github/license/george-chou/eLuvLetter.svg)](https://github.com/george-chou/eLuvLetter/blob/master/LICENSE)

可遵循 <a href='https://www.bilibili.com/video/BV1wp4y1W7aH?p=2' target='_blank'>视频教程</a> 验证代码，多半 **`疑难杂症`** 是 **`直接用浏览器打开index.html`** 所致。

## 重要链接准备
|    名称     | 网址                                        |
| :---------: | :------------------------------------------ |
|  Git 官网   | <https://git-scm.com/downloads>             |
| GitHub 官网 | <https://github.com/>                       |
|  仓库网址   | <https://github.com/george-chou/eLuvLetter> |
| Vercel 官网 | <https://vercel.com/>                       |

## 安装 Git
教程：<a href="https://www.bilibili.com/video/BV1BE411g7SV" target="_blank">bilibili.com/video/BV1BE411g7SV</a>

下载：<a href="https://git-scm.com/downloads" target="_blank">git-scm.com/downloads</a>

## 自定义信封
1. 首先注册一个 GitHub 账号并 fork 一份 <a href='https://github.com/george-chou/eLuvLetter' target="_blank">此仓库</a> 到你自己的账号
2. 克隆仓库到本地：
```
git clone https://github.com/你的github用户名/eLuvLetter.git
```

3. 进入 ./eLuvLetter/font/ 目录下打开 content.json，按如下说明自定义配置：

```
{
    "to"        : "信封收件人",
    "from"      : "信纸落款",
    "recipient" : "信纸收件人",
    "title"     : "网页页签标题",
    "stamp"     : "邮票图 URL",
    "bgm"       : "BGM URL",
    "text"      : "信纸内容"
}
```

其中demo里符号 `^n` 的含义是打字机停顿 n 毫秒，

BGM URL 可以是 demo 代码中带的默认 mp3 目录，也可以是网络 mp3 直链(注：最好不用 API 获取 mp3，可能会被跨域封锁)
<br>
如果使用默认目录，可将自己的 mp3 重命名成 bgm.mp3 覆盖掉 ./eLuvLetter/bgm 下的 bgm.mp3 实现自定义修改 BGM (建议 bgm.mp3 不要过大，否则加载时间过长卡在心跳特效，影响体验)

## 部署到 Vercel 及广域网展示
1. 首先将修改过的本地代码同步到你的 GitHub 账号上：
```
cd eLuvLetter
git add .
git commit -a
键入i键
输入变更描述
输入 :wq! 回车
git push
```

2. 进入 <a href="https://vercel.com/login" target="_blank">Vercel 官网</a>

3. 使用你自己的 GitHub 账号授权登录，点击 **`+ New Project`**

4. 在 **`Import Git Repository`** 的搜索框中键入关键字 eLuvLetter 找到之前 fork 的那个仓库

5. 点击 **`Import`**，修改 **`Configure Project`** 下的 **`PROJECT NAME `**

6. 保证 **`PROJECT NAME `** 不与别人冲突后点击 **`Deploy`**

7. 部署完成后，可在广域网中访问 **`https://%PROJECT_NAME%.vercel.app`** 查看网页。(其中 **`%PROJECT_NAME%`** 就是刚刚 **`Configure Project`** 下修改的 **`PROJECT NAME `**)

注：fork 得到的私人仓库部署到 Vercel 后，更新代码 git push 到私人仓库时，Vercel 端会随之自动更新，因此无需重复部署。

<!-- ## 未来工作
1. 目前信纸内容有字数限制，未来有余力可在信纸上添加滚轴实现字数扩展
2. 背景暂时被樱花特效占据，未来有余力可增加静态背景或其它选项 -->