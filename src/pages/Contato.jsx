import { useState } from "react"
import { Header } from "../components/Header"
import contatoImg from "../assets/contato.svg"
import { database } from "../service/firebase"
import { ref, push, set } from 'firebase/database'

import styles from "../styles/pages/contato.module.css"

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputValueNome(event) {
    setNome(event.target.value);
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();
    
    const messageListRef = ref (database, 'mensagens')
    const newMessageRef = push (messageListRef)
    set(newMessageRef, {
      nome:nome,
      email: email,
      texto: mensagem
    })
  }

  return (
    <>
      <Header title="Entre em contato" image={contatoImg} />
      <div>
        <h4 className={styles.divTitle}>
          Entre em contato comigo. Seja para entrevistas de emprego como deva ou
          para trocarmos ideias sobre os estudos.
        </h4>
        <form className={styles.form} onSubmit={handleCreateMessage}>
          <input
            className={styles.formInput}
            placeholder="Digite seu nome"
            onChange={handleInputValueNome}
          />
          <input
            className={styles.formInput}
            placeholder="Digite seu email"
            onChange={handleInputValueEmail}
          />
          <textarea
            className={styles.formTextArea}
            placeholder="Digite sua mensagem"
            onChange={handleInputValueMensagem}
          />
          <button type="submit" className={styles.formButton}>
            Enviar mensagem
          </button>
        </form>
      </div>
    </>
  );
}
