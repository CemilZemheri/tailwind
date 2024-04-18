import Typograpy from "./components/Typograpy";
import SpacingAndSizing from "./components/SpacingAndSizing";
import HoverAndFocus from "./components/HoverAndFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl text-purple-700">hello tailwind</h1>
      <Typograpy />
      <SpacingAndSizing />
      <HoverAndFocus />
      <FlexAndResponsive />
      <Navbar />
    </div>
  );
}

export default App;
