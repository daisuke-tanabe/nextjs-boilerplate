const resolvers = {
  Query: {
    user: () => ({
      id: '1',
      name: 'first last'
    }),
    books: () => [
      {
        id: '1',
        title: 'book - 1'
      },
      {
        id: '2',
        title: 'book - 2'
      },
      {
        id: '3',
        title: 'book - 3'
      }
    ]
  }
};

export default resolvers;