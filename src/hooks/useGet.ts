/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { base64 } from '../constants';
import useToast from './useToast';
import { useErrorBoundary } from 'react-error-boundary';

const useGet = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    setIsLoading(true);

    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `basic ${base64}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!navigator.onLine) {
          throw new Error('네트워크가 오프라인 상태입니다.');
        }

        if (!response.ok) {
          throw new Error('불러오기 실패.');
        }

        return response.json();
      })
      .then((responseData) => setData(responseData))
      .catch((error: Error) => {
        if (url.includes('products')) toast.error('상품 목록 불러오기에 실패했습니다.');
        showBoundary(error);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading };
};

export default useGet;
