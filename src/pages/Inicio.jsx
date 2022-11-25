import { Header } from "../components/Header";
import homeImg from "../assets/home.svg";

import sobreImg from "../assets/sobre.svg";
import portfolioImg from "../assets/portfolio.svg";
import contatoImg from "../assets/contato.svg";

import styles from "../styles/pages/inicio.module.css";

export function Inicio() {
  return (
    <>
      <Header title="Meu site pessoal" image={homeImg} />
      <section className={styles.container}>
        <div className={styles.divContainer}>
          <img className={styles.imageContainer} src={sobreImg} />
          <h4 className={styles.divTitle}>Vida</h4>

          <p>
            Eu conto um pouquinho sobre mim, minha formação, a história da minha
            migração de carreira, gostos e curiosidades.
          </p>
        </div>
        <div className={styles.divContainer}>
          <img className={styles.imageContainer} src={portfolioImg} />
          <h4 className={styles.divTitle}>Portfólio</h4>

          <p>
            Mostro meu portfólio. Tudo o que aprendi até o momento dando
            destaque para alguns dos projetos que criei enquanto estudo
            programação.
          </p>
        </div>
        <div className={styles.divContainer}>
          <img className={styles.imageContainer} src={contatoImg} />
          <h4 className={styles.divTitle}>Contato</h4>

          <p>
            Entre em contato comigo. Seja para entrevistas de emprego como deva
            ou para trocarmos ideias sobre os estudos.
          </p>
        </div>
      </section>
    </>
  );
}
