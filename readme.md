## PROJETO DESENVOLVEDOR PLENO FULLSTACK ARCADIS

## DESCRIÇÃO
Projeto Frontend, consiste em consumir uma API NodeJS de cadastro de Pontos e Parametros, a aplicação permite cadastrar um ponto (único) onde cada ponto pode ter um ou mais parametros, sendo que é possivel pesquisar pontos, pesquisar parametros, visualizar pontos que violam a legislação vigente e a listagem completa de pontos e seus respectivos parametros.

O projeto foi estruturado criado através da ferramenta 'build tool' `vite` e componentes da biblioteca `material ui`.

## REQUISITOS
- Vite
- Material UI
- Axios
- Styled Components

## COMO INSTALAR
Para instalar a aplicação, faça um clone deste repositório Git, através do comando `git clone` e acesse a pasta utilizando o comando `cd ArcadisFrontEnd`, dentro da pasta instale as dependencias através do comando `yarn` e aguarde a finalização da instalação dos pacotes.

## COMO UTILIZAR
Para inicializar a aplicação, utilize o comando `yarn dev` a aplicação se iniciará automaticamente e será exibido o link de acesso.

Na tela inicial da aplicação vemos 4 botões que foram posicionados no que foi chamado de top-bar dentro de um card central, que concentra as principais funcionalidades pedidas no desafio proposto. Logo abaixo é possivel visualizar uma tabela "expansivel" que agrupa os dados que são recebidos através das chamadas realizadas na api.

Para utilização do projeto de forma completa, recomenda-se que tenha em seu equipamento o clone da pasta [ArcadisBackend](https://github.com/mhenrk/ArcadisBackend) utilizando o comando `git clone` e acessando-a através do comando `cd ArcadisBackend` seguindo as instruções contidas no arquivo Readme.md

Após a inicialização do projeto ArcadisBackend, é possivel realizar chamadas para a api, expandir as tabelas e visualizar os status dos pontos e parametros cadastrados.

Cada linha na tabela possui um botão, que recupera o ID do referido ponto e realiza o cadastramento de "N" parametros para o referido ponto.

## ESTRUTURA DE PASTAS

Dentro da pasta de cada componente (com excessão dos componentes Tabela e TabelaCollapse) possuem respectivamente os arquivos index.jsx (arquivo principal do componente, pode possuir um ou mais componentes) e styles.jsx (arquivo de estilização do componente, podendo conter um ou mais estilizações de componentes diferentes.)

Pastas:

ArcadisFrontend - Contém todas a estrutura básica de arquivos gerados pelo `build tool vite`

Pasta src - Pasta principal do projeto, contem a pasta Components, styles e o arquivo inicial (entry point) do projeto

Pasta src/styles - Pasta com arquivo global-styes.jsx, responsavel por armazenamento dos atributos css comuns do projeto

Pasta src/Components - Pasta com os componentes funcionais do projeto [App, Form, InputLabel, Modal [ Botoes Modal ], Tabela, TabelaCollapse]
