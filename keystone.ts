// keystone.ts
import { config, list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';
import { statelessSessions } from '@keystone-6/core/session';


export const SESSION_MAX_AGE = parseInt(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 30;
// export const PORT = parseInt(process.env.PORT) || 3000;
// If the environment doesn't supply a value, default the secret to a secure random string
// This will cause all cookies to be invalidated with each app restart (annoying but better than having a hardcoded default)
// A secure value will be set in your Heroku deploy if you use the "Deploy to Heroku" button or follow the instructions in the README
export const SESSION_SECRET =
  process.env.SESSION_SECRET ||
  require('crypto')
    .randomBytes(32)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]+/g, '');

    
// Stateless sessions will store the listKey and itemId of the signed-in user in a cookie.
// This session object will be made available on the context object used in hooks, access-control,
// resolvers, etc.
const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  // The session secret is used to encrypt cookie data (should be an environment variable)
  secret: SESSION_SECRET,
});

export default config({
    db: {
        provider: 'postgresql',
        // url: 'postgres://postgres:buildthedamnthing@localhost:5432/learning-ks',
        url: process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost/learning-ks`,
        // onConnect: async context => { /* ... */ },
        // Optional advanced configuration
        enableLogging: true,
        useMigrations: true,
        idField: { kind: 'uuid' },
        // shadowDatabaseUrl: 'postgres://dbuser:dbpass@localhost:5432/shadowdb'
      },

    server: { port: PORT }, 
    
    lists: {
      User: list({
        fields: {
          name: text({ validation: { isRequired: true } }),
          email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
        },
      }),
    },

    // session,
  });