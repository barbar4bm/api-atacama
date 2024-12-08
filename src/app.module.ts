import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure';
import {
  ItemizedModule,
  EstablishmentModule,
  CategoryModule,
  SlepModule,
} from './modules';
import * as cors from 'cors';

@Module({
  imports: [
    DatabaseModule,
    ItemizedModule,
    EstablishmentModule,
    CategoryModule,
    SlepModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors({ origin: '*' })).forRoutes('*');
  }
}
