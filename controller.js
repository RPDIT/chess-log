import express from 'express';


const sendJsonData = (req, res, next) => {
    res.status(200).json(req.app_data);
};

// const sendError = (req, res, next) => {
//     res.status(400).send(req.error)
// };


export default {
    sendJsonData,
};
