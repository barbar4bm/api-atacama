import { Establishment } from '../../infrastructure/databases/entities';

export const establishmentProviders = [
  {
    provide: 'ESTABLISHMENT_REPOSITORY',
    useFactory: (dataSource) => dataSource.getRepository(Establishment),
    inject: ['DATA_SOURCE'],
  },
];
