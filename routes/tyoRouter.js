import express from 'express';
const router = express.Router();

import {
    createJobs,
    updateJobs,
    deleteJob,
    displayStatictics,
    getAllJobs
} from '../tyopostiControllers/tyoControllers.js';

router.route('/').post(createJobs).get(getAllJobs);
router.route('/stats').get(displayStatictics);
router.route('/:id').delete(deleteJob).patch(updateJobs);

export default router;
