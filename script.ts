import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  //await prisma.user.deleteMany()
  /*await prisma.user.createMany({
    data: [{
      name: "Sally",
      email: "sally@gmail.com",
      age: 13,
    }, {
      name: "Jack",
      age: 33,
      email: "jack@gmail.com",
    }]
  })*/

  const user = await prisma.user.findUnique({
    where: {
      email: "elisa@gmail.com"
    }
  })

  const users = await prisma.user.findMany({
    orderBy: {
      age: "desc"
    }
  })
  console.log(users)
}

main()
  .catch(async (e) => {
    console.error(e.message)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })