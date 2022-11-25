import { Header } from "../components/Header";

import sobreImg from "../assets/sobre.svg";
import meImg from "../assets/gabrielacruz.png";

import styles from "../styles/pages/sobre.module.css";

export function Sobre() {
  return (
    <>
      <Header title="Minha história" image={sobreImg} />
      <section className={styles.container}>
        <div className={styles.divContainer}>
          <img className={styles.meImg} src={meImg} />
        </div>

        <div className={styles.divContainer}>
          <h4 className={styles.divTitle}>Gabriela Cruz, prazer!</h4>
          <p>
            Eu sou peruana, mas moro em São Paulo cerca de 2 anos atrás, tenho
            34 anos, meu background é em administração e marketing digital, mas
            em março de 2022 resolvi fazer migração de carreira para área de
            tecnologia. Sou desenvolvedora front-end e meu sonho é continuar
            aprendendo programação para poder ensinar outras mulheres e crianças
            no futuro.
            <br />
            <br />
            Gosto muito de dançar e nas horas vagas dou aulas de Zumba. Pra me
            desconectar eu gosto de ir para a natureza e praticar meditação e
            grounding.
          </p>
        </div>
      </section>
    </>
  );
}
