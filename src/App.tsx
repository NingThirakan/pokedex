import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar } from "./components/common/AppBar";
import { LoginContainer } from "./container/login/LoginContainer";
import { PokedexContainer } from "./container/pokedex/PokedexContainer";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<PokedexContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
