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
    <main className={style.mainLayout}>
      {/* COLUNA ESQUERDA: TRENDING (HORIZONTAL) */}
      <section className={style.contentColumn}>
        <GetPopularAnimes />
      </section>

      {/* COLUNA DIREITA: SIDEBAR (SLIDER COM HOVER) */}
      <aside className={style.sidebarColumn}>
        <h2 className={`${font.className} ${style.sidebarTitle}`}>🌍 Top Global</h2>
        <div className={style.sliderContainer}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {topAnimes.data.map((anime: any) => (
            <div className={style.animeSlide} key={anime.mal_id}>
              <Image 
                src={anime.images.jpg.large_image_url} 
                fill alt={anime.title} className={style.slideImg} 
              />
              <div className={style.slideOverlay}>
                <p>{anime.title}</p>
                <span>🏆 {anime.score}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
}