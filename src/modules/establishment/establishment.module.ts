import { Module } from '@nestjs/common';

import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.controller';
import { establishmentProviders } from './establishment.provider';

@Module({
  controllers: [EstablishmentController],
  providers: [...establishmentProviders, EstablishmentService],
})
export class EstablishmentModule {}
