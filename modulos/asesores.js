var asesores = new Array();

exports.retonarAsesorPorID = function(idAsesor){
	for(var i = 0; i<asesores.length; i++){
		if(asesores[i].id == idAsesor){
			return asesores[i];
		}
	}
	return null;
};