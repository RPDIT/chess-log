import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// import routes
import matchRoutes from './routes/match.js';
import boardRoutes from './routes/board.js';

dotenv.config();
const app = express(); 

var MIDDLEWEAR_TO_MOUNT = [
    express.json(), helmet({contentSecurityPolicy: false}), cors(), 
    morgan('combined'), express.static(path.join(__dirname, 'public')), 'this should not work'
];
var MIDDLEWEAR_TO_SET = [['views', './views'], ['view engine', 'pug'], 'error']


async function connectDb(uri){
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri). then(() => {
        console.log('connected');
    }, err => {
        console.log('Error.', err);
})};

app.get('/check', (req, res) => {
    res.send(true);
});

function middlewearCreation(){
    function addMiddlewear(input){
        if (typeof(input) == 'function'){
            return app.use(input)
        } 
        console.log('error with middlewear');
        return false;
    }
    return addMiddlewear
};

function middlewearMounting() {
    function setMiddlewear(input) {
        if (typeof(input) === 'object'){
            return app.set(input[0], input[1]);
        } else{
            console.log(`Error with: ${input}`);
        }
    }
    return setMiddlewear
};

function addRoutes(){
    app.use('/match', matchRoutes);
    app.use('/board', boardRoutes);

};

function middleWearHandler(to_set, to_mount) { // takes two arrays, first objects to set, second functions to mount. 
    var mounter = middlewearCreation();
    var setter = middlewearMounting();
    to_mount.map(x => mounter(x));
    to_set.map(x => setter(x));
}

function main(){
    middleWearHandler(MIDDLEWEAR_TO_SET, MIDDLEWEAR_TO_MOUNT)
    addRoutes();
    if (process.env.NODE_ENV !== 'test') {
        app.listen(process.env.API_PORT, () => {
            console.log(`Server listening at http://localhost:${process.env.API_PORT}`)
            connectDb(process.env.API_KEY);
        });
    };
    return app;
};

export default main();
