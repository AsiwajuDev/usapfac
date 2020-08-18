import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row flex-wrap lg:flex-row list-none sm:justify-center">
        <div class="group inline-block">
          <button class="bg-transparent mb-2 border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
            <span class="pr-1 font-semibold text-white flex-1">Our story</span>
          </button>
          <span className="px-2">
            <i className="fa fa-caret-down text-white" aria-hidden="true"></i>
          </span>
          <ul
            class="bg-black bg-opacity-50 z-10 py-2 text-white rounded-full scale-0 group-hover:scale-100 absolute 
                  transition duration-150 origin-top"
          >
            <li class="relative py-1">
              <a class="w-full px-4 text-left list-none font-semibold text-sm flex items-center">
                Spotlights
                <span class="pl-8">
                  <i
                    className="fa fa-caret-right px-2 text-white"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
              <ul
                class="bg-black rounded-lg absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left divide-y divide-white"
              >
                <li class="px-8 py-2 text-white">Connectivity</li>
                <li class="py-2 px-8 text-white">Education</li>
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
            <ul className="dropdown-menu absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <a
                  className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  History/About us
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Values
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Staff and Board
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Sponsors
                </a>
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
            <ul className="dropdown-menu absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <a
                  className="rounded-t-lg bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap"
                  href="#"
                >
                  African News
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap"
                  href="#"
                >
                  World News
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap"
                  href="#"
                >
                  Local News
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black rounded-b-lg hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap"
                  href="#"
                >
                  Covid 19
                </a>
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
            <ul className="dropdown-menu absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <a
                  className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  1st Edition
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  2nd Edition
                </a>
              </li>
              {/* <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Entertainments
                </a>
              </li> */}
              <li className="">
                <a
                  className="bg-black rounded-b-lg hover:bg-black py-2 px-4 pr-10 block whitespace-no-wrap"
                  href="#"
                >
                  Entertainments
                </a>
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
            <ul className="dropdown-menu absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <a
                  className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  1st Edition Pictures
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Seminars
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Meeting
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Programme for <br /> 2020 Edition
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Contact</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            {/* <ul className="dropdown-menu absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <a
                  className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  History/About us
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Values
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Staff and Board
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Sponsors
                </a>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Help</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            {/* <ul className="dropdown-menu absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <a
                  className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  History/About us
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Values
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Staff and Board
                </a>
              </li>
              <li className="">
                <a
                  className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Sponsors
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
