import React, { useState } from "react";
import Link from "next/link";
import NavBar from "./navbar";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <div
        className="mx-auto bg-cover bg-bottom h-auto p-4 pb-1 md:p-8 md:pb-2"
        style={{
          backgroundImage: "url(/favicon/header.jpg)",
        }}
      >
        <nav className="items-center">
          <div className="flex">
            <div className="flex w-2/3">
              <Link href="/">
                <a>
                  <img
                    src="/favicon/logo.png"
                    className="h-12 sm:h-16 md:h-24 lg:h-32"
                  />
                </a>
              </Link>
              <div className="pl-4">
                <Link href="/">
                  <a>
                    <img
                      src="/favicon/logo2.png"
                      className="h-12 sm:h-16 md:h-24 lg:h-32"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-1/3">
              <Link href="#">
                <a>
                  <img
                    src="/favicon/sales.png"
                    className="h-10 sm:h-16 md:h-20 lg:h-24 mt-4 md:mt-6"
                  />
                </a>
              </Link>
            </div>
          </div>
        </nav>

        <nav className="relative flex flex-wrap items-center bg-cover h-auto justify-end px-2 pt-8 navbar-expand-lg">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start">
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 text-right py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <NavBar />
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-red-600 h-12"></div>
    </div>
  );
}
