#  ReactJS | Aula 03 🚀 

Turma Online 20 - Todas em Tech  | Front-end | Semana 15 | 2022 | { Profa } Simara Conceição

# Aprendizado neste projeto:

| Ferramenta | Descrição |
| --- | --- |
| `ReactJS` | framework web|
| `Vite` | gerador de projeto de front-end|
| `npm` | gerenciador de pacotes|
| `Firebase` | Ferramenta realtime database para gravar as mensagens de contato|
| `Module CSS` | Ferramenta para ter mais produtividade ao estilizar a aplicação|
| `Phosphor` | Dependência com icones super legais|
| `React router dom` | Dependência para criar rotas no reactjs|
| `Axios` | Dependência para consumir api|
| `Vercel` | Hospedagem para a aplicação, fiz o deploy integrado com o github|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|


# Rotas - React Router

No react estamos construindo SPA(single page application) O que significa dizer que na real a gente só construiu uma única página. E quando a gente precisa criar um menu e algumas páginas diferentes. Precisamos usar uma biblioteca que nos ajude com isso, a construir rotas no react.

Para que no fim das contas, quando clicarmos no menu ou alterarmos na URL a gente consiga visualizar o conteúdo correto.

## CSS em react

### Fonte personalizada em projetos reactjs

1) Vá até o site https://fonts.google.com/ e escolha sua fonte e variações
2) Copie os links no head do seu index.html
3) Use a fonte no seu arquivo de css 

### Imagens no reactjs

1) Salve sua imagem numa pasta nomeada de assets
2) Importe sua imagem guardando numa variável

```
import Image from '../assets/minha-imagem.png
```
  >> importante escrever no caminho o nome e extensão exatamente como você salvou
3) Para usar a imagem no componente

```
<img src={Imagem} alt="uma ilustração de um computador"/>
```

>> dentro do src use a variável que você atribuiu no import
>> é obrigatório usar o atributo alt, informando um texto alternativo coerente para o caso da imagem não carregar.

### Css-modules

É uma forma de escrever css que garante que cada classe será única evitando sobrescrever estilos, pois "o carregador css do Webpack no modo de módulo substitui cada identificador de escopo local por um nome exclusivo global (com hash do nome do módulo e do identificador local por padrão) e exporta o identificador usado."


<br>

<p align="center">
Feito com 💜 por Gabriela Cruz
</p>