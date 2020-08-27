import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function About() {
  fetch("https://test.usapfac.org/wp-json/wp/v2/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((er) => console.log(err));

  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-6 pb-4"
          style={{ backgroundImage: "url(/favicon/about.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6">
                  <p className="text-white font-bold text-xl">who we are</p>
                  <p className="text-white text-4xl leading-none sm:text-5xl font-bold pb-4">
                    the power
                    <br />
                    of great culture
                    <br /> and Africa
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <div className="text-green-400 font-semibold text-sm sm:text-lg lg:text-lg mb-2">
                        A Substainable Goal to Grow Together
                      </div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block rounded w-64 bg-white justify-center overflow-hidden shadow-lg">
                <div className="mx-12 py-4">
                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        history
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        values
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        leadership
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="justify-end"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
