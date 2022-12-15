import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export default async function auth(req, res) {
  return NextAuth(req, res, {
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
  })
}
