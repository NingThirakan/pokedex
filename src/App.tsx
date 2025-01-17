import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar } from "./components/common/AppBar";
import { LoginContainer } from "./container/login/LoginContainer";
import { PokedexContainer } from "./container/pokedex/PokedexContainer";
import { TestContainer } from "./container/test/TestContainer";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<PokedexContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/test" element={<TestContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
