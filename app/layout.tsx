
import "./globals.css";
import Header from './header';

export const metadata = {
  title: 'Chronovisor',
  description: 'An open-source historical data portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer>
          <p>Developed by vladimino, 2024</p>
        </footer>
      </body>
    </html>
  );
}
