import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function Index() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-10 pb-16"
          style={{ backgroundImage: "url(/favicon/home-bg.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6">
                  <p className="capitalize text-white font-bold text-xl">
                    our story
                  </p>
                  <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                    we're good
                    <br /> together
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                      <div class="text-green-400 font-semibold text-sm sm:text-lg lg:text-lg mb-2">
                        A Substainable Goal to Grow Together
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden md:block rounded w-56 bg-white overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <p className="mb-4">
                    <div class="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      Recent Posts
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>
                  {/* <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p> */}
                  <div>
                    <Frame />
                    <Frame />
                    <Frame />
                  </div>
                  <p className="mb-4">
                    <div class="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      Category
                    </div>
                  </p>
                  <div>
                    <Frame />
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
