import React from 'react';
import { gql } from 'graphql-request';
import useGraphqlMutation from '../hooks/useGraphqlMutation';
import useGraphqlQuery from '../hooks/useGraphqlQuery';

function Countries(props) {
  const query = gql`
    {
      countries {
        name
        native
      }
    }
  `;
  const { data, error } = useGraphqlQuery(query);

  if (error) {
    return <div>Error loading data from the api!!</div>;
  }

  return (
    <div>
      {data?.countries?.map((country) => (
        <div key={country.name}>Name: {country.name}</div>
      ))}
    </div>
  );
}

export default Countries;
