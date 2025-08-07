// Inicializa o Owl Carousel com configurações responsivas
$('.owl-carousel').owlCarousel({
    loop: true,              // Ativa o loop infinito dos slides
    margin: 16,              // Espaçamento entre os itens (ajustado de 10 para 16 para melhor visual)
    nav: true,               // Exibe setas de navegação (alterado de false para true)
    dots: true,              // Ativa os pontos de navegação abaixo (se quiser, pode desativar)
    autoplay: true,          // Habilita o autoplay
    autoplayTimeout: 4000,   // Tempo entre os slides no autoplay (em milissegundos)
    autoplayHoverPause: true,// Pausa o autoplay quando o mouse estiver sobre o item
    responsive: {
        0: {
            items: 1         // 1 item visível em telas pequenas
        },
        600: {
            items: 2         // 2 itens em telas médias (ajustado de 3 para 2)
        },
        1000: {
            items: 4         // 4 itens em telas grandes (ajustado de 5 para 4 para espaçamento melhor)
        }
    }
});
