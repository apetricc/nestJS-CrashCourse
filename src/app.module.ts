import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Serializer } from 'v8';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CustomInterceptor } from "./custom.interceptor"
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';


@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
    // useClass: CustomInterceptor,
  }],
})
export class AppModule {}
