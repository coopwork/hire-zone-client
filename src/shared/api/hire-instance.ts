import axios from 'axios';
import { retrieveLaunchParams } from '@telegram-apps/bridge';
import { ENV } from '@/config/environments.ts';

const { initData } = retrieveLaunchParams();

export const hireAPI = axios.create({
  baseURL: ENV.HIRE_API_URL,
  withCredentials: true,
  headers: {
    id: String(initData?.user?.id),
  },
});

export const hireCRM = axios.create({
  baseURL: ENV.HIRE_CRM_URL,
  withCredentials: true,
});
