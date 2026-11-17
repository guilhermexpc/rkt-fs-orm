import { prisma } from "@/prisma";

async function seed() {
  const users = [
    { name: "Mayk Brito", email: "mayk@email.com" },
    { name: "João Silva", email: "joao@email.com" },
    { name: "Maria Souza", email: "maria@email.com" }
  ];

  await prisma.$transaction(
    users.map((user) =>
      prisma.user.upsert({
        where: { email: user.email },
        update: { name: user.name },
        create: user
      })
    )
  );
}

seed()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
