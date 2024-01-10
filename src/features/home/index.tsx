import { Button } from "@components/ui"
import { useSignOutMutation } from "@hooks"

const Home = () => {
  const {mutate: signOut} = useSignOutMutation()
  return (
    <Button onClick={() => signOut()}>
      Sign Out
    </Button>
  )
}

export default Home