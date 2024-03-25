import { Module } from '@nestjs/common';

import { ItemizedService } from './itemized.service';
import { ItemizedController } from './itemized.controller';
import { itemizedProviders } from './itemized.provider';

@Module({
  controllers: [ItemizedController],
  providers: [...itemizedProviders, ItemizedService],
})
export class ItemizedModule {}
