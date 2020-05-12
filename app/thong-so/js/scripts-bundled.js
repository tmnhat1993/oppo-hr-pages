/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageListener = pageListener;
exports.reachSection = void 0;

// Custom Ultilities Functions
var reachSection = function reachSection() {
  var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if ($target.offset().top > 0) {
    if (window.pageYOffset > $target.offset().top - window.innerHeight / 1.5 && window.pageYOffset < $target.offset().top + window.innerHeight / 2) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}; // Custom Event Listener


exports.reachSection = reachSection;

function pageListener() {
  this.events = {};
}

pageListener.prototype.on = function (eventType, listener) {
  // If the eventType Property not exist yet, create an empty aray of that property
  this.events[eventType] = this.events[eventType] || [];
  this.events[eventType].push(listener);
};

pageListener.prototype.emit = function (eventType) {
  if (this.events[eventType] && this.events[eventType].length > 0) {
    // Loop through the events[eventType] array of function and invoke each of them
    this.events[eventType].forEach(function (item) {
      item();
    });
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = _interopRequireDefault(__webpack_require__(2));

var _home = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  // Behavior Use For All Page
  var common = new _common.default();
  var home = new _home.default();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Common =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Common() {
    _classCallCheck(this, Common);

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Common, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SetupCommon();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupCommon",
    value: function SetupCommon() {
      this.slickFunction();
      this.headerProductFunction();
      this.footerFunction();
      this.PreOrderModalSetup(); // Smooth Scrolling

      this.SmoothScrollingSetup(); // Mobile Special Menu

      if (window.innerWidth <= 768) {
        this.SetupMobileCustomMenu();
      }
    }
  }, {
    key: "PreOrderModalSetup",
    value: function PreOrderModalSetup() {
      var _this = this;

      this.preOrderModal = $('#modal-preorder');
      this.$preOrderBtn = $('.pre-order-modal');
      this.$closePreOrderBtn = $('.close-preorder-modal');
      this.$preOrderBtn.on('click', function (e) {
        $('body').addClass('show-modal');

        _this.preOrderModal.addClass('active');
      });
      this.$closePreOrderBtn.on('click', function (e) {
        $('body').removeClass('show-modal');

        _this.preOrderModal.removeClass('active');
      });
    } // Smooth Scrolling Setup

  }, {
    key: "SmoothScrollingSetup",
    value: function SmoothScrollingSetup() {
      $('a[href*="#"]') // Remove links that don't actually link to anything
      .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();

              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

                $target.focus(); // Set focus again
              }

              ;
            });
          }
        }
      });
    }
  }, {
    key: "SetupMobileCustomMenu",
    value: function SetupMobileCustomMenu() {
      var _this2 = this;

      this.$customMenu = $('.custom-header');
      this.customMenuBlock = false;
      this.$customMenuNav = this.$customMenu.find('.custom-menu-list');
      this.$menuToggler = this.$customMenu.find('.mb-menu-toggle');
      this.$closeCustomMenu = $('.close-custom-menu');
      this.$menuToggler.on('click', function (e) {
        if (!_this2.customMenuBlock) {
          //Block Any Interaction While Animating
          _this2.customMenuBlock = true;

          if (_this2.$menuToggler.hasClass('is-show-menu')) {
            _this2.$menuToggler.removeClass('is-show-menu');

            _this2.$customMenuNav.slideUp('fast');
          } else {
            _this2.$menuToggler.addClass('is-show-menu');

            _this2.$customMenuNav.slideDown('fast');
          }

          setTimeout(function () {
            _this2.customMenuBlock = false;
          }, 250);
        }
      });
      this.$closeCustomMenu.on('click', function (e) {
        if (!_this2.customMenuBlock) {
          //Block Any Interaction While Animating
          _this2.customMenuBlock = true;

          _this2.$menuToggler.removeClass('is-show-menu');

          _this2.$customMenuNav.slideUp('fast');

          setTimeout(function () {
            _this2.customMenuBlock = false;
          }, 250);
        }
      });
    }
  }, {
    key: "headerProductFunction",
    value: function headerProductFunction() {
      if ($(window).width() > 767) {
        $('.header__list__product').hover(function () {
          $('#page-header').toggleClass('product-active');
        });
      } else {
        $('.header__list__product').click(function () {
          $(".nav-product").stop().slideToggle(300);
        });
      }

      $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('#page-header').toggleClass('menu-active');
        $(".header__list").stop().slideToggle(300);
        $('body').toggleClass('stop-scroll');
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $('#page-header').addClass('menu-scroll');
          $('.custom-header').addClass('menu-scroll');
        } else {
          $('#page-header').removeClass('menu-scroll');
          $('.custom-header').removeClass('menu-scroll');
        }
      });
    }
  }, {
    key: "footerFunction",
    value: function footerFunction() {
      $('#page-footer .footer__col').each(function () {
        var $thisCol = $(this);

        if ($(window).width() < 768) {
          $(this).find('h3').click(function () {
            $thisCol.find('ul').slideToggle(300);
            $(this).toggleClass('footer__col__ul--active');
          });
        }
      });
    }
  }, {
    key: "slickFunction",
    value: function slickFunction() {
      $('.top-slider .top-slider__wrap, .product-slide .product-slide__wrap').slick({
        dots: true
      });
      $('.nav-product__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
          breakpoint: 767,
          settings: "unslick"
        }]
      });
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(0);

var _specs = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Home =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Home() {
    _classCallCheck(this, Home);

    window.realme5iListener = new _utils.pageListener();
    var specs = new _specs.default();
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.LoadPageDetect();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "LoadPageDetect",
    value: function LoadPageDetect() {
      window.onload = function () {
        realme5iListener.emit('finished-load');
      };

      realme5iListener.on('finished-load', function () {
        $('body').removeClass('is-loading');
      });
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Specs =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Specs() {
    _classCallCheck(this, Specs);

    this.$phoneSelection = $('.phones-selection');
    this.$phoneColorImg = this.$phoneSelection.find('.phone-color-layout .phone-list .phone-item');
    this.$phoneColorItem = this.$phoneSelection.find('.phone-color-layout .color-indicator .color-item');
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Specs, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SelectPhoneColorSetup();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SelectPhoneColorSetup",
    value: function SelectPhoneColorSetup() {
      var _this = this;

      this.allowChangeColor = true;
      this.$phoneColorItem.on('click', function (e) {
        if (_this.allowChangeColor) {
          _this.allowChangeColor = false;
          var $clickItem = null;

          if ($(e.target).parents('.color-item').length > 0) {
            $clickItem = $(e.target).parents('.color-item');
          } else {
            $clickItem = $(e.target);
          }

          if (!$clickItem.hasClass('active')) {
            var switchTarget = $clickItem.data('target-item');
            var $switchPhone = $('.phone-color-layout .phone-item.' + switchTarget);

            _this.$phoneColorItem.removeClass('active');

            _this.$phoneColorImg.removeClass('active');

            $clickItem.addClass('active');
            $switchPhone.addClass('active');
            setTimeout(function () {
              _this.allowChangeColor = true;
            }, 150);
          }
        }
      });
    }
  }]);

  return Specs;
}();

exports.default = Specs;

/***/ })
/******/ ]);