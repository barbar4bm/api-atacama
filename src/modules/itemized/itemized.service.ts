import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Itemized } from '../../infrastructure/databases/entities';

@Injectable()
export class ItemizedService {
  constructor(
    @Inject('ITEMIZED_REPOSITORY')
    private itemizedRepository: Repository<Itemized>,
  ) {}

  findAll() {
    return this.itemizedRepository
      .createQueryBuilder('itemized')
      .select(['departure as etiqueta', 'departure as valor'])
      .getRawMany();
  }

  findOne(id: string) {
    return this.itemizedRepository.findOne({
      relations: ['category'],
      where: {
        id,
      },
    });
  }
}
