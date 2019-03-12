import {CLASSES} from './_classes';
export default function header() {
  const burger = $(CLASSES.burger);
  const header = $(CLASSES.header);
  const headerContent = $(CLASSES.headerContent);

  function open() {
    $(burger).addClass(CLASSES.active);
    header.addClass(CLASSES.active);
    headerContent.slideDown();
  }

  function close() {
    $(burger).removeClass(CLASSES.active);
    header.removeClass(CLASSES.active);
    headerContent.slideUp();
  }

  burger.on('click', function() {
    if (header.hasClass(CLASSES.active)) {
      close();
    } else {
      open();
    }
  });

  $(window).on('scroll', () => {
    if (window.pageYOffset > 53) {
      header.addClass(CLASSES.red);
    } else {
      header.removeClass(CLASSES.red);
    }
  });
}
