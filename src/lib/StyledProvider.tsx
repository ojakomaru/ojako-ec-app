'use client';
import StyledComponentsRegistry from './registry';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes';

const StyledProviders = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default StyledProviders;
