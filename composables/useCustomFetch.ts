type TypeFetch = typeof useFetch;

export const useCastomFetch: TypeFetch = (request, options = {}) => {
  const config = useRuntimeConfig();
  return useFetch(request, {
    baseURL: config.public.baseUrl,
    headers: {
      Accept: "application/json",
    },
    ...options,
  });
};
