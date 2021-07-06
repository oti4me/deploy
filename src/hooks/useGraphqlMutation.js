import { useCallback, useMemo, useState } from 'react';
import to from 'await-to-ts';
import { request } from 'graphql-request';

export default function useGraphqlMutation(mutation, requestHeaders) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const action = useCallback(
    async (variables) => {
      setError(null);
      setIsLoading(true);
      const [err, data] = await to(
        request('my-api/graphql', mutation, variables, requestHeaders)
      );
      setError(err);
      setData(data);
      setIsLoading(false);
    },
    [mutation, requestHeaders]
  );

  return useMemo(
    () => ({
      error,
      data,
      isLoading,
      action,
    }),
    [error, data, isLoading, action]
  );
}
