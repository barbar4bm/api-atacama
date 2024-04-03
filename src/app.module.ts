import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure';
import { ItemizedModule, EstablishmentModule, CategoryModule } from './modules';



@Module({
  imports: [DatabaseModule, ItemizedModule, EstablishmentModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
