import React from 'react'

const SideBar = () => {
  return (
    <header className="bar">
        <section className="bar__container">
            <div className="bar__container__logo">
                <a href="/" className="">  
                  <img className="logo" src="assets/images/logo.png" alt="Seams with LOVE"/>
                </a>
            </div>
            <button className="bar__container__menu__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/>
                </svg>
                <svg className="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/>
                </svg>
            </button>
            <nav className="bar__container__menu">
                <a href="#inicio">Inicio</a>
                <a href="#acerca">Acerca</a>
                <a href="#habilidades">Habilidades</a> 
                <a href="#portafolio">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </nav>
        </section>
    </header>
    
  )
}

export default SideBar

/* <div className="SideBar">
        <ul>
            <a className="" href="/">
                <div className="">
                    
                    <h1 className="side">sidebar</h1>
                </div>
            </a>
        </ul>
    </div> */

/* <img className="w-100" src="assets/images/logo.png" alt="Seams with LOVE"/> */
