# PS99 Clan Overlay

Provides an overlay to assist clans in the Goal Battle.

This is an electron app, so the codebase is easy to edit.

Powered by the Pet Simulator 99 API.

Used by top clans such as: DRFT (#2), A2H (#3), and Unity (#6).

To build (for Windows), run `npx electron-builder`

To build (for macOS), run `npx electron-builder --mac --universal`

SUPPORT: Email me at dalk@dalk.xyz or DM me on Discord @dalked (If you are top 10 and dont have much coding knowledge, please DM me).

Feel free to edit the code, we encourage it.
## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Dalk21/clan-overlay/master/screenshots/20240317_132941.jpg)
![App Screenshot](https://raw.githubusercontent.com/Dalk21/clan-overlay/master/screenshots/Pcco3zf.png)



## Usage/Examples
To prepare, run
```bat
npm i
```
to install all required packages. To boot up the API, use
```bat
node express
```
Read Electron Docs for help in configuring the app window.

Check `/src/index.html` to edit the clan name and API url, and check `/express.js` to change the clan name variable.

If you are in the top 10 clans in Clan Wars, send me a DM and we can help you get sorted out.
