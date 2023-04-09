export const metadata = {
  title: 'Home',
  description:
    'Home of POC project with React 18 + Next 13 + Styled Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
