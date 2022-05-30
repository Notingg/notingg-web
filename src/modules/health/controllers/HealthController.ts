import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import { StatusCode } from '../../../shared/utils/StatusCode';
import { GetServicesHealth } from '../services/GetServicesHealth';

export class HealthController {
  public async getHandler(_req: NextApiRequest, res: NextApiResponse) {
    const getServicesHealth = container.resolve(GetServicesHealth);

    res.status(StatusCode.OK).json(await getServicesHealth.execute());
  }
}
