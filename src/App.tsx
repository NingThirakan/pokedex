import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar } from "./components/common/AppBar";
import { PokedexContainer } from "./components/container/pokedex/PokedexContainer";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<PokedexContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
