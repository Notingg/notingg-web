import { injectable } from "tsyringe";

@injectable()
export class GetServicesHealth {
  constructor() {}

  public async execute() {
    return {
      status: "UP",
      timestamp: new Date().toISOString(),
    };
  }
}
