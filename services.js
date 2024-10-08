import mongoose from "mongoose";
import na from "express-async-handler";
import Match from './match.js';

var allMatches =  na(async (req, res, next) => {
    try {
        req.app_data =  await Match.find();
        next()
    } catch (error) {
        res.status(400).send(error)
    }

});

function checkCompleted(c_status, req) {
    if (c_status === true){
        return req.body.date_completed
    } else {
        return
    }
};
const createMatch =  na(async (req, res, next) => {
    try{    
        let match = new Match({
            players: {white: req.body.players[0], black: req.body.players[1]}, 
            moves: req.body.moves, 
            complete: req.body.completed_status,
            date_completed: checkCompleted(req.body.completed_status, req),
            date_of: req.body.date_of
        });
        req.app_data = await match.save();
        next()}
    catch (error){
        res.status(400).send(error);
    }
    
});

const  matchById =  na(async (req, res, next) => {
    req.app_data = await Match.findById(req.params.id);
    next()
});

export default {
    allMatches, 
    createMatch,
    matchById
};