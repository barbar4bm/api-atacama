import { Itemized } from '../../infrastructure/databases/entities';

export const itemizedProviders = [
  {
    provide: 'ITEMIZED_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(Itemized),
    inject: ['DATA_SOURCE'],
  },
];
