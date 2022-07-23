// import { list } from '@keystone-6/core';
import { list } from '@keystone-6/core';
import { checkbox, password, relationship, text, timestamp, select } from '@keystone-6/core/fields';


export const lists = {
  User: list({
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      socials: relationship({
        ref: 'Social.attendees', many: true
      }),
      payments: relationship({
        ref: 'Payment.payer', many: true
        })
      //   password: password({ isRequired: true }),
    },
  }),
  //then i need to add a socials list
  Social: list({
    fields: {
      title: text({ isRequired: true }),
      date: timestamp(),
      attendees: relationship({
        ref: 'User.socials',  
        many: true,
        ui: {
          hideCreate: true,
          displayMode: 'cards',
          cardFields: ['name'] , 
        },
        
      }),
      payments: relationship({
        ref: 'Payment.socials', 
        many: true, 
        ui: {
          displayMode: 'count',
        }     
      })
    }
  }),

  //and a payments list
  Payment: list({
    fields: {
      payer: relationship({
        ref:'User.payments', many: false
      }),
      payment_date: timestamp(),
      socials: relationship({
        ref: 'Social.payments', many: false
      })
    }
  })

  //blog (this is the news site)

  //pages to get content data
  //home 
  //services
  //
}





