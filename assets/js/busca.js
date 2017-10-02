var busca = [];

$(document).ready(function() {
	$("#buscar").click(function(){
		if(!$('#busca').val().length || $('#busca').val() == undefined)
			return;
		
		var resultados_portal = mecanismoBusca($('#busca').val(), conteudo_dinamico.portugues);
		var resultados_roteiro = [];

		for(var i=0; i<resultados_portal.length; i++){
			if(~resultados_portal[i].indexOf('roteiro_estudos')){
				resultados_portal.splice(i,1);
			}
		}
		console.log("Busca encontrada em:");
		console.log(resultados_portal);
	})
});





var mecanismoBusca = function(busca, obj, flag) {

    var res = false;
    var paths = [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] == "object") {
                if (res = mecanismoBusca(busca, obj[key], true)) {
                    res = key + "." + res;
                    if (!flag)
                        paths.push(res);
                    else return res;
                }
            } else if (key === "conteudo_pesquisavel" && (~obj[key].indexOf(busca))) {
            	//console.log(obj[key])
                return key;
            }
        }
    }
    return flag ? res : paths;
}