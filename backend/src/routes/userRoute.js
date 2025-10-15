import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();

router.get("/:name", userController.searchUser);

export default router;