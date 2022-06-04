import React ,{useEffect,useState} from 'react'
import "./Nav.css"
function Navbar() {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      }
      else{
        handleShow(false);
      }
    });

    return () => {
        window.removeEventListener("scroll" , handleShow);
    };
}, []);

 return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
      className='nav_logo'
      alt='Netflix Logo'>
      </img>
      <img className='nav_avatar' alt="Netflix-avatar.png" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"></img>
    </div>
  )
}

export default Navbar;