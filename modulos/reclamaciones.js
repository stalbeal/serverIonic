var reclamaciones = new Array();
var reclamacionesPorPoliza = new Array();
var poliza = require('./polizas');
var asesor = require('./asesores');

exports.retonarJsonReclamaciones = function(numeroPoliza){
	//Aca debe de ir el llamado al metodo que retorna el  array de reclamaciones por polizas vigentes
	var stringJsonAsesor = new Array();
	var asesorPoliza = new Array();
	var jsonsAsesor = new Array();
	var asesorActual = asesor.retonarAsesorPorID((poliza.idAsesor()));
	if(idAsesor != null){
		asesorPoliza = {"nombre" : asesorActual.nombre, "foto" : asesorActual.foto, "codigo" : asesorActual.codigo , "email" : asesorActual.email ,
				"telefono" : asesorActual.telefono, "celular" : asesorActual.celular, "telefono" : asesorActual.id};
		
	}
	stringJsonAsesor = JSON.stringify(asesorPoliza);
	return jsonsPolizas;
};


/*
número de la póliza, 
nombre del producto,
código de la reclamación,
Fecha de la reclamación, 
ciudad de la reclamación, 
valor de la reclamación, 
motivo de la reclamación,
estado de la reclamación, 
fecha de última actualización.
*/