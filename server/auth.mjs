import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken';

global.JWT_SECRET = 'qwerty'

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, global.JWT_SECRET, (err, nickname, userFolder) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.nickname = nickname
      req['user-folder'] = userFolder
      next();
    });
  } else {
    res.sendStatus(401);
  }
}




export default authenticateJWT