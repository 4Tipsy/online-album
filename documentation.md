# Documentation

## First of all, structure of the app:

```
├── public  
│  ├── users-imgs-folders  
│  └── index.html  
├── src  
│  ├──  index.js  
│  ├──  App.js  
│  ├── components  
│  └── styles  
└── server  
   ├── utilityScripts  
   ├── routes  
   ├── API.mjs  
   └── users.json  
```
   
###  public 
---

`users-imgs-folders` is a folder to contain users images,  
It contains `example` folder which is used to crate users folders (it is copied and renamed, after which it is a new user folder)  
Every user folder contains a `structure.json`(info about every user’s image) and `profileImg.webp` (yep, it’s profile picture)  
`index.html` - predication is obvious

### src
---

`components` contain following components:

**- ImgsGrid**:  
`ImgsGrid.jsx` is wrapper for images themselves, tags zone and so on  
**tags zone is used to filter images*  

`ImgsGridImgs.jsx` is images render function, with oportunity to filter them before   render or show `Massages.jsx` if something happaned  
`UrImage.jsx` is a component of the one image itself  

**- MainMenu**:  
Just a main menu, nothing special  

**- ModalFrame**:  
it’s a modal frame with 3 possible contents inside it  
`ModalFrame.jsx` is a wrapper for this content  
if the active state == "login," the `Login.jsx` content will be rendered inside it  
if “register” - `Register.jsx`  
“other-options” is for `OtherOptions.jsx`, it’s being rendered when user clicks “click here” button at the bottom of the main menu, it shows some additional buttons like “watch documentation” or “contact me (author of the app)”.

**- UploadFrame**  
It’s a modal frame which appears when user clicks plus-like button in left buttom corner (upload an image button), it also consist of wrapper (`UploadFrame.jsx`) with `img` state and it’s contents. When user uploads an image to the `ImgInput.jsx` `img` state changes via `setImg` and the image is rendering at `ImgUpload.jsx` (this component also contains axios request to the server, which serves for uploading the image)

**- ViewImgFrame**  
`ViewImgFrame.jsx` is an another modal frame which is used to view images (when you click on image this frame will appear)

**Notes!**  
All the modal frames are triggered by states located in `App.js`  
Also there is an `Settings.jsx` component which supposed to be another modal frame triggering by button in main menu, but… I’ve run out of ideas about what should it be for, so now it is not used in app

**- styles**
are very similar to `components`:  
There are `index.scss` and... `_[the-same-name-as-jsx-component].scss` files. Every such file fully related to its jsx component  
I should have made it as css-modules, but I didn't know about this technology at the time… But due to scss nesting, i've managed to avoid class names conflicts (yep, most of classes you will see in this app are modified by nesting)

### server
---
`users.json` is a “database” for users (it didn't seem appropriate to me to connect a real database for such a small amount of data)  
`API.mjs` is server app iself, it mostly consist of routes, so route handlers were dedicated  to `routes` folder  
`utilityScripts` were used by me in the development proccess, they are not a necessary part of the app  

## server work logic
As I said before most of the server app looks that way:
```js
app.post(‘/adress’, handlerFunctionFromRoutes)
```
`index.html` is given to client that way:
```js
app.use(express.static('/path'))
app.get(‘/’, (req, res) => {
    res.sendFile(‘/path/to/index.html’)
})
```
Every user data is divided into a record in `server/users.json` and a personal folder in `public/imgs-users-folders/[user-folder]`  

---
**The source code is also provided with comments, so you are welcome to watch it by yourself =)**
