import Image from "next/image";
import style from './page.module.css';
import { Honk } from 'next/font/google';
import GetPopularAnimes from "./components/PopularAnimes";

const font = Honk({ weight: ['400'] });

async function getTopAnimes() {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10&filter=airing');
  if (!res.ok) throw new Error('Falha ao buscar dados');
  return res.json();
}

export default async function AnimeApp() {
  const topAnimes = await getTopAnimes();

  return (
    <main className={style.container}>
      {/* LADO ESQUERDO: TRENDING (HORIZONTAL) */}
      <section className={style.mainContent}>
        <GetPopularAnimes />
      </section>

      {/* LADO DIREITO: SIDEBAR (VERTICAL) */}
      <aside className={style.sidebar}>
        <h1 className={`${font.className} ${style.titleTop}`}>🌍 Top Animes Global</h1>
        <ul className={style.Ulist}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {topAnimes.data.map((anime: any) => (
            <li className={style.list} key={anime.mal_id}>
              <Image 
                className={style.Images}
                src={anime.images.jpg.small_image_url}
                width={60} height={80} alt={anime.title}
              />
              <span className={style.Title}>{anime.title}</span>
              <span className={style.Score}>🏆 {anime.score}</span>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}