const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [{ name: "Astronomy" }, { name: "Space Scientists" }],
    });
  } catch (error) {
    console.error("Error seeding space-related categories:", error);
  } finally {
    await db.$disconnect();
  }
}

main();
