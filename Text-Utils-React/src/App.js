import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
 
function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="KashifUtils" />
    <div className="container">
      {/* <TextForm heading="Enter the text to Analyze"/> */}
      <About/>
    </div>
    </> 
  );
}

export default App;