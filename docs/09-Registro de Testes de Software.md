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

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/d762726f-4b20-40ec-acf9-b3a93fac9b5b)


<b>Resultado CT - 01: </b> Ao acessar o aplicativo, a página inicial é carregada corretamente e são apresentados os campos de autenticação de login.

## CT - 02 - Autenticação de Usuário
Requisitos Associados:
> - RF-002 - O aplicativo deve ser protegido por autenticação de login e senha.

Objetivo do Teste:
> - Verificar se o sistema autentica corretamente os usuários cadastrados.

Passos:
> - Acessar o aplicativo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/4705bac5-3095-4e0a-be45-faaeee15d1ac)


> - Inserir credenciais de usuário válidas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/c6e0c31c-0b4c-4738-bbc7-a368e00e083e)

> - Efetuar o login.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/1a42833f-19c4-41c0-adf6-0b603f3f8f55)

<b>Resultado CT - 02: </b> O aplicativo conseguiu autenticar as credenciais inseridas e efetuar o login apresentando a página principal.


## CT - 03 - CRUD de Condomínio
Requisitos Associados:
> - RF-001 - O aplicativo deve permitir CRUD do condomínio.

Objetivo do Teste:
> - Garantir que o administrador possa realizar operações CRUD (Create, Read, Update, Delete) relacionadas aos condomínios.

Passos:
> - Acessar o aplicativo.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/328a795a-27e9-4480-b963-36d934f2c2cd)


> - Acessar botão para cadastrar condomínio.

![tela inicial condominio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/663c661f-92ee-4a40-bebd-900a0422b732)

> - Cadastrar Informações Condomínio.

![tela cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/5450f4de-fd25-4e9f-9ff7-41ae15d73069)

![tela cadastro sucesso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/024a6a1a-6120-4ddb-b892-8e2d0888c72a)


> - Verificar se o novo condomínio é autenticado corretamente.

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/fb644536-d47c-4ea9-b303-1051421831db)

![home](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/e084e86c-29ff-4ce4-a058-d28cd1197e38)


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

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/fb644536-d47c-4ea9-b303-1051421831db)

> - Acessar a seção de gerenciamento de condôminos.

![home](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/ada6e326-5712-41cb-b611-a92f3838f6eb)


> - Criar um novo condômino.

![novo mor](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/5a25bf4b-e2e6-4ef6-a3e5-9afced29ad04)

![novo mor2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/d30e9cef-6587-4821-949a-943675d6ca3c)

![novo mor suc](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/ea6d4ffa-49a6-49e0-b5ab-e5aaca6fa673)

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
> - Acessar a seção de reservas de espaços de lazer.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/a5c78c09-ea40-4078-84cc-91559fdc3845)


> - Selecionar um espaço de lazer disponível.
> - 
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/30ec4283-33ba-4bb0-b32d-f52764b2f973)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/d5081991-6df2-4d5a-a307-1803f47fa9bd)


> - Escolher a data e horário desejados para a reserva.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/3fef7498-8b05-4955-bd9c-3341478506b8)

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
> - 
![credenciais](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/1b977cea-3f31-4dec-a7c5-8223e93feeed)


> - Verificar a lista de espaços de lazer disponíveis para reserva.

![espaco](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-Condo/assets/130249437/97742ad2-f772-47b1-8214-0afebcd5f792)


> - Comparar com os espaços disponíveis definidos pela administração.

<b>Resultado CT - 08: </b>

## CT - 09 - Funcionalidades de Manutenção e Restrições
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

<b>Resultado CT - 09: </b>

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
