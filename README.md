# MeLeva-app
MeLeva é um aplicativo de gerência de passageiros acadêmicos



COMANDOS PARA RODAR O PROJETO:

- Rodar o XAMPP (verificar se o MYSQL tá rodando no XAMPP)
- Abrir o VSCODE na pasta raiz do projeto
- Fazer cópia do arquivo ".env.example" e alterar o nome do arquivo criado para ".env"
- Abrir o arquivo ".env" e verificar se os dados de conexão com o mysql estão corretos com o seu mysql (número da porta, senha do BD, por padrão será criado um banco de dados com o nome "laravel", mas pode ser alterado, alterando o valor da variável "DB_DATABASE")
-Abrir o terminal no VSCODE e rodar o comando: "composer install"
-Rodar o comando: "php artisan key:generate"
-Rodar o comando: "php artisan migrate"
- Rodar o comando: "php artisan db:seed"
 -Rodar o comando: "npm install"
-Rodar o comando: "npm run dev" e deixar rodando
- Em outro terminal rodar o camando: php artisan serve
Os dois últimos comandos, ficam rodando direto, um em cada terminal.
-Abrir o navegador em "http://127.0.0.1:8000
-Os dados de login no sistema é E-mail: "admin@ifnmg.edu.br" e senha: "admin123"