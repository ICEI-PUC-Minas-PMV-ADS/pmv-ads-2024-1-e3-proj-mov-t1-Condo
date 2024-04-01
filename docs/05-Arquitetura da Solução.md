# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![DiagramadeClasses](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/8123bb8d-5393-4361-a9c7-919412370e98)

Para uma melhor visualização do Diagrama, disponibilizamos o PDF: [Diagrama_Classe_MeuCondominio.pdf](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/files/14828566/Diagrama_Classe_MeuCondominio.pdf)


## Modelo ER



## Esquema Relacional

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.


![Diagrama_ER_MeuCondominio_BD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/3b5ebb6f-564c-495c-8663-504aafcfec5c)


Para uma melhor visualização do Modelo, disponibilizamos o PDF: [Diagrama_ER_MeuCondominio_BD.pdf](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/files/14826002/Diagrama_ER_MeuCondominio_BD.pdf)



## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software
A qualidade de um aplicativo móvel de gerenciamento e controle de acesso aos espaços de lazer em condomínios depende de vários fatores, incluindo funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade e portabilidade. Aqui estão algumas considerações importantes para avaliar a qualidade do software do aplicativo condô:

### Funcionalidade
- O Aplicativo para gestão de espaços de lazer em condomínios deve fornecer todas as funcionalidades necessárias para gerenciar os espaços de lazer, como ver as instruções, cadastrar espaço/apartamento/dependentes e reservar espaços.

### Confiabilidade
- O aplicativo para gestão de espaços de lazer em condomínios deve ser altamente confiável e estável para os usuários, protegendo os dados com autenticação criptografada e garantindo disponibilidade contínua das funcionalidades. 
  Isso implica em minimizar falhas, lidar com adversidades do sistema e manter a integridade dos dados ao longo do tempo, assegurando uma experiência positiva para os usuários.

### Usabilidade
- O aplicativo deve ser fácil de usar e intuitivo, permitindo uma navegação eficiente e rápida para os usuários, enquanto a resposta ágil do sistema durante as interações é essencial para uma experiência fluida de reserva de espaços.

### Eficiência
- O aplicativo deve ser rápido e responsivo, com tempos de carregamento curtos e operações suaves. Ele deve ser capaz de lidar com grandes quantidades de dados de forma eficiente e sem travar.

### Manutenibilidade
- O aplicativo deve ser desenvolvido com código bem estruturado e modular para facilitar a manutenção e implementação de atualizações contínuas, como correção de bugs ou adição de novas funcionalidades.

### Portabilidade
- O Aplicativo deve garantir a compatibilidade com uma variedade de dispositivos móveis, garantindo uma experiência uniforme em várias plataformas, sem comprometer a funcionalidade ou usabilidade do aplicativo em diferentes ambientes e tamanhos de tela.
