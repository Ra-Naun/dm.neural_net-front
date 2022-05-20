# dm.neural_net-front
Нейросеть по распознанию рукописных символов


### Сборка проекта:

```
docker-compose up

docker-compose exec web sh

yarn sequelize-cli db:migrate && yarn sequelize db:seed:all
```
