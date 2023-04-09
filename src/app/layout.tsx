import { StyledComponentsRegistry } from '@/lib/styled-components-registry';

import { GlobalStyles } from '@/styles/global';

export const metadata = {
  title: 'Home',
  description:
    'Home of POC project with React 18 + Next 13 + Styled Components SSR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <div>
            {children}
            <GlobalStyles />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
