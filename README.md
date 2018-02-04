# BILLBOARD

An utterly fantastic billboard app to share messages publicly.

## Features

- Add new messages
- Remove own messages
- Authentification

## How to Use

To use this project, follow these steps:

1. Clone this repository
2. Install requirements found in the Pipfile
3. `python manage.py runserver`

## Deployment to Heroku

    $ heroku create
    $ git push heroku master

    $ heroku run python manage.py migrate


## License: MIT

## Further Reading

- [Gunicorn](https://warehouse.python.org/project/gunicorn/)
- [WhiteNoise](https://warehouse.python.org/project/whitenoise/)
- [dj-database-url](https://warehouse.python.org/project/dj-database-url/)
