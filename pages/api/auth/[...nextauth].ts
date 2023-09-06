import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };

                if (username !== 'admin' || password !== 'admin') {
                    return null;
                }

                return {id: '1', username: 'admin'}
            },
        })
    ]
}

export default NextAuth(authOptions);