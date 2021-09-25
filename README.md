# e-lnv-letter

[![license](https://img.shields.io/github/license/george-chou/envelope.svg)](https://github.com/george-chou/envelope/blob/master/LICENSE)
<!--[![Github All Releases](https://img.shields.io/github/downloads/george-chou/envelope/total.svg)](https://github.com/george-chou/envelope/releases)
[![GitHub release](https://img.shields.io/github/release/george-chou/envelope.svg)](https://github.com/george-chou/envelope/releases/latest)-->

Valentine's love confession code. [View demo](https://george-chou.github.io/eLuvLetter/)

## Manual of pure front-end Valentine's Day love confession code

### Custom modification tutorial

After downloading the source code, open the `index.html` file with a code editor.

Find `<h2>` and change the name of the horizontal line in the figure to the name of the person to be confessed.

Then use a code editor to open the `letter.js` file in the `./envelope/js` path. This part of the data controls the typing effects of the love letter. For the specific meaning, please see the demo code.

The code includes the English and Japanese titles of the person to be confessed. That is to achieve the unique effect of re-type - print the English name first, then delete all backspaces - and then re-enter the Japanese title and the Japanese context. Among the code, `^200` means typing pause for 200 milliseconds. For example, `アビー^200ちゃん` means break for 200 milliseconds after typing `アビー,` and then `ちゃん`; you can modify the content and pause time according to your situation.

## Deploy to GitHub Blog

This section of the tutorial explains how to deploy the customized confession code on the GitHub Blog so that we can access it on the Internet. For those who have already known how to use the GitHub Blog, please skip to the next tutorial.

First, visit the following link to download a GitHub Desktop client:

<https://desktop.github.com/>.

Then visit the following link to register a GitHub account:

<https://github.com/join>.

After registration success, please log into your account on the web page GitHub, click the plus mark at the right and upper corner of the web page, and choose to `create a new repository.`

Assuming your username is `calendar`, then build the repository according to the following naming rules:

`valenday.github.io`

After building the repository, log in to GitHub Desktop with the account you just applied. After successful login, select `File-> Clone repo...`.

Select the repository that has just been created by you on the web page, and select a local path to hold the repo to clone. Here, take `.\git` as an example, and click `Clone.`

After cloning, there will be an additional `valenday.github.io` folder in our local path `F:\downloads\git,` and then copy the customized code folder called `envelope` into `.\git\valenday.github.io` path, a local change record will show up on the GitHub Desktop at this time.

Casually fill in the title of change record and click `Commit to master.`

Then click `Push origin` to upload the code onto GitHub cloud.

## Create love confession link

The formula of confession link to be sent to him/her is like below:

`https://(your GitHub username).github.io/envelope`

Before posting, please visit the link to see how it works. If not satisfied with the effect, you can use the code editor to directly modify the code in the `envelope` folder in the local repository. The modified change record will show up on the GitHub Desktop. Then, repeat the previous step called `Commit to master` and later steps in the last tutorial.
