import { Module } from '@nestjs/common';

import { SlepService } from './slep.service';
import { SlepController } from './slep.controller';
import { slepProviders } from './slep.provider';


@Module({
  controllers: [SlepController],
  providers: [...slepProviders, SlepService],
})
export class SlepModule {}
