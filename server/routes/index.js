import express from 'express';
import { getThumbnailsData, getExtendedThumbnailsData } from '../controller/thumbnail.js';

const router = new express.Router();

router.get('/templates', getThumbnailsData);
router.get('/extendedTemplates', getExtendedThumbnailsData);

export default router;