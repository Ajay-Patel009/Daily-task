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
 







