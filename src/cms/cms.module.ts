import { Module, Scope } from '@nestjs/common';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { HttpAdapterHost } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import config from './payload.config';
import payload from 'payload';

@Module({
  imports: [],
  controllers: [CmsController],
  providers: [
    CmsService,
    {
      provide: 'CMS',
      inject: [HttpAdapterHost], //ConfigService],
      scope: Scope.DEFAULT, // Singleton
      useFactory: async (httpAdapterHost: HttpAdapterHost) => {
        return await payload.init({
          secret: 'this is the payload secret',
          express: httpAdapterHost.httpAdapter.getInstance(),
          config,
        });
      },
    },
  ],
  exports: [CmsService, 'CMS'],
})
export class CmsModule {}

/*
      useFactory: async (httpAdapterHost: HttpAdapterHost) => {
        getPayload({
          secret: 'this is the payload secret',
          express: httpAdapterHost.httpAdapter.getInstance(),
          config,
        }).then((payloadInstance) => {
          return payloadInstance;
        });
      },
*/