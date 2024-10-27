import './Header.css'
const Header = () => {
    return (
        <div>
             <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className="text-base"><a>Home</a></li>
        <li className="text-base"><a>Recipes</a></li>
        <li className="text-base"><a>About</a></li>
        <li className="text-base"><a>Search</a></li>
      </ul>
    </div>
    <a className="text-2xl font-bold whitespace-nowrap" href="#">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="text-base"><a>Home</a></li>
      <li className="text-base"><a>Recipes</a></li>
      <li className="text-base"><a>About</a></li>
      <li className="text-base"><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <label className="input input-bordered flex items-center gap-2 rounded-3xl w-1/2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow w-1/3" placeholder="Search" />
</label>
  <div className="w-10 rounded-full ms-3">
          <a href="#">
          <img className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png" />
          </a>
        </div>
  </div>
</div>
{/* banner section part start  */}
<section>
  <div className="banner-container">
    <div className='flex justify-center flex-col items-center h-full px-12'>
      <h1 className="text-5xl font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="text-lg pt-6 px-8 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className="mt-10">
      <button className="btn btn-success me-6 rounded-3xl">Explore now</button>
      <button className="btn btn-outline rounded-3xl text-white bg-transparent">Our Feedback</button>
      </div>
    </div>
  </div>
</section>
{/* banner section part end    */}

      </div>
    );
};

export default Header;