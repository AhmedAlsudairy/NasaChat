const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Space Explorers' },
        { name: 'Space Movies & TV' },
        { name: 'Space Musicians' },
        { name: 'Space Games' },
        { name: 'Space Animals' },
        { name: 'Astronomy' },
        { name: 'Space Scientists' },
      ],
    });
  } catch (error) {
    console.error('Error seeding space-related categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();
