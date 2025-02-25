import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      <Heading>404</Heading>
      <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <Link href="/react-shopping-shop/">홈으로 돌아가기</Link>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: var(--text-color);
`;

const Heading = styled.h1`
  font-size: 160px;
  margin-bottom: 6px;
  font-weight: 900;
  letter-spacing: 20px;
  color: var(--mint-color);
`;

const Link = styled.a`
  text-decoration: none;
  background: var(--mint-color);
  color: var(--white-color);
  padding: 12px 24px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.4s;
  margin-top: 18px;

  &:hover {
    background: var(--mint-color-hover);
  }
`;
