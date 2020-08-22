import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../pages/meta";
import Header from "./header";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {/* <Header /> */}
      {/* min-h-screen */}
      <div className="">
        {/* <Alert preview={preview} /> */}
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
