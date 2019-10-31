export const typeDefs = `
  type Query {
    message: String
    colors: [Color]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }
`;
