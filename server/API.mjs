// import packages
import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'
import fileUpload from 'express-fileupload'

// modules
import handleRegistration from './routes/handleRegistration.mjs'
import handleLogin from './routes/handleLogin.mjs'
import handleUserEntry from './routes/handleUserEntry.mjs'
import handleImgUpload from './routes/handleImgUpload.mjs'
import handleImgDelete from './routes/handleImgDelete.mjs'


// some globals
global.SERVER_PORT = 3030
global.CLIENT_ADDRESS = 'http://localhost:3000' /* used in development | set false to production */
global.JWT_SECRET = 'qwerty'
global.USERS_IMGS_FOLDERS = 'public/users-imgs-folders'

const app = express()



// CORS stuff
app.use((req, res, next) => {
  global.CLIENT_ADDRESS && res.append('Access-Control-Allow-Origin', [global.CLIENT_ADDRESS])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.append('Access-Control-Expose-Headers', 'authorization')
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload())

// hashing password
function getHashedPassword(password) {
  const sha256 = crypto.createHash('sha256')
  const hash = sha256.update(password).digest('base64')
  return hash
}



// user entry
app.get('/user-entry', handleUserEntry)


// user registration
app.post('/register', handleRegistration)


// user log-in
app.post('/login', handleLogin)


// upload img
app.post('/upload-img', handleImgUpload)

// delete img
app.post('/delete-img', handleImgDelete)


// SITE ITSELF
app.use(express.static("/home/qwerty/my-projects/online-album/build")) // <-- link to build
app.get("/", (req, res) => {
  res.sendFile("/home/qwerty/my-projects/online-album/build/index.html") // <-- link to index.html
})


// Start the server
const server = app.listen(global.SERVER_PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
})