import { styled } from '../../styles/stitches.config'
import Button from '../ui/Button'
import Image from 'next/image'

const Card = styled('div', {
    backgroundColor: '$surface',
    borderRadius: '$lg',
    overflow: 'hidden',
    position: 'relative', // Essencial para posicionar o Badge e o GlassContent
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.08)', // Bordinha sutil de vidro

    '&:hover': {
        transform: 'translateY(-6px) scale(1.02)',
        borderColor: '$primary',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
    },
})

const ImageContainer = styled('div', {
    position: 'relative',
    width: '100%',
    height: '320px', // Aumentei um pouco para valorizar a arte vertical da imagem
    backgroundColor: '$surfaceHover',
})

const Badge = styled('div', {
    position: 'absolute',
    top: '$sm',
    left: '$sm',
    backgroundColor: 'rgba(255, 107, 107, 0.9)', // Seu $primary com opacidade
    color: 'white',
    padding: '4px 12px',
    borderRadius: '$md',
    fontWeight: 'bold',
    zIndex: 10,
    fontSize: '$sm',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(4px)',
})

const GlassContent = styled('div', {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '$md',
    // Gradiente escuro para garantir leitura do texto branco
    background: 'linear-gradient(transparent, rgba(26, 27, 30, 0.95) 50%)', 
    backdropFilter: 'blur(4px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '$xs',
})

const Title = styled('h3', {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$text',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
});

const Meta = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '$xs',
});

const Score = styled('span', {
    color: '$favorite',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
});

const FavoriteButton = styled(Button, {
    padding: '$xs',
    fontSize: '20px',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.2)',
    }
});

export default function AnimeCard({ anime, index, onFavorite, isFavorite }) {
    const imageUrl = anime.images?.jpg?.image_url || '/placeholder.jpg'

    return (
        <Card>
            {/* Exibe o ranking baseado na posição do array (1 a 25) */}
            <Badge>#{index + 1}</Badge> 

            <ImageContainer>
                <Image
                    src={imageUrl}
                    alt={anime.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    style={{ objectFit: 'cover' }}
                    priority={index < 5} // Carrega os 5 primeiros mais rápido
                />
            </ImageContainer>

            <GlassContent>
                <Title>{anime.title}</Title>
                <Meta>
                    <Score>⭐ {anime.score || 'N/A'}</Score>
                    <FavoriteButton 
                        variant="favorite"
                        onClick={(e) => {
                            e.stopPropagation(); // Evita disparar cliques indesejados no card
                            onFavorite(anime);
                        }}
                    >
                        {isFavorite ? '❤️' : '🤍'}
                    </FavoriteButton>
                </Meta>
            </GlassContent>
        </Card>
    )
}