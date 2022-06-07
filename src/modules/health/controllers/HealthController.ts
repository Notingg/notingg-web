import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCode } from '../../../shared/utils/StatusCode';
import { GetServicesHealth } from '../services/GetServicesHealth';

export class HealthController {
  public async getHandler(_req: NextApiRequest, res: NextApiResponse) {
    const getServicesHealth = new GetServicesHealth();

    res.status(StatusCode.OK).json({
      status: 'OK',
      message: 'Test run successfully',
      code: StatusCode.OK,
      data: await getServicesHealth.execute(),
    });
  }
}
