import Image from "next/image";
import UserRankingInitial from "./components/UserRankingInitial";
import style from './page.module.css'
async function getTopAnime() {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10');
  if (!res.ok) throw new Error('Falha ao buscar dados');
  return res.json();
}

export default async function AnimeApp() {
  const topAnimes = await getTopAnime();

  return (
    <main>
      <h1>Anime Ranker</h1>

      <section className={style.container}>
        <h2>🌍 Top Animes do Mundo</h2>
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {topAnimes.data.map((anime: any) => (
            <li key={anime.mal_id} >
              <span>{anime.rank}. {anime.title}</span>
              <Image
               src={anime.images.jpg.image_url}
                width={70}
                height={70}
                alt="Picture of the author"
                
              />

              <span>- ⭐{anime.score}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h2>🏆 Meu Ranking Pessoal</h2>
        <UserRankingInitial />
      </section>
    </main>
  );
}