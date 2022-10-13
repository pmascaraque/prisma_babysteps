import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  //const user = await prisma.user.create({ data: { name: "Bertha" } })
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