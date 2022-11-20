const books = [
  {
    id: '1',
    title: 'book - 1',
    creators: [
      { id: '1', name: 'ななしのごんべえ', role: '著者' },
      { id: '2', name: 'なありのごんべえ', role: '著者' }
    ],
    image: { small: '', medium: '', large: '' },
    stock: 3,
    users: [
      { id: '1', name: 'じょん' }
    ]
  },
  {
    id: '2',
    title: 'book - 2'
  },
  {
    id: '3',
    title: 'book - 3'
  },
];

const resolvers = {
  Query: {
    user: () => ({
      id: '1',
      name: 'first last'
    }),
    book: (root, { id }, context) => {
      return books.find((user) => user.id === id);
    },
    books: (root, { limit = 3}, context) => {
      return books.slice(0, limit);
    },
  }
};

export default resolvers;
