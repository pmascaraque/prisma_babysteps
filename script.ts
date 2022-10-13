import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  /*const data = { name: 'Bob', email: 'bob@prisma.io', age: 20 }
  const user = await prisma.user.create({
    data
  })
  console.log(user)
  */
  //const deleteUsers = await prisma.user.deleteMany({})
  const users = await prisma.user.findMany()
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