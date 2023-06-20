import { Meta } from '@storybook/react';
import HeaderComponent from '../../../components/Header';
import { styled } from 'styled-components';
import { handlers } from '../../../mocks/handlers';

const meta = {
  component: HeaderComponent,
  title: 'Components/Common/Header',
  tags: ['autodocs'],
  parameters: { msw: handlers },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: 'calc(100vw - 32vw)' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof HeaderComponent>;

export default meta;

export const Header = (args: any) => {
  return (
    <Wrapper>
      <HeaderComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: calc(100vw);
  top: 0;
  left: 0;
`;
