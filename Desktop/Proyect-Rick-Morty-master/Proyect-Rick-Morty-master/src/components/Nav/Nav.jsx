import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className={style.Nav}>
          <SearchBar onSearch={this.props.onSearch} />
          <Link to="/about" className={style.links}><h3>About</h3></Link> 
          <Link to="/home" className={style.links}><h3>  Home</h3></Link> 
      </div>
    )
  }
}

export default Nav;



// import SearchBar from "../SearchBar/SearchBar";
// import style from "./Nav.module.css";
// import React from 'react'

//  const Nav = ()=> {
//     return (
//     <div>
//         <div className={style.Nav} >
//              <SearchBar onSearch ={this.props.onSearch}/> 
//              {/* this. porque es un componente de clase */}
//         </div>
       
//     </div>
//   )
// }

// export default Nav;