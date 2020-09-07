import React, {Component} from 'react';
import { Users, DollarSign, BarChart, Clipboard } from 'react-feather'
import {Link} from 'react-router-dom'

export default class Topbar extends Component {
	
	state = {
		activePage: null
	}
	
	handleClick = (index) => this.setState({ activePage: index })

	render () {
		return(
	        <div className="topbar-nav header navbar" role="banner">
	            <nav id="topbar">
	                <ul className="navbar-nav theme-brand flex-row  text-center">
	                    <li className="nav-item theme-logo">
	                        <a href="index.html">
	                            <img src="assets/img/90x90.jpg" className="navbar-logo" alt="logo" />
	                        </a>
	                    </li>
	                    <li className="nav-item theme-text">
	                        <Link to='/'/>
	                    </li>
	                </ul>
	
	                <ul className="list-unstyled menu-categories" id="topAccordion">
	
	                    <li className={'menu single-menu' + this.state.activePage}>
	                         <Link to='/'>
	                            <div className="">
	                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
	                                <span>Inicio</span>
	                            </div>
	                        </Link>
	                    </li>
	
	                    <li className="menu single-menu">
	                         <Link to='/agremiados' className='dropdown-toggle'>
	                            <div className="">
																	<Users />
	                                <span>Agremiados</span>
	                            </div>
	                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
	                        </Link>
	                        <ul className="collapse submenu list-unstyled" id="app" data-parent="#topAccordion">
	                            <li>
	                                <a href="apps_chat.html"> A PALT </a>
	                            </li>
	                            <li>
	                                <a href="apps_mailbox.html"> A PP T </a>
	                            </li>
	                            <li>
	                                <a href="apps_todoList.html"> A PCT </a>
	                            </li>
	                            <li>
	                                <a href="apps_notes.html">A PZR</a>
	                            </li>
	                            <li>
	                                <a href="apps_scrumboard.html">A PVS T</a>
	                            </li>
	                            <li>
	                                <a href="apps_contacts.html">A PE E</a>
	                            </li>
	                            <li>
	                                <a href="apps_invoice.html">A PAGT</a>
	                            </li>
	                            <li>
	                                <a href="apps_calendar.html"> A PX M</a>
	                            </li>
	                            <li>
	                                <a href="apps_calendar.html"> A ST</a>
	                            </li>
	                        </ul>
	                    </li>
	                    
	                    <li className="menu single-menu">
	                        <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
	                            <div className="">
																	<DollarSign />
	                                <span>Aportaciones</span>
	                            </div>
	                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
	                        </a>
	                    </li>
	
	
	                    <li className="menu single-menu">
	                        <a href="#uiKit" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
	                            <div className="">
																	<BarChart />
	                                <span>Cuotas</span>
	                            </div>
	                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
	                        </a>
	                    </li>
	
	                    <li className="menu single-menu">
	                        <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
	                            <div className="">
																	<Clipboard/>
	                                <span>Documentos</span>
	                            </div>
	                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
	                        </a>
	                    </li>
	                </ul>
	            </nav>
	        </div>
		)
	}
}

