import Image from "next/image";

async function PopularAnimes() {
  const res = await fetch(
    "https://api.jikan.moe/v4/manga?filter=all");
  if (!res.ok) throw new Error("Falha na buscar dos dados na API");
  return res.json();
}

export default async function GetPopularAnimes() {
  const MostPopular = await PopularAnimes();

  return (
    <section>
      <aside>
        <h1>Animes Mais Populares</h1>
        <ul>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {MostPopular.data.map((animes: any) => (
            <li key={animes.mal_id}>
              {animes.title}

              
              <Image
                src={animes.images.jpg.image_url}
                width={50}
                height={50}
                alt="s"
              />
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
