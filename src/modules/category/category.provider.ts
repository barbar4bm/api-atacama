import { Category } from '../../infrastructure/databases/entities';

export const categoryProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];
