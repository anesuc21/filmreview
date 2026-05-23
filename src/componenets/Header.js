import { Link, NavLink, useNavigate } from "react-router-dom";
import FilmScore from "../assets/filmscorelogo.png";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const activeClass =
    "text-xl block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-400 md:p-0";

  const inActiveClass =
    "text-xl block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black";

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryTerm = event.target.search.value;

    event.target.reset();

    navigate(`/search?q=${queryTerm}`);
  };

  return (
    <header>
      <nav className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           { /*<img src={Logo} className="h-12" alt="review" /> */}

            <span className="text-4xl font-bold text-yellow-700">
              <img src = {FilmScore} className="h-20" alt = "filmscore" />
            </span>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:order-2 relative">

            {/* MOBILE SEARCH BUTTON */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="md:hidden text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-2.5"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>

            {/* DESKTOP SEARCH */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className="block w-full p-2 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                  placeholder="Search..."
                />
              </form>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* USER DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-200 rounded-lg px-4 py-2"
                type="button"
              >
                <span className="bi bi-person-circle text-2xl text-white"></span>
              </button>

              <div
                className={`absolute right-0 mt-2 z-10 ${
                  showUserMenu ? "block" : "hidden"
                } bg-white border border-gray-200 rounded-lg shadow-lg w-44`}
              >
                <ul className="p-2 text-sm font-medium text-gray-700">
                  <li>
                    <NavLink to ="/login" className="block p-2 hover:bg-gray-100 rounded">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to ="/register"className="block p-2 hover:bg-gray-100 rounded">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to ="/myreviews" className="block p-2 hover:bg-gray-100 rounded">
                      My Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div
            className={`items-center justify-between ${
              hidden ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
          >
            {/* MOBILE SEARCH */}
            <div className="relative mt-3 md:hidden">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Search..."
                />
              </form>
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-lg border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass}>
                  Popular
                </NavLink>
              </li>

              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Top
                </NavLink>
              </li>

              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};