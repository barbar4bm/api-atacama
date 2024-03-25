import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Establishment } from '../../infrastructure/databases/entities';

@Injectable()
export class EstablishmentService {
  constructor(
    @Inject('ESTABLISHMENT_REPOSITORY')
    private establishmentRepository: Repository<Establishment>,
  ) {}

  findAll() {
    return this.establishmentRepository.find();
  }

  findOne(id: string) {
    return this.establishmentRepository.findOne({
      where: {
        id,
      },
    });
  }
}
