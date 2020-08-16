import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div class="w-full">
        <div
          class="mx-auto bg-cover bg-bottom h-auto"
          style={{
            backgroundImage: "url(/favicon/header.jpg)",
          }}
        >
          <nav class="flex p-4 md:p-8 items-center">
            <div className="flex w-2/3">
              <Link href="#">
                <a>
                  <img
                    src="/favicon/logo.png"
                    className="h-12 sm:h-16 md:h-24 lg:h-32"
                  />
                </a>
              </Link>
              <h1 className="text-base sm:text-xl md:text-3xl lg:text-6xl font-semibold uppercase tracking-tighter leading-none pl-4 text-white">
                africa
                <br />
                peace festival of
                <br />
                arts and culture
              </h1>
            </div>
            <div className="flex justify-center w-1/3">
              <Link href="#">
                <a>
                  <img
                    src="/favicon/sales.png"
                    className="h-12 sm:h-16 md:h-24 lg:h-32"
                  />
                </a>
              </Link>
            </div>
          </nav>

          {/* <nav class="flex justify-between p-10 items-center">
            <Link href="#">
              <a>
                <img src="/favicon/logo.png" className="h-32" />
              </a>
            </Link>
            <ul class="list-reset flex">
              <li>
                <a href="#" class="text-black md:text-white p-2 md:p-4">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-black md:text-white p-2 md:p-4 whitespace-no-wrap"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="text-black md:text-white p-2 md:p-4">
                  Contact
                </a>
              </li>
            </ul>
          </nav> */}

          {/* <div class="text-center text-white">
            <h1 class="font-sans font-thin">
              Reality is just a matter of perception.
            </h1>
            <h2 class="font-thin text-sm tracking-wide mt-2 mb-4">
              There are no limits, except for those that we impose on ourselves.
              Join the future
            </h2>

            <a
              href="#"
              class="rounded bg-orange text-white p-4 font-bold inline-block mb-16"
            >
              Apply Now
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
