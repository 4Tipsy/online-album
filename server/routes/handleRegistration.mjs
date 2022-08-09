import fs from 'fs'
import path from 'path'



const handleRegistration = (request, response) => {


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
      let newUserFolderPath = path.join(global.USERS_IMGS_FOLDERS, newUserFolderName)
      fs.cpSync( path.join(global.USERS_IMGS_FOLDERS, 'example'), newUserFolderPath, {recursive: true} )

      // push new user to "data-base"
      let newUser = {}
      newUser['nickname'] = nickname
      newUser['email'] = email
      newUser['password'] = password
      newUser['user-folder'] = newUserFolderName

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
}


export default handleRegistration