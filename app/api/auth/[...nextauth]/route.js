import NextAuth from "next-auth/next";

export const authOptions = {
    providers: [],
    pages: {
        signIn: '/dashboard'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }