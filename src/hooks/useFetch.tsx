// src/hooks/useFetch.ts
import { envs } from "@/config/envs";

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
};

export const useFetch = () => {
  const fetchData = async (url: string, options: FetchOptions = {}): Promise<any | null> => {
    const { method = 'GET', headers = {}, body } = options;

    try {
      const response = await fetch(`${envs.WEBSERVICE_URL}${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error ${response.status}: ${errorMessage || 'Unknown error'}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`❌ Fetch error at ${url}:`, error);
      return null;
    }
  };

  return { fetchData };
};
