import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET){
    throw new Error('Missing github oauth credentials');
}

export const { handlers: { GET,POST }, auth, signOut, signIn} = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GitHub({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        // Usually not needed, here we are fixing a bug in nextauth
        async session({ session, user }: any) {
            if (session && user){
                session.user.id = user.id;
            }

            return session;
        }
    }
})