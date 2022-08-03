// Require packages and set the port
import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import crypto from 'crypto'


const port = 5000
global.CLIENT_ADDRESS = 'http://localhost:3000'
const usersImgsFolders = 'users-imgs-folders'
const app = express()



// CORS че-то тама
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', [global.CLIENT_ADDRESS])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// шифрование пароля
const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256')
    const hash = sha256.update(password).digest('base64')
    return hash
}





app.get('/get-imgs', (request, response) => {
  
  let imgs = fs.readFileSync('users-imgs-folders/example/structure.json', 'utf8')
  response.send(imgs)
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
      let newUserFolderPath = path.join(usersImgsFolders, newUserFolderName)
      fs.cpSync( path.join(usersImgsFolders, 'example'), newUserFolderPath, {recursive: true} )

      // push new user to "data-base"
      let newUser = {}
      newUser['nickname'] = nickname
      newUser['email'] = email
      newUser['password'] = password
      newUser['user-folder'] = newUserFolderPath

      users.push(newUser)

      fs.writeFileSync('server/users.json', JSON.stringify(users, null, '\t'))


      // response
      response.send('User was add successfully')
      console.log(`   response: User was add successfully [${nickname}]\n`)

    } catch (error) {
      response.send(`Server-error: ${error}`)
      console.log(`   response: ${error} \n`)
    }
  }
})




app.post('/login', (request, response) => {
  
  console.log(`--> POST: /login -- at ${new Date()}`)

  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))
  const {email, password} = request.body

  let currentUser = users.find(user => user.email === email)


  // if user wasn't find
  if (currentUser === undefined) {
    response.send({'error': 'there is no such a user'})

  // if password is wrong
  } else if (currentUser.password !== password) {
    response.send({'error': 'password is wrong'})

  //if everything is ok
  } else {
    response.send({
      'error': 'none',
      currentUser
    })
  }
})




// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});