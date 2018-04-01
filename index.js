const db = require('./models')

const main = async () => {
  const foo = await db.player.findAll({
    where: {
      nameLast: 'Bonds',
    },
  })

  console.log(foo[0].playerID)
}

main()
