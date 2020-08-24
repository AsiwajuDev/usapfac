import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function Gallery() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/gallery-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-32 pb-2"
          style={{ backgroundImage: "url(/favicon/gallery.jpg)" }}
        >
          <div className="container lg:mx-auto">
            <div className="mx-20 md:mx-4 lg:mx-0">
              <div className="mx-4">
                <p className="capitalize text-white font-semibold text-2xl">
                  Gallery
                </p>
                <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                  africa alive!
                </p>
              </div>
              <div class="flex mb-4">
                <div class="w-1/4 m-4 bg-white py-2">
                  <div className="mx-16">
                    <p className="">
                      <div class="capitalize font-semibold text-sm sm:text-base mb-1">
                        1st Edition Picture
                      </div>
                      <div className="border-2 border-red-600 w-16"></div>
                    </p>
                    <Frame mediaTitle="Africa peace festival art and culture 2019" />
                  </div>
                </div>
                <div class="w-1/4 m-4 bg-white py-2">
                  <div className="mx-16">
                    <p className="">
                      <div class="capitalize font-semibold text-sm sm:text-base mb-1">
                        Seminars
                      </div>
                      <div className="border-2 border-red-600 w-16"></div>
                    </p>
                    <Frame mediaTitle="Africa peace festival art and culture 2019" />
                  </div>
                </div>
                <div class="w-1/4 m-4 bg-white py-2">
                  <div className="mx-16">
                    <p className="">
                      <div class="capitalize font-semibold text-sm sm:text-base mb-1">
                        Meetings
                      </div>
                      <div className="border-2 border-red-600 w-16"></div>
                    </p>
                    <Frame mediaTitle="Africa peace festival art and culture 2019" />
                  </div>
                </div>
                <div class="w-1/4 m-4 bg-white py-2">
                  <div className="mx-16">
                    <p className="">
                      <div class="capitalize font-semibold text-sm sm:text-base mb-1">
                        2020 Programmes
                      </div>
                      <div className="border-2 border-red-600 w-16"></div>
                    </p>
                    <Frame mediaTitle="Africa peace festival art and culture 2019" />
                  </div>
                </div>
              </div>

              {/* <div class="grid grid-cols-6 gap-4">
                <div class="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4"></div>
                <div class="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}