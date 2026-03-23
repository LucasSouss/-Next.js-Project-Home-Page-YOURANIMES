import {styled} from '../../styles/stitches.config'
import Button from '../ui/Button'
import Image from 'next/image'

const Card = styled('div', {
    backgroundColor: '$surface',
    borderRadius: '$lg',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    },
})

const ImageContainer = styled('div', {
    position: 'relative',
    width: '100%',
    height: '280px',
    backgroundColor: '$surfaceHover',
})

const Content = styled('div', {
    padding: '$md',
})

const Title = styled('h3', {
  fontSize: '$md',
  fontWeight: 'bold',
  marginBottom: '$xs',
  color: '$text',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

const Meta = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '$sm',
  color: '$textSecondary',
  fontSize: '$sm',
});

const Score = styled('span', {
  color: '$favorite',
  fontWeight: 'bold',
});

const FavoriteButton = styled(Button, {
  padding: '$xs',
  fontSize: '20px',
});

export default function AnimeCard({anime, onFavorite, isFavorite}) {
    const imageUrl = anime.images?.jpg?.image_url || '/placeholder.jpg'

    return(
        <Card>
            <ImageContainer>
                <Image
                    src={imageUrl}
                    alt={anime.title}
                    fill
                    sizes="(max-width: 768vw) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{objectFit: 'cover'}}
                />
            </ImageContainer>
            <Content>
                <Title>{anime.title}</Title>

                <Meta>
                    <span>📺 {anime.type || 'TV'}</span>
                    <Score>⭐ {anime.score || 'N/A'}</Score>
                </Meta>

                <Meta>
                    <span>📅 {anime.year || '??'}</span>
                    <FavoriteButton 
                        variant="favorite"
                        onClick={() => onFavorite(anime)}
                    >
                        {isFavorite ? '★' : '☆'}
                    </FavoriteButton>
                </Meta>
            </Content>
        </Card>
    )
}