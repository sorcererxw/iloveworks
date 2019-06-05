# I Love Works

[visit site](https://ilove.works)

## Usage

### Url Params

name  |values
------|--------------------
lang  |`zh-hant`, `zh-hans`, `en`
slogan|Any text you want to show, [Reference](https://ilove.works/settings/slogan). In addition, you can use <code>&#124;&#124;</code> as paragraph break.  
theme |`light`, `dark`, `white`, `black`, `chrome-dark`

### Use as ScreenSaver

#### MacOS

1. Install [liquidx/webviewscreensaver](https://github.com/liquidx/webviewscreensaver)
2. Add this site's url (example: https://ilove.works/?theme=black) to urls

![](https://github.com/sorcererxw/iloveworks/blob/master/resources/macos-screensaver-guide.png?raw=true)

## develop

### Run on local
1. fork and clone this repository
2. `yarn install`
3. `yarn run build`
4. `yarn run start`

### Deploy on your github pages

1. fork and clone this repository
2. `yarn install`
3. change the `CNAME`(/public/CNAME) file to your domain
4. change the `homepage` config in `package.json` to your github homepage (example.github.io)
5. `yarn run deploy`
