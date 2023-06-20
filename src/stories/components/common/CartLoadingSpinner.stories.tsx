import { Meta, StoryObj } from '@storybook/react';

import CartLoadingSpinner from '../../../components/@common/LoadingSpinner/CartLoadingSpinner';

const meta = {
  title: 'Components/Common/Spinner/CartLoadingSpinner',
  component: CartLoadingSpinner,
} satisfies Meta<typeof CartLoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
