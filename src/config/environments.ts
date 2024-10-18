export const ENV = {
  IS_DEV: import.meta.env.VITE_IS_DEV === 'true' ? true : false,
  HIRE_API_URL: import.meta.env.VITE_HIRE_API_URL,
  HIRE_CRM_URL: import.meta.env.VITE_HIRE_CRM_URL,
  SESSION_KEYS: ['session'],
} as const;
