import { Meta } from '@storybook/react';
import Footer from './';

export default { title: 'Organisms/Footer', component: Footer } satisfies Meta<
  typeof Footer
>;

export const Standard = () => <Footer />;
