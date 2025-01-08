import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

import { Category, Establishment, Itemized, Slep } from './entities';

console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);
console.log('DATABASE_NAME:', process.env.DATABASE_NAME);

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Category, Establishment, Itemized, Slep],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false, // Esto ignora la validación del certificado SSL
  },
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export default dataSource;
