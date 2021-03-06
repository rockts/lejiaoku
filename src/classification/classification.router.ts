import express from 'express';
import * as classificationController from './classification.controller';


const router = express.Router();

/**
 * classification 列表
 */
router.get('/classifications', classificationController.index);

/**
 * 获取 classification 子项列表
 */
router.get('/classifications/category', classificationController.category)
router.get('/classifications/grade', classificationController.grade)
router.get('/classifications/version', classificationController.version)
router.get('/classifications/subject', classificationController.subject)

/**
 * 导出路由
 */
export default router;
