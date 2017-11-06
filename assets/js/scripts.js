//import $ from 'jquery';
$(document).ready(function() {
  SmoothScroll();
  DropdownMenu();
  Slider();
  BookLanguages();
  RelatedTextToggle();
  RoteiroListToggle();
  RoteiroBuildList();
  ManageModals();
  TextSizes();
  PrintPage();
});

function PrintPage() {
  $(document).on('click', '#PrintBtn', function(event) {
    console.log('hi');
    event.preventDefault();
    window.print();
  });
}

function TextSizes() {
  function smallerCallback() {
    $(document)
      .on('click', '#smallerText', function(event) {
        event.preventDefault();
        //$('p, h1, h2, a, li, ul').each(function() {
        $('h2, p').each(function() {
          var fontSize = parseInt($(this).css('font-size'));
          fontSize--;
          $(this).css('font-size', fontSize);
        });
      })
      .on('click', '#biggerText', function() {
        event.preventDefault();
        //$('p, h1, h2, a, li, ul').each(function() {
        $('h2, p').each(function() {
          var fontSize = parseInt($(this).css('font-size'));
          fontSize++;
          $(this).css('font-size', fontSize);
        });
      });
  }
  smallerCallback();
}

function ManageModals() {

  $('.btn-modal').click(function(e) {
    e.preventDefault();
    openModal($(this).attr('open-modal'));
  });

  $('.btn-modal-close').click(function(e) {
    e.preventDefault();
    closeModal($(this));
  });

  function openModal(id) {
    var modal = $('#' + id);
    modal.addClass('modal-show');

    $(document).keydown(function(e) {
      if(e.key == 'Escape') {
        e.preventDefault();
        modal.removeClass('modal-show');
      }
    });

    if(id != "pesquisaModal"){
      modal.click(function() {
        modal.removeClass('modal-show');
      });
    }

    modal.find('.modal-container').click(function(e) {
      e.stopPropagation();
    });
  }

  function closeModal(btn) {
    btn.closest('.modal').removeClass('modal-show');
  }
}

function RoteiroBuildList() {
  var list = conteudo_dinamico.portugues['roteiro_estudos'];

  var roteiro = BuildRoteiro(list);
  $('#RoteiroFull .roteiro-list').html(roteiro);

  function BuildRoteiro(list) {
    var roteiro = '<ul>';

    for(var i=0; i<list.length; i++) {
      roteiro += '<li>';
      if(list[i].descricao) {
        roteiro += '<p' + (list[i].conteudo || list[i].docs ? ' class="more"' : '') + '>' + list[i].descricao + '</p>';
      }
      if(list[i].conteudo) {
        roteiro += BuildRoteiro(list[i].conteudo);
      }
      else if(list[i].docs) {
        roteiro += '<ul class="docs">';
        for(var j=0; j<list[i].docs.length; j++) {
          roteiro += '<li>' + list[i].docs[j].descricao + '</li>';
        }
        roteiro += '</ul>';
      }
      roteiro += ('</li>');
    }

    roteiro += '</ul>';
    return roteiro;
  }
}

function RoteiroListToggle() {
  $(document).on('click', '#RoteiroFull .roteiro-list li p.more', function(e) {
    $(this).closest('li').toggleClass('expanded');
    e.stopPropagation();
  });
}

function SmoothScroll() {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 120
          }, 1000);
        }
      }
    });
}

function RelatedTextToggle() {
  $('#TextosRelacionados li a').click(function(e) {
    $(this).parent().toggleClass('active');
    e.preventDefault();
  });
}

function BookLanguages() {
  $('#Books, .book-selectors').addClass('pt-only').removeClass('fr-only');

  $('#compare').click(function() {
    $('#Books, .book-selectors').removeClass('pt-only').removeClass('fr-only');
  });

  $('#PtFlagBook').click(function() {
    $('#Books, .book-selectors').addClass('pt-only').removeClass('fr-only');
  });

  $('#FrFlagBook').click(function() {
    $('#Books, .book-selectors').removeClass('pt-only').addClass('fr-only');
  });
}

function Slider() {
  var slider = $('#slider');
  if(slider.length > 0) {
    slider.find('.slide').hide();
    slider.find('#slide-0').show();
    slider.find('#slideNext img').click(function() {
      slideNext();
    });
    slider.find('#slidePrev img').click(function() {
      slidePrev();
    });
    setInterval(function() {
      slideNext();
    }, 6000);
  }
}

function slideNext() {
  var slider = $('#slider');
  var index = parseInt(slider.find('.slide:visible').attr('id').split('-')[1]);
  index = (index+1) % slider.find('.slide').length;
  slider.find('.slide').hide();
  slider.find('#slide-'+index+'').show();
}

function slidePrev() {
  var slider = $('#slider');
  var index = parseInt(slider.find('.slide:visible').attr('id').split('-')[1]);
  index = (index-1+slider.find('.slide').length) % slider.find('.slide').length;
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
        }, 200, function() {menu.hide();});
      e.preventDefault();
    });
}
