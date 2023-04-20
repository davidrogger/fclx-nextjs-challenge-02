import { PrismaClient } from "@prisma/client";

const globalORM = global as { prisma?: PrismaClient };

export const prisma = globalORM.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") globalORM.prisma = prisma;
