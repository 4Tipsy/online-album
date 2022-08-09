import fs from 'fs'
import path from 'path'

import jwt from 'jsonwebtoken'


const handleImgUpload = (request, response) => {


  console.log(`--> POST: /upload-img -- at ${new Date()}`)

  try { // verify the token
    
    const authHeader = request.headers.authorization
    const token = authHeader.split(' ')[1]
    // var cuz i need this variable outside this block
    var {nickname, 'user-folder': userFolder} = jwt.verify(token, global.JWT_SECRET)

  } catch (error) {
    response.send({"error": "JWT is invalid, please log in again"})
    console.log(`   response: ${error} \n`)


  } try { // uploading the image
    
    const {name, date} = request.body

      let tagsTmpVar = request.body.tags
      if (tagsTmpVar.length === 0) {
        tagsTmpVar = []
      } else {
        tagsTmpVar = tagsTmpVar.split(' ')
      }

    const tags = tagsTmpVar

    const file = request.files.file
    

    // checking the mime type (should be image)
    if (file.mimetype.split('/')[0] !== "image") {
      response.send({'error': 'the file is not an image'})
      console.log('   response: the file is not an image \n')


    // if img size is higher than 50 MiB
    } else if (file.size > (50 * 1024 * 1024) ) {
      response.send({'error': 'max image size is 50 MiB'})
      console.log('   response: max image size is 50 MiB \n')

    } else /* if everything is ok */ {

      let imgPath = path.join(global.USERS_IMGS_FOLDERS, userFolder, name)

      // but if file already exists
      if (fs.existsSync(imgPath)) {
        response.send({'error': 'such image already exists'})
        console.log('   response: such image already exists \n')

      } else { // if file uploaded successfully

        // updating structure.json
        let pathToStructure = path.join(global.USERS_IMGS_FOLDERS, userFolder, "structure.json")
        let structure = JSON.parse(fs.readFileSync(pathToStructure, 'utf8'))
          let newImgInfo = {}
          newImgInfo["name"] = name
          newImgInfo["date"] = date
          newImgInfo["tags"] = tags
          newImgInfo["src"] = path.join('users-imgs-folders', userFolder, name)
        structure.push(newImgInfo)
        fs.writeFileSync(pathToStructure, JSON.stringify(structure, null, '\t'))


        // file saving
        file.mv(imgPath)

        response.send({'error': 'none'})
        console.log(`   response: success [${nickname} => ${name}] \n`)
      }
    }

  // if server-side error
  } catch (error) {
    response.send({"error": `${error}`})
    console.log(`   response: ${error} \n`)
  }
}




export default handleImgUpload