import axios, { AxiosResponse, AxiosError } from "axios";
interface ApiError {
    status?: number;
    data?: object;
    message?: string;
  }

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});
// Request interceptor
axiosApi.interceptors.request.use(
  (config) => {
    // You can modify the request configuration here if needed.
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosApi.interceptors.response.use(
  (response: AxiosResponse) => {
    // Process successful responses here
    return response;
  },
  (error: AxiosError<ApiError>) => {
    // Handle API errors here
    if (error.response) {
      console.error("Request failed with status:", error.response.status);
      console.error("Response data:", error.response.data);
    } else if (error.request) {
      console.error("Request was made but no response was received");
    } else {
      console.error("Error setting up the request:", error.message);
    }

    // Propagate the error further for the calling function to handle
    return Promise.reject(error);
  }
);

async function handleApiError(error: AxiosError<ApiError>): Promise<never> {
  if (error.response) {
    console.error("Request failed with status:", error.response.status);
    console.error("Response data:", error.response.data);
  } else if (error.request) {
    console.error("Request was made but no response was received");
  } else {
    console.error("Error setting up the request:", error.message);
  }
  throw error;
}

export async function get<T = any>(url: string, config = {}): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosApi.get(url, { ...config });
    return response.data;
  } catch (error) {
    return handleApiError(error as AxiosError<ApiError>);
  }
}

export async function post<T = any>(
  url: string,
  data: any,
  config = {}
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosApi.post(url, data, {
      ...config,
    });
    return response.data;
  } catch (error) {
    return handleApiError(error as AxiosError<ApiError>);
  }
}

export async function put<T = any>(
  url: string,
  data: any,
  config = {}
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosApi.put(url, data, {
      ...config,
    });
    return response.data;
  } catch (error) {
    return handleApiError(error as AxiosError<ApiError>);
  }
}

export async function del<T = any>(url: string, config = {}): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axiosApi.delete(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    return handleApiError(error as AxiosError<ApiError>);
  }
}