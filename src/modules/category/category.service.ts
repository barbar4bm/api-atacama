import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Category } from '../../infrastructure/databases/entities';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository
      .createQueryBuilder('category')
      .select(['name as etiqueta', 'name as valor'])
      .getRawMany();
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({
      where: {
        id,
      },
    });
  }
}
