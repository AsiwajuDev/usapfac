import Footer from "../components/footer";
import Meta from "../pages/meta";
import Header from "./header";

export default function Layout({ children, imageUrl }) {
  return (
    <>
      <Meta />
      <div className="">
        <Header bgImage={imageUrl} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
