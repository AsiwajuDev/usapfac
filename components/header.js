import Link from "next/link";
import NavBar from "./navbar";
import Nav from "./test";

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
          <div className="p-4 pb-2 md:p-8 md:pb-4">
            <nav class="items-center pb-6">
              <div className="flex">
                <div className="flex w-2/3">
                  <Link href="#">
                    <a>
                      <img
                        src="/favicon/logo.png"
                        className="h-12 sm:h-16 md:h-24 lg:h-32"
                      />
                    </a>
                  </Link>
                  <div className="pl-4">
                    <img
                      src="/favicon/logo2.png"
                      className="h-12 sm:h-16 md:h-24 lg:h-32"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-1/3">
                  <Link href="#">
                    <a>
                      <img
                        src="/favicon/sales.png"
                        className="h-10 sm:h-16 md:h-20 lg:h-24 mt-8"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
            {/* <NavBar /> */}
            <Nav />
          </div>
          <div className="bg-red-600 h-12"></div>
        </div>
      </div>
    </div>
  );
}
