# Tutorial of eLuvLetter usage
[![license](https://img.shields.io/github/license/MuGeminorum/eLuvLetter.svg)](https://github.com/MuGeminorum/eLuvLetter/blob/master/LICENSE)
[![Deploy static content to Pages](https://github.com/MuGeminorum/eLuvLetter/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/MuGeminorum/eLuvLetter/actions/workflows/static.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/712880d1-1b1f-4500-a50f-16433c31d130/deploy-status)](https://app.netlify.com/sites/eluvletter/deploys)
[![bilibili](https://img.shields.io/badge/bilibili-BV1DV4y1c77c-fc8bab.svg)](https://www.bilibili.com/video/BV1DV4y1c77c)
[![ms](https://img.shields.io/badge/ModelScope-eluvletter-624aff.svg)](https://www.modelscope.cn/studios/MuGeminorum/eluvletter)
[![cnblog](https://img.shields.io/badge/cnblog-16617269-075db3.svg)](https://www.cnblogs.com/MuGeminorum/p/16617269.html)

The heartbeat animation indicates that the BGM is loading, please be patient and wait util the envelope appears.

## Important links
| Name                       | URL                                                        |
| :------------------------- | :--------------------------------------------------------- |
| Download Git               | <https://git-scm.com/downloads>                            |
| eLuvLetter GitHub repo     | <https://github.com/MuGeminorum/eLuvLetter>                |
| Netlify official website   | <https://app.netlify.com>                                  |
| eLuvLetter demo on Netlify | <https://eluvletter.netlify.app>                           |
| eLuvLetter JSON Generator  | <https://www.modelscope.cn/studios/MuGeminorum/eluvletter> |

## Customization
1. Download and install Git;
2. Register a GitHub account, set SSH, and fork a copy of this repository to your own account;
3. Clone the repository to local:
```bash
git clone https://github.com/%YOUR_GITHUB_USERNAME%/eLuvLetter.git
cd eLuvLetter
```
4. Go to the `./eLuvLetter/font/` directory, customize `content.json` by [eLuvLetter JSON Generator](https://www.modelscope.cn/studios/MuGeminorum/eluvletter):
```json
{
    "recipient"  : "The recipient centered on front of the envelope",
    "sender"     : "The sender name on back of the envelope",
    "salutation" : "The salutation in letter's upper left corner",
    "signature"  : "The signature in letter's lower right corner",
    "body"       : "Body of the letter",
    "title"      : "Browser tab text",
    "bgm"        : "BGM base64 code",
}
```

## Deployment on Netlify
1. Sync the modified local code to your GitHub account:
```bash
cd eLuvLetter
git add .
git commit -a
# press i
# input any description
# ESC :wq! Enter
git push
```
2. Enter [Netlify official website](https://app.netlify.com);
3. Use your GitHub account to login by authorization, click `Add new site` - `Import an existing project`;
4. Click `GitHub`, enter the keyword `eLuvLetter` in the search box to find the previously forked repo, and select it;
5. Click `Deploy site` to jump into `Site overview` page automatically, click `Site settings`;
6. Click `Change site name` under `Site information`, modify second-level domain name not conflict to others, and click `Save`;
7. After the deployment, we can visit `https://%PROJECT_NAME%.netlify.app` to broswe your page (`%PROJECT_NAME%` is the second-level domain name customized just now)

**Good luck~💖**
