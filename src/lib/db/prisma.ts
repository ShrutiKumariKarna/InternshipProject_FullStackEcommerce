import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
};

export const prisma = globalForPrisma.prisma?? new PrismaClient();

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


// This code ensures a single `PrismaClient` instance is used during development to avoid multiple database connections due to hot-reloading.