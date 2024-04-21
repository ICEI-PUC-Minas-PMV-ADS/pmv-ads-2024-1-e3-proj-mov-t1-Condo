# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

Objetivos do Teste:

Avaliar a facilidade de uso da plataforma para administradores de condomínios.
Identificar possíveis problemas de usabilidade que possam afetar a experiência do usuário.
Coletar feedback para orientar melhorias na interface e funcionalidades do sistema.
Requisitos para Realização dos Testes:

Dispositivos: Celular ou Tablet com sistema Android ou iOS.
Conectividade: Acesso à internet para utilizar o aplicativo.

| Plano de Teste | Objetivo do Teste | Passos | Critério de Êxito |
|----------------|-------------------|--------|-------------------|
| 01 - Apresentação do Aplicativo | Verificar se a página inicial apresenta opções de login e CRUD do condomínio. | 1. Acessar o aplicativo. 2. Verificar página inicial. 3. Confirmar campos de login. | Página inicial aberta corretamente. Campos de login visíveis. |
| 02 - Autenticação de Usuário | Verificar se o sistema autentica corretamente os usuários. | 1. Acessar o aplicativo. 2. Inserir credenciais. 3. Efetuar login. |
| 03 - CRUD de Condomínio | Garantir que o administrador possa realizar operações CRUD relacionadas aos condomínios. | 1. Efetuar login como administrador. 2. Acessar gerenciamento de condomínios. 3. Criar novo condomínio. 4. Verificar listagem correta. 5. Editar detalhes de condomínio existente. 6. Confirmar alterações salvas. 7. Excluir condomínio. 8. Verificar remoção da lista. | Operações CRUD realizadas sem erros ou mensagens de falha. |
| 04 - CRUD de Condôminos | Garantir que o administrador possa realizar operações CRUD relacionadas aos condôminos. | 1. Efetuar login como administrador. 2. Acessar gerenciamento de condôminos. 3. Criar novo condômino. 4. Verificar listagem correta. 5. Editar detalhes de condômino existente. 6. Confirmar alterações salvas. 7. Excluir condômino. 8. Verificar remoção da lista. | Operações CRUD realizadas sem erros ou mensagens de falha. |
| 05 - Gerenciamento de Espaços de Lazer | Verificar se a administração do condomínio pode gerenciar os espaços de lazer oferecidos. | 1. Efetuar login como administrador. 2. Acessar a seção de gerenciamento de espaços de lazer. 3. Criar um novo espaço de lazer. 4. Verificar se o novo espaço é listado corretamente. 5. Editar os detalhes de um espaço de lazer existente, incluindo disponibilidade e capacidade de acesso. 6. Confirmar se as alterações são salvas corretamente. 7. Excluir um espaço de lazer. 8. Verificar se o espaço é removido da lista. | O administrador deve poder gerenciar os espaços de lazer com sucesso, incluindo criação, edição e exclusão, sem erros ou mensagens de falha. |
| 06 - Reservas de Espaços de Lazer pelos Condôminos | Verificar se os condôminos podem realizar reservas dos espaços de lazer disponibilizados pelo condomínio. | 1. Efetuar o login como condômino. 2. Acessar a seção de reservas de espaços de lazer. 3. Selecionar um espaço de lazer disponível. 4. Escolher a data e horário desejados para a reserva. 5. Confirmar a reserva. 6. Verificar se a reserva é listada corretamente na seção de reservas. | Os condôminos devem poder realizar reservas dos espaços de lazer com sucesso, sem erros ou mensagens de falha. |
| 07 - Notificação de Reserva Próxima | Verificar se os condôminos recebem notificações sobre reservas próximas. | 1. Efetuar o login como condômino. 2. Realizar uma reserva com data próxima. 3. Aguardar o tempo necessário para a notificação. 4. Verificar se a notificação é recebida. | Os condôminos devem receber notificações sobre reservas próximas de forma oportuna e precisa. |
| 08 - Exibição de Espaços Disponíveis | Verificar se o aplicativo exibe apenas os espaços de lazer disponibilizados pela administração do condomínio. | 1. Efetuar o login como condômino. 2. Verificar a lista de espaços de lazer disponíveis para reserva. 3. Comparar com os espaços disponíveis definidos pela administração. | A lista de espaços de lazer disponíveis para reserva deve coincidir com os espaços definidos pela administração. |
| 09 - Reservas Específicas de Espaços de Lazer | Verificar se os condôminos podem realizar reservas específicas de cada tipo de espaço de lazer disponibilizado pelo condomínio. | 1. Efetuar o login como condômino. 2. Acessar a seção de reservas de espaços de lazer. 3. Selecionar o tipo de espaço desejado (piscina, salão de festas, academia, churrasqueira). 4. Escolher a data e horário desejados para a reserva. 5. Confirmar a reserva. 6. Verificar se a reserva é listada corretamente na seção de reservas. | Os condôminos devem poder realizar reservas específicas de cada tipo de espaço de lazer disponibilizado pelo condomínio, sem erros ou mensagens de falha. |
| 10 - Funcionalidades de Manutenção e Restrições | Verificar se as funcionalidades de manutenção, disponibilidade e capacidade de acesso são aplicadas corretamente. | 1. Efetuar o login como administrador. 2. Acessar a seção de gerenciamento de espaços de lazer. 3. Realizar manutenção em um espaço de lazer. 4. Definir disponibilidade e capacidade de acesso para um espaço. 5. Verificar se as configurações são salvas corretamente. | As funcionalidades de manutenção, disponibilidade e capacidade de acesso devem ser aplicadas corretamente, sem erros ou mensagens de falha. |


