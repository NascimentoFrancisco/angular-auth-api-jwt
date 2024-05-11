# Projeto Angular de cadastro de usuário e login em API usando jwt

Esse projeto tem duas partes, o back-end que é uma API feita com `Django` usando o `djangorestframework`, e o front-end sendo uma interface feita com `Angular 17`.

# Instruções para usar esse projeto

Clone o repositŕorio com o seguinte comando:
~~~
https://github.com/NascimentoFrancisco/angular-auth-api-jwt.git
~~~

## Inicializando o back-end

Após clonar o projeto e entrar no diretório do mesmo, entre no diretório do back-end:
~~~
cd back-end
~~~

Crie um ambiente virtual para instalar as dependências do projeto:

~~~
python -m venv venv
~~~
Ativação do ambiente virtual:
~~~
. venv/bin/activate
~~~
Instalação das dependências.
~~~
pip install -r requirements.txt
~~~

Execução das migrations e o migrate.
~~~
python manage.py makemigrations
~~~
~~~
python manage.py migrate
~~~
Inicializar o servidor:
~~~
python manage.py runserver
~~~
URL de acesso:
~~~ 
http://127.0.0.1:8000/api/v1/docs
~~~

## Inicializando o front-end

Após clonar o projeto e entrar no diretório do mesmo, entre no diretório do front-end:
~~~
cd front-end
~~~

Instale as dependências:
~~~
npm install
~~~
Inicializando a aplicação:
~~~
npm start
~~~
Acesso no URL:
~~~
http://localhost:4200
~~~
