import Link from "next/link";
import Container from "./container";
// import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="py-6">
          <div className="flex justify-center mb-8">
            <p className="border border-gray-700 mx-2 hover:border-white hover:bg-blue-700 rounded-full h-10 w-10 flex items-center justify-center">
              <i class="fa fa-facebook fa-xs text-white" aria-hidden="true"></i>
            </p>
            <p className="border border-gray-700 mx-2 hover:border-white hover:bg-blue-300 rounded-full h-10 w-10 flex items-center justify-center">
              <i class="fa fa-twitter fa-xs text-white" aria-hidden="true"></i>
            </p>
            <p className="border border-gray-700 mx-2 hover:border-white hover:bg-red-600 rounded-full h-10 w-10 flex items-center justify-center">
              <i
                class="fa fa-google-plus fa-xs text-white"
                aria-hidden="true"
              ></i>
            </p>
            <p className="border border-gray-700 mx-2 hover:border-white hover:bg-blue-300 rounded-full h-10 w-10 flex items-center justify-center">
              <i class="fa fa-linkedin fa-xs text-white" aria-hidden="true"></i>
            </p>
            <p className="border border-gray-700 mx-2 hover:border-white hover:bg-red-600 rounded-full h-10 w-10 flex items-center justify-center">
              <i
                class="fa fa-instagram fa-xs text-white"
                aria-hidden="true"
              ></i>
            </p>
          </div>
          <h3 className="tracking-tighter text-sm sm:text-base font-normal mb-8 leading-tight text-white text-center">
            Copyright &copy;
            <span className="px-1">{new Date().getFullYear()}</span>
            2020 USAPFAC. All Rights Reserved.
          </h3>
          <div className="flex justify-center">
            <Link href="#">
              <a className="mx-2 text-sm sm:text-base text-gray-600 hover:text-white capitalize">
                About
              </a>
            </Link>
            <Link href="#">
              <a className="mx-2 text-sm sm:text-base text-gray-600 hover:text-white capitalize">
                Contact us
              </a>
            </Link>
            <Link href="#">
              <a className="mx-2 text-sm sm:text-base text-gray-600 hover:text-white capitalize">
                Buy tickets
              </a>
            </Link>
            <Link href="#">
              <a className="mx-2 text-sm sm:text-base text-gray-600 hover:text-white capitalize">
                Gallery
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
