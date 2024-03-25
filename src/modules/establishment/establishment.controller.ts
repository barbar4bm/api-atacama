import { Controller, Get, Param } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Get()
  findAll() {
    return this.establishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.establishmentService.findOne(id);
  }
}
