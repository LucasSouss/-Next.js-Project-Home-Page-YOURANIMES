import {styled, keyframes} from '../../styles/stitches.config'

const spin = keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg'},
})

const Spinner = styled('div', {
    width: '40px',
    height: '40px',
    border: '4px solid $primary',
    borderRadius: '50px',
    animation: `${spin} is linear infinite`,
})

const Container = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '$xl',
})

export default function Loading() {
    return(
        <Container>
            <Spinner/>
        </Container>
    )
}