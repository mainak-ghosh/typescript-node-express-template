import express, { Request, Response } from 'express';
import testController from '@src/controller/test.controller';
import testMiddleware from '@src/middleware/test.middleware';

testMiddleware
const router = express.Router();

router.get('/test',testMiddleware, testController);

export default router;