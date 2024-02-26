import styles from './NaoEncontrada.module.css';

const NaoEncontrada = () => {
    return (
        <section className={styles.container}>
            <h2>OPS!</h2>
            <p>O conteudo que você está procurando não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;