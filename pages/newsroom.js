import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function Newsroom() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/newsroom-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top py-8"
          style={{ backgroundImage: "url(/favicon/news.jpg)" }}
        >
          <div className="container px-10 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center  md:flex-no-wrap md:justify-between md:mx-4 lg:mx-0">
              <div className="md:w-1/5">
                <div className="hidden md:block w-56 rounded bg-white overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          African News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame />
                    </div>
                    <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          Global News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame />
                    </div>
                    <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          World News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-4/5 my-auto">
                <div className="mx-16">
                  <p className="capitalize text-white font-bold text-2xl">
                    Newsroom
                  </p>
                  <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                    watch thousands of news and series on all your devices...
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
