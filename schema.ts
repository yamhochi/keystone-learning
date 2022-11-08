import { config, graphql, list } from '@keystone-6/core';
import { virtual, checkbox, password, relationship, text, timestamp, select, integer } from '@keystone-6/core/fields';


export const lists = {
  User: list({
    fields: {
      name: text({
        validation: { isRequired: true }
      }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique', // disabled for now to allow test site being played
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
  }),

  //then i need to add a socials list
  Session: list({
    fields: {
      title: text({
        validation: { isRequired: true }
      }),
      date: timestamp(),
      //   ref: 'User.sessions', 
      //   many: true,
      // }),
      invoices: relationship({
        ref: 'Invoice.sessions',
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
      }),

      user_of_invoices: virtual({
        field: lists =>
          graphql.field({
            type: lists.Invoice.types.output,
            // async resolve(item, args, context){
            //   const { invoices } = await context.query.Session.findMany({
            //     where: { id: {equals: item.id.toString()}},
            //     query: `invoices{id}`
            //   });
            //   return invoices
            // },
            // async resolve(item, args, context) {
            //   const { invoices } = await context.query.Invoice.findMany({
            //     where: { sessions: { id: { equals: item.id.toString() } } },
            //     query: `users{name}`
            //   });
            //   return invoices
            // }
              async resolve(item, args, context){
                const { invoices } = await context.query.Session.findOne({
                  where: { id: item.id.toString()},
                  query: `invoices {id sessions{title} users{name}}`
                });
                return invoices
              }

          }),

        ui: { query: '{sessions{title invoices{id users{name}} id}}' },
        // ui: { query: '{sessions{title}}' },

        //query Invoice list
        //where Invoice{session {title}} as String
        //return Invoice {session {user}} as lost
        //is equal to Session{title}

      })
    }
  }),



  //blog (this is the news site)

  //pages to get content data
  //home 
  //services
  //
}
