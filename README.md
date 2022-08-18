## Online Album
Site link! %%

The site is already hosted and fully operational!

Online Album is React.js app with express.js back-end  
It took me about a month to learn these technologies and create the app  
Hope you will appreciate my work =)

## index
1) [How to deploy this app](#how-to-deploy-this-app)
2) [How to review the app](#how-to-review-the-app)
3) [Watch user manual](#user-manual)
4) [Watch full site's documentation](#full-documentation)

## How to deploy this app

Despite that everything is ***already working*** at the link above  
you can deploy the app by yourself that way:

1) Download files from repo
2) Open src/index.js and:
```js
10| window.SERVER_ADDRESS = 'http://localhost:5000' // <-- change to your future site domen (`http://example.com`)
```
3) Run `npm run build` and get `build` folder (front-end of the site)
4) Open `server/API.mjs` and:
```js
16| global.SERVER_PORT = 3000 // <-- change any port you need
17| global.CLIENT_ADDRESS = 'http://localhost:3000' // <-- change to false
..|
19| global.USERS_IMGS_FOLDERS = 'public/users-imgs-folders' // <-- set link to *build/users-imgs-folders*
..|
..|
65| // SITE ITSELF
66| app.use(express.static("/home/qwerty/my-projects/online-album/build")) // <-- set abs path to *build*
67| app.get("/", (req, res) => {
68|   res.sendFile("/home/qwerty/my-projects/online-album/build/index.html") // <-- set abs path to *build/index.html*
69| })
```
5) Deploy `build` and `server` to wherever you are deploying, install dependencies (package.json) and run `API.mjs` (by pm2 for example)
6) Configure Apache proxy
7) And get a working app


## How to review the app

1) Go to the site's link (%%)
2) Register in the site's menu (there is no need to confirm the mail)
3) Log in (also in the menu)
4) And go ahead =)
*) If you want a brief description of app functions, read the user manual


# User manual

In `click-here-button` (the bottom btn in the menu) there is a link to user manual   
But just in case, the link itself: %%


## Full documentation

In `click-here-button` (the bottom btn in the menu) there is a link to full site's docs  
But just in case, the link itself: %%
