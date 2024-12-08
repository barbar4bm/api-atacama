import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Slep } from '../../infrastructure/databases/entities';

@Injectable()
export class SlepService {
  constructor(
    @Inject('SLEP_REPOSITORY')
    private slepRepository: Repository<Slep>,
  ) {}

  findAll() {
    return this.slepRepository
      .createQueryBuilder('slep')
      .select(['name as etiqueta', 'name as valor'])
      .getRawMany();
  }
}
