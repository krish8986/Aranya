// import React from "react";
// import { NavLink, Link } from 'react-router-dom';
// import {GiShoppingBag} from "react-icons/gi";
// import { useAuth } from "../../context/auth";
// import toast from "react-hot-toast";

// const Header = () => {
//   const [auth,setAuth] = useAuth();
//   const handleLogout = () => {
//     setAuth({
//       ...auth, user:null,token:'',
//     });
//     localStorage.removeItem("auth");
//     toast.success("Logout Successfully");
//   };
//     return (
//         <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <Link to="/" className="navbar-brand"><GiShoppingBag/> ARANYA-Weave Your Tale</Link>
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink to="/" className="nav-link">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/About" className="nav-link">About</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Products" className="nav-link">Products</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/Substainability" className="nav-link">Substainability</NavLink>
//         </li>
//         {
//           !auth.user ? (
//           <>
//             <li className="nav-item">
//               <NavLink to="/register" className="nav-link" href="#">Inquiry</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
//             </li>
//           </>
//           ) : (<>
//              <li className="nav-item">
//                <NavLink onClick={handleLogout} to="/login" className="nav-link" href="#">Logout</NavLink>
//              </li>
//                </>)
//             }
//         <li className="nav-item">
//         <NavLink to="/cart" className="nav-link" href="#">Cart (0)</NavLink>
//         </li>
//       </ul>

//     </div>
//   </div>
// </nav>  
//         </>
//     );
// };

// export default Header;










import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import {Badge} from "antd"
import { GiTreeBranch } from "react-icons/gi";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <Link to="/" className="navbar-brand"> */}
              {/* 🛒 Aranya - Weave Your Tale */}
            {/* </Link> */}

            <Link to="/" className="navbar-brand">
  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: "700" }}><GiTreeBranch style={{ fontSize: "30px", marginRight: "8px" }} /> Aranya
  </span>
  <span style={{ fontSize: "12px", fontStyle: "italic", marginLeft: "5px", display: "block", color: "#ffefba" }}>
    Weave Your Tale
  </span>
</Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link">About</NavLink>
              </li>
              {/* <li className="nav-item"> */}
                {/* <NavLink to="/Products" className="nav-link">Products</NavLink> */}
              {/* </li> */}
              {/* <li className="nav-item"> */}
                {/* <NavLink to="/Substainability" className="nav-link">Substainability</NavLink> */}
              {/* </li> */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"/categories"} data-bs-toggle="dropdown">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={"/categories"}>
               All Categories
               </Link>
               </li>
               {categories?.map((c) => (
                <li key={c._id || c.slug}>
               <Link className="dropdown-item" to={`/category/${c.slug}`}>
               {c.name}
                </Link>
              </li>
           ))}
           </ul>
        </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Inquiry
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`} 
                        className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                 <NavLink to="/cart" className="nav-link">
                  Cart {cart?.length}
                 </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;