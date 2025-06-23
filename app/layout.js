import './globals.css';

export const metadata = {
  title: 'IT Plus - Technology Solutions',
  description: 'Empowering businesses with innovative technology solutions, reliable network infrastructure, and comprehensive IT support services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}