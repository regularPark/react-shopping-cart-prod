import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import useMutation from './useMutation';
import { orderState } from '../store/OrderState';
import { serverState } from '../store/ServerState';
import { ORDER_BASE_URL } from '../constants/url';
import { base64 } from '../constants';
import useGet from './useGet';
import { OrderItem } from '../types';
import { checkedItemsState } from '../store/CartState';
import { removeProductItemFromCartSelector } from '../store/CartSelector';
import useNavigatePage from './useNavigatePage';
import useToast from './useToast';

const useOrder = () => {
  const setOrder = useSetRecoilState(orderState);
  const setCheckedItems = useSetRecoilState(checkedItemsState);
  const removeProductItemFromCart = useRecoilCallback(({ set }) => (id: number) => {
    set(removeProductItemFromCartSelector(id), []);
  });
  const { toast } = useToast();

  const { mutate: mutateOrder } = useMutation<OrderItem[]>(setOrder);
  const serverUrl = useRecoilValue(serverState);
  const { data: orderData } = useGet<OrderItem[]>(`${serverUrl}${ORDER_BASE_URL}`);

  const { goOrderComplete } = useNavigatePage();

  const handleRemoveCheckedItem = (cartIds: number[]) => {
    cartIds.forEach((id) => {
      removeProductItemFromCart(id);
    });
    setCheckedItems([]);
  };

  const handleOrderItems = async (cartIds: number[], point: number, deliveryFee: number) => {
    const confirmResult = window.confirm('주문을 진행하시겠습니까?');
    if (confirmResult) {
      try {
        const responseResult = await mutateOrder(
          {
            url: `${serverUrl}${ORDER_BASE_URL}`,
            method: 'POST',
            bodyData: { cartIds, point, deliveryFee },
            headers: {
              Authorization: `basic ${base64}`,
              'content-type': 'application/json',
            },
          },
          ORDER_BASE_URL,
        );

        if (responseResult.status !== 201) throw new Error('상품 주문하기를 실패했습니다.');
        if (orderData) setOrder(orderData);
        handleRemoveCheckedItem(cartIds);

        goOrderComplete();
      } catch (error) {
        if (error instanceof Error) toast.error(error.message);
      }
    }
  };

  return { handleOrderItems };
};

export default useOrder;
