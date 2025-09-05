import express from 'express';
import auth from './auth/user.routes.js'

const router = express.Router();

router.use('/auth', auth);

export default router;