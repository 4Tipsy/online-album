// Require packages and set the port
import fs from 'fs'
import path from 'path'

import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import Busboy from 'busboy'



global.SERVER_PORT = 5000
global.CLIENT_ADDRESS = 'http://localhost:3000'
global.JWT_SECRET = 'qwerty'
global.USER_IMGS_FOLDERS = 'users-imgs-folders'

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


// hashing password
function getHashedPassword(password) {
  const sha256 = crypto.createHash('sha256')
  const hash = sha256.update(password).digest('base64')
  return hash
}



// getting imgs
app.get('/get-imgs', (request, response) => {

  console.log(`--> GET: /get-imgs -- at ${new Date()}`)
  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))

  try {
  // verify the token and send the imgs
    const authHeader = request.headers.authorization
    const token = authHeader.split(' ')[1]
    const {nickname, 'user-folder': userFolder} = jwt.verify(token, global.JWT_SECRET)


    // if nickname and user-folder do not match
    let currentUser = users.find(user => user.nickname === nickname)
    if (! currentUser['user-folder'] === userFolder) {
      throw new Error('user-folder do not match to user nickname?!')
    }

    // response
    const imgsJson = fs.readFileSync( path.join(userFolder, 'structure.json'), 'utf8')
    response.send({
      "imgs": imgsJson,
      "status": "success"
    })
    console.log(`   result: success [${nickname}] \n`)



  // if jwt verifying failed
  } catch (error) {
    response.send({"imgs": "", "status": "invalid-jwt"})
    console.log(`   result: failed [${error}]\n`)
  }

})


// user registration
app.post('/register', (request, response) => {

  console.log(`--> POST: /register -- at ${new Date()}`)

  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))
  const {email, nickname, password} = request.body


  // check if email and nickname are already used
  if (users.find(user => user.email === email)) {

    response.send('Error: this e-mail is already in use')
    console.log('   response: this e-mail is already in use \n')

  } else if (users.find(user => user.nickname === nickname)) {

    response.send('Error: this nickname is already in use')
    console.log('   response: this nickname is already in use \n')

  // if everything is ok
  } else {
    try {
      // create new user folder
      let newUserFolderName = 'imgs__' + nickname
      let newUserFolderPath = path.join(global.USER_IMGS_FOLDERS, newUserFolderName)
      fs.cpSync( path.join(global.USER_IMGS_FOLDERS, 'example'), newUserFolderPath, {recursive: true} )

      // push new user to "data-base"
      let newUser = {}
      newUser['nickname'] = nickname
      newUser['email'] = email
      newUser['password'] = password
      newUser['user-folder'] = newUserFolderPath

      users.push(newUser)

      fs.writeFileSync('server/users.json', JSON.stringify(users, null, '\t'))


      // response
      response.send('user was add successfully')
      console.log(`   response: user was add successfully [${nickname}]\n`)

    } catch (error) {
      response.send(`Server-error: ${error}`)
      console.log(`   response: ${error} \n`)
    }
  }
})



// user log-in
app.post('/login', (request, response) => {
  
  console.log(`--> POST: /login -- at ${new Date()}`)

  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))
  const {email, password} = request.body

  const currentUser = users.find(user => user.email === email)


  // if user wasn't find
  if (currentUser === undefined) {
    response.send({'error': 'there is no user with such e-mail and password'})
    console.log('   response: there is no user with such e-mail and password \n')

  // if password is wrong
  } else if (currentUser.password !== password) {
    response.send({'error': 'there is no user with such e-mail and password'})
    console.log('   response: there is no user with such e-mail and password \n')

  //if everything is ok
  } else {

    const authToken = jwt.sign(
      {"nickname": currentUser["nickname"], "user-folder": currentUser["user-folder"]},
    global.JWT_SECRET)


    console.log(`   response: logged-in [${currentUser.nickname}] \n`)
    response.send({
      'error': 'none',
      'auth-token': authToken
    })
  }
})



app.post('/upload-img', (request, response) => {

  console.log(`--> POST: /upload-img -- at ${new Date()}`)

  try {
    // verify the token
    const authHeader = request.headers.authorization
    const token = authHeader.split(' ')[1]
    const {nickname, 'user-folder': userFolder} = jwt.verify(token, global.JWT_SECRET)


    // uploading the image
    let busboy = Busboy({headers: request.headers})
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      console.log(fieldname, file, filename, encoding, mimetype, 'logged')

      file.pipe(fs.createWriteStream('/upload'))
    })
    console.log(request.body);

  // if server-side error
  } catch (error) {
    response.send({'error': error})
    console.log(`   response: ${error} \n`)
  }
})



// Start the server
const server = app.listen(global.SERVER_PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});