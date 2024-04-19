import image from '../../public/bgintro-desktop.png'

const App = ({children}) => {
    return(
        <section>
            <Body
                image={image}
            />
            <Container
                titulo="Learn to code by watching others"
                subtitulo="See how experienced developers salve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
            />
        </section>
    )
}

export default App;