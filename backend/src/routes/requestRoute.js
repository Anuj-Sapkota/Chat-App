import express from 'express';
import requestController from '../controllers/requestController.js';

const router = express.Router();

router.post("/send/:id", requestController.sendRequest);

router.get("/recieve", requestController.recieveRequest);

export default router;