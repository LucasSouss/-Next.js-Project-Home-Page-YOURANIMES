import {styled} from '../../styles/stitches.config'

const StyledButton = styled('button', {
  // Base styles
  border: 'none',
  borderRadius: '$md',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  // Variantes
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: 'white',
        '&:hover': {
          backgroundColor: '$primaryDark',
          transform: 'translateY(-2px)',
        },
      },
      secondary: {
        backgroundColor: '$surface',
        color: '$text',
        '&:hover': {
          backgroundColor: '$surfaceHover',
        },
      },
      favorite: {
        backgroundColor: 'transparent',
        color: '$favorite',
        fontSize: '24px',
        padding: '$xs',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
    size: {
      sm: { padding: '$xs $sm', fontSize: '$sm' },
      md: { padding: '$sm $lg', fontSize: '$md' },
      lg: { padding: '$md $xl', fontSize: '$lg' },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },
  
  // Variantes padrão
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export default function Button({children, ...props}) {
    return <StyledButton {...props}>{children}</StyledButton>
}