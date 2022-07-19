import Footer from "./components/footer";
import Header from "./components/header";
import LastFooter from "./components/lastFooter";
import { React } from "react";
import Terms from "./pages/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="conta-app">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />}/>
          </Routes>
          <Footer />
          <LastFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
