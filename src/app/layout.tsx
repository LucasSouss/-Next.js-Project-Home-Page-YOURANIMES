import styles from './allstyles/layout.module.css'
import "./globals.css";
import Image from 'next/image'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`variable}`}>
        <header className={styles.header}>
          <Image
            src="/konoha-logo.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
       
          <div className={styles.logo}>YourAnimes</div>
          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Top Global</a>
            <a href="#">Meu Ranking</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
