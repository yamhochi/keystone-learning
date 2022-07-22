// import { list } from '@keystone-6/core';
import { list } from '@keystone-6/core';
import { checkbox, password, relationship, text, timestamp, select } from '@keystone-6/core/fields';


export const lists = {
    User: list({
        fields: {
          name: text({ isRequired: true }),
          email: text({ isRequired: true, isUnique: true }),
        //   password: password({ isRequired: true }),
        },
      }),
}





