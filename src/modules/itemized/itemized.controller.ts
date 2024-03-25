import { Controller, Get, Param } from '@nestjs/common';

import { ItemizedService } from './itemized.service';

@Controller('itemized')
export class ItemizedController {
  constructor(private readonly itemizedService: ItemizedService) {}

  @Get()
  findAll() {
    return this.itemizedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemizedService.findOne(id);
  }
}
