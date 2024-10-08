import express from 'express';
import matchController from '../controller.js'
import matchServices from '../services.js';
const router = express.Router();

router.use(express.static('public')),

router.get('/', matchServices.allMatches, matchController.sendJsonData);
router.post('/creation', matchServices.createMatch,  matchController.sendJsonData);
router.get('/game/:id', matchServices.matchById, matchController.sendJsonData);


export default router;