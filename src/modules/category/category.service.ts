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
    return this.categoryRepository.createQueryBuilder("category").select(["id as valor", "name as etiqueta"]).getRawMany();
    // return this.categoryRepository.find();
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({
      where: {
        id,
      },
    });
  }
}
