import { Header } from "../components/Header";
import portfolioImg from "../assets/portfolio.svg";

import { useState, useEffect } from "react";
import Axios from "axios";

import styles from '../styles/pages/portfolio.module.css'

export function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [termSearched, setTermSearched] = useState("");
  const [reposFiltered, setreposFiltered] = useState([]);

  const baseURL = "https://api.github.com/users/gabcruzti/repos";

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL);
      setRepos(response.data);
    }
    getData();
  }, []);

  function handleSearch(event) {
    setTermSearched(event.target.value);
  } 

  useEffect(() => {
    const filtered = repos.filter((repo) => {
      return repo.name.includes(termSearched);
    });
    setreposFiltered(filtered);
  }, [repos, termSearched]);
  return (
    <>
      <Header title="Meus projetinhos" image={portfolioImg} />
      <h4 className={styles.divTitle}>Tudos os meus projetos no GitHub</h4>
      {reposFiltered.map((repo) => {
        return (
          <div className={styles.container}>
            <div className={styles.repos}>
              <a key={repo.id} href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
