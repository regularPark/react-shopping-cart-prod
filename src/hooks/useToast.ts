import { ToastType } from '../types';
import { useSetRecoilState } from 'recoil';
import ToastState from '../store/ToastState';
import uuid from 'react-uuid';

const useToast = () => {
  const setToastItem = useSetRecoilState(ToastState);

  const showToast = (id: string, message: string, type: ToastType) => {
    setToastItem((prev) => [...prev, { id, message, type }]);
  };

  const toast = {
    success: (message: string) => {
      showToast(uuid(), message, 'success');
    },

    error: (message: string) => {
      showToast(uuid(), message, 'error');
    },
  };

  const deleteToast = (id: string) => {
    setToastItem((prev) => prev.filter((toastItem) => toastItem.id !== id));
  };

  return { toast, deleteToast };
};

export default useToast;
