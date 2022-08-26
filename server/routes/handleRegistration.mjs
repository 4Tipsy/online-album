import fs from 'fs'
import path from 'path'

import jwt from 'jsonwebtoken'


const handleRegistration = (request, response) => {


  console.log(`--> POST: /register -- at ${new Date()}`)

  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))
  const {email, nickname, password} = request.body


  // check if email and nickname are already used
  if (users.find(user => user.email === email)) {

    response.send({'result': 'Error: this e-mail is already in use'})
    console.log('   response: this e-mail is already in use \n')

  } else if (users.find(user => user.nickname === nickname)) {

    response.send({'result': 'Error: this nickname is already in use'})
    console.log('   response: this nickname is already in use \n')

  // if everything is ok
  } else {
    try {
      // create new user folder
      let newUserFolderName = 'imgs__' + nickname
      let newUserFolderPath = path.join(global.USERS_IMGS_FOLDERS, newUserFolderName)
      fs.cpSync( path.join(global.USERS_IMGS_FOLDERS, 'example'), newUserFolderPath, {recursive: true} )

      let pathToStructure = path.join(newUserFolderPath, 'structure.json')
      let structure = JSON.parse(fs.readFileSync(pathToStructure, 'utf8'))
      structure.forEach(
        (img) => {
          img.src = path.join('users-imgs-folders', newUserFolderName, img.name)
        }
      )
      fs.writeFileSync(pathToStructure, JSON.stringify(structure, null, '\t'))



      // push new user to "data-base"
      let newUser = {}
      newUser['nickname'] = nickname
      newUser['email'] = email
      newUser['password'] = password
      newUser['user-folder'] = newUserFolderName

      users.push(newUser)

      fs.writeFileSync('server/users.json', JSON.stringify(users, null, '\t'))


      // create JWT
      const authToken = jwt.sign(
        {"nickname": nickname, "user-folder": newUserFolderName},
      global.JWT_SECRET)

      // response
      response.send({'result': 'user was add successfully', 'auth-token': authToken})
      console.log(`   response: user was add successfully [${nickname}]\n`)

    } catch (error) {
      response.send({'result': `Server-error: ${error}`})
      console.log(`   response: ${error} \n`)
    }
  }
}


export default handleRegistration