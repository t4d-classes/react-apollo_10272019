import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message: () => 'Hello World!',
    colors: async (_1, _2, { restURL }) => {
      const res = await fetch(restURL + '/colors');
      const colors = await res.json();
      return colors;
    },
    color: async (_, { colorId }, { restURL }) => {
      const res = await fetch(restURL + '/colors/' + colorId);
      const color = await res.json();
      return color;
    },
  },
};
