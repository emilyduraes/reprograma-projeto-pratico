# Esse é o primeiro projeto prático no curso de backend da {reprograma} :)  
![logo da {reprograma}](https://media.licdn.com/dms/image/C560BAQH8NO1PFR-rug/company-logo_200_200/0?e=2159024400&v=beta&t=3lLA4loVvR0GJ3ISjbpxhgB_ieKQx7ciwNISWKkIcTo)

### Introdução
Seja bem-vindo(a) ao meu primeiro projeto da {reprograma}! Essa API foi desenvolvida em Node.JS para fornecer os dados de tarefas dos colaboradores de uma empresa. .

### Modo de Usar

A API está rodando na porta 3000. Para acessá-la, **clone** esse repositório, dê **npm install** no nível que se encontra o arquivo package.json.

#### Rotas

* "/" => a rota inicial retorna os dados iniciais da API.
* "/tarefas" => retorna todas as tarefas cadastradas.
* "/tarefas/concluidas/filtrar" => retorna todas as tarefas concluídas.
* "/tarefas/datas/filtrar" => retorna todas as tarefas com datas filtradas da mais nova para a mais antiga
* "/tarefas/:id" => retorna as tarefas com base em seus IDs. 
* "/tarefas/:colaborador/buscar" => retorna as tarefas cadastradas com base no nome dos colaboradores.
