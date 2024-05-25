# Registro de Testes de Usabilidade

Após realizar os testes de usabilidade, obtém-se um relatório a partir das análises realizadas. O Registro de Testes de Usabilidade é um relatório que contém as evidências dos testes e relatos dos usuários participantes, baseado no Plano de Testes de Usabilidade desenvolvido para os casos de uso desta etapa.

| Nível  | Descrição |
|--------|----------------------------------|
| Nível 0 | Não é encarado necessariamente como um problema de usabilidade. |
| Nível 1 | Problema estético que não tem necessidade de ser corrigido, a menos que haja tempo e recurso disponível. |
| Nível 2 | Pequeno problema com baixa prioridade na correção. |
| Nível 3 | Problema com alta prioridade de correção. |
| Nível 4 | Catástrofe de usabilidade, ou seja, o produto só será liberado se a correção for feita. |

---

## Tabela de Avaliação da Usabilidade Funcional

**Atividade: Avaliação das funcionalidades de gerenciamento de condomínios e uso por condôminos**

| Avaliador | Funcionalidade   | Notas dos Avaliadores | Média | Consenso | Feedback dos Avaliadores | Considerações    | Sugestão de Melhorias |
|-----------|------------------|-----------------------|-------|----------|--------------------------|------------------|-----------------------|
| Mariana     | Apresentação do aplicativo | Maria: 0 | 1 | Sim | A página inicial é intuitiva e os campos de login são facilmente identificáveis. | A página inicial carrega corretamente e os campos de login são visíveis. | Considerar adicionar uma breve mensagem de boas-vindas ou instruções na página inicial para novos usuários. |
| Josué      | Autenticação de usuário | João: 0 | 0 | Sim | O processo de login é rápido e sem complicações. | O login é realizado com sucesso para credenciais válidas. | Incluir uma mensagem de erro mais detalhada para casos de falha no login. |
| Álvaro       | CRUD de condomínio | Ana: 1 | 2 | Sim | A funcionalidade de gerenciamento de condomínios é eficiente e fácil de usar. | Operações de criação, edição, e exclusão de condomínios realizadas com sucesso. | Adicionar confirmações visuais (pop-ups) após cada operação de CRUD para aumentar a segurança do usuário. |
| Davi       | CRUD de apartamento | Ana: 1 | 2 | Sim | A funcionalidade de gerenciamento de condomínios é eficiente e fácil de usar. | Operações de criação, edição, e exclusão de condomínios realizadas com sucesso. | Adicionar confirmações visuais (pop-ups) após cada operação de CRUD para aumentar a segurança do usuário. |
| Leonardo     | Gerenciamento de espaços de lazer | Carlos: 1 | 1 | Sim | A interface para gerenciar espaços de lazer é clara e funcional. | Gerenciamento de espaços de lazer realizado sem erros. | Melhorar a disposição visual das opções de gerenciamento para uma navegação mais intuitiva. |
| Álvaro    | Reservas de espaços de lazer pelos condôminos | Bianca: 2 | 2 | Sim | A funcionalidade de reservas é prática, mas pode ser mais intuitiva. | Reserva de espaço de lazer realizada com sucesso. | Adicionar um tutorial rápido para novos usuários sobre como realizar reservas. |
| Mariana     | Notificação de reserva próxima | Lucas: 2 | 3 | Sim | As notificações são recebidas de forma oportuna e precisa. | Notificação recebida corretamente. | Personalizar as notificações para incluir detalhes da reserva. |
| Josué     | Exibição de espaços disponíveis | Sofia: 1 | 3 | Sim | A lista de espaços disponíveis é clara e precisa. | Lista exibe apenas espaços disponibilizados pela administração. | Melhorar a filtragem de espaços disponíveis para uma busca mais eficiente. |
| Evellyn     | Funcionalidades de manutenção e restrições | Pedro: 1 | 1 | Sim | As funcionalidades de manutenção e restrições são aplicadas corretamente. | Funcionalidades aplicadas sem erros. | Adicionar um log de atividades para auditoria das ações de manutenção e restrições. |

# Tabela de Análise Heurística

A análise heurística foi conduzida para avaliar a usabilidade da aplicação de gerenciamento de condomínios. Foram considerados princípios de usabilidade e boas práticas de design, seguindo heurísticas estabelecidas. A análise abrange funcionalidades críticas para administradores de condomínio e moradores.

| ID | Características | Sim | Não | N/A | Comentários |
|----|-----------------|-----|-----|-----|-------------|
| **1** | **Visibilidade do status do sistema** |
| 1.1 | As telas do sistema iniciam com um título que descreve seu conteúdo? | x | o | o | |
| 1.2 | O ícone selecionado é destacado dos demais não selecionados? | x | o | o | |
| 1.3 | Há feedback visual do menu ou escolhas selecionadas? | x | o | o | Indicadores visuais de sucesso/falha durante operações de login e CRUD. |
| 1.4 | O sistema provê visibilidade do estado atual e alternativas para ação? | x | o | o | Melhorar a visibilidade de feedback para ações de alteração de dados, como cadastros e atualizações. |
| **2** | **Correspondência entre sistema e mundo real** |
| 2.1 | Os ícones e ilustrações são concretos e familiares? | x | o | o | |
| 2.2 | As cores, quando utilizadas, correspondem aos códigos de cores comuns? | x | o | o | |
| 2.3 | A linguagem utilizada evita jargões técnicos? | x | o | o | A terminologia reflete claramente as ações no contexto de gerenciamento de condomínios. |
| 2.4 | Os números são devidamente separados nos milhares e nos decimais? | x | o | o | |
| **3** | **Controle do usuário e liberdade** |
| 3.1 | Se o sistema utiliza janelas que se sobrepõem, ele permite a organização e a troca simples? | o | o | x | O sistema não tem janelas que se sobrepõem. |
| 3.2 | Quando o usuário conclui uma tarefa, o sistema aguarda uma ação antes de processar? | o | o | x | |
| 3.3 | O usuário é solicitado a confirmar tarefas que possuem consequências drásticas? | x | o | o | Opções de cancelamento e confirmação estão presentes durante operações críticas, proporcionando segurança ao usuário. |
| 3.4 | Existe uma funcionalidade para desfazer ações realizadas pelo usuário? | o | x | o | |
| 3.5 | O usuário pode editar, copiar e colar durante a entrada de dados? | x | o | o | |
| 3.6 | O usuário pode se mover entre campos e janelas livremente? | x | o | o | |
| 3.7 | O usuário pode configurar o sistema, a sessão, a tela conforme sua preferência? | x | o | o | É possível alterar para o modo Dark do navegador. |
| **4** | **Consistência e padrões** |
| 4.1 | O sistema evita o uso constante de letras maiúsculas? | x | o | o | |
| 4.2 | Os números são justificados à direita e alinhados quanto aos decimais? | x | o | o | |
| 4.3 | Os ícones e ilustrações são rotulados? | x | o | o | |
| 4.4 | As instruções aparecem de forma consistente sempre no mesmo local? | x | o | o | |
| 4.5 | Os objetos do sistema são nomeados de maneira consistente em todo o sistema? | x | o | o | A aplicação segue um layout consistente em várias seções. |
| 4.6 | Os campos obrigatórios e opcionais são corretamente sinalizados? | x | o | o | |
| **5** | **Prevenção de erros** |
| 5.1 | As opções de menu são lógicas, distintas e mutuamente exclusivas? | x | o | o | |
| 5.2 | Se o sistema exibe múltiplas janelas, a navegação entre as janelas é simples e visível? | o | o | x | |
| 5.3 | O sistema alerta o usuário se ele está prestes a fazer erros críticos? | x | o | o | Sinais de alerta e validações são utilizados para prevenir erros durante o preenchimento de formulários. |
| **6** | **Reconhecimento ao invés de recordação** |
| 6.1 | Há distinção clara quando é possível selecionar um item ou vários? | x | o | o | |
| 6.2 | Os rótulos de campo estão próximos dos campos e separados por pelo menos um espaço? | x | o | o | |
| 6.3 | Durante a realização de ações, a aplicação fornece feedback visual imediato para indicar o status da operação, auxiliando os usuários no reconhecimento do progresso? | x | o | o | Ícones e rótulos intuitivos ajudam os usuários a reconhecerem a função das ações. |
| 6.4 | Há alguma diferença vis


> **Links Úteis**:
> - [Ferramentas de Testes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
