// import db from '../db';

const books = [
    {
      title: 'The Awakenings',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const resolvers = {
    Query: {
      persons: () => {
        // return db.select().from('persons');
      },
      books: () => {
        return books;
      },
      context: (_parent: any, _args: any, context: any) => {
        return context?.token;
      }
    },
  };

  export default resolvers;
