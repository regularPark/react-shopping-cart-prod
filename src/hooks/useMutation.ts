import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import { serverState } from '../store/ServerState';
import { base64 } from '../constants';

type MutationMethod = 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type PostBodyType = {
  productId: number;
};

type PatchBodyType = {
  quantity: number;
};
type DeleteBodyType = {
  id: number;
};

type OrderPostBodyType = {
  cartIds: number[];
  point: number;
  deliveryFee: number;
};

interface FetchInfo {
  url: string;
  method: MutationMethod;
  bodyData?: PostBodyType | PatchBodyType | DeleteBodyType | OrderPostBodyType;
  headers?: HeadersInit;
}

type SetDataType<T> = Dispatch<SetStateAction<T>>;

const useMutation = <T>(setRefetchData: SetDataType<T>) => {
  const serverUrl = useRecoilValue(serverState);

  const mutate = async ({ url, method, bodyData, headers }: FetchInfo, baseUrl?: string) => {
    const body = bodyData ? JSON.stringify(bodyData) : null;

    const response = await fetch(url, { method, body, headers });

    if (method === 'POST' || 'DELETE') {
      const refetchData = await fetch(`${serverUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          Authorization: `basic ${base64}`,
          'Content-Type': 'application/json',
        },
      });
      setRefetchData(await refetchData.json());
    }

    return response;
  };

  return { mutate };
};

export default useMutation;
