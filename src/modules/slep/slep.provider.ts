import { Slep } from '../../infrastructure/databases/entities';

export const slepProviders = [
  {
    provide: 'SLEP_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(Slep),
    inject: ['DATA_SOURCE'],
  },
];
