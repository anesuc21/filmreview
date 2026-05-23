import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-lg shadow-sm m-4">

      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">

        <span className="text-sm text-gray-600 dark:text-gray-300 sm:text-center">
          © 2026{" "}
          <Link to="/" className="hover:underline font-semibold text-gray-800 dark:text-white ml-1">
            FilmScore™
          </Link>
          . All Rights Reserved.
        </span>

        <ul className="flex flex-wrap items-center mt-3 md:mt-0 text-sm font-medium">

          <li>
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline me-4 md:me-6"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline me-4 md:me-6"
            >
              Instagram
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline me-4 md:me-6"
            >
              LinkedIn
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </footer>
  );
};