export const typeDefs = `
  type Query {
    message: String
    colors: [Color]
    color(colorId: ID): Color
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }
`;
