const BASE_URL = 'https://www.dropbox.com/';

type RequestMethod = 'GET' | 'POST' ;

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: unknown = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response was not OK');
      }

      return response.json();
    })
    .catch(error => {
      console.error('Request error:', error);
      throw error;
    });
}

export const client = {
  get: async <T>(url: string) => await request<T>(url),
  post: async <T>(url: string, data: unknown) => await request<T>(url, 'POST', data),
};