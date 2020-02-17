import gql from 'graphql-tag';

const WORKS_QUERY = gql`  
  query Works {
    works(sort: "id:desc") {
      id
      name
      client {
        id
        name
      }
      cover {
        url
      }
    }
  }
`;

export default WORKS_QUERY; 