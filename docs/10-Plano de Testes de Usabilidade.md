# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

Objetivos do Teste:

Avaliar a facilidade de uso da plataforma para administradores de condomínios.
Identificar possíveis problemas de usabilidade que possam afetar a experiência do usuário.
Coletar feedback para orientar melhorias na interface e funcionalidades do sistema.
Requisitos para Realização dos Testes:

Dispositivos: Celular ou Tablet com sistema Android.

Conectividade: Acesso à internet para utilizar o aplicativo.


| Plano de Teste | Objetivo do Teste | Passos | Critério de Êxito |
|----------------|-------------------|--------|-------------------|
| 01 - Apresentação do Aplicativo | Verificar se a página inicial apresenta opções de login e CRUD do condomínio. | 1. Acessar o aplicativo. 2. Verificar página inicial. 3. Confirmar campos de login. | Página inicial aberta corretamente. Campos de login visíveis. |
| 02 - Autenticação de Usuário | Verificar se o sistema autentica corretamente os usuários. | 1. Acessar o aplicativo. 2. Inserir credenciais. 3. Efetuar login. | Login de administrador realizado com sucesso para credenciais válidas. |
| 03 - CRUD de Condomínio | Garantir que o administrador possa realizar operações CRUD relacionadas aos condomínios. | 1. Efetuar login como administrador. 2. Acessar gerenciamento de condomínios. 3. Criar, editar, e excluir condomínios. | Operações CRUD realizadas sem erros ou mensagens de falha. |
| 04 - CRUD de Condôminos | Garantir que o administrador possa realizar operações CRUD relacionadas aos condôminos. | 1. Efetuar login como administrador. 2. Acessar gerenciamento de condôminos. 3. Criar, editar, e excluir condôminos. | Operações CRUD realizadas sem erros ou mensagens de falha. |
| 05 - Gerenciamento de Espaços de Lazer | Verificar se a administração do condomínio pode gerenciar os espaços de lazer oferecidos. | 1. Efetuar login como administrador. 2. Acessar a seção de gerenciamento de espaços de lazer. 3. Criar, editar, e excluir espaços de lazer. | Gerenciamento de espaços de lazer realizado sem erros ou mensagens de falha. |
| 06 - Reservas de Espaços de Lazer pelos Condôminos | Verificar se os condôminos podem realizar reservas dos espaços de lazer disponibilizados pelo condomínio. | 1. Efetuar login como condômino. 2. Acessar a seção de reservas de espaços de lazer. 3. Realizar reserva de espaço de lazer. | Reserva de espaço de lazer realizada com sucesso sem erros ou mensagens de falha. |
| 07 - Notificação de Reserva Próxima | Verificar se os condôminos recebem notificações sobre reservas próximas. | 1. Efetuar login como condômino. 2. Realizar reserva com data próxima. 3. Verificar recebimento de notificação. | Notificação recebida de forma oportuna e precisa. |
| 08 - Exibição de Espaços Disponíveis | Verificar se o aplicativo exibe apenas os espaços de lazer disponibilizados pela administração do condomínio. | 1. Efetuar login como condômino. 2. Verificar lista de espaços de lazer disponíveis para reserva. | Lista exibe apenas espaços disponibilizados pela administração. |
| 09 - Reservas Específicas de Espaços de Lazer | Verificar se os condôminos podem realizar reservas específicas de cada tipo de espaço de lazer disponibilizado pelo condomínio. | 1. Efetuar login como condômino. 2. Selecionar tipo de espaço desejado. 3. Realizar reserva de espaço. | Reserva de espaço de lazer específico realizada com sucesso sem erros ou mensagens de falha. |
| 10 - Funcionalidades de Manutenção e Restrições | Verificar se as funcionalidades de manutenção, disponibilidade e capacidade de acesso são aplicadas corretamente. | 1. Efetuar login como administrador. 2. Acessar gerenciamento de espaços de lazer. 3. Realizar manutenção, definir disponibilidade e capacidade de acesso. | Funcionalidades aplicadas corretamente sem erros ou mensagens de falha. |



