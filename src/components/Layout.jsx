import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <main>
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}
