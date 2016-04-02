var $c  = document.createElement.bind(document);

function googlePlus() {
  var url = window.location.protocol + '//' + window.location.host;
  window.open('https://plus.google.com/share?url='+url, 'share_gl', 'width=500, height=300, toolbar=no, status=no, menubar=no');
}

(function (doc, win) {
  "use strict";

  function triggerComponents() {
    win.components = win.components || {};
    var
      i = 0,
      components = doc.getElementsByTagName('body')[0].dataset.components;

    if (components !== undefined) {
      components = components.split(' ');
      i = components.length;

      while (i--) {
        if (components[i] !== '' && win.components[components[i]] !== undefined) {
          win.components[components[i]](doc, win);
        }
      }
    }
  }

  triggerComponents();

  var shareVisibilityTriggered = false;
  var headlineEl  = document.getElementById('save-fair-use'),
      bodyRect    = document.body.getBoundingClientRect(),
      elemRect    = headlineEl.getBoundingClientRect(),
      headlineY   = elemRect.top - bodyRect.top;

  var listenerFn = function() {
    var top   = ((window.pageYOffset||doc.scrollTop)-(doc.clientTop||0)||0),
        alpha = 1-(top/headlineY);

    if (alpha < 0) alpha = 0;

    document.body.style.backgroundColor = 'rgba(15,22,32,'+alpha+')';


    if (top > 300 && shareVisibilityTriggered == false) {
      shareVisibilityTriggered = true;
      document.querySelector('ul.share').classList.add('visible');
    }
  };

  if (typeof window.VARIATION === 'undefined' || window.VARIATION == 'splash') {
    listenerFn();
    window.addEventListener('scroll', listenerFn);
  }

  doc.querySelector('[href="#save-fair-use"]').addEventListener('click', function (e){
    e.preventDefault();

    win.smoothScroll(doc.getElementById('save-fair-use'));
  });

  var gl = document.querySelectorAll('button.google');
    for (var i = 0; i < gl.length; i++) {
        gl[i].addEventListener('click', function(e) {
            e.preventDefault();
            googlePlus();
        }, false);
    }

  // COUNTDOWN TO FUN

  function Countdown() {
    this.date = new Date(Date.UTC(2016, 04, 18, 4, 00, 0)).getTime();
    this.interval = null;
    this.requestAnimationFrame = this.requestAnimationFrame.bind(this);
    this.targets = {};
    this.tick = this.tick.bind(this);
    this.curTick = false;
    this.start();
  }

  Countdown.prototype.constants = {
    day: (1000 * 60 * 60 * 24),
    hour: (1000 * 60 * 60),
    minute: (1000 * 60),
    second: (1000)
  };

  Countdown.prototype.padNumber = function(number) {
    if (number > 9) {
      return number;
    } else {
      return '0' + number;
    }
  };

  Countdown.prototype.requestAnimationFrame = function() {
    var request = window.requestAnimationFrame || setTimeout;
    request(this.tick);
  };

  Countdown.prototype.start = function() {
    this.stop();
    this.requestAnimationFrame();
    this.interval = setInterval(this.requestAnimationFrame, 1000);
  };

  Countdown.prototype.stop = function() {
    clearInterval(this.interval);
  };

  Countdown.prototype.tick = function() {
    var now = Date.now();
    var difference = this.date - now;

    this.updateDates(difference);

    if (difference < 0) {
      this.stop();
      document.getElementById('remaining').textContent = '00.00:00:00';
    }
  };

  Countdown.prototype.updateDates = function(difference) {

    this.curTick = !this.curTick;
    var c = this.curTick;

    var days = Math.floor(difference / this.constants.day);
    difference -= days * this.constants.day;

    var hours = Math.floor(difference / this.constants.hour);
    difference -= hours * this.constants.hour;

    var minutes = Math.floor(difference / this.constants.minute);
    difference -= minutes * this.constants.minute;

    var seconds = Math.floor(difference / this.constants.second);
    difference -= seconds * this.constants.second;

    /*
    var str =   this.padNumber(days)
    +(c ? '.' : '.')+this.padNumber(hours)
    +(c ? ':' : ' ')+this.padNumber(minutes)
    +(c ? ':' : ' ')+this.padNumber(seconds);
    */
    var str =   this.padNumber(days)
    +'.'+this.padNumber(hours)
    +':'+this.padNumber(minutes)
    +':'+this.padNumber(seconds);

    document.getElementById('remaining').textContent = str;
  };

  new Countdown();

})(document, window);
