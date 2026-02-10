import Image from "next/image";
import style from '../allstyles/PopularAnimes.module.css'

async function PopularAnimes() {
  const res = await fetch("https://api.jikan.moe/v4/seasons/now?limit=9");
  if (!res.ok) throw new Error("Falha na busca");
  return res.json();
}

export default async function GetPopularAnimes() {
  const MostPopular = await PopularAnimes();

  return (
    <div className={style.popularWrapper}>
      <h2 className={style.sectionTitle}>TRENDING NOW</h2>
      <div className={style.horizontalGrid}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {MostPopular.data.map((anime: any) => (
          <div key={anime.mal_id} className={style.horizontalCard}>
            <div className={style.horizontalImageContainer}>
              <Image
                src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
                fill
                alt={anime.title}
                className={style.horizontalImg}
              />
            </div>
            <p className={style.horizontalTitle}>{anime.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}