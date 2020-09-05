import React, {Component} from 'react';

export default class Header extends Component {
	render(){
		return (
    <div className="header-container">
        <header className="header navbar navbar-expand-sm">

            <div className="nav-logo align-self-center">
                <a className="navbar-brand" href="index.html"><span className="navbar-brand-name">SITSE</span></a>
            </div>

            <ul className="navbar-item flex-row mr-auto">
                <li className="nav-item align-self-center search-animated">
                    <form className="form-inline search-full form-inline search" role="search">
                        <div className="search-bar">
                            <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Buscar..."/>
                        </div>
                    </form>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </li>
            </ul>

            <ul className="navbar-item flex-row nav-dropdowns">

                <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
                    <a href="/#" className="nav-link dropdown-toggle user" id="user-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media">
                            <img src="assets/img/90x90.jpg" className="img-fluid" alt="admin-profile"/>
                            <div className="media-body align-self-center">
                                <h6><span>Hola,</span> Usuario</h6>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </a>
                    <div className="dropdown-menu position-absolute animated fadeInUp" aria-labelledby="user-profile-dropdown">
                        <div className="">
                            <div className="dropdown-item">
                                <a className="" href="user_profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Mi Perfil</a>
                            </div>
                            <div className="dropdown-item">
                                <a className="" href="auth_login.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </header>
    </div>
		)
	}
}
