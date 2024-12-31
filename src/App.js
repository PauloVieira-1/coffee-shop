import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Coffee from "../src/assets/coffeebg.jpg";

const styles = {
  backgroundImage: `url(${Coffee})`, 
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: '100%',
  height: "80vh"
};

function App() {
  return (
   <>
   <div style={{height:"1000px"}}>
      <Navbar />
      <main style = {styles}>

      </main>
   </div>
   </>
  );
}

export default App;
