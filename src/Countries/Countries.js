import React from 'react';
import { gql } from 'graphql-request';
import useGraphqlMutation from '../hooks/useGraphqlMutation';
// import useGraphqlQuery from '../hooks/useGraphqlQuery';

function Countries(props) {
  const query = gql`
    mutation sendSignInLinkToEmail($email: String!, $recaptchaToken: String!) {
      sendSignInLinkToEmail(email: $email, recaptchaToken: $recaptchaToken)
    }
  `;
  const { data, error, isLoading, action } = useGraphqlMutation(query);

  if (error) {
    return <div>Error loading data from the api!!</div>;
  }

  return (
    <div>
      <div>IS SUCCESSFUL: {data?.sendSignInLinkToEmail}</div>
      <button
        onClick={() =>
          action({
            email: process.env.NEXT_PUBLIC_USERNAME,
            recaptchaToken: '',
          })
        }
      >
        {isLoading ? 'Loading...' : 'Request'}
      </button>
    </div>
  );
}

export default Countries;
