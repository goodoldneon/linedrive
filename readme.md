# Examples

Get all players whose last name is "Bonds":

```js
const config = {
  host: 'localhost',
  database: 'lahman2016',
  username: 'myUser',
  password: 'myPass',
  dialect: 'mysql',
}

const linedrive = require('linedrive')(config)

linedrive.player.findAll({
  where: {
    nameLast: 'Bonds',
  },
}).then(results => {
  // Player info for Barry and Bobby Bonds.
  console.log(results)
})
```
