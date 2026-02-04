import Image from "next/image"
import style from './page.module.css'
import {Honk} from 'next/font/google'

const font = Honk ({
  weight: ['400']
})

async function getTopAnimes() {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10&filter=airing')
  if (!res.ok) throw new Error('Falha ao buscar dados na API')
  return res.json()
}



export default async function AnimeApp() {
  const topAnimes = await getTopAnimes()

  return(
    <section className={style.container}>
      <aside className={style.sidebar}>
      <h1 className={`${font.className} ${style.titleTop}`}>🌍 Top Animes Global</h1>
      <ul className={style.Ulist}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {topAnimes.data.map((animes: any) => (
        <li className={style.list} key={animes.mal_id}>
            <Image className={style.Images}
            src={animes.images.jpg.image_url}
            width={70}
            height={70}
            alt="Picture of the author"
            />
            <span className={style.Title}>
            {animes.title}
            </span>

            <span className={style.Score}>🏆{animes.score}</span>
        </li>
      )) }
        
      </ul>
      </aside>
    </section>
  )
}