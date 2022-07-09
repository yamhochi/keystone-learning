// keystone.ts
import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

export default config({
    db: {
        provider: 'postgresql',
        url: 'postgres://postgres:buildthedamnthing@localhost:5433/learning-ks',
        // onConnect: async context => { /* ... */ },
        // Optional advanced configuration
        enableLogging: true,
        // useMigrations: true,
        idField: { kind: 'uuid' },
        // shadowDatabaseUrl: 'postgres://dbuser:dbpass@localhost:5432/shadowdb'
      },
    lists: {
      User: list({
        fields: {
          name: text({ validation: { isRequired: true } }),
          email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        },
      }),
    },
  });