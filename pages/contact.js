import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";

export default function Contact() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/contact-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-6 pb-4"
          style={{ backgroundImage: "url(/favicon/contact.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6 pt-24 pb-56">
                  <p className="text-white font-bold text-xl">apfeac group</p>
                  <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                    contact us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
