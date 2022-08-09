import fs from 'fs'

import jwt from 'jsonwebtoken'



const handleLogin = (request, response) => {
  

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
}



export default handleLogin