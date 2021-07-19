import { useMemo } from 'react';
import useSWR from 'swr';
import { request } from 'graphql-request';

export default function useGraphqlQuery(query, variables) {
  return useSWR([query, variables], (query, variables) =>
    request('/my-api/graphql', query, variables)
  );
}
