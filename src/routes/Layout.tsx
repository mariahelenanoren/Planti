import Header from "../components/Header";
import MainRoute from "./MainRoute";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import { useState } from "react";

export default function Layout() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <MobileNavigation isOpen={menuIsOpen} />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MainRoute />
      <Footer />
    </>
  );
}
