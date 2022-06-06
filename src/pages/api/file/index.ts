import nextConnect from 'next-connect';
import { FileController } from '../../../modules/file/controllers/FileController';

const fileController = new FileController();

export default nextConnect({
  attachParams: true,
}).post(fileController.postHandler);
