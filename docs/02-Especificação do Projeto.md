# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-advogada.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Ana Silva</TD>
	</TR>
	<TR>
		<TD>Idade: 32<BR><BR>
    Ocupação: Advogada.
  <TD><BR>
<BR>
  Dados Principais: Mãe solteira, mora com seu filho de 6 anos.
</TR>
<TD>Objetivos:<BR>
Encontrar atividades para seu filho e ela mesma, busca interação social no condomínio.
</TD>
<TD>Frustrações:<BR>
  Dificuldade em manter a agenda organizada durante horários de pico, levando a atrasos e insatisfação dos clientes.
Falta de uma ferramenta eficaz para gerenciar o estoque de produtos de barbearia.
<TD>Hábitos:<BR>
Trabalha em horários flexíveis, gosta de praticar esportes ao ar livre nos fins de semana.
</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-empresario.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Carlos Oliveira</TD>
	</TR>
	<TR>
		<TD>Idade: 32<BR><BR>
    Ocupação: Empresário.
  <TD><BR>
<BR>
Dados Principais: Morador recente no condomínio, casado e sem filhos.
</TR>
<TD>Objetivos:<BR>
Conhecer seus vizinhos, participar de eventos sociais no condomínio.
</TD>
<TD>Frustrações:<BR>
Pouco conhecimento sobre as atividades no condomínio, deseja se integrar à comunidade.
<TD>Hábitos:<BR>
Trabalha longas horas, gosta de relaxar em casa nos fins de semana, aprecia eventos sociais.
</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-profissionalMarketing.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Lucas Oliveira</TD>
	</TR>
	<TR>
		<TD>Idade: 28<BR><BR>
    Ocupação: Profissional de Marketing.
  <TD><BR>
<BR>
Solteiro, gosta de organizar eventos sociais no condomínio.
</TR>
<TD>Objetivos:<BR>
Criar uma atmosfera social no condomínio, promovendo eventos e atividades para os moradores.
</TD>
<TD>Frustrações:<BR>
Poucas oportunidades para interação social, deseja criar uma comunidade mais unida..
<TD>Hábitos:<BR>
Trabalha em home office, entusiasta de esportes e jogos, sempre disposto a socializar.</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-familiaMedica.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Larissa Souza</TD>
	</TR>
	<TR>
		<TD>Idade: 38<BR><BR>
    Ocupação: Médica.
  <TD><BR>
<BR>
  Dados Principais: Mãe de dois filhos, casada com outro profissional de saúde.
</TR>
<TD>Objetivos:<BR>
Encontrar espaços seguros para as crianças, participar de atividades em família no condomínio.
</TD>
<TD>Frustrações:<BR>
Dificuldade em conciliar horários familiares, falta de espaços adequados para crianças.
<TD>Hábitos:<BR>
Horários irregulares de trabalho, busca atividades em família nos fins de semana.
</TD>
</TR>  
</TABLE>

<TABLE>
	<TR>
		<TD rowspan='2'><img src='/docs/img/02-aposentado.jpg' style='height: 150px'></TD>
		<TD colspan='2'>Ricardo Santos</TD>
	</TR>
	<TR>
		<TD>Idade: 60<BR><BR>
    Ocupação: Aposentado.
  <TD><BR>
<BR>
  Dados Principais: Viúvo, vive sozinho no condomínio.
</TR>
<TD>Objetivos:<BR>
Deseja encontrar companhia, participar de atividades culturais no condomínio.
</TD>
<TD>Frustrações:<BR>
Solidão, falta de atividades culturais e sociais direcionadas para sua faixa etária.
<TD>Hábitos:<BR>
Participa de grupos de leitura, gosta de jardinagem, tem interesse em atividades culturais.</TD>
</TR>  
</TABLE>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Silva           | Encontrar atividades para mim e meu filho, buscar interação social no condomínio | Para que possamos nos divertir e interagir socialmente, valorizando o tempo juntos e promovendo nosso bem-estar. |
|Carlos Oliveira     | Conhecer vizinhos e participar de eventos sociais no condomínio | Para me sentir parte da comunidade e construir relacionamentos significativos. |
|Isabel Mendes       | Criar uma atmosfera social no condomínio, promovendo eventos e atividades para os moradores | Para fortalecer os laços comunitários, fomentar a interação e promover o senso de pertencimento. |
|Ricardo Santos      | Encontrar companhia e participar de atividades culturais no condomínio | Para combater a solidão, enriquecer minha vida e melhorar minha qualidade de vida. |
|Larissa Souza       | Encontrar espaços seguros para as crianças e participar de atividades em família no condomínio | Para fortalecer os laços familiares, garantir o bem-estar e a diversão da minha família. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| ID     | Descrição do Requisito                  | Prioridade |
| ------ | --------------------------------------- | ---------- |
| RF-001 | O aplicativo deve permitir CRUD do condomínio| ALTA       |
| RF-002 | O aplicativo deve ser protegido por autenticação de login e senha. | MÉDIA      |
| RF-003 | O aplicativo deve permitir o CRUD dos condôminos. | ALTA |
| RF-004 | O aplicativo deve permitir a administração optar por quais espaços serão exibidos aos condôminos. | ALTA |
| RF-005 | O aplicativo deve disponibilizar CRUD de reserva de piscina aos condôminos* | ALTA |
| RF-006 | O aplicativo deve disponibilizar CRUD de reserva de salão de festas aos condôminos | ALTA |
| RF-007 | O aplicativo deve disponibilizar CRUD de reserva da academia aos condôminos* | ALTA |
| RF-008 | O aplicativo deve disponibilizar CRUD de reserva da churrasqueira aos condôminos* | ALTA |
| RF-009 | O aplicativo deve permitir ao condômino realizar o agendamento dos serviços disponibilizados pelo condomínio. | ALTA |
| RF-010 | O aplicativo deve permitir ao condômino realizar o CRUD de um agendamento dos serviços disponibilizados pelo condomínio. | ALTA |
| RF-011 | O aplicativo deve permitir à administração do condomínio realizar o CRUD dos espaços oferecidos. | ALTA |
| RF-012 ref: RF-001 | O aplicativo deve oferecer funcionalidades de manutenção, gerência de disponibilidade dos espaços e limitações de capacidade de acesso, garantindo que não fiquem superlotados, cumprindo regulamentos de segurança e aplicando as regras de negócio. | ALTA |
| RF-013**** | O aplicativo deve disponibilizar uma página* para CRUD de agendamento da área de lazer (Piscina, Academia e Churrasqueira)* | ALTA |
| RF-014 | O aplicativo deve enviar notificação ao condôminio sobre sua reserva estar próxima. | BAIXA |

### Requisitos não Funcionais

| ID      | Descrição do Requisito                                            | Prioridade |
| ------- | ----------------------------------------------------------------- | ---------- |
| RNF-001 | O aplicativo deve incluir uma página inicial de apresentação.| MÉDIA |
| RNF-002 | Os dados dos usuários, incluindo informações pessoais e senhas, devem ser armazenados de forma segura e criptografada, garantindo a proteção contra acesso não autorizado. | ALTA |
| RNF-003 | O aplicativo deve ser responsivo, garantindo tempos de resposta curtos para evitar a frustração do usuário. | ALTA |
| RNF-004 | O aplicativo deve ser escalável para suportar um aumento significativo no número de usuários. | ALTA |
| RNF-005 | O aplicativo deve possuir um medidas de backup e recuperação para garantir a disponibilidade contínua dos dados e funcionalidades em caso de falha do sistema. | ALTA |
| RNF-006 | A interface do usuário deve ser intuitiva e fácil de usar, inclusive para usuários sem experiência prévia em aplicativos similares. | ALTA |
| RNF-007 | O aplicativo deve ser desenvolvido de forma a ser compatível com o sistema operacional Android. | ALTA |
| RNF-008 | O aplicativo deve ser desenvolvido com uma estrutura bem organizada e modular, a fim de facilitar a manutenção e a adição de novos recursos no futuro. | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre letivo, com data limite estabelecida em 23/06/2024 para garantir o cumprimento do prazo. |
| 02  | O projeto deverá aderir ao cronograma estabelecido para cada etapa de entrega, a fim de evitar a possibilidade de atrasos significativos. |
| 03  | O projeto deve ser planejado e executado dentro dos recursos financeiros disponíveis, incluindo custos relacionados a hardware, software, ferramentas de desenvolvimento e quaisquer outros gastos associados ao projeto. |
| 04  | A equipe deverá desenvolver o projeto com base no aprendizado obtido na universidade, sendo proibida a terceirização do desenvolvimento do trabalho. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
