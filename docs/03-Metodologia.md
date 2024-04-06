# Metodologia

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

# Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente                          | Plataforma   | Link de Acesso                                                                                                                                                                                                          |
| --------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repositório de Código fonte       | GitHub       | [Link-Repositório](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio)                                                                                                                                                                                                    |
| Documentos do projeto             | Google Drive | [DocsMeuCondomínio](https://docs.google.com/document/d/1dpWH7d2QIZyCtB89hAwlDlvLdq1clH3Y/edit)                                                                                                                   |
| Projeto de interface e Wireframes | Figma        | [Protótipo-Figma](https://www.figma.com/proto/bIBuBaH5RDg0poKqXl92Ox/meuCondominio?type=design&node-id=3-248&t=DGf1cAu7oKrCU7HB-0&scaling=scale-down&page-id=0%3A1) |
| Gerenciamento do projeto          | GitHub       | [Quadro-Kanban](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/814)                                                                                                                                            |

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nom e de branches:

- `main`: versão estável já testada do software
- `Develop`: Linha do tempo de desenvolvimento do próximo deploy, contendo funcionalidades não publicadas que serão posteriormente mescladas na branch "Main"
- `feature`: Uma nova funcionalidade precisa ser introduzida
- `Release`: Versão já testada do software, porém instável
- `Hotfix`: Uma funcionalidade encontra-se com problemas
- `Release`: Ambiente de homologação para mesclar as alterações da "Develop" na "Main"

As Branches mecionadas são ilustradas na figura a seguir

![Fluxo de controle do código fonte no repositório git](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/blob/main/docs/img/branches.png)

Fluxo de controle do código fonte no repositório git

## Gerenciamento de Projeto

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.

### Divisão de Papéis

- Scrum Master: Mariane de Oliveira Duarte
- Product Owner: Josué Batista de Almeida
- Equipe de Desenvolvimento
  - Álvaro Gonçalves Rodrigues
  - Gabriel de Costa Souza
  - Leonardo Guerra Melgaço
  - Evellyn Andrade Alves da Silva
- Equipe de Design
  - Davi Haniel Reis Silva

### Processo

Para gerenciar e distribuir as tarefas do projeto, a equipe está utilizando um quadro de tarefas no GitHub com o modelo KANBAN, que está organizado nas seguintes colunas:

- `Backlog`: Recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.
- `To do`: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
- `In Progress`: Quando uma tarefa tiver sido iniciada, ela é movida para cá para ser desenvolvida ativamente.
- `Done`: Nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para serem entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.


O quadro kanban do grupo desenvolvido na ferramenta de gerenciamento de projetos é apresentado, no estado atual, na figura 3 e está disponível através da URL: [Quadro-Kanban](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/814/views/1)

![meu condominio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/assets/130505215/8db36b05-4580-487c-8dcc-ebf7cedd3952)

### Ferramentas

A seguir, destacamos as principais ferramentas essenciais para facilitar nossa comunicação, organização e colaboração durante o desenvolvimento do projeto.

**Editores de Código:**

> - [Visual Studio Code](https://code.visualstudio.com/) Optamos pelo Visual Studio Code como nosso editor principal devido à sua confiabilidade, adaptabilidade e integração perfeita com o Git, simplificando nosso trabalho em equipe e a administração do código-fonte. Sua interface intuitiva e conjunto robusto de recursos o tornam a escolha mais adequada para atender às demandas de nossa equipe.
> - [Github](https://github.com/): Utilizado como repositório central para o código-fonte do projeto. Ele facilita o versionamento e controle de alterações e permite colaboração síncrona e assíncrona entre os membros da equipe.

**Ferramentas de Comunicação:**

>- [WhatsApp]( https://web.whatsapp.com/): Utilizado como forma principal de comunicação da equipe para mensagens rápidas e comunicação informal. Ideal para comunicação imediata e troca de informações urgentes. 
> - [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software): Utilizado para reuniões de equipe e reuniões semanais com o coordenador do projeto. 

**Ferramentas de Organização:**

> - [Microsoft Office](https://www.office.com/):  Utilizado para criar e editar documentos de texto, planilhas e gráficos. Ideal para documentação de requisitos, especificações técnicas e relatórios de progresso.
> - [GitHub Projects](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects): Utilizado para organizar e separar tarefas do projeto. Permitindo atribuir responsáveis, definir prazos e acompanhar o progresso das tarefas.

**Ferramentas de Desenho de Tela (_wireframing_):**

> - [Figma]( https://www.figma.com/): Utilizado para desenvolvimento do layout das telas da aplicação. Permite criação de wireframes, protótipos interativos e colaboração em tempo real.


**Ferramenta de diagramação:**
> - [Lucidchart]( https://lucid.co/pt):  É uma ferramenta de diagramação online que permite colaboração visual na criação, revisão e compartilhamento de gráficos e diagramas. Foi usado pelo grupo para desenvolvimento do Diagrama de Classes, modelo ER e diagramas de processo.

**Ferramenta visual de design de banco de dados:**
> -  [MySQL Workbench]( https://www.mysql.com/products/workbench/): O grupo optou pelo MySQL Workbench devido à sua capacidade abrangente de design de banco de dados, que integra todas as etapas do processo de desenvolvimento, desde o design até a implementação e manutenção do banco de dados MySQL. Sua interface visual intuitiva simplifica a modelagem de dados, permitindo uma colaboração eficiente e facilitando a comunicação dentro da equipe.

Integrando essas ferramentas aos processos definidos, garantimos uma abordagem eficiente e colaborativa para o desenvolvimento do projeto arquitetural. A comunicação e organização são essenciais para o sucesso do projeto, e as ferramentas escolhidas fornecem os recursos necessários para alcançar esses objetivos.
