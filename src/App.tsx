import { Button } from "@components/ui";
import { useLoginMutation } from "@hooks";

function App() {
  const {mutate: signUpMutate } = useLoginMutation()

  const handleSubmit = () => {
    signUpMutate({
      email: 'lamthieu12@gmail.com',
      password: 'hieu1995',  
      username: 'hieu nguyen12'
    })
  }

  return (
    <div>
      <Button variant="destructive" onClick={handleSubmit}>Click me</Button>
    </div>
  );
}

export default App;
