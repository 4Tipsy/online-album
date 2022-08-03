import fs from 'fs'
import path from 'path'

function myCopyDir(src, dest) {
  /* creates a dest folder and
     copy files from src to dest */


  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);

      entry.isDirectory() ?
          copyDirSync(srcPath, destPath) :
          fs.copyFileSync(srcPath, destPath);
  }
}

export default myCopyDir