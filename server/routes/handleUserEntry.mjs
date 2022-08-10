import fs from 'fs'
import path from 'path'

import jwt from 'jsonwebtoken'



const handleUserEntry = (request, response) => {

  console.log(`--> GET: /user-entry -- at ${new Date()}`)
  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))

  try {
  // verify the token
    const authHeader = request.headers.authorization
    const token = authHeader.split(' ')[1]
    // "var" cuz i need this variable outside this block
    var {nickname, 'user-folder': userFolder} = jwt.verify(token, global.JWT_SECRET)


    // if jwt-user-folder and user-folder do not match
    let currentUser = users.find(user => user.nickname === nickname)
    if (! currentUser['user-folder'] === userFolder) {
      throw new Error('user-folder do not match to user nickname?!')
    }

  // if jwt verifying failed
  } catch (error) {
    response.send({"status": "invalid-jwt"})
    console.log(`   result: ${error} \n`)
  
  } try {

    // grab required data
    const imgsJson = fs.readFileSync( path.join(global.USERS_IMGS_FOLDERS, userFolder, 'structure.json'), 'utf8')

    let userInfo = {}
    userInfo.userIsLogged = true
    userInfo.nickname = nickname
    userInfo.imgsAmount = String(JSON.parse(imgsJson).length) + " images"
    userInfo.profileImg = path.join("users-imgs-folders", userFolder, 'profileImg.webp')


    response.send(JSON.stringify({
      "imgs": imgsJson,
      "status": "success",
      "userInfo": userInfo
    }))

    console.log(`   result: success [${nickname}] \n`)

  
  } catch (error) {
    response.send({"status": error})
    console.log(`   result: ${error} \n`)

  }
}



export default handleUserEntry