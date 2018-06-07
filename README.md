# PWA Display Test
**See how Progressive Web Apps (PWAs) look and feel on your devices and platforms.** Try it on Android, iOS, Linux, macOS, Windows, and other operating systems. Test if the standalone display mode really opens the PWA to look and feel like a standalone native application. Test if a fullscreen PWA really takes up the entirety of your screen. Try all the web app manifest display modes: fullscreen, standalone, minimal-ui and browser. To install PWA Display Test, navigate to its address and click the Install App button in supported browsers.

## PWA Display Mode Status

Preferred display mode vs. actual display mode on various platforms and browsers:

| Display mode / Platform | fullscreen    | standalone     | minimal-ui    | browser     |
| ---                     | ---           | ---            | ---           | ---         |
| Android/Chrome          | ✔️ fullscreen | ✔️ standalone | ✔️ minimal-ui | ✔️ browser |
| Windows/Chrome          | ✖️ standalone | ✔️ standalone | ✖️ standalone | ✔️ browser |

_Last updated:_ June 7, 2018

## PWA Display Test on Android

| Go [to the PWA](https://pwadtest.hwalab.com/standalone/) and click _Install App_ | Click _Add to Home screen_ in prompt | A PWA looks like a native app |
| :---: | :---: | :---: |
| ![Standalone PWA Display Test - Android Chrome - Install button](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/standalone-pwa-android-chrome-install-button.png?raw=true) | ![Standalone PWA Display Test - Android Chrome - Install prompt](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/standalone-pwa-android-chrome-install-prompt.png?raw=true) | ![Standalone PWA Display Test - Android](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/standalone-pwa-android-chrome.png?raw=true) |
| **A _fullscreen_ PWA covers everything** | **A _minimal-ui_ PWA shows the URL** | **It works offline even in the browser** |
| ![Fullscreen PWA Display Test - Android](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/fullscreen-pwa-android-chrome.png?raw=true) | ![Minimal-ui PWA Display Test - Android](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/minimal-ui-pwa-android-chrome.png?raw=true) | ![Browser PWA Display Test - Android](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/browser-pwa-android-chrome.png?raw=true) |

_Note:_ The screenshots were taken on Android 6.0.1 / Chrome 67.0.3396.68.

## PWA Display Test on Windows

| Navigate [to the PWA](https://pwadtest.hwalab.com/standalone/) in Chrome and click _Install App_ | Click _Install_ in the web app install prompt |
| :---: | :---: |
| ![Standalone PWA Display Test - Windows Chrome - Install button](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/standalone-pwa-windows-chrome-install-button.png?raw=true) | ![Standalone PWA Display Test - Windows Chrome - Install prompt](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/standalone-pwa-windows-chrome-install-prompt.png?raw=true) |
| **An installed PWA looks like a native Windows app** | **No _fullscreen_ mode in Windows?** |
| ![Standalone PWA Display Test - Windows](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/standalone-pwa-windows-chrome.png?raw=true) | ![Fullscreen PWA Display Test - Windows](https://github.com/hwalab-developer/repo-assets/blob/master/pwadisplaytest/readme/fullscreen-pwa-windows-chrome.png?raw=true) |

_Note:_ The screenshots were taken on Windows 10.0.17134 / Chrome 67.0.3396.62.

## Development

PWA Display Test is hosted on GitHub Pages, and served from the [gh-pages](https://github.com/hwalab-developer/PWADisplayTest/tree/gh-pages) branch.

The project uses [Gulp](gulpfile.babel.js) and a [template](src/template) to generate the 4 PWAs ([fullscreen](https://github.com/hwalab-developer/PWADisplayTest/tree/gh-pages/fullscreen), [standalone](https://github.com/hwalab-developer/PWADisplayTest/tree/gh-pages/standalone), [minimal-ui](https://github.com/hwalab-developer/PWADisplayTest/tree/gh-pages/minimal-ui), and [browser](https://github.com/hwalab-developer/PWADisplayTest/tree/gh-pages/browser)) in the `dist` directory, where the `gh-pages` branch is checked out using git's [worktree](https://git-scm.com/docs/git-worktree) feature.

Prerequisites: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/), [Workbox](https://developers.google.com/web/tools/workbox/), [ESLint](https://eslint.org/). Editor: [Visual Studio Code](https://code.visualstudio.com/).

## Contributions

Contributions are welcome! For feature requests and bug reports please [submit an issue](https://github.com/hwalab-developer/PWADisplayTest/issues).

## Acknowledgements

PWA Display Test (and all HWALab free apps) have been developed with kind support from [East-Tec](http://www.east-tec.com), the home of [east-tec Eraser](http://www.east-tec.com/eraser/), the privacy tool that quickly and securely covers your online and PC tracks.

## License

PWA Display Test is licensed under the [MIT License](LICENSE).
