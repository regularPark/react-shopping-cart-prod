import { createPortal } from 'react-dom';
import Toast from './Toast';
import { useRecoilValue } from 'recoil';
import ToastState from '../../../store/ToastState';
import { styled } from 'styled-components';

const ToastContainer = () => {
  const toastState = useRecoilValue(ToastState);

  return createPortal(
    <S.ToastContainer>
      {toastState.map(({ id, type, message }, index) => (
        <Toast id={id} key={message + index} type={type} message={message} />
      ))}
    </S.ToastContainer>,
    document.body,
  );
};

const S = {
  ToastContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    position: fixed;
    bottom: 100px;
    gap: 5px;
  `,
};

export default ToastContainer;
