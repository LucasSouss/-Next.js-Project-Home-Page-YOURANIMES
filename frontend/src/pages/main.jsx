import {styled} from '../styles/stitches.config'
import FavoriteBar from '../components/favorites/FavoritesBar'
import AnimeGrid from '../components/anime/AnimeGrid'
import { useState } from 'react'

const Container = styled('div',{
    minHeight: '100vh',
    backgroundColor: '$background',
})

const Header = styled('header',{
    backgroundColor: '$surface',
    padding: '$lg',
    textAlign: 'center',
    borderBottom: '2px solid $primary'
})

const Title = styled('h1',{
    fontSize: '$3x1',
    color: '$primary',
    marginBottom: '$xs',
})

const Subtitle = styled('p',{
    color: '$textSecondary',
    fontSize: '$lg',
})

const Main = styled('main',{
    maxWidth: '1400px',
    margin: '0 auto',
})

export default function Home() {
    const [favorite, setFavorite] = useState([])

    const handleFavorite = (anime) => {
        setFavorite(prev => {
            const exists = prev.some(fav => fav.mal_id === anime.mal_id)

            if (exists) {
                return prev.filter(fav => fav.mal_id !== anime.mal_id)
            }else{
                if (prev.length >= 10) {
                    alert('Você só pode ter até 10 favoritos!')
                    return prev
                }
                return [...prev, anime]
            }
        })
    }
}