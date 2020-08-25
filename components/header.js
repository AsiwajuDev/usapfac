import React, { useState } from "react";
import Link from "next/link";
import NavBar from "./navbar";

export default function Header({ fixed, bgImage }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <div
        className="mx-auto bg-cover bg-bottom h-auto p-4 pb-1 md:p-8 md:pb-2"
        style={bgImage}
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
            <div className="w-1/3">
              <div className="flex justify-center">
                <div className="bg-red-600 w-20 text-center text-white pr-4 py-2 rounded-full">
                  <i className="fa fa-caret-left px-3"></i>
                  <Link href="">
                    <a className="font-semibold">Back</a>
                  </Link>
                </div>
              </div>

              <div className=" flex mx-12">
                {/*  <div className="text-white">
                  <div className="dropdown relative">
                    <a className="bg-red-700 font-semibold py-3 pl-3 pr-5 w-28 justify-center rounded-md inline-flex items-center">
                      <span className="mr-1 uppercase text-sm font-semibold leading-4">
                        get your ticket
                      </span>
                    </a>

                    <ul className="dropdown-menu z-20 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
                      <li className="">
                        <Link href="/about">
                          <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            History/About us
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            Values
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            Staff and Board
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            Sponsors
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-white">
                  <div className="dropdown absolute left-custom">
                    <a className="bg-yellow-700 font-semibold py-3 pl-3 pr-5 w-32 justify-center rounded-md inline-flex items-center">
                      <span className="mr-1 uppercase text-sm font-semibold leading-4">
                        get your ticket
                      </span>
                      
                    </a>

                    <ul className="dropdown-menu z-20 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
                      <li className="">
                        <Link href="/about">
                          <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            History/About us
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            Values
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            Staff and Board
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                            Sponsors
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                */}
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
          </div>
        </nav>

        <nav className="relative flex flex-wrap items-center bg-cover h-auto justify-end px-2 pt-2 navbar-expand-lg">
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
