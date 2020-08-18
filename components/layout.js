import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";
import Nav from "./test";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {/* <Header /> */}
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        {/* <Header /> */}
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
