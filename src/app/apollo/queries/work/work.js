import gql from 'graphql-tag';

const WORK_QUERY = gql`  
  query Works($id: ID!) {
    work(id: $id) {
      id
      name
      summary
      description
      role
      url
      cover {
        url
      }
      client {
        id
        name
      }
      company {
        id
        name
      }
    }
  }
`;

export default WORK_QUERY; 