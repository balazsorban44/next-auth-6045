import { signIn, useSession } from "next-auth/react"

export default function LoginPage() {
  const session = useSession()
  console.log(session)
  return <button onClick={() => signIn("github")}>Sign in</button>
}
