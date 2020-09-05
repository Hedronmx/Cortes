import React, {Component} from 'react';
import {File } from 'react-feather'

export default class Usuario extends Component {
	render (){
		return (
			<div id="content" className="main-content">
          <div className="layout-px-spacing">

              <div className="row layout-spacing">

                  <div className="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">

                      <div className="user-profile layout-spacing">
                          <div className="widget-content widget-content-area">
                              <div className="d-flex justify-content-between">
                                  <h3 className="">Información</h3>
                              </div>
                              <div className="text-center user-info">
                                  <img src="assets/img/90x90.jpg" alt="avatar"/>
                                  <p className="">Carlos Flores</p>
                                  <p className="">PPT-2004055</p>
                              </div>
                              <div className="user-info-list">

                                  <div className="">
                                      <ul className="contacts-block list-unstyled">
                                          <li className="contacts-block__item">
                                               PROFESOR CECYT I
                                          </li>
                                          <li className="contacts-block__item">
                                               Docente
                                          </li>
                                          <li className="contacts-block__item">
                                              19/2/1980
                                          </li>
                                          <li className="contacts-block__item">
                                              CECyTE PACIFICO
                                          </li>
                                          <li className="contacts-block__item">
                                              carlosflores@hedronmx.com
                                          </li>
                                          <li className="contacts-block__item">
                                              664-196-2746
                                          </li>
                                          
                                      </ul>
                                  </div>                                    
                              </div>
                          </div>
                      </div>


                      <div className="work-experience layout-spacing ">
                          
                          <div className="widget-content widget-content-area">

                              <h3 className="">Información Adicional</h3>
                              
                              <div className="timeline-alter">
                              
                                  <div className="item-timeline">
                                      <div className="t-meta-date">
                                          <p className="">04 Mar 2009</p>
                                      </div>
                                      <div className="t-dot">
                                      </div>
                                      <div className="t-text">
                                          <p>Netfilx Inc.</p>
                                          <p>Programador</p>
                                      </div>
                                  </div>

                                  <div className="item-timeline">
                                      <div className="t-meta-date">
                                          <p className="">25 Apr 2014</p>
                                      </div>
                                      <div className="t-dot">
                                      </div>
                                      <div className="t-text">
                                          <p>Google Inc.</p>
                                          <p>Programador</p>
                                      </div>
                                  </div>

                                  <div className="item-timeline">
                                      <div className="t-meta-date">
                                          <p className="">04 Apr 2018</p>
                                      </div>
                                      <div className="t-dot">
                                      </div>
                                      <div className="t-text">
                                          <p>Design Reset Inc.</p>
                                          <p>Programador</p>
                                      </div>
                                  </div>

                              </div>
                          </div>

                      </div>

                  </div>

                  <div className="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">

                      <div className="bio layout-spacing ">
                          <div className="widget-content widget-content-area">
                              <h3 className="">Documentos</h3>
                              <p>Aqui encontraras todos los documentos relacionados a este organizmo</p>


                              <div className="bio-skill-box">

                                  <div className="row">
                                      
                                      <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 ">
                                          <a href="/#">
                                            <div className="card component-card_1">
                                               <div className="card-body">
                                                   <div className="icon-svg">
                                                       <File />
                                                   </div>
                                                   <h5 className="card-title">Documento 1</h5>
                                                   <p className="card-text">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
                                               </div>
                                           </div>
                                         </a>

                                      </div>

                                      <div className="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 ">
                                          
                                          <a href="/#">
                                            <div className="card component-card_1">
                                               <div className="card-body">
                                                   <div className="icon-svg">
                                                       <File />
                                                   </div>
                                                   <h5 className="card-title">Documento 2</h5>
                                                   <p className="card-text">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
                                               </div>
                                           </div>
                                         </a>

                                      </div>

                                      <div className="col-12 col-xl-6 col-lg-12 mb-xl-0 mb-5 ">
                                          
                                          <a href="/#">
                                            <div className="card component-card_1">
                                               <div className="card-body">
                                                   <div className="icon-svg">
                                                       <File />
                                                   </div>
                                                   <h5 className="card-title">Documento 3</h5>
                                                   <p className="card-text">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
                                               </div>
                                           </div>
                                         </a>

                                      </div>

                                      <div className="col-12 col-xl-6 col-lg-12 mb-xl-0 mb-0 ">
                                          
                                          <a href="/#">
                                            <div className="card component-card_1">
                                               <div className="card-body">
                                                   <div className="icon-svg">
                                                       <File />
                                                   </div>
                                                   <h5 className="card-title">Documento 4</h5>
                                                   <p className="card-text">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
                                               </div>
                                           </div>
                                         </a>

                                      </div>

                                  </div>

                              </div>

                          </div>                                
                      </div>

                  </div>

              </div>
              </div>
      </div>
			
		)
	}
}
