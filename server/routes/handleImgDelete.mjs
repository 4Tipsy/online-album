import fs from 'fs'
import path from 'path'

import jwt from 'jsonwebtoken'


const handleImgDelete = (request, response) => {


  console.log(`--> DELETE: /delete-img -- at ${new Date()}`)

  try { // verify the token

    const authHeader = request.headers.authorization
    const token = authHeader.split(' ')[1]
    // "var" cuz i need this variable outside this block
    var {nickname, 'user-folder': userFolder} = jwt.verify(token, global.JWT_SECRET)

  } catch (error) {
    response.send("invalid-jwt")
    console.log(`   response: ${error} \n`)


  } try { // deleting the image


    let {imgSrc} = request.body
    let imgName = path.basename(imgSrc)
    imgSrc = path.join(global.USERS_IMGS_FOLDERS, userFolder, imgName)

    
    if ( !fs.existsSync(imgSrc) || !fs.lstatSync(imgSrc).isFile() ) {
      throw new Error("there is no such file")
    }
    if ( imgName === "structure.json" ) {
      throw new Error("you can not delete your user-folder structure file")
    }
    
    // delete from folder
    fs.unlinkSync(imgSrc)

    //delete from structure.json
    let pathToStructure = path.join(global.USERS_IMGS_FOLDERS, userFolder, "structure.json")
    let structure = JSON.parse(fs.readFileSync(pathToStructure, 'utf8'))
      let imgIndexInStructure = structure.findIndex(el => el.name === imgName)
      structure.splice(imgIndexInStructure, 1)
    fs.writeFileSync(pathToStructure, JSON.stringify(structure, null, '\t'))


    response.send('success')
    console.log(`   response: success [${nickname} =x ${imgName}] \n`)


  // if server-side error
  } catch (error) {
    response.send(error)
    console.log(`   response: ${error} \n`)
  }
}


export default handleImgDelete