import jwt  from "jsonwebtoken";
import * as dotenv from 'dotenv' 
dotenv.config();

export function auth(req,res,next) {
    const token = req.header('authorization');
    if (!token) return res.status(400).send("Access denies. No token provided")
    
    try {
       
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_KEY)
        req.user = decoded;
        next();
    }
    catch(ex) {
        res.status(400).send("Invalid token.")
    }
}