$(document).ready(function() {

  // console.log(conteudo_dinamico.portugues);
  // console.log(conteudo_dinamico.frances);

  //DynamicRender(conteudo_dinamico)

  DropdownMenu();
  Slider();

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // window.location.hash = hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 800);
    } // End if
  });

});

function Slider() {
  var slider = $('#slider');
  slider.find('.slide').hide();
  slider.find('#slide-0').show();
  slider.find('#slideNext').click(function() {
    slideNext();
  });
  slider.find('#slidePrev').click(function() {
    slidePrev();
  });
  setInterval(function() {
    slideNext();
  }, 6000);
}

function slideNext() {
  var slider = $('#slider');
  var index = parseInt(slider.find('.slide:visible').attr('id').split('-')[1]);
  index = (index+1) % slider.find('.slide').length;
  console.log(index);
  slider.find('.slide').hide();
  slider.find('#slide-'+index+'').show();
}

function slidePrev() {
  var slider = $('#slider');
  var index = parseInt(slider.find('.slide:visible').attr('id').split('-')[1]);
  index = (index-1+slider.find('.slide').length) % slider.find('.slide').length;
  console.log(index);
  slider.find('.slide').hide();
  slider.find('#slide-'+index+'').show();
}

function DropdownMenu() {
  $('*[data-toggle="dropdown"]')
    .mouseenter(function(e) {
      var menu = $(this).children('.dropdown-menu');
      menu.stop().show()
        .animate({
          opacity: 1,
        }, 200);
      e.preventDefault();
    })
    .mouseleave(function(e) {
      var menu = $(this).children('.dropdown-menu');
      menu.stop()
        .animate({
          opacity: 0,
        }, 200, function() {menu.hide()});
      e.preventDefault();
    });
}

function DynamicRender(json){
  //essa função recebe o JSON com o conteúdo do site, definido em conteudo_dinamico.js
  //Deverá ser chamada em dois momentos: quando a página é carregada, e quando há mudança de idioma
  //renderiza o html da página a partir do JSON, selecionando cada elemento por sua classe/id
}
