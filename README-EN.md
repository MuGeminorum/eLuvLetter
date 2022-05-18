# Usage of eLuvLetter

[![license](https://img.shields.io/github/license/george-chou/eLuvLetter.svg)](https://github.com/george-chou/eLuvLetter/blob/master/LICENSE)

## Local debug

Install Git: <a href="https://git-scm.com/downloads" target="_blank">git-scm.com/downloads</a>

Install XAMPP: <a href="https://www.apachefriends.org/download.html" target="_blank">apachefriends.org/download.html</a>

### Local deployment

1. Register a GitHub account and fork a copy of this repository to your own account

2. Switch to the htdocs directory of XAMPP in cmd and clone the repository:
```
git clone https://github.com/%Your_GitHub_Account%/eLuvLetter.git
```

3. Go to the `./eLuvLetter/font/` directory, open `content.json`, and customize the configuration as follows:

```
{
    "to"        : "envelope recipient",
    "from"      : "sign",
    "recipient" : "letter recipient",
    "bgm"       : "BGM URL",
    "text"      : "letter content"
}
```

The symbol `^n` in the demo means that the typewriter pauses for n milliseconds,

BGM URL is the default mp3 directory or mp3 direct link in the demo code(Note: It is best not to use the API to get mp3, it may be blocked by cross-domain)

If you use the default directory, you can rename your mp3 to `bgm.mp3` and overwrite `bgm.mp3` under `./eLuvLetter/bgm` to achieve custom modification of BGM

### Local display
Open Apache on XAMPP, go to <a href="http://localhost/eLuvLetter" target="_blank">localhost/eLuvLetter</a>

It is recommended to use the local display to debug before proceeding to the next step.

## Deploy to Vercel
1. Sync the modified local code to your GitHub account:
```
cd eLuvLetter
git add .
git commit -a
:wq!
git push
```

2. Enter <a href="https://vercel.com/login" target="_blank">Vercel official website</a>

3. Log in with your own GitHub account authorization, click `+ New Project`

4. Type the keyword eLuvLetter in the search box of `Import Git Repository` to find the repository that was previously forked

5. Click `Import` to modify the `PROJECT NAME` under `Configure Project`

6. Make sure that `PROJECT NAME` does not conflict with others and click `Deploy`

7. After the deployment is complete, you can visit `https://%PROJECT_NAME%.vercel.app` in the WAN to view the webpage. (where `%PROJECT_NAME%` is the `PROJECT NAME` just modified under `Configure Project`)

## Future work
At present, there is a word limit for the content of the stationery. In the future, a roller can be added to the stationery to expand the word count.