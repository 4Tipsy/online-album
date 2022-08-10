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


// some globals
global.SERVER_PORT = 5000
global.CLIENT_ADDRESS = 'http://localhost:3000'
global.JWT_SECRET = 'qwerty'
global.USERS_IMGS_FOLDERS = 'public/users-imgs-folders'

const app = express()



// CORS stuff
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', [global.CLIENT_ADDRESS])
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



// Start the server
const server = app.listen(global.SERVER_PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
})