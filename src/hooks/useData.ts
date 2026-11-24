import apiClient from "@/service/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestconfig?: AxiosRequestConfig, deps?: any) => {
    const [data, setData] = useState<T[]>([]);
          const [error, setError] = useState("");
          const [loading, setLoading] = useState(false);  
          
        
          useEffect(() => {
            const controller = new AbortController();
        
            setLoading(true);
            apiClient
              .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestconfig })
              .then((res) => {
                setData(res.data.results);
                setLoading(false);
              })
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              });
        
            return () => controller.abort();  
          }, deps ? [...deps] : []);
        
          return { data, error, loading }; 

}

export default useData;