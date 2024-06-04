# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/3311cd2f-8fc4-4720-bac7-e1bdd55ae2f2)


Para uma melhor visualização do Diagrama, disponibilizamos o PDF: [Diagrama_Classe_MeuCondominio.pdf](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/files/14829455/Diagrama_Classe_MeuCondominio.pdf)


## Modelo ER (Conceitual)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/2737eb68-b991-4bd0-9f98-a12c0d035eb9)

Para uma melhor visualização do Modelo, disponibilizamos o PDF: [Modelo_ER_MeuCondominio.pdf](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/files/14891496/Modelo_ER_MeuCondominio.pdf)


## Esquema Relacional

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.


![Diagrama_ER_MeuCondominio_BD](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/3b5ebb6f-564c-495c-8663-504aafcfec5c)


Para uma melhor visualização do Modelo, disponibilizamos o PDF: [Diagrama_ER_MeuCondominio_BD.pdf](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/files/14826002/Diagrama_ER_MeuCondominio_BD.pdf)



## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

A seguir, destacamos as principais ferramentas essenciais para facilitar nossa comunicação, organização e colaboração durante o desenvolvimento do projeto.

Editores de Código:

Visual Studio Code Optamos pelo Visual Studio Code como nosso editor principal devido à sua confiabilidade, adaptabilidade e integração perfeita com o Git, simplificando nosso trabalho em equipe e a administração do código-fonte. Sua interface intuitiva e conjunto robusto de recursos o tornam a escolha mais adequada para atender às demandas de nossa equipe.
Github: Utilizado como repositório central para o código-fonte do projeto. Ele facilita o versionamento e controle de alterações e permite colaboração síncrona e assíncrona entre os membros da equipe.
Ferramentas de Comunicação:

WhatsApp: Utilizado como forma principal de comunicação da equipe para mensagens rápidas e comunicação informal. Ideal para comunicação imediata e troca de informações urgentes.
Microsoft Teams: Utilizado para reuniões de equipe e reuniões semanais com o coordenador do projeto.
Ferramentas de Organização:

Microsoft Office: Utilizado para criar e editar documentos de texto, planilhas e gráficos. Ideal para documentação de requisitos, especificações técnicas e relatórios de progresso.
GitHub Projects: Utilizado para organizar e separar tarefas do projeto. Permitindo atribuir responsáveis, definir prazos e acompanhar o progresso das tarefas.
Ferramentas de Desenho de Tela (wireframing):

Figma: Utilizado para desenvolvimento do layout das telas da aplicação. Permite criação de wireframes, protótipos interativos e colaboração em tempo real.
Ferramenta de diagramação:

Lucidchart: É uma ferramenta de diagramação online que permite colaboração visual na criação, revisão e compartilhamento de gráficos e diagramas. Foi usado pelo grupo para desenvolvimento do Diagrama de Classes, modelo ER e diagramas de processo.
Ferramenta visual de design de banco de dados:

MySQL Workbench: O grupo optou pelo MySQL Workbench devido à sua capacidade abrangente de design de banco de dados, que integra todas as etapas do processo de desenvolvimento, desde o design até a implementação e manutenção do banco de dados MySQL. Sua interface visual intuitiva simplifica a modelagem de dados, permitindo uma colaboração eficiente e facilitando a comunicação dentro da equipe.(estas sçao minhas ferramentas utilizadas complete com oq falta

Linguagens e Frameworks:

JavaScript: Linguagens principais para o desenvolvimento de aplicativos React Native.
React Native: Framework para desenvolvimento de aplicativos móveis multiplataforma.
Expo: Plataforma e conjunto de ferramentas para criar aplicativos React Native de forma rápida e fácil.
Bibliotecas e Ferramentas:

JSON Server: Uma biblioteca para criar uma API REST falsa a partir de um arquivo JSON, útil para desenvolvimento local e simulação de dados.
Local Tunnel: Uma ferramenta para tornar seu servidor local acessível remotamente via HTTPS.
Axios: Uma biblioteca para fazer chamadas de API a partir do aplicativo.
Visual Studio Code: Uma IDE popular para desenvolvimento React Native.

## Hospedagem

Nossa hospedagem de software inclui um servidor JSON hospedado no Render, garantindo uma comunicação eficiente entre os componentes do seu aplicativo. Além disso, disponibilizamos o APK do software por meio de um link para simplificar o acesso para os usuários.

## Qualidade de Software
A qualidade de um aplicativo móvel de gerenciamento e controle de acesso aos espaços de lazer em condomínios depende de vários fatores, incluindo funcionalidade, confiabilidade, usabilidade, eficiência, manutenibilidade e portabilidade. Aqui estão algumas considerações importantes para avaliar a qualidade do software do aplicativo condô:

### Funcionalidade
- O aplicativo para gestão de espaços de lazer em condomínios deve fornecer todas as funcionalidades necessárias para gerenciar os espaços de lazer, como ver as instruções, cadastrar espaço/apartamento/dependentes e reservar espaços.

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
- O aplicativo deve garantir a compatibilidade com uma variedade de dispositivos móveis, garantindo uma experiência uniforme em várias plataformas, sem comprometer a funcionalidade ou usabilidade do aplicativo em diferentes ambientes e tamanhos de tela.
