import FileModel from '../models/FileModel';
import { dbConnect } from '../../../../database/dbConnect';

export class FileRepository {
  public static async create(
    file: typeof FileModel,
  ): Promise<typeof FileModel> {
    await dbConnect();
    return FileModel.create(file);
  }
}
