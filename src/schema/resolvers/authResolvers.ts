import db from '../../db.js';

const authResolvers = {
    Query: {
      register: (_parent: any, args: any) => {
        return db('user').insert(args);
      },
      login: (_parent: any, args: any) => {
        return db('user').where(args);
      }
    },
  };

  export default authResolvers;
