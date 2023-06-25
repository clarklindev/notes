import { useState, useCallback, useRef, useEffect } from 'react';

// regarding send requests -
// to avoid infinite loops, wrap it with useCallback() so the function never gets recreated when the component that uses
//this hook renders. This function has no specific dependencies (So an empty array is added as a second argument to use callback).
//this function never gets recreated and we never have inefficient render cycles or infinite loops.

// usage
/*
  import { useHttpClient } from '../../shared/hooks/http-hook';

  const { isLoading, error, sendRequest, clearError } = useHttpClient();


*/

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeHttpRequests = useRef([]);

  useEffect(() => {
    //cleanup function for unmounts

    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController(); //for aborting requests
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);

        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
