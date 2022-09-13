// import { list } from '@keystone-6/core';
import { config, list } from '@keystone-6/core';
import { virtual, checkbox, password, relationship, text, timestamp, select, integer } from '@keystone-6/core/fields';


export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        // ui: {
        //   itemView: {
        //     fieldMode: "read",
        //   },
        //   listView: {
        //     fieldMode: "read",
        //   },
        // },
      }),
      sessions: relationship({
        ref: 'Session.users',
        many: true,
        ui: {
          itemView: {
            fieldMode: "read",
          },
        }
      })
    },
    hooks: {
      afterOperation: ({ operation, item }) => {
        if (operation === 'create') {
          console.log(`New user created. Name: ${item.name}, Email: ${item.email}`);
        }
      }
    },
  }),

  //then i need to add a socials list
  Session: list({
    fields: {
      title: text({
        validation: { isRequired: true }
      }),
      date: timestamp(),
      users: relationship({
        ref: 'User.sessions', many: true,
      })
    }
  }),

  //blog (this is the news site)

  //pages to get content data
  //home 
  //services
  //
}
