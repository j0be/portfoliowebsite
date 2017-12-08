var headerLinks = {
    init: function () {
        headerLinks.bind();
        headerLinks.handlers.checkScrollbar();
    },
    bind: function () {
        $(headerLinks.selectors.blocks).click(headerLinks.handlers.anchorHandler);
        $(headerLinks.selectors.scroller).click(headerLinks.handlers.anchorHandler);
        $(headerLinks.selectors.main).scroll(headerLinks.handlers.scrollHandler);
    },
    handlers: {
        anchorHandler: function (e) {
            e.preventDefault();
            var $el = $(e.delegateTarget);
            $('main').animate({
                scrollTop: $($el.attr('href')).offset().top
            }, 300);
        },
        checkScrollbar: function () {
            var offset = ($('html')[0].clientWidth - $('main')[0].clientWidth) / 2;
            if (offset) {
                $(headerLinks.selectors.scroller).css({marginLeft: '-'+offset+'px'});
            }
        },
        scrollHandler: function (e) {
            var $main = $(e.delegateTarget);
            var scrollTop = $main.scrollTop() - $('body')[0].clientHeight;
            var isScrolleToAbout = scrollTop < $(headerLinks.selectors.about).position().top;
            $(headerLinks.selectors.scroller).toggleClass('hidden', isScrolleToAbout);

            $('section').each(function () {
                if ($(this).position().top >= -($(this).height()/2)) {
                   if ($(this).hasClass('header')) {
                       document.title = 'Ronald Troyer';
                   } else {
                       var name = $(this).attr('name').split('');
                       name = name[0].toUpperCase() + name.slice(1).join('');
                       document.title = 'RT | ' + name;
                   }
                   return false;
               } 
            });
        }
    },
    selectors: {
        'about': '#about',
        'blocks': '.logoblock .block',
        'main': 'main',
        'scroller': '#scroller'
    }
};
