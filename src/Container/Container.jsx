import './Container.css'

// eslint-disable-next-line react/prop-types
const Container = ({titulo, subtitulo}) => {
    return(
        <article>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </article>
    )
}

export default Container;