import express from 'express';
import * as fileController from './file.controller';
import { authGuard } from '../auth/auth.middleware';
import { fileInterceptor, fileProcessor, deletePostFile } from './file.middleware';

const router = express.Router();

/**
 * 上传文件
 */
router.post(
  '/files',
  authGuard,
  fileInterceptor,
  fileProcessor,
  fileController.store,
);

/**
 * delete file
 */
router.delete(
  '/files/:fileId',
  authGuard,
  deletePostFile,
  fileController.destroy,
);

/**
 * 文件服务
 */
router.get('/files/:fileId/', fileController.serve);

/**
 * 文件信息
 */
router.get('/files/:fileId/metadata', fileController.metadata);

/**
 * 导出路由
 */
export default router;
