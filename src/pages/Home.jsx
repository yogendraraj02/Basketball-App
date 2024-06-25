import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"

function Home() {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <div>HomePage : {isLoggedIn ? 'auth' : 'not-auth'}</div>
  )
}

export default Home