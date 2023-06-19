/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { css, keyframes, styled } from 'styled-components';
import useToast from '../../../hooks/useToast';
import { ToastItem } from '../../../types';

const Toast = ({ id, message, type }: ToastItem) => {
  const [isShow, setIsShow] = useState(true);
  const { deleteToast } = useToast();

  useEffect(() => {
    setTimeout(() => setIsShow(false), 3000);
    if (!isShow) {
      setTimeout(() => deleteToast(id), 500);
    }
  }, [isShow]);

  return (
    <S.Toast type={type} $isShowToast={isShow}>
      {message}
    </S.Toast>
  );
};

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes` 
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const S = {
  Toast: styled.div<{ type: 'success' | 'error'; $isShowToast: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 70vw);
    min-width: 300px;
    height: 50px;
    left: 10%;
    color: #fff;
    font-size: 18px;
    background-color: ${(props) => (props.type === 'success' ? '#04c09e' : '#ea3b52')};
    border-radius: 7px;

    ${({ $isShowToast }) => {
      return $isShowToast
        ? css`
            animation: ${fadeIn} 3s ease-in-out forwards;
          `
        : css`
            animation: ${fadeOut} 3s linear forwards;
          `;
    }}
  `,
};

export default Toast;
