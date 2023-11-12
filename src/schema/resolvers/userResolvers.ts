import db from '../../db.js';

const userResolvers = {
    Query: {
      user: (_parent: any, args: any) => {
        return db('user').where(args).first();
      },
      users: (_parent: any) => {
        return db('user');
      }
    },
  };

  export default userResolvers;
