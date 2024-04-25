import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CmsModule } from './cms/cms.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, CmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
