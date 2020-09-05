import React, {Component} from 'react';

export default class FormaRegistro extends Component {
	render () {
		return (
			<form className="contenido">
					<label for="primerseccion">Datos Del Agremiado Sindical</label>
			    <div class="form-row mb-4">
			        <div class="form-group col-md-6">
			            <label for="NombreCompleto">Nombre Completo</label>
			            <input type="text" class="form-control" id="NombreCompleto" placeholder="Escribe tu nombre completo"/>
			        </div>
			        <div class="form-group col-md-6">
		            <label for="Correo">Correo Electrónico</label>
		            <input type="text" class="form-control" id="Correo" placeholder="Escribe tu correo electrónico"/>
		        	</div>
		        </div>
		        <div class="form-row mb-4">
			        <div class="form-group col-md-2">
			            <label for="Edad">Edad</label>
			            <input type="text" class="form-control" id="Edad" placeholder="Escribe tu edad"/>
			        </div>
			        <div class="form-group col-md-2">
			            <label for="FechaNacimiento">Fecha de Nacimiento</label>
			            <input type="text" class="form-control" id="FechaNacimiento" placeholder="Escribe tu fecha de nacimiento"/>
			        </div>
			        <div class="form-group col-md-2">
			            <label for="Curp">CURP</label>
			            <input type="text" class="form-control" id="FechaNacimiento" placeholder="Escribe tu CURP"/>
			        </div>
			        <div class="form-group col-md-2">
			            <label for="Telefono">Telefono</label>
			            <input type="tel" class="form-control" id="Telefono" placeholder="Escribe tu telefono"/>
			        </div>
			         <div class="form-group col-md-2">
 			            <label for="Sexo">Sexo</label>
                  <select class="form-control" id="Sexo">
                      <option>Hombre</option>
                      <option>Mujer</option>
                  </select>
 			        </div>
 			        <div class="form-group col-md-2">
 			            <label for="EstadoCivil">Estado Civil</label>
                  <select class="form-control" id="EstadoCivil">
                      <option>Casado</option>
                      <option>Soltero</option>
                  </select>
 			        </div>
			    </div>
			    <div class="form-group mb-4">
			        <label for="Domicilio">Dirección Completa</label>
			        <input type="text" class="form-control" id="Domicilio" placeholder="Escribe tu domicilio"/>
			    </div>


			    <label for="segundaseccion" style={{paddingTop: '2%'}}>Estatus Laboral</label>
			    <div class="form-row mb-4">

			    		<div class="form-group col-md-9">
			            <label for="Plantel">Plantel de Adscripción</label>
                 <select class="form-control" id="Plantel">
                     <option>CECyTE ALTIPLANO</option>
                     <option>CECyTE PACIFICO</option>
                     <option>CECyTE CACHANILLA</option>
                     <option>CECyTE ZONA RIO</option>
                     <option>CECyTE VILLAS DEL SOL</option>
                     <option>CECyTE ENSENADA</option>
                     <option>PLANTEL AGUILAS</option>
                     <option>CECYTE XOCHIMILCO</option>
                     <option>OFICINA DEL TITULAR</option>
                 </select>
			        </div>

			        <div class="form-group col-md-3">
			            <label for="Plantel">Plantel de Adscripción</label>
                 <select class="form-control" id="Plantel">
                     <option>Docente</option>
                     <option>Administrativa</option>
                 </select>
			        </div>

			        <div class="form-group col-md-3">
			            <label for="Puesto">Puesto</label>
			            <input type="text" class="form-control" id="Puesto" placeholder="Escribe tu puesto"/>
			        </div>
			        
			        <div class="form-group col-md-3">
			            <label for="NumEmpleado">Numero de Empleado</label>
			            <input type="text" class="form-control" id="NumEmpleado" placeholder="Escribe tu numero de empleado"/>
			        </div>

			         <div class="form-group col-md-3">
 			            <label for="FechaIngreso">Fecha de Ingreso</label>
 			            <input type="text" class="form-control" id="FechaIngreso" placeholder="Escribe tu fecha de ingreso"/>
 			        </div>

 			        <div class="form-group col-md-3">
 			            <label for="Contrasena">Contraseña</label>
 			            <input type="password" class="form-control" id="Contrasena" placeholder="Escribe tu contraseña"/>
 			        </div>


			    </div>
			    <div className="form-row mb-4">
			    <div className="custom-file col-md-12">
					    <input type="file" class="custom-file-input" id="Documentos" />
					    <label class="custom-file-label" style={{backgroundColor:'#fafafa'}} for="Documentos">Elegir Documentos</label>
					</div>
			   </div>
	
					<div class="form-group mb-4 col-md-12">
						<h5>CON BASE AL ARTICULO 358, 363 Y DEMAS RELATIVOS DE LA LEY FEDERAL DEL TRABAJO, ASÍ COMO A LO ESTABLECIDO EN ARTICULO 11 y14, DE LOS ESTATUTOS DEL SINDICATO DE TRABAJADORES AL SERVICIO DE LA EDUCACIÓN DEL COLEGIO DE ESTUDIOS CIENTÍFICOS Y TECNOLÓGICOS DEL ESTADO DE BAJA CALIFORNIA. DECLARO LO SIGUIENTE:  </h5>
            <h5>TOMO PROTESTA COMO MIEMBRO ACTIVO DE LA ASOCIACIÓN SINDICAL, HACIENDO CUMPLIR FIELMENTE CON LOS ACUERDOS EMANADOS DE LAS ASAMBLEAS DE PLANTEL, ASAMBLEAS DE DELEGADOS Y COMITÉ EJECUTIVO, TODOS LOS ASUNTOS Y PROBLEMAS LABORALES Y SINDICALES LOS TRATARE A TRAVÉS DEL SINDICATO, NO ACEPTARE PROCEDIMIENTO ALGUNO INICIADO EN EL CENTRO DE TRABAJO POR LAS AUTORIDADES, SIN QUE INTERVENGA LA REPRESENTACIÓN SINDICAL.   </h5>
            <h5>PROMETO AYUDAR FRATERNALMENTE A TODOS LOS MIEMBROS DEL SINDICATO, CON LEALTAD Y EFICIENCIA, DESEMPEÑAR LOS PUESTOS DE DIRECCIÓN SINDICAL QUE SE ME CONFIERAN. VELARE PERMANENTEMENTE POR LA UNIDAD E INTEGRIDAD DEL SINDICATO REALIZANDO TODO AQUELLO QUE LO BENEFICIE </h5>
            <h5>ME ABSTENDRÉ DE ACTOS Y PROCEDIMIENTOS QUE LESIONEN AL ORGANISMO SINDICAL, COLABORANDO EN LAS TAREAS COLECTIVAS DE ORDEN SINDICAL, CULTURAL Y DEPORTIVO, QUE SE REALICEN ENTRE LOS MIEMBROS DEL SINDICATO. </h5>
            <div class="n-chk">
						<label class="new-control new-checkbox new-checkbox-rounded checkbox-primary">
							<input type="checkbox" class="new-control-input"/>
							<span class="new-control-indicator"></span> Acepto
						</label>
						</div>
        </div>
				
			  <button type="submit" class="btn btn-primary mt-3">Enviar Registro</button>
			</form>
		)
	}
}
