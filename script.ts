import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const user = await prisma.user.findMany({
    where: {
      email: 'sally@example.com',
    },
  })
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
