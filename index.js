import express from 'express';
import cors from 'cors';

import movies from './routes/Movies.js'

const app = express();
const port = 3001;
app.use(express.json());

const corsOptions = {
        origin: "http://localhost:3001"
    };
    app.use(cors(corsOptions));
    
const validApiKey = "420";
const authenticateApiKey = (req, res, next)=>{
    const apiKey = req.query.apiKey
    console.log(req.query)
    if(!apiKey){
            return res.status(401).json({message:"Apikey missing!"});
        }
    if (apiKey !== validApiKey) {
            return res.status(403).json({ message: "Invalid API key" });
             }
            next();
};

app.use((req, res, next)=>{
    authenticateApiKey(req, res, next)
})

app.use('/', movies);


app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
})
