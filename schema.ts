// import { list } from '@keystone-6/core';
import { config, list } from '@keystone-6/core';
import { virtual, checkbox, password, relationship, text, timestamp, select, integer } from '@keystone-6/core/fields';


export const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),  
      attendances: relationship({ ref: 'Attendance.player', many:true}) 
    },
  }),

  //then i need to add a socials list
  Social: list({
    fields: {
      title: text({  validation: { isRequired: true } }),
      date: timestamp(),
      attendances: relationship({ref: 'Attendance.session', many:true})
    },
  }),

  Attendance: list({
    fields: {
      session: relationship({ ref: 'Social.attendances', many: false}),
      player: relationship({ ref: 'User.attendances', many:false}),
      payment: relationship({ ref: 'Payment.attendances', many:false}),
    }
  }),

  Payment: list({
    fields: {
      amount: integer(),
      attendances: relationship({ref: 'Attendance.payment', many:false}),
      // didpay: relationship({ ref: 'Payment.attendances'})
    }
  })

  //blog (this is the news site)

  //pages to get content data
  //home 
  //services
  //
}





