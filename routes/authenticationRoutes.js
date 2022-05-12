import { signIn, signUp, updateClient } from '../tyopostiControllers/authenticationController.js';

import express from 'express';
const router = express.Router();

router.route('/signIn').post(signIn);
router.route('/SignUp').post(signUp);
router.route('/updateClient').patch(updateClient);

export default router;
