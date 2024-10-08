import express from 'express';


const router = express.Router();


const sendhtml = (req, res, next) => {
    res.status(200).sendFile();
};

const sendhtml2 = (req, res, next) => {
    res.status(200).render('home.pug');
};

router.get('/test', sendhtml2);


export default router;