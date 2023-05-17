$('.hamburger-menu').click(function(){
  $('.right').toggleClass('active');
});
$('.right').click(function(){
  $('.right').toggleClass('active');
});
$('.close-btn').click(function(){
  $('.right').toggleClass('active');
});

AOS.init({disable: 'mobile'});

//goto top button
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.goto-top').addClass('goto-show');
  }
  if ($(window).scrollTop() < 301) {
    $('.goto-top').removeClass('goto-show');
  }
});
//animate to top 
$("#goto-top").click(function () {
  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 0);
});


function pageReady(callback) {
  if (document.readyState !== "loading") {
    callback();
  } else document.addEventListener("DOMContentLoaded", callback);
}

const Button = {
  init: () => {
    Button.rippleEffectMovement();
  },

  rippleEffectMovement: () => {
    const buttonsNodeList = document.querySelectorAll("button");
    buttonsNodeList.forEach((btn) => {
      btn.addEventListener("mouseenter", function (e) {
        const target = e.target;
        const x = e.clientX - target.offsetLeft;
        const y = e.clientY - target.offsetTop;
        const rEffect = document.createElement("span");

        rEffect.style.left = `${x}px`;
        rEffect.style.top = `${y}px`;

        this.appendChild(rEffect);
        setTimeout(() => {
          rEffect.remove();
        }, 850);
      });
    });
  }
};

pageReady(() => {
  Button.init();
});
