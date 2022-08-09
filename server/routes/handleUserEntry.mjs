import fs from 'fs'
import path from 'path'

import jwt from 'jsonwebtoken'



const handleUserEntry = (request, response) => {

  console.log(`--> GET: /get-imgs -- at ${new Date()}`)
  let users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))

  try {
  // verify the token and send the imgs
    const authHeader = request.headers.authorization
    const token = authHeader.split(' ')[1]
    const {nickname, 'user-folder': userFolder} = jwt.verify(token, global.JWT_SECRET)


    // if jwt-user-folder and user-folder do not match
    let currentUser = users.find(user => user.nickname === nickname)
    if (! currentUser['user-folder'] === userFolder) {
      throw new Error('user-folder do not match to user nickname?!')
    }

    // response
    const imgsJson = fs.readFileSync( path.join(global.USERS_IMGS_FOLDERS, userFolder, 'structure.json'), 'utf8')
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

}



export default handleUserEntry