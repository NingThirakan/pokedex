import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar } from "./components/common/AppBar";
import { Loading } from "./components/common/Loading";
import { LoginContainer } from "./container/login/LoginContainer";
import { TestContainer } from "./container/test/TestContainer";
import { PokedexPage } from "./page/PokedexPage";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Loading />
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/test" element={<TestContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
