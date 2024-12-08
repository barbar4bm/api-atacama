import { Controller, Get, Param } from '@nestjs/common';
import { SlepService } from './slep.service';

@Controller('slep')
export class SlepController {
  constructor(private readonly slepService: SlepService) {}

  @Get()
  findAll() {
    return this.slepService.findAll();
  }
}
