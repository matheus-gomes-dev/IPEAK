var busca = [];

$(document).ready(function() {

    var numero_paginas = 116;
    var pagina_atual = 1; //informação da página atual estará na url

    var resultados_roteiro = [
        {
            "descricao" : "1 » O Livro dos Espíritos » Introdução ao estudo da Doutrina Espírita » II",
            "url" : "#"
        },
        {
            "descricao" : "2 » O Livro dos Espíritos » Introdução ao estudo da Doutrina Espírita » VI",
            "url" : "#"
        },
        {
            "descricao" : "3 » O Livro dos Espíritos » Introdução ao estudo da Doutrina Espírita » VII",
            "url" : "#"
        },
        {
            "descricao" : "4 » O Livro dos Espíritos » Introdução ao estudo da Doutrina Espírita » X",
            "url" : "#"
        },
        {
            "descricao" : "5 » O Livro dos Espíritos » Introdução ao estudo da Doutrina Espírita » XIII",
            "url" : "#"
        },
        {
            "descricao" : "6 » O Livro dos Espíritos » Introdução ao estudo da Doutrina Espírita » XV",
            "url" : "#"
        }
    ];

    var resultados_portal = [
        {
            "descricao" : "1. ALLAN KARDEC » Biografia",
            "url" : "#"
        },
        {
            "descricao" : "2. A SOCIEDADE ESPÍRITA DE PARIS - SPEE » Seus objetivos",
            "url" : "#"
        },
        {
            "descricao" : "3. HISTÓRIA DO ESPIRITISMO » Os adversários e suas táticas » Os inimigos desencarnados",
            "url" : "#"
        },
        {
            "descricao" : "4. OBRAS DE ALLAN KARDEC » Catálogo Racional » II - Obras diversas sobre o Espiritismo",
            "url" : "#"
        },
        {
            "descricao" : "5. OBRAS DE ALLAN KARDEC » Catálogo Racional » FILOSOFIA E HISTÓRIA",
            "url" : "#"
        }
    ]

    geraTabelaDinamica(resultados_roteiro);

    for(var i=1; i<=numero_paginas; i++){
        if(i != pagina_atual)
            $(".paginacao").append("<div class='page'>" + i + "</div>");
        else
            $(".paginacao").append("<div class='page current-page'>" + i + "</div>");
    }



    $('.pill-opcao').click(function(){
        if(this.id == "opcao-roteiro" && !$("#opcao-roteiro").hasClass("pill-selecionado")){
            console.log("Opção roteiro");
            $("#opcao-portal").removeClass("pill-selecionado");
            $("#opcao-roteiro").addClass("pill-selecionado");
            $("#pill-indicador").removeClass("pill-indicador-portal");
            $("#pill-indicador").addClass("pill-indicador-roteiro");
            geraTabelaDinamica(resultados_roteiro);
        }
        else if(this.id == "opcao-portal" && !$("#opcao-portal").hasClass("pill-selecionado")){
            console.log("opcao-portal");
            $("#opcao-portal").addClass("pill-selecionado");
            $("#opcao-roteiro").removeClass("pill-selecionado");
            $("#pill-indicador").addClass("pill-indicador-portal");
            $("#pill-indicador").removeClass("pill-indicador-roteiro");
            geraTabelaDinamica(resultados_portal);
        }
    });

    $("#input-pesquisar").keyup(function(e){
        if(e.keyCode == 13)
        {
            if($("#input-pesquisar").val()){
                var termo_pesquisado = $("#input-pesquisar").val();
                //inserir aqui a query com o termo pesquisado 
                //em seguida atualizar variaveis da tabela dinamica com resposta
                //e chamar função geraTabelaDinamica() com a variavel atualizada
            }
        }
    });
});


function geraTabelaDinamica(dadosArray){
    $("#table-busca-body").html('');
    for (var i=0; i<dadosArray.length; i++){
        $("#table-busca-body").append("<tr><td><a href='" + dadosArray[i].url + "'>" + dadosArray[i].descricao + "</a></td></tr>");
    }
}




/*


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

*/