var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.5,
});

// Smooth scrolling for anchor links + hidden anchor id in the url
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

//Blotout Pixel FB ICEE 05-12-26
  const edgeURL = 'https://dsscv.laurageller.online';

  !(function (u) {
    window.edgetag =
      window.edgetag ||
      function () {
        (edgetag.stubs = edgetag.stubs || []).push(arguments);
      };
    const t = document.createElement('script');
    (t.type = 'text/javascript'), (t.src = u), (t.async = !0);
    const e = document.getElementsByTagName('script')[0];
    e.parentNode.insertBefore(t, e);
  })(`${edgeURL}/load`);
  !(function () {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const userId = params.get('et_u_id') || '';
    edgetag('init', {
      edgeURL,
      disableConsentCheck: true,
      userId,
    });
  })();

  edgetag('tag', 'PageView', {}, {}, { destination: edgeURL });


  (function () {
    const modifyUrls = (userId) => {
      const links = document.querySelectorAll('a[href]');

      links.forEach((link) => {
        const href = link.href;
        if (
          !href.startsWith('http') &&
          !href.startsWith('/') &&
          !href.startsWith('#')
        ) {
          return;
        }

        try {
          const url = new URL(href, window.location.origin);
          url.searchParams.set('et_u_id', userId);
          link.href = url.toString();
        } catch {}
      });
    };

    window.addEventListener('edgetag-initialized', ({ detail }) => {
      if (!detail.userId) {
        return;
      }

      modifyUrls(detail.userId);
    });
  })();
