import styles from './layout.module.css';
import "./globals.css";
import { Nabla } from 'next/font/google';

const font = Nabla({
  weight: ['400'],
  subsets: ['latin'] // Adicionado para evitar avisos do Next.js
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* Corrigido: Removida a chave solta e a variável 'variable' que não existia */}
      <body className="antialiased"> 
        <header className={styles.header}>
          <div className={`${font.className} ${styles.logo}`}>
            Your<span className={styles.letterA}>A</span>nimes
          </div>
          
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