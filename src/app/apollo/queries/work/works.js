import gql from 'graphql-tag';

const WORKS_QUERY = gql`  
  query Works {
    works {
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