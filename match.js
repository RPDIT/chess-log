import mongoose from "mongoose"; 

const matchSchema = new mongoose.Schema({
    players: {
        type: Object,
        required: true,
        default: {white: "", black: ""},
    },
    moves: {
        type: Array,
        required: true, 
        default: []
    },
    complete: {
        type: Boolean, 
        required: true, 
        default: false
    },
    date_completed: {
        type: Date,
        required: false, 
    },
    date_of: {
        type: Date,
        required: true, 
        default: Date.now(),
    },
})

const Match = mongoose.model('Matches', matchSchema);

export default Match;
