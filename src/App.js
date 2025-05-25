import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GoodArtTube from "./pages/GoodArtTube";
import GoodArtShop from "./pages/GoodArtShop";
import GoodArtWiki from "./pages/GoodArtWiki";
import Jonathan from "./pages/Jonathan";
import AboveHuman from "./pages/AboveHuman";
import HelloAgain from "./pages/HelloAgain";
import FraudExports from "./pages/FraudExports";
import DustyJawn from "./pages/DustyJawn";
import Philosophy from "./pages/Goodphilwiki";
import IStoleIt from "./pages/IStoleIt";
import GasChat from "./pages/GasChat";
import ContactCard from "./components/ContactCard/GoodArtSucksContactCard.vcf";
import ContactUs from "./pages/ContactUs";
import { ColorProvider } from "./contexts/ColorContext";
import ColorPicker from "./components/ColorPicker";
import "./styles/styles.css";

export default function App() {
  return (
    <ColorProvider>
      <div className="app">
        <ColorPicker />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/goodarttube" element={<GoodArtTube />} />
          <Route path="/goodartshop" element={<GoodArtShop />} />
          <Route path="/goodartwiki" element={<GoodArtWiki />} />
          <Route path="/Jonathan" element={<Jonathan />} />
          <Route path="/AboveHuman" element={<AboveHuman />} />
          <Route path="/HelloAgain" element={<HelloAgain />} />
          <Route path="/FraudExports" element={<FraudExports />} />
          <Route path="/DustyJawn" element={<DustyJawn />} />
          <Route path="/Philosophy" element={<Philosophy />} />
          <Route path="/IStoleIt" element={<IStoleIt />} />
          <Route path="/gaschat" element={<GasChat />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </ColorProvider>
  );
}
