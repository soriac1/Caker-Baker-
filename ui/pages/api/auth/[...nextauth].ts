import NextAuth, { NextAuthOptions } from "next-auth"
import FusionAuthProvider from "next-auth/providers/fusionauth";

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    */
    FusionAuthProvider({
      id: "fusionauth",
      name: "FusionAuth",
      issuer:  process.env.FUSIONAUTH_ISSUER,
      clientId: process.env.FUSIONAUTH_CLIENT_ID,
      clientSecret: process.env.FUSIONAUTH_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
