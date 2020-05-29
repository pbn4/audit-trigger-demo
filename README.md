
### Quickstart

```shell script
psql -c 'CREATE DATABASE audit' && yarn && yarn typeorm migration:run && yarn start
```

### Step by step
1. Create postgres database called `audit`:
```shell script
psql -c 'CREATE DATABASE audit';
```

2. Install dependencies
```shell script
yarn 
```

3. Migrate the database:
```shell script
yarn typeorm migration:run
```

4. Start example:
```shell script
yarn start
```
