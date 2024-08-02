# Use eLuvLetter
[![license](https://img.shields.io/github/license/MuGeminorum/eLuvLetter.svg)](https://github.com/MuGeminorum/eLuvLetter/blob/master/LICENSE)
[![Deploy static content to Pages](https://github.com/MuGeminorum/eLuvLetter/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/MuGeminorum/eLuvLetter/actions/workflows/static.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/712880d1-1b1f-4500-a50f-16433c31d130/deploy-status)](https://app.netlify.com/sites/eluvletter/deploys)
[![](https://img.shields.io/badge/bilibili-BV1DV4y1c77c-fc8bab.svg)](https://www.bilibili.com/video/BV1DV4y1c77c)
[![](https://img.shields.io/badge/ModelScope-eluvletter-624aff.svg)](https://www.modelscope.cn/studios/MuGeminorum/eluvletter)

## Important links
|    Name    | URL                                            |
| :--------: | :--------------------------------------------- |
|    Git     | <https://git-scm.com/downloads>                |
|   GitHub   | <https://github.com>                           |
| eLuvLetter | <https://github.com/MuGeminorum/eLuvLetter>    |
|  Netlify   | <https://app.netlify.com>                      |
|  2D Demo   | <https://eluvletter.netlify.app>               |
|  3D Demo   | <https://eluvletter.netlify.app/index-3d.html> |

Note: the heartbeat animation indicates that the BGM is loading, please be patient and wait util the envelope appears.

## Customize

0. Download and install Git;

1. Register a GitHub account, set SSH, and fork a copy of this repository to your own account;

2. Clone the repository to local:
```
git clone https://github.com/%Your_GitHub_Account%/eLuvLetter.git
```

3. Go to the `./eLuvLetter/font/` directory, open `content.json`, and customize the configuration as follows:

```
{
    "to"        : "envelope recipient",
    "from"      : "sign",
    "recipient" : "letter recipient",
    "title"     : "Web page tab title",
    "stamp"     : "Stamp URL",
    "bgm"       : "BGM URL",
    "text"      : "letter ^n content"
}
```

The symbol `^n` in the demo means that the typewriter pauses for n milliseconds,

BGM URL is the default mp3 directory or mp3 direct link in the demo code(Note: It is best not to use the API to get mp3, it may be blocked by cross-domain)

If you use the default directory, you can rename your mp3 to `bgm.mp3` and overwrite `bgm.mp3` under `./eLuvLetter/bgm` to achieve custom modification of BGM (mp3 size is better < 500K)

## Deploy to Netlify
1. Sync the modified local code to your GitHub account:
```
cd eLuvLetter
git add .
git commit -a
# i
# input description
# :wq!
git push
```
2. Enter [Netlify official website](https://app.netlify.com);
3. Use your GitHub account to login by authorization, click `Add new site` - `Import an existing project`;
4. Click `GitHub`, enter the keyword `eLuvLetter` in the search box to find the previously forked repo, and select it;
5. Click `Deploy site` to jump into `Site overview` page automatically, click `Site settings`;
6. Click `Change site name` under `Site information`, modify second-level domain name not conflict to others, and click `Save`;
7. After the deployment, we can visit `https://%PROJECT_NAME%.netlify.app` to broswe your page(The `%PROJECT_NAME%` is the second-level domain name customized just now)

*Good luck* 💖
