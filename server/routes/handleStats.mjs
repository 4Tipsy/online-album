import fs from 'fs'
import path from 'path'


const handleStats = (request, response) => {


  const users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'))
  let stats = ["/* It's a user list of Online Album: */", ""] // array with some comments

  users.forEach(
    user => {

      let pathToImgs = path.join(global.USERS_IMGS_FOLDERS, user['user-folder'], 'structure.json')
      let howManyImgs = JSON.parse(fs.readFileSync(pathToImgs, 'utf8')).length

      stats.push(`${user.nickname} -- ${howManyImgs} images -- ${user.email}`)
    }
  )


  let styled = "background-color: #383838; color: #DADADA; width: calc(100vw - 2vw); min-height: calc(100vh - 2vw);" + 
  "position: absolute; left: 0; top: 0; padding: 1vw"

  response.send(`<div style="${styled}"> ${stats.join('<br>')} </div>`)
}


export default handleStats