import logo from "../images/logo.png";
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="row m-0 p-0">
        <div className="col-7 d-flex">
          <div className="col-4 logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="col-8 searchBar">
            <i class="bi bi-search"></i>
            <input type="text" className="searchInput rounded-circle border-0 w-100" placeholder="Search"/>
            <i class="bi bi-sliders"></i>

          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
};
export default Navbar;
