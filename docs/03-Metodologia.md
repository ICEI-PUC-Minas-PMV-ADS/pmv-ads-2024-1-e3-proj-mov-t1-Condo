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

![Fluxo de controle do código fonte no repositório git](/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/docs/img/branches.png)

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

### Gerenciamento do Product Backlog

- Backlog: Recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto estão incorporadas a esta lista.
- To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.
- In Progress: Quando uma tarefa tiver sido iniciada, ela é movida para cá para ser desenvolvida ativamente.
- Test: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu como planejado.
- Done: Nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias.
- Locked: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa.

O quadro kanban do grupo desenvolvido na ferramenta de gerenciamento de projetos é apresentado, no estado atual, na figura 3 e está disponível através da URL: [Quadro-Kanban](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/814/views/1)

![image]([/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/docs/img/back.png](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-meucondominio/blob/main/docs/img/back.png))
Figura 3 - Tela do kanban utilizada pelo grupo

### Ferramentas

As ferramentas empregadas no projeto são:

- Visual Studio Code.
- Microsoft Teams
- Figma
- GitHub
- Git

- Visual Studio Code:
O Visual Studio Code foi escolhido como nosso editor de código principal devido à sua robustez, flexibilidade e ampla gama de extensões disponíveis. Além disso, sua integração perfeita com sistemas de controle de versão, como o Git, simplifica o fluxo de trabalho colaborativo e o gerenciamento de código-fonte.

- Microsoft Teams:
Optamos pelo Microsoft Teams como nossa plataforma de comunicação e colaboração devido à sua integração nativa com outras ferramentas da Microsoft, como o Office 365. Isso facilita a organização de reuniões, compartilhamento de documentos e comunicação em equipe em um único ambiente, aumentando a eficiência e a produtividade.

- Figma:
Escolhemos o Figma como nossa ferramenta de design e prototipagem devido à sua natureza baseada na nuvem, que permite a colaboração em tempo real entre os membros da equipe, independentemente da localização geográfica. Além disso, sua interface intuitiva e recursos avançados de prototipagem nos ajudam a captar e visualizar com precisão as necessidades e fluxos de trabalho da nossa solução.

- GitHub:
Utilizamos o GitHub como nossa plataforma de hospedagem e gerenciamento de código-fonte devido à sua popularidade, robustez e recursos avançados de controle de versão. Através do GitHub, podemos colaborar de forma eficiente, rastrear alterações, revisar código e gerenciar problemas, garantindo a qualidade e a integridade do nosso código durante todo o ciclo de desenvolvimento.

- Git:
O Git é o sistema de controle de versão distribuído que utilizamos em conjunto com o GitHub. Sua flexibilidade, velocidade e capacidade de lidar com projetos de qualquer tamanho o tornam uma escolha ideal para o desenvolvimento de software colaborativo. Com o Git, podemos rastrear todas as alterações no código-fonte, criar branches para desenvolvimento paralelo e mesclar facilmente as alterações de volta ao branch principal, mantendo assim um histórico claro e organizado do nosso trabalho.
