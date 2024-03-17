# PS99 Clan Overlay

Provides an overlay to assist clans in the Goal Battle.

This is an electron app, so the codebase is easy to edit.

Powered by the Pet Simulator 99 API.

To build, run `npx electron-builder`
## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Dalk21/clan-overlay/master/screenshots/20240317_132941.jpg)
![App Screenshot](https://raw.githubusercontent.com/Dalk21/clan-overlay/master/screenshots/Pcco3zf.png)



## Usage/Examples
To use the API, run
```bat
npm i
```
to install all required packages. To boot up the API, use
```bat
node express
```
Check `/src/index.html` to edit the clan name and API url, and check `/express.js` to change the clan name variable.
