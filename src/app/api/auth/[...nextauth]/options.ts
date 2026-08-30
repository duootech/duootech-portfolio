import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbconfig";
import User from "@/model/user.model";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials){
                if(!credentials?.username || !credentials?.password){
                    throw new Error("Missing email or password")
                }
                await dbConnect()
                try {
                    const user = await User.findOne({ username: credentials.username })
                    if (!user) {
                        throw new Error('no user found')
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

                    if (!isPasswordCorrect) {
                        throw new Error("Incorrect Password")
                    }
                    return {
                        id: user._id.toString(),
                        name:user.username
                    }
                } catch (err: any) {
                    throw new Error(err)
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user}) {

            if(user){
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if(session.user){
                session.user.id = token.id as string
            }
            return session
        },
    },

    pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,

}

