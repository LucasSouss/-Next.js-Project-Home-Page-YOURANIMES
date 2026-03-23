import { styled } from "@stitches/react";
import Image from 'next/image'

const BarContainer = styled('div', {
    backgroundColor: '$surface',
    padding: '$md',
    borderBottom: '2px solid $primary',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
        height: '6px',
    },
})

const FavoritesWrapper = styled('div', {
    display: 'inline-flex',
    gap: '$md',
    alignItems: 'center',
})

const FavoriteItem = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xs',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
})

const FavoriteImage = styled('div', {
    position: 'relative',
    width: '60px',
    height: '60px',
    borderRadius: '$round',
    overflow: 'hidden',
    border: '2px solid $primary',
})

const FavoriteTitle = styled('span', {
  fontSize: '$xs',
  color: '$text',
  maxWidth: '80px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const EmptyMessage = styled('div', {
  color: '$textSecondary',
  fontStyle: 'italic',
  padding: '$sm',
  textAlign: 'center',
  width: '100%',
});

const RemoveButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$error',
  cursor: 'pointer',
  fontSize: '$sm',
  padding: '$xs',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export default function FavoriteBar({favorites = [], onRemoveFavorite}) {
    if (favorites.length === 0) {
        return (
            <BarContainer>
                <EmptyMessage>
                    ⭐ Nenhum favorito ainda. Clique na estrela nos cards para adicionar!
                </EmptyMessage>
            </BarContainer>
        )
    }

return (
    <BarContainer>
        <FavoritesWrapper>
            {favorites.map((anime) => (
                <FavoriteItem key={anime.mal_id}>
                    <FavoriteImage>
                        <Image
                            src={anime.images?.jpg?.image_url || '/placeholder.jpg'}
                            alt={anime.title}
                            fill
                            sizes='60px'
                            style={{objectFit: 'cover'}}
                        />
                    </FavoriteImage>
                    <FavoriteTitle>{anime.title}</FavoriteTitle>
                    <RemoveButton onClick={() => onRemoveFavorite(anime.mal_id)}>Remover</RemoveButton>
                </FavoriteItem>
            ))}
        </FavoritesWrapper>
    </BarContainer>
)

}