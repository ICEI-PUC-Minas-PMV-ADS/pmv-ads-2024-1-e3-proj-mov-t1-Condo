# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Casos de Sucesso

Os requisitos para a realização dos testes de software são:
- Software – android.
- Responsividade em diferentes dispositivos.

## CT - 01 - Apresentação do Aplicativo
Requisitos Associados:
> - RF-002 - O aplicativo deve ser protegido por autenticação de login e senha.
> - RNF-001 - O aplicativo deve incluir uma página inicial de apresentação.

Objetivo do Teste:
> - Verificar se ao acessar o aplicativo, a página inicial apresenta as opções de login e CRUD do condomínio.

Passos:
> - Acessar o aplicativo.
> - Verificar se a página inicial é carregada corretamente.
> - Confirmar a presença dos campos de autenticação de login.

![tela inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/fdba55b0-3a2d-42e1-b2f3-f32f2819cf63)

<b>Resultado CT - 01: </b> Ao acessar o aplicativo, a página inicial é carregada corretamente e são apresentados os campos de autenticação de login.

## CT - 02 - Autenticação de Usuário
Requisitos Associados:
> - RF-002 - O aplicativo deve ser protegido por autenticação de login e senha.

Objetivo do Teste:
> - Verificar se o sistema autentica corretamente os usuários cadastrados.

Passos:
> - Acessar o aplicativo.
> - Inserir credenciais de usuário válidas.
> - Efetuar o login.

<b>Resultado CT - 02: </b>


## CT - 03 - CRUD de Condomínio
Requisitos Associados:
> - RF-001 - O aplicativo deve permitir CRUD do condomínio.

Objetivo do Teste:
> - Garantir que o administrador possa realizar operações CRUD (Create, Read, Update, Delete) relacionadas aos condomínios.

Passos:
> - Criar um novo condomínio.
> - Verificar se o novo condomínio é listado corretamente.
> - Editar os detalhes de um condomínio existente.
> - Confirmar se as alterações são salvas corretamente.
> - Excluir um condomínio.
> - Verificar se o condomínio é removido da lista.

<b>Resultado CT - 03: </b>

## CT - 04 - CRUD de Condôminos
Requisitos Associados:
> - RF-003 - O aplicativo deve permitir o CRUD dos condôminos.

Objetivo do Teste:
> - Garantir que o administrador possa realizar operações CRUD (Create, Read, Update, Delete) relacionadas aos condôminos.

Passos:
> - Efetuar o login como administrador.
> - Acessar a seção de gerenciamento de condôminos.
> - Criar um novo condômino.
> - Verificar se o novo condômino é listado corretamente.
> - Editar os detalhes de um condômino existente.
> - Confirmar se as alterações são salvas corretamente.
> - Excluir um condômino.
> - Verificar se o condômino é removido da lista.

<b>Resultado CT - 04: </b>

## CT - 05 - Gerenciamento de Espaços de Lazer
Requisitos Associados:
> - RF-010 - O aplicativo deve permitir à administração do condomínio realizar o CRUD dos espaços oferecidos.
> - RF-011 - O aplicativo deve oferecer funcionalidades de manutenção, gerência de disponibilidade dos espaços e limitações de capacidade de acesso.

Objetivo do Teste:
> - Verificar se a administração do condomínio pode gerenciar os espaços de lazer oferecidos, incluindo a manutenção, disponibilidade e capacidade de acesso.

Passos:
> - Efetuar o login como administrador.
> - Acessar a seção de gerenciamento de espaços de lazer.
> - Criar um novo espaço de lazer.
> - Verificar se o novo espaço é listado corretamente.
> - Editar os detalhes de um espaço de lazer existente, incluindo disponibilidade e capacidade de acesso.
> - Confirmar se as alterações são salvas corretamente.
> - Excluir um espaço de lazer.
> - Verificar se o espaço é removido da lista.

<b>Resultado CT - 05: </b>

## CT - 06 - Reservas de Espaços de Lazer pelos Condôminos
Requisitos Associados:
> - RF-009 - O aplicativo deve permitir ao condômino realizar o CRUD de reservas dos espaços de lazer disponibilizados pelo condomínio.

Objetivo do Teste:
> - Verificar se os condôminos podem realizar reservas dos espaços de lazer disponibilizados pelo condomínio.

Passos:
> - Efetuar o login como condômino.
- Acessar a seção de reservas de espaços de lazer.
> - Selecionar um espaço de lazer disponível.
> - Escolher a data e horário desejados para a reserva.
> - Confirmar a reserva.
> - Verificar se a reserva é listada corretamente na seção de reservas.

<b>Resultado CT - 06: </b>

## CT - 07 - Notificação de Reserva Próxima
Requisitos Associados:
> - RF-012 - O aplicativo deve enviar notificação ao condômino sobre sua reserva estar próxima.

Objetivo do Teste:
> - Verificar se os condôminos recebem notificações sobre reservas próximas.

Passos:
> - Efetuar o login como condômino.
> - Realizar uma reserva com data próxima.
> - Aguardar o tempo necessário para a notificação.
> - Verificar se a notificação é recebida.

<b>Resultado CT - 07: </b>

## CT - 08 - Exibição de Espaços Disponíveis
Requisitos Associados:
> - RF-004 - O aplicativo deve permitir a administração optar por quais espaços serão exibidos aos condôminos.

Objetivo do Teste:
> - Verificar se o aplicativo exibe apenas os espaços de lazer disponibilizados pela administração do condomínio.

Passos:
> - Efetuar o login como condômino.
> - Verificar a lista de espaços de lazer disponíveis para reserva.
> - Comparar com os espaços disponíveis definidos pela administração.

<b>Resultado CT - 08: </b>

## CT - 09 - Reservas Específicas de Espaços de Lazer
Requisitos Associados:
> - RF-005 - O aplicativo deve disponibilizar CRUD de reserva de piscina aos condôminos.
> - RF-006 - O aplicativo deve disponibilizar CRUD de reserva de salão de festas aos condôminos.
> - RF-007 - O aplicativo deve disponibilizar CRUD de reserva da academia aos condôminos.
> - RF-008 - O aplicativo deve disponibilizar CRUD de reserva da churrasqueira aos condôminos.

Objetivo do Teste:
> - Verificar se os condôminos podem realizar reservas específicas de cada tipo de espaço de lazer disponibilizado.

Passos:
> - Efetuar o login como condômino.
> - Acessar a seção de reservas de espaços de lazer.
> - Selecionar o tipo de espaço desejado (piscina, salão de festas, academia, churrasqueira).
> - Escolher a data e horário desejados para a reserva.
> - Confirmar a reserva.
> - Verificar se a reserva é listada corretamente na seção de reservas.

<b>Resultado CT - 09: </b>

## CT - 10 - Funcionalidades de Manutenção e Restrições
Requisitos Associados:
> - RF-011 - O aplicativo deve oferecer funcionalidades de manutenção, gerência de disponibilidade dos espaços e limitações de capacidade de acesso.

Objetivo do Teste:
> - Verificar se as funcionalidades de manutenção, gerência de disponibilidade e limitações de capacidade de acesso são aplicadas corretamente.

Passos:
> - Efetuar o login como administrador.
> - Acessar a seção de gerenciamento de espaços de lazer.
> - Realizar manutenção em um espaço de lazer.
> - Definir disponibilidade e capacidade de acesso para um espaço.
> - Verificar se as configurações são salvas corretamente.

<b>Resultado CT - 10: </b>

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
