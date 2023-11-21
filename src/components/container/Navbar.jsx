import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../../styles.js';
import { navLinks } from '../../constants/index.js';
import { logo, menu, close } from '../../assets/index.js';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from "../../credentials";

const auth = getAuth(appFirebase);

const Navbar = ({ userMail }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (userMail) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userMail]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Realizar otras acciones necesarias después de cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-black`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/" 
          className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);            
          }}
        >
          <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          <p className="text-[#FE001B] text-[18px] font-bold cursor-pointer flex">
            Clínica Internacional de Cirugía&nbsp;            
          </p>    
          <p className="text-white text-[18px] font-bold cursor-pointer flex">            
            <span className="sm:block hidden">| &nbsp; Documentos</span>
          </p>     
        </Link>

        <div className="flex gap-5 items-center">
          <div className="sm:hidden flex items-center gap-5">
            <button
              className="text-white text-[15px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" />
            </button>
          </div>

          {isLoggedIn ? (
            <div className="hidden sm:flex gap-8">
              {userMail === "auditoriaycalidadcic@gmail.com" && (
                <Link to="/register">
                  <ul className="text-white cursor-pointer text-[15px]">
                    Registro
                  </ul>
                </Link>
              )}

              <ul className='list-none hidden sm:flex flex-row gap-3'>
                <Link to="/documents">
                  <ul className="text-secondary link-light cursor-pointer text-[15px]">
                    Documentos
                  </ul>
                </Link>

                <Link to="/videos">
                  <ul className="text-secondary link-light  text-[15px] font-medium cursor-pointer">
                    Videos
                  </ul>
                </Link>                
              </ul>

              <div className="hidden sm:flex gap-2 align-middle text-[15px]">
                <i className="fas fa-circle-user" style={{ fontSize: "1.5rem", color: "#ffffff" }}></i>
                <ul className="text-white">{userMail}</ul>
              </div>
            </div>
          ) : null}

          <div className={`${toggle ? 'flex' : 'hidden'} flex-col sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title 
                    ? "text-white" 
                    : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}         
                >
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
              {isLoggedIn && (
                <li
                  className="text-secondary link-light cursor-pointer text-[16px] font-poppins font-medium"
                  onClick={() => {
                    setToggle(!toggle);
                    handleSignOut();
                  }}
                >
                  Cerrar Sesión
                </li>
              )}
              {!isLoggedIn && (
                <li
                  className="text-white text-[16px] font-poppins font-medium cursor-pointer"
                  onClick={() => {
                    setToggle(!toggle);
                    // Agrega aquí la lógica para el inicio de sesión
                  }}
                >
                  <Link to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Agrega esta sección para el inicio de sesión y cierre de sesión en pantallas grandes */}
          <div className="hidden sm:flex gap-5">
            {isLoggedIn ? (
              <button
                className="text-secondary link-light text-[15px] cursor-pointer"
                onClick={handleSignOut}
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login">
                <button
                  className="text-white text-[15px] cursor-pointer"
                >
                  Iniciar Sesión
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
