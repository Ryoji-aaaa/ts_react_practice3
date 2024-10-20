import Input from "./components/Input";
import Button from "./components/Button";

function App() {

  return <main>
    <Input id="name" label="Your name" type="text" />
    <p><Button el="button">A Button</Button></p>
    <p><Button el="anchor" href="https:/google.com">A Link</Button></p>
    
  </main>
  
}

export default App;
