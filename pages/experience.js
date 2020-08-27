import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function Experience() {
  return (
    <Layout
      imageUrl={{ backgroundImage: "url(/favicon/experience-header.jpg)" }}
    >
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div className="flex flex-wrap mr-4 justify-center  md:flex-no-wrap md:justify-between md:mx-4 lg:mx-0">
          <div className="md:w-1/5">
            <div className="hidden md:block bg-white overflow-hidden">
              <div className="px-6 pt-3 ml-12">
                <div className="mb-4">
                  <p className="mb-3">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      1st Edition
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>
                  <Frame mediaTitle="Africa peace festival art and culture 2019" />
                </div>
                <div className="mb-4">
                  <p className="mb-3">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      2nd Edition
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>
                  <Frame mediaTitle="Africa peace festival art and culture 2019" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-4/5">
            <div className="container lg:mx-auto">
              <div
                className="bg-cover bg-no-repeat bg-top pt-32 pb-40"
                style={{ backgroundImage: "url(/favicon/experience.jpg)" }}
              >
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4">
                    <div className="mx-20">
                      <p className="capitalize text-white font-bold text-2xl">
                        Experience
                      </p>
                      <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                        watch the shows online
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
