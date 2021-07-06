import { useCallback, useMemo, useState } from 'react';

export default function useGraphqlMutation(mutation, requestHeaders) {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const action = useCallback(
    async (variables) => {
      setError(null);
      setIsLoading(true);
      const [err, data] = await to(
        client.request(mutation, variables, requestHeaders)
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
