import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findMany()
  console.log(user)
}

try {
  main()
} catch (error) {
  console.error(error)
} finally {
  ;async () => {
    await prisma.$disconnect()
  }
}
