export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  return {
    provide: {
      apiFetch: $fetch.create({
        baseURL: config.public.apiBase,
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      }),
    },
  };
});
