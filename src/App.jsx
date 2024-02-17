import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import VoucherRegulation from "./pages/VoucherRegulation/VoucherRegulation";

import "./global.css";
import "@splidejs/react-splide/css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
      <Route path="/regulamin-promocjana5" element={<VoucherRegulation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
