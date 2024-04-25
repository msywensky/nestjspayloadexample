import { Controller, Get } from '@nestjs/common';
import { CmsService } from './cms.service';

@Controller('/cms')
export class CmsController {
  constructor(private readonly cmsService: CmsService) {}

  @Get('hello')
  getHello(): string {
    return this.cmsService.getHelloCms();
  }

  @Get()
  async create(): Promise<{ response: string }> {
    const resp = await this.cmsService.createTestData();

    return {
      response: resp,
    };
  }
}
