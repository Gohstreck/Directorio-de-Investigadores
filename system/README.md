# Backend

Para correr el proyecto, hay que clonar el repositorio,

      $git clone https://github.com/Proyecto-MYP/Backend

## Dependencias

Se recomiendo usar [virtualenv](https://virtualenv.pypa.io/en/latest/) para
manejar dependencias.

      $virtualenv -p python3 projectEnv
      $source projectEnv/bin/activate

Luego instalar las dependencias

      $pip install -r requirements

## Correr el proyecto

Primero hay que hacer las migraciones a la base de datos

      $python manage.py migrate

Y para correr el servidor de desarrollo

      $python manage.py runserver

## Base de datos

De momento, es necesario ya tener instalado [PostgreSQL](https://www.postgresql.org/)
con una base de datos llamada 'project' con un usuario 'admin' con contraseña
'admin'.
