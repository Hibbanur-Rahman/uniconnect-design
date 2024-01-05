import logo from "../images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="NavBar pt-3">
      <div className="row m-0 p-0 d-flex align-items-center">
        <div className="col-7 d-flex">
          <div className="col-4 logo">
            <img src={logo} alt="" className="logoImg img-fluid" />
          </div>
          <div className="col-6 searchBar ">
            <i class="bi bi-search position-absolute p-2 ps-2"></i>
            <input
              type="text"
              className="searchInput rounded-4 border-0 w-100 p-2 ps-5"
              placeholder="Search"
            />
            <i class="bi bi-sliders position-absolute p-2"></i>
          </div>
        </div>
        <div className="col-5">
          <div className="row m-0 p-0 d-flex justify-content-end pe-3">
            <div className="col-1 m-0 p-0 d-flex flex-column">
              <i class="bi bi-house-door w-auto fs-2 m-0 p-0"></i>
              <p className="m-0 p-0 fs-6">Home</p>
            </div>
            <div className="col-1 m-0 p-0">
              <i class="bi bi-person w-auto fs-2 m-0 p-0"></i>
              <p className="m-0 p-0 fs-6">Profile</p>
            </div>
            <div className="border border-1 w-auto m-0 p-0"></div>
            <div className="col-1 m-0 p-0">
              <i class="bi bi-grid-3x3-gap w-auto fs-2 m-0 p-0"></i>
              <p className="m-0 p-0 fs-6">More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
