import { styled } from "@stitches/react";
import AnimeCard from './AnimeCard'
import Loading from '../ui/Loading'
import {animeService} from '../../services/api'
import { useEffect, useState } from "react";

const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '$lg',
    padding: '$lg',

    '@sm': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '@md': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@lg': {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },

    '@xl': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
})

const ErrorMessage = styled('div', {
    textAlign: 'center',
    color: '$error',
    padding: '$xl',
    fontSize: '$lg',
})

export default function AnimeGrid({onFavorite, favorites = [] }) {
    const [animes, setAnimes] = useState([])
    const [Loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                setLoading(true)
                const response = await animeService.getTopAnimes(25)
                setAnimes(response.data)
                setError(null)
            } catch (err) {
                setError('Não foi possível carregar os animes. Tente novamente mais tarde.')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchAnimes()
    }, [])
// AVISO: Luc, verificar porque precisa colocar nos favoritos novamente.
const checkFavorite = (animeId) => {
    return favorites.some(fav => fav.mal_id === animeId)
}

if (Loading) {
    return <loading/>
}

if (error) {
    return <ErrorMessage>{error}</ErrorMessage>
}

return (
    <Grid>
        {animes.map((anime) => (
            <AnimeCard
            key={anime.mal_id}
            anime={anime}
            onFavorite={onFavorite}
            isFavorite={checkFavorite(anime.mal_id)}
            />
        ))}
    </Grid>
    )

}