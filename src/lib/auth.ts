import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import { prismaClient } from '.'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [],
}
