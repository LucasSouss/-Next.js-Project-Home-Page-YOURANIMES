import { styled } from "../../styles/stitches.config";
import AnimeCard from './AnimeCard'
import Loading from '../ui/Loading' // Corrigido a importação/uso
import { animeService } from '../../services/api'
import { useEffect, useState } from "react";

const Grid = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '$lg',
    padding: '$lg',

    '@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '@md': { gridTemplateColumns: 'repeat(3, 1fr)' },
    '@lg': { gridTemplateColumns: 'repeat(4, 1fr)' },
    '@xl': { gridTemplateColumns: 'repeat(5, 1fr)' }, // Ajustado para 5 colunas no Desktop
})

const ErrorMessage = styled('div', {
    textAlign: 'center',
    color: '$error',
    padding: '$xl',
    fontSize: '$lg',
})

export default function AnimeGrid({ onFavorite, favorites = [] }) {
    const [animes, setAnimes] = useState([])
    const [isLoading, setIsLoading] = useState(true) // Variável em camelCase para evitar conflito com o componente
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                setIsLoading(true)
                const response = await animeService.getTopAnimes(25)
                setAnimes(response.data)
                setError(null)
            } catch (err) {
                setError('Não foi possível carregar os animes. Tente novamente mais tarde.')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchAnimes()
    }, [])

    const checkFavorite = (animeId) => {
        return favorites.some(fav => fav.mal_id === animeId)
    }

    if (isLoading) {
        return <Loading /> // Corrigido para PascalCase
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>
    }

    return (
        <Grid>
            {animes.map((anime, index) => (
                <AnimeCard 
                    key={anime.mal_id}
                    anime={anime}
                    index={index} // <--- PASSANDO O INDEX AQUI
                    onFavorite={onFavorite}
                    isFavorite={checkFavorite(anime.mal_id)}
                />
            ))}
        </Grid>
    )
}