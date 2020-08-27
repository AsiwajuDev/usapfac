import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row flex-wrap lg:flex-row list-none sm:justify-center">
        <div className="group inline-block">
          <button className="bg-transparent mb-2 border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
            <span className="pr-1 font-semibold text-white flex-1">
              Our story
            </span>
          </button>
          <span className="px-2">
            <i className="fa fa-caret-down text-white" aria-hidden="true"></i>
          </span>
          <ul
            className="bg-black bg-opacity-50 z-10 py-2 text-white rounded-full scale-0 group-hover:scale-100 absolute 
                  transition duration-150 origin-top"
          >
            <li className="relative py-1">
              <Link href="#">
                <a className="w-full px-4 text-left list-none font-semibold text-sm flex items-center">
                  Spotlights
                  <span className="pl-8">
                    <i
                      className="fa fa-caret-right px-2 text-white"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </Link>
              <ul
                className="bg-black z-20 rounded-lg absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left divide-y divide-white"
              >
                <li className="px-8 py-2">
                  <Link href="#">
                    <a className="text-white">Connectivity</a>
                  </Link>
                </li>
                <li className="px-8 py-2">
                  <Link href="#">
                    <a className="text-white">Education</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Who we are</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
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

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Newsroom</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-20 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/newsroom">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    African News
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    World News
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    Local News
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    Covid 19
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Experience</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-20 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/experience">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    1st Edition
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    2nd Edition
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 pr-10 block whitespace-no-wrap">
                    Entertainments
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Gallery/Library</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-20 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/gallery">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    1st Edition Pictures
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Seminars
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Meeting
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Programme for <br /> 2020 Edition
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <Link href="/contact">
              <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
                <span className="mr-1">Contact</span>
              </a>
            </Link>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <Link href="/help">
              <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
                <span className="mr-1">Help</span>
              </a>
            </Link>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
