import { $fetch, type FetchOptions } from "ofetch";

const api = $fetch.create({});

export const useCustomFetch = (url: string, opts: FetchOptions = {}) => {
  if (!import.meta.client) return new Promise(() => {});

  const config = useRuntimeConfig();

  return api(url, {
    baseURL: config.public.baseUrl,
    ...opts,
    headers: {
      ...opts?.headers,
      // ...(token.value && { Authorization: Bearer ${token.value} }),
    },
    onResponseError({ response }) {
      console.log(response);
    },
  });
};
