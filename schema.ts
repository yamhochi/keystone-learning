import { list } from '@keystone-6/core';
import { virtual, checkbox, password, relationship, text, timestamp, select, integer } from '@keystone-6/core/fields';


export const lists = {
  User: list({
    fields: {
      name: text({ 
        validation: { isRequired: true } 
      }),
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
      // sessions: relationship({
      //   ref: 'Session.users',
      //   many: true,
      //   ui: {
      //     itemView: {
      //       fieldMode: "read",
      //     },
      //   }
      // }),
      invoices: relationship({
        ref:'Invoice.users',
        many: true,
        ui: {
          itemView: {
            fieldMode: "read",
          },
          listView: {
            fieldMode: "read",
          },
          createView: {
            fieldMode: "hidden",
          },
        },
      }) 
    }
  }),

  //then i need to add a socials list
  Session: list({
    fields: {
      title: text({
        validation: { isRequired: true }
      }),
      date: timestamp(),
      // users: relationship({
      //   ref: 'User.sessions', 
      //   many: true,
      // }),
      invoices: relationship({
        ref:'Invoice.sessions',
        many: true,
        ui: {
          itemView: {
            fieldMode: "read",
          },
          listView: {
            fieldMode: "read",
          },
          createView: {
            fieldMode: "hidden",
          },
        },
      }) 
    }
  }),

  Invoice: list({
    fields: {
      sessions: relationship({
        ref: 'Session.invoices',
        many: false,
      }),
      users: relationship({
        ref: 'User.invoices', 
        many: false,
        hooks: {
          afterOperation: ({ operation, item, resolvedData }) => {
            if (operation === 'update') {
              console.log(item, resolvedData, "This is logged");
            }
          },
        },
      }),
      paid: checkbox({
        defaultValue: false
      })
    }
  })

  //blog (this is the news site)

  //pages to get content data
  //home 
  //services
  //
}
