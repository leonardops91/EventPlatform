<h1 align="center">Event Platform</h1>

<div align="center">

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

<div align="center">
 <a href="#-Descriçao">Visão Geral</a> •
 <a href="#-Apresentação">Apresentação</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-rodando">Rodando</a> •
 <a href="#-ferramentas">Ferramentas</a> •
</div>
<br>
<br>




## 📋 **Visão geral**

Este é um projeto feito através de uma semana de aceleração em programação chamada Ignite-Lab, porém avançando além do que foi passado, estilizando de maneira um pouco diferente e implementando responsividade para que possa ser utilizado em tamanhos de tela diferentes. Além disso foram tratados alguns possíveis erros e trocado o player de video. 

## 📝Apresentação
O projeto trata-se de uma plataforma para apresentação de Aulas, sejam elas ao vivo ou gravadas. O usuário irá fazer upload das aulas (ou criar a aula ao vivo) para o Youtube, Dailymotion ou outro que seja suportado pelo player, irá criar um registro da aula (lesson) através do <a href="https://hygraph.com/">Hygraph</a>, que é um CMS para GraphQL, passando a URL e outras informações do tipo criado no projeto. Irá criar também, registros de professores (teacher) e atribuir lessons a eles, criar desafios (challenge), entre outras features. As pessoas que quiserem assistir às aulas precisaram se inscrever no evento utilizando nome e email, que serão gravados dentro do Hygraph, montando um banco de e-mails para divulgação de futuros projetos.
<br>

## 🎨 **Layout**
Abaixo segue algumas telas e suas variações para dispositivos móveis:

<div align="center">

### **Tela Home**
#### Desktop
<img src="src\assets\home.png" >

#### Tablet
<img src="src\assets\home-tablet.png" >

#### Smartphone
<img src="src\assets\home-mobile.png" >

#### **Tela Event antes de escolher aula**
#### Desktop
<img src="src\assets\wellcome.png" >

#### Tablet
<img src="src\assets\wellcome-tablet.png" >

#### Smartphone
<img src="src\assets\wellcome-mobile.png" >

#### **Tela Event depois de escolher aula**
#### Desktop
<img src="src\assets\src\assets\platform.png" >

#### Tablet
<img src="src\assets\src\assets\platform-tablet.png" >

#### Smartphone
<img src="src\assets\src\assets\platform-mobile.png" >

*Os videos utilizados foram conseguidos no Youtube e servem meramente para exemplificar o layout final do projeto

</div>

## 🚀 **Tecnologias**

- [Vite](https://vitejs.dev/)
- [ReactJS](https://pt-br.reactjs.org/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [React-Player](https://www.npmjs.com/package/react-player)

## 💻 **Rodando**
Para utilizar o projeto inicialmente é preciso clonar e instalar as dependências:

````
git clone

cd eventPlatform

npm install --legacy-peer-deps
````
*o modificador --legacy-peer-deps serve para evitar conflitos de versão do React
  
Feito isso, também é preciso clonar o projeto do graphCMS, clicando no botão abaixo:

[![Clone hygraph project](https://hygraph.com/button)](https://app.hygraph.com/clone/bf3004cf8ed046af9c109f60741a3c35?name=Event%20Platform%20-%20Leonardo%20Souza)


No projeto clonado deve-se criar os registros do(s) teacher(s), na fonte dos videos obter as URLs e criar os registros das lessons no Hygraph, atribuindo cada lesson ao seu teacher, no próprio formulário de criação da lesson.

Agora deve-se obter a URL para comunicação do app com o Hygraph, isso pode ser conseguido dentro do projeto do Hygraph, no caminho: **project settings → API access → Endpoints → Content API**. Copia a URL e cria uma variável de ambiente no app com nome **VITE_API_URL**, conforme exemplificado no arquivo **.env.example**.

Também nesse arquivo existe outra variável importante que é o token de acesso para que a mutation necessária seja feita, gravando os inscritos no curso (subscribers). Esse token pode ser obtido através do caminho: **project settings → API Access → Permanent Auth Tokens → API**. Copia o código do token e cria no app a variável de ambiente **VITE_API_ACCESS_TOKEN**. (para testes locais, o nome do arquivo de variáveis pode ser .env.local)

Para garantir que os schemas do GraphQL estão prontos executa-se o comando:

```bash
npm run generate
```

A partir desse ponto é só rodar a aplicação através do comando:

```bash
npm run dev
```
## 🛠 **Ferramentas**

- [Hygraph](https://hygraph.com/)
- [VsCode](https://code.visualstudio.com/)
- [SVG2JSX](https://svg2jsx.com/)

## 🎯 Deployment
Para experimentar a plataforma, pode ser acessado o deploy da aplicação exemplo através do link:<br>
[Event Platform](event-platform-six-murex.vercel.app)
<br>
<br>
Developed by <a href="https://www.linkedin.com/in/leonardosouza-dev/">Leonardo Souza</a>