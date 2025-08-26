// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials"
// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const res = await fetch(process.env.NEXTAUTH_URL, {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();

//         if (res.ok && user) {
//           return user;
//         }
//         return null;
//       },
//     }),
//   ],
// });

// export { handler as GET, handler as POST };


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/app/lib/ConnectDb";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = dbConnect("users");

        const user = await users.findOne({
          email: credentials.email.toLowerCase(),
        });

        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
