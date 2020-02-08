import gql from 'graphql-tag';

const CLIENTS_QUERY = gql`

  query Clients {
    clients {
      id
      name
    }
  }
`;

export default CLIENTS_QUERY;