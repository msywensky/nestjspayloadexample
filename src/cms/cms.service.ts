import { Injectable } from '@nestjs/common';
import payload from 'payload';

@Injectable()
export class CmsService {
  getHelloCms(): string {
    return 'Hello CMS!';
  }

  async createTestData(): Promise<string> {
    const moduleDoc = await payload.create({
      collection: 'modules', // required
      data: {
        // required
        code: 'test code',
        version: '1.0.0',
        data: {
          test: 'test data',
        },
      },
    });
    return JSON.stringify(moduleDoc);
  }

}
