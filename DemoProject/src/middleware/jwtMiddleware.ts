import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';



interface DecodedToken {
  userId: number; // Change the type of userId accordingly
  // Add other fields from the decoded token if necessary
}



export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');




  if (!token) {
    return res.status(401).json({ message: 'Missing JWT token.' });
  }

  // jwt.verify(token, SECRET_KEY, (err: jwt.VerifyErrors | null, user: any) => {
  //   if (err) {
  //     return res.status(403).json({ message: 'Invalid JWT token.' });
  //   }
  try {
    const decodedToken = jwt.verify(token, 'mykey') as DecodedToken;
    req.body.userId = decodedToken.userId;
    next();
  }
  catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
};

export default authenticateJWT;
