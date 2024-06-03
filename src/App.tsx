import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Staking from "./pages/Staking/Staking";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

import { Web3ModalProvider } from "./provider/WalletProvider";

import "./App.css";

function App() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: [
        "en",
        "ar",
        "bg",
        "zh-CN",
        "zh-TW",
        "cs",
        "nl",
        "fr",
        "de",
        "el",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "fa",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "es",
        "th",
        "tr",
        "vi",
      ],
      wrapper_selector: ".gtranslate_wrapper_desktop",
      switcher_horizontal_position: "inline",
      float_switcher_open_direction: "bottom",
    };
  }, []);

  const [showNav, setShowNav] = useState(false);

  return (
    <Web3ModalProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              element={<Layout showNav={showNav} setShowNav={setShowNav} />}
            >
              <Route path="/" element={<Home />} />
              <Route path="staking" element={<Staking />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <Helmet>
        <script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          defer
        ></script>

        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
      </Helmet>
    </Web3ModalProvider>
  );
}

export default App;
