

 import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const checkAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};