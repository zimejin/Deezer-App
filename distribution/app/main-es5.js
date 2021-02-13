function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./components/components.module": ["./src/app/content/pages/components/components.module.ts", "default~components-components-module~src-app-content-pages-pages-module"],
      "src/app/content/pages/pages.module": ["./src/app/content/pages/pages.module.ts", "default~components-components-module~src-app-content-pages-pages-module", "src-app-content-pages-pages-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/menu-section/menu-section.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/menu-section/menu-section.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutAsideMenuSectionMenuSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"{{menuItem.page}}\">\n    <i [class]=\"menuItem.icon\"></i>\n    <span>{{menuItem.title}}</span>\n</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/footer/footer.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/footer/footer.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Begin | Footer [[ Find at scss/framework/base/footer/footer.scss ]] -->\n<footer id=\"footer\" class=\"bg-img\">\n    <div class=\"footer-content\">\n        <a class=\"email\">info@listenapp.com</a>\n        <div class=\"platform-btn-inline\">\n            <button *ngFor=\"let button of footerButtons\" [class]=\"button.classes\">\n                <i [class]=\"button.icon\"></i>\n                <span class=\"platform-btn-info\">\n                    <span class=\"platform-desc\">Available on</span>\n                    <span class=\"platform-name\">{{button.subtitle}}</span>\n                </span>\n            </button>\n        </div>\n    </div>\n</footer>\n<!-- End | Footer -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/header.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/header.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Begin | Header [[ Find at scss/framework/base/header/header.scss ]] -->\r\n<header id=\"header\" class=\"d-flex align-items-center {{headerClasses}}\">\r\n    <div class=\"position-relative d-flex align-items-center flex-grow-1\">\r\n        <button type=\"button\" class=\"btn toggle-menu mr-3\" id=\"openSidebar\" (click)=\"openSidebar()\">\r\n            <span *ngFor=\"let number of [0,1,2]\"></span>\r\n        </button>\r\n\r\n        <div id=\"searchForm\">\r\n            <div class=\"position-relative\">\r\n                <button type=\"button\" class=\"btn ion-ios-search\"></button>\r\n                <input type=\"text\" placeholder=\"Search...\" id=\"searchInput\" class=\"form-control\" (focus)=\"showSearchResults()\">\r\n            </div>\r\n            <app-search></app-search>\r\n        </div>\r\n\r\n        <!-- Begin | Header Options -->\r\n        <ul class=\"header-options d-flex align-items-center\">\r\n            <li>\r\n                <a href=\"javascript:;\" class=\"language\" (click)=\"openLanguagesModal()\">\r\n                    <span>{{language.title}}</span>\r\n                    <img [src]=\"language.image\" alt=\"\">\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <app-profile [user]=\"currentUser\"></app-profile>\r\n            </li>\r\n        </ul>\r\n        <!-- End | Header Options -->\r\n    </div>\r\n</header>\r\n<!-- End | Header -->\r\n\r\n<div class=\"backdrop header-backdrop\" (click)=\"hideSearchResults()\" #headerBackdrop></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/language/language.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/language/language.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutHeaderLanguageLanguageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog theme-dialog\" role=\"document\">\n    <div class=\"modal-content lang-content\">\n        <div class=\"modal-header\">\n          <div class=\"pr-3\">\n              <h5 class=\"modal-title mb-1\">Language</h5>\n              <p class=\"text-muted\">Select a range of your language(s) to listen music.</p>\n          </div>\n          <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            <ul class=\"language-list\">\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l1\" checked>\n                    <label for=\"l1\">English</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l2\">\n                    <label for=\"l2\">Hindi</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l3\">\n                    <label for=\"l3\">Spanish</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l4\">\n                    <label for=\"l4\">Italy</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l5\">\n                    <label for=\"l5\">Punjabi</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l6\">\n                    <label for=\"l6\">Tamil</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l7\">\n                    <label for=\"l7\">Germany</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l8\">\n                    <label for=\"l8\">French</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l9\">\n                    <label for=\"l9\">Telugu</label>\n                </li>\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l10\">\n                    <label for=\"l10\">Malayalam</label>\n                </li>\n            </ul>\n        </div>\n        <div class=\"modal-footer text-center d-block pb-4\">\n            <button type=\"button\" class=\"btn btn-primary btn-pill\" (click)=\"close()\">Select</button>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/login/login.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/login/login.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutHeaderLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog theme-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header border-bottom-0 pb-0\">\n            <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n        </div>\n        <h6 class=\"modal-title text-center mb-3\">Login For Awesome Listing Experience</h6>\n        <div class=\"modal-body\">\n            <form action=\"#\" [formGroup]=\"login\" class=\"mx-4 pb-5\" (ngSubmit)=\"submitLogin()\">\n                <div class=\"social-login\">\n                    <a href=\"javascript:void(0);\" class=\"w-100 btn btn-social btn-facebook btn-default-air\">\n                        <span class=\"btn-content\">\n                            <i class=\"ion-logo-facebook\"></i>\n                            <span class=\"pl-2\">Login With Facebook</span>\n                        </span>\n                    </a>\n                    <a href=\"javascript:void(0);\" class=\"w-100 mt-3 btn btn-social btn-google btn-default-air\">\n                        <span class=\"btn-content\">\n                            <i class=\"ion-logo-google\"></i>\n                            <span class=\"pl-2\">Login With Google</span>\n                        </span>\n                    </a>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" formControlName=\"userName\" id=\"userName\" class=\"form-control\"\n                           placeholder=\"Email Id\" required>\n                    <div class=\"invalid-feedback\" *ngIf=\"(formSubmitted && userName.invalid) &&\n                    (userName.dirty || userName.touched)\" ngClass=\"d-block\">\n                        <span *ngIf=\"userName.errors.required\">Please fill this field</span>\n                        <span *ngIf=\"userName.errors.email\">Filled email id not valid</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\"\n                           placeholder=\"Password\" minlength=\"4\" required>\n                    <div class=\"invalid-feedback\" *ngIf=\"(formSubmitted && password.invalid) &&\n                    (password.dirty || password.touched)\" ngClass=\"d-block\">\n                        <span *ngIf=\"password.errors.required\">Please fill this field</span>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-block btn-bold btn-air btn-info load-page\">Login</button>\n            </form>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/profile/profile.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/profile/profile.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutHeaderProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown fade-in\">\n    <a class=\"d-flex align-items-center py-2 text-white\" role=\"button\" (click)=\"closeSearchResult()\"\n       id=\"userMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"user?.name; else loginLink\">\n        <div class=\"avatar avatar-sm avatar-circle\"><img [src]=\"user.image\" alt=\"user\"></div>\n        <span class=\"pl-2\">{{user.name}}</span>\n    </a>\n    <ng-template #loginLink>\n        <a class=\"py-2 text-white\" (click)=\"openLoginModal()\">Sign In</a>\n    </ng-template>\n    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userMenu\">\n        <a class=\"dropdown-item\" *ngFor=\"let item of userMenu\" [routerLink]=\"item.page\">\n            <i [class]=\"item.icon\"></i>\n            <span>{{item.title}}</span>\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <div class=\"px-4 py-2\">\n            <button type=\"button\" class=\"btn btn-sm btn-air btn-pill btn-danger\">Logout</button>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/loader/loader.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/loader/loader.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentLayoutLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Begin | Loading [[ Find at scss/framework/base/loader/loader.scss ]] -->\n<div id=\"loading\" *ngIf=\"loading\">\n    <div class=\"loader\">\n        <div class=\"eq\">\n            <span class=\"eq-bar eq-bar--1\"></span>\n            <span class=\"eq-bar eq-bar--2\"></span>\n            <span class=\"eq-bar eq-bar--3\"></span>\n            <span class=\"eq-bar eq-bar--4\"></span>\n            <span class=\"eq-bar eq-bar--5\"></span>\n            <span class=\"eq-bar eq-bar--6\"></span>\n        </div>\n        <span class=\"text\">Loading</span>\n    </div>\n</div>\n<!-- End | Loading -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/comment/comment.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/comment/comment.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPartialsCommentCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Begin | Section [[ Find at scss/base/core.scss ]] -->\n<div class=\"section\">\n    <div class=\"mb-4\">\n        <div class=\"d-flex mb-3\">\n            <span>Rate:</span>\n            <div class=\"text-warning stars pl-2\">\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n          </div>\n        </div>\n        <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"5\" class=\"form-control\"></textarea>\n        <div class=\"text-right mt-2\">\n            <button class=\"btn btn-info\">Comment</button>\n        </div>\n    </div>\n    <div class=\"d-flex mb-4\">\n        <div class=\"avatar avatar-sm avatar-circle\">\n            <img src=\"../assets/images/users/thumb.jpg\" alt=\"\">\n        </div>\n        <div class=\"pl-3 flex-grow-1 flex-basis-0\">\n            <span class=\"d-block font-weight-bold mb-1\">Lorem ipsum dolor sit amet, consectetur adipisicing</span>\n            <div class=\"text-warning stars mb-2 font-md\">\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star-half-empty\"></i>\n            </div>\n            <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>\n            <a href=\"#\" class=\"btn p-0\"><i class=\"la la-reply\"></i> Reply</a>\n        </div>\n    </div>\n    <div class=\"ml-5 mb-4\">\n        <div class=\"d-flex mb-4\">\n            <div class=\"avatar avatar-sm avatar-circle\">\n                <img src=\"../assets/images/users/thumb.jpg\" alt=\"\">\n            </div>\n            <div class=\"pl-3 flex-grow-1 flex-basis-0\">\n                <span class=\"d-block font-weight-bold mb-1\">Lorem ipsum dolor sit amet, consectetur adipisicing</span>\n                <div class=\"text-warning stars mb-2 font-md\">\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star-half-empty\"></i>\n                </div>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"d-flex\">\n        <div class=\"avatar avatar-sm avatar-circle\">\n            <img src=\"../assets/images/users/thumb.jpg\" alt=\"\">\n        </div>\n        <div class=\"pl-3 flex-grow-1 flex-basis-0\">\n            <span class=\"d-block font-weight-bold mb-1\">Lorem ipsum dolor sit amet, consectetur adipisicing</span>\n            <div class=\"text-warning stars mb-2 font-md\">\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star-half-empty\"></i>\n            </div>\n            <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>\n            <a href=\"#\" class=\"btn p-0\"><i class=\"la la-reply\"></i> Reply</a>\n        </div>\n    </div>\n</div>\n<!-- End | Section -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/countdown/countdown.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/countdown/countdown.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPartialsCountdownCountdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"countdown\">\n    <div *ngFor=\"let time of display; let i = index\" class=\"measurements {{time}}\">\n        <p class=\"measurements-number\">\n            {{(showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}\n        </p>\n        <span *ngIf=\"display[i+1]\" class=\"divider\"> {{divider}} </span>\n        <p class=\"measurements-text\">\n            {{time}}\n        </p>\n    </div>\n</div>\n<ng-content></ng-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-card/event-card.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-card/event-card.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPartialsEventCardsEventCardEventCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class]=\"eventBorderRadiusClass\" [ngStyle]=\"{'background-image': 'url(' + musicEvent.image + ')'}\">\r\n    <div class=\"event-content p-4\">\r\n        <a [routerLink]=\"'/event/' + musicEvent.id + '/details'\"><h6>{{musicEvent.name}}</h6></a>\r\n        <div [innerHTML]=\"musicEvent.description | truncate\"></div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPartialsEventCardsEventCountdownCardEventCountdownCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class]=\"eventBorderRadiusClass\" [ngStyle]=\"{'background-image': 'url(' + musicEvent.image + ')'}\">\n    <div class=\"event-content p-4\">\n        <a [routerLink]=\"'/event/' + musicEvent.id + '/details'\"><h6>{{musicEvent.name}}</h6></a>\n        <div class=\"mb-3\">\n            <app-countdown [text]=\"countText\" [showZero]=\"'0'\" units=\"Days | Hours | Minutes | Seconds\"\n                       [end]=\"musicEvent.date\"></app-countdown>\n        </div>\n        <button type=\"button\" class=\"btn btn-bold btn-pill btn-air btn-warning btn-sm\">Buy Ticket</button>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-options/song-options.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-options/song-options.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPartialsSongOptionsSongOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a class=\"btn btn-icon-only w-auto h-auto\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <i [class]=\"icon\"></i>\n</a>\n<ul class=\"dropdown-menu\">\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" (click)=\"addFavorite()\">\n            <i class=\"la la-heart-o\"></i>\n            <span>Favorite</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" (click)=\"addToPlayList()\">\n            <i class=\"la la-plus\"></i>\n            <span>Add to Playlist</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a [href]=\"song?.url\" class=\"dropdown-link\" download>\n            <i class=\"la la-download\"></i>\n            <span>Download</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" (click)=\"shareSong()\">\n            <i class=\"la la-share-alt\"></i>\n            <span>Share</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" [routerLink]=\"'/song/' + song.id + '/details'\">\n            <i class=\"la la-info-circle\"></i>\n            <span>Song Info</span>\n        </a>\n    </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/theme-settings/theme-settings.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/theme-settings/theme-settings.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPartialsThemeSettingsThemeSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button\r\n  type=\"button\"\r\n  class=\"btn btn-pill btn-air btn-success btn-icon-only\"\r\n  (click)=\"openSettings()\"\r\n  id=\"customSettings\"\r\n>\r\n  <i class=\"ion-md-settings\"></i>\r\n</button>\r\n\r\n<div id=\"settingsWrapper\" #settingsWrapper>\r\n  <header>\r\n    <span class=\"title-bold font-md text-uppercase\">Theme Settings</span>\r\n    <a class=\"ml-auto\" (click)=\"closeSettings()\"\r\n      ><i class=\"ion-md-close\"></i\r\n    ></a>\r\n  </header>\r\n  <div class=\"theme-settings-body\">\r\n    <ul class=\"custom-list\">\r\n      <li class=\"custom-list&#45;&#45;item\">\r\n        <label for=\"to0\">Dark Theme</label>\r\n        <div class=\"custom-control custom-checkbox ml-auto\">\r\n          <input\r\n            type=\"checkbox\"\r\n            class=\"custom-control-input\"\r\n            id=\"to0\"\r\n            (change)=\"setThemeSkin($event)\"\r\n            [checked]=\"themeSkin.theme === 'dark'\"\r\n          />\r\n          <label class=\"custom-control-label\" for=\"to0\"></label>\r\n        </div>\r\n      </li>\r\n      <li class=\"custom-list-group--item-separator\"></li>\r\n      <li class=\"custom-list-group--item custom-list-group--item-header\">\r\n        Header Colors\r\n      </li>\r\n      <li class=\"custom-list--item\">\r\n        <a\r\n          *ngFor=\"let color of themeClass; let i = index\"\r\n          class=\"header-skin bg-{{ color }}\"\r\n          [ngClass]=\"i === config.config.themeSkin.header ? 'active' : ''\"\r\n          (click)=\"setHeaderSkin(i)\"\r\n        ></a>\r\n      </li>\r\n      <li class=\"custom-list-group--item-separator\"></li>\r\n      <li class=\"custom-list-group--item custom-list-group--item-header\">\r\n        Sidebar Colors\r\n      </li>\r\n      <li class=\"custom-list--item\">\r\n        <a\r\n          *ngFor=\"let color of themeClass; let i = index\"\r\n          class=\"header-skin bg-{{ color }}\"\r\n          [ngClass]=\"i === config.config.themeSkin.sidebar ? 'active' : ''\"\r\n          (click)=\"setSidebarSkin(i)\"\r\n        ></a>\r\n      </li>\r\n      <li class=\"custom-list-group--item-separator\"></li>\r\n      <li class=\"custom-list-group--item custom-list-group--item-header\">\r\n        Player Colors\r\n      </li>\r\n      <li class=\"custom-list--item\">\r\n        <a\r\n          *ngFor=\"let color of themeClass; let i = index\"\r\n          class=\"header-skin bg-{{ color }}\"\r\n          [ngClass]=\"i === config.config.themeSkin.player ? 'active' : ''\"\r\n          (click)=\"setPlayerSkin(i)\"\r\n        ></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: 'src/app/content/pages/pages.module#PagesModule'
    }, {
      path: '**',
      redirectTo: '404',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_deezer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/services/deezer-service */
    "./src/app/core/services/deezer-service.ts");
    /* harmony import */


    var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/services/loading.service */
    "./src/app/core/services/loading.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(loadingService, deezerAPIService) {
        _classCallCheck(this, AppComponent);

        this.loadingService = loadingService;
        this.deezerAPIService = deezerAPIService;
        this.title = "ng-deezer";
        this.loadingService.startLoading(); // Load the charts data from the microservice

        this.deezerAPIService.initialize();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }, {
        type: _core_services_deezer_service__WEBPACK_IMPORTED_MODULE_2__["DeezerService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: "\n    <!-- App loader -->\n    <app-loader></app-loader>\n    <!-- Router outlet to display routes -->\n    <router-outlet></router-outlet>\n  "
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _content_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./content/layout/layout.module */
    "./src/app/content/layout/layout.module.ts");
    /* harmony import */


    var _content_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./content/layout/loader/loader.component */
    "./src/app/content/layout/loader/loader.component.ts");
    /* harmony import */


    var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/services/loading.service */
    "./src/app/core/services/loading.service.ts");
    /* harmony import */


    var _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/services/menu-config.service */
    "./src/app/core/services/menu-config.service.ts");
    /* harmony import */


    var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/services/songs-config.service */
    "./src/app/core/services/songs-config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _content_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _content_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}, {}), // Instrumentation must be imported after importing StoreModule (config is optional)
      _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      })],
      providers: [_core_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_8__["MenuConfigService"], _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_9__["SongsConfigService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/config/albums.ts":
  /*!**********************************!*\
    !*** ./src/app/config/albums.ts ***!
    \**********************************/

  /*! exports provided: AlbumsConfig */

  /***/
  function srcAppConfigAlbumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumsConfig", function () {
      return AlbumsConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlbumsConfig = function AlbumsConfig() {
      _classCallCheck(this, AlbumsConfig);

      this.config = {};
      this.config = {
        items: [{
          id: 1,
          name: 'Mummy',
          ratings: 4.5,
          cover_art_url: './assets/images/cover/small/1.jpg',
          cover_url: './assets/images/cover/large/1.jpg'
        }, {
          id: 2,
          name: 'Hot Shot',
          ratings: 4,
          cover_art_url: './assets/images/cover/small/2.jpg',
          cover_url: './assets/images/cover/large/2.jpg'
        }, {
          id: 3,
          name: 'Own Way',
          ratings: 5,
          cover_art_url: './assets/images/cover/small/3.jpg',
          cover_url: './assets/images/cover/large/3.jpg'
        }, {
          id: 4,
          name: 'Say yes',
          ratings: 5,
          cover_art_url: './assets/images/cover/small/4.jpg',
          cover_url: './assets/images/cover/large/4.jpg'
        }, {
          id: 5,
          name: 'Letter',
          ratings: 3.5,
          cover_art_url: './assets/images/cover/small/5.jpg',
          cover_url: './assets/images/cover/large/5.jpg'
        }, {
          id: 6,
          name: 'Inside',
          ratings: 4,
          cover_art_url: './assets/images/cover/small/6.jpg',
          cover_url: './assets/images/cover/large/6.jpg'
        }, {
          id: 7,
          name: 'Find Soul',
          ratings: 4.5,
          cover_art_url: './assets/images/cover/small/7.jpg',
          cover_url: './assets/images/cover/large/7.jpg'
        }, {
          id: 8,
          name: 'Alone',
          ratings: 5,
          cover_art_url: './assets/images/cover/small/8.jpg',
          cover_url: './assets/images/cover/large/8.jpg'
        }]
      };
    };
    /***/

  },

  /***/
  "./src/app/config/artists.ts":
  /*!***********************************!*\
    !*** ./src/app/config/artists.ts ***!
    \***********************************/

  /*! exports provided: ArtistsConfig */

  /***/
  function srcAppConfigArtistsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistsConfig", function () {
      return ArtistsConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ArtistsConfig = function ArtistsConfig() {
      _classCallCheck(this, ArtistsConfig);

      this.config = {};
      this.config = {
        items: [{
          id: 1,
          name: 'Arebica Luna',
          dob: '20/12/1980',
          ratings: 4.5,
          cover_url: './assets/images/cover/large/1.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 2,
          name: 'Gerrina Linda',
          dob: '11/02/1988',
          ratings: 4,
          cover_url: './assets/images/cover/large/2.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 3,
          name: 'Zunira Willy',
          dob: '15/01/1991',
          ratings: 5,
          cover_url: './assets/images/cover/large/3.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 4,
          name: 'Johnny Marro',
          dob: '05/09/1976',
          ratings: 3.5,
          cover_url: './assets/images/cover/large/4.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 5,
          name: 'Jina Moore',
          dob: '12/06/1987',
          ratings: 4.5,
          cover_url: './assets/images/cover/large/5.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 6,
          name: 'Rasomi Pelina',
          dob: '18/04/1982',
          ratings: 4,
          cover_url: './assets/images/cover/large/6.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 7,
          name: 'Lenisa Gory',
          dob: '23/11/1989',
          ratings: 4.5,
          cover_url: './assets/images/cover/large/7.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }, {
          id: 8,
          name: 'Nutty Nina',
          dob: '27/10/1994',
          ratings: 4.5,
          cover_url: './assets/images/cover/large/8.jpg',
          bio: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>'
        }]
      };
    };
    /***/

  },

  /***/
  "./src/app/config/config.ts":
  /*!**********************************!*\
    !*** ./src/app/config/config.ts ***!
    \**********************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Config = function Config() {
      _classCallCheck(this, Config);

      this.config = {};
      this.config = {
        // Brand config
        brand: {
          logo: "https://cdns-files.dzcdn.net/cache/slash/images/common/logos/deezer_light.a087061697d2a623bb90b30241da46d0.png",
          name: "Ng-Deezer"
        },
        // Theme skin config
        themeSkin: {
          theme: "dark",
          header: 0,
          sidebar: 0,
          player: 0
        }
      };
    };

    Config.CURRENT_USER = "currentUser";
    Config.STAR = "la-star";
    Config.HALF_STAR = "la-star-half-empty";
    Config.THEME_CLASSES = ["primary", "danger", "success", "warning", "info", "brand", "dark"];
    Config.THEME_SKIN = "themeSkin";
    Config.classes = {
      show: "show",
      openSearch: "open-search",
      openSidebar: "open-sidebar",
      iconicSidebar: "iconic-sidebar"
    };
    /***/
  },

  /***/
  "./src/app/config/menu.ts":
  /*!********************************!*\
    !*** ./src/app/config/menu.ts ***!
    \********************************/

  /*! exports provided: MenuConfig */

  /***/
  function srcAppConfigMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuConfig", function () {
      return MenuConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MenuConfig = function MenuConfig() {
      _classCallCheck(this, MenuConfig);

      this.config = {};
      this.config = {
        aside: {
          items: [{
            section: "Browse Music"
          }, {
            title: "Explore",
            icon: "la la-home",
            page: "/home"
          }, {
            title: "Music",
            icon: "la la-music",
            page: "/music"
          }, {
            title: "Artists",
            icon: "la la-microphone",
            page: "/artists"
          }, {
            section: "Favourites",
            icon: "la la-heart-o"
          }, {
            title: "Favorite tracks",
            icon: "la la-heart-o",
            page: "/favorites"
          }]
        },
        userMenu: {
          items: [{
            title: "Profile",
            icon: "ion-md-contact",
            page: "/profile"
          }, {
            title: "Your Plan",
            icon: "ion-md-radio-button-off",
            page: "/plan"
          }, {
            title: "Settings",
            icon: "ion-md-settings",
            page: "/settings"
          }]
        }
      };
    };
    /***/

  },

  /***/
  "./src/app/config/playlist.ts":
  /*!************************************!*\
    !*** ./src/app/config/playlist.ts ***!
    \************************************/

  /*! exports provided: PlaylistConfig */

  /***/
  function srcAppConfigPlaylistTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistConfig", function () {
      return PlaylistConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PlaylistConfig = function PlaylistConfig() {
      _classCallCheck(this, PlaylistConfig);

      this.config = {};
      this.config = {
        items: [{
          id: 1,
          name: 'DJ Remix',
          cover_url: './assets/images/background/horizontal/1.jpg'
        }, {
          id: 2,
          name: 'Rock Band',
          cover_url: './assets/images/background/horizontal/2.jpg'
        }, {
          id: 3,
          name: 'Solo Special',
          cover_url: './assets/images/background/horizontal/3.jpg'
        }, {
          id: 4,
          name: 'Romantic',
          cover_url: './assets/images/background/horizontal/4.jpg'
        }, {
          id: 5,
          name: 'GYM',
          cover_url: './assets/images/background/horizontal/5.jpg'
        }, {
          id: 6,
          name: 'Retro Special',
          cover_url: './assets/images/background/horizontal/6.jpg'
        }]
      };
    };
    /***/

  },

  /***/
  "./src/app/config/songs.ts":
  /*!*********************************!*\
    !*** ./src/app/config/songs.ts ***!
    \*********************************/

  /*! exports provided: SongsConfig */

  /***/
  function srcAppConfigSongsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongsConfig", function () {
      return SongsConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SongsConfig = function SongsConfig() {
      _classCallCheck(this, SongsConfig);

      this.config = {};
      this.config = {
        items: [{
          id: 1,
          premium: true,
          name: 'I love you mummy',
          artist: 'Arebica Luna',
          album: 'Mummy',
          url: './assets/audio/ringtone-1.mp3',
          cover_art_url: './assets/images/cover/small/1.jpg',
          cover_url: './assets/images/cover/large/1.jpg',
          ratings: 4.5,
          composer: 'Arebica Luna',
          lyricist: 'Arebica Luna',
          director: 'Arebica Luna',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 2,
          favorite: true,
          name: 'Shack your butty',
          artist: 'Gerrina Linda',
          album: 'Hot Shot',
          url: './assets/audio/ringtone-2.mp3',
          cover_art_url: './assets/images/cover/small/2.jpg',
          cover_url: './assets/images/cover/large/2.jpg',
          ratings: 4,
          composer: 'Gerrina Linda',
          lyricist: 'Gerrina Linda',
          director: 'Gerrina Linda',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 3,
          premium: true,
          favorite: true,
          name: 'Do it your way(Female)',
          artist: 'Zunira Willy & Nutty Nina',
          album: 'Own Way',
          url: './assets/audio/ringtone-3.mp3',
          cover_art_url: './assets/images/cover/small/3.jpg',
          cover_url: './assets/images/cover/large/3.jpg',
          ratings: 5,
          composer: 'Zunira Willy & Nutty Nina',
          lyricist: 'Nutty Nina',
          director: 'Zunira Willy',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 4,
          name: 'Say yes',
          artist: 'Johnny Marro',
          album: 'Say yes',
          url: './assets/audio/ringtone-4.mp3',
          cover_art_url: './assets/images/cover/small/4.jpg',
          cover_url: './assets/images/cover/large/4.jpg',
          ratings: 3.5,
          composer: 'Johnny Marro',
          lyricist: 'Johnny Marro',
          director: 'Johnny Marro',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 5,
          favorite: true,
          name: 'Where is your letter',
          artist: 'Jina Moore & Lenisa Gory',
          album: 'Letter',
          url: './assets/audio/ringtone-5.mp3',
          cover_art_url: './assets/images/cover/small/5.jpg',
          cover_url: './assets/images/cover/large/5.jpg',
          ratings: 4.5,
          composer: 'Jina Moore & Lenisa Gory',
          lyricist: 'Lenisa Gory',
          director: 'Jina Moore',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 6,
          premium: true,
          name: 'Deep inside',
          artist: 'Pimila Holliwy',
          album: 'Inside',
          url: './assets/audio/ringtone-6.mp3',
          cover_art_url: './assets/images/cover/small/6.jpg',
          cover_url: './assets/images/cover/large/6.jpg',
          ratings: 4.5,
          composer: 'Pimila Holliwy, Arebica Luna',
          lyricist: 'Pimila Holliwy',
          director: 'Pimila Holliwy',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 7,
          premium: true,
          name: 'Hey not me',
          artist: 'Rasomi Pelina',
          album: 'Find Soul',
          url: './assets/audio/ringtone-7.mp3',
          cover_art_url: './assets/images/cover/small/7.jpg',
          cover_url: './assets/images/cover/large/7.jpg',
          ratings: 5,
          composer: 'Rasomi Pelina',
          lyricist: 'Rasomi Pelina',
          director: 'Rasomi Pelina',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }, {
          id: 8,
          premium: true,
          name: 'Alone in the sky',
          artist: 'Luna Short',
          album: 'Alone',
          url: './assets/audio/ringtone-8.mp3',
          cover_art_url: './assets/images/cover/small/8.jpg',
          cover_url: './assets/images/cover/large/8.jpg',
          ratings: 4,
          composer: 'Luna Short',
          lyricist: 'Luna Short',
          director: 'Arebica Luna',
          downloads: '10,234,014',
          lyrics: '<p>This one\'s for you Mrs Van De Kamp!</p><p>My love for you is like the most brave aubergine, <br>Your face reminds me of repugnant goats, <br>Together, we are like bread rolls and olive oil.</p><p>Oh darling Nigel, <br>My brave aubergine, <br>My repugnant onion, <br>The perfect companion to my bread rolls soul.</p><p>Poppies are red, <br>Kingfishers are blue, <br>I like drinking tequila, <br>But not as much as I love crashing with you!</p><p>Oh darling Nigel, <br>Your cheeks are like clean rakes on a summer day, <br>You\'re like the most super barman to ever walk Hull.</p><p>Your repugnant goat face, <br>Your olive oil soul, <br>Your clean cheeks, <br>Your super barman being...</p><p>How could I look at another when our brave aubergine love is so strong?</p><p>I love you Mrs Van De Kamp!</p>'
        }]
      };
    };
    /***/

  },

  /***/
  "./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AsideLeftHeaderComponent */

  /***/
  function srcAppContentLayoutAsideAsideLeftAsideLeftHeaderAsideLeftHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideLeftHeaderComponent", function () {
      return AsideLeftHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var AsideLeftHeaderComponent = /*#__PURE__*/function () {
      function AsideLeftHeaderComponent(document, sanitized) {
        _classCallCheck(this, AsideLeftHeaderComponent);

        this.document = document;
        this.sanitized = sanitized;
        this.brand = {};
        this.config = new _config_config__WEBPACK_IMPORTED_MODULE_2__["Config"]();
        this.brand = this.config.config.brand;
      }

      _createClass(AsideLeftHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleIconicSidebar",
        value: function toggleIconicSidebar() {
          if (this.document.body.classList.contains(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.iconicSidebar)) {
            this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.iconicSidebar);
          } else {
            this.document.body.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.iconicSidebar);
          }
        }
      }, {
        key: "hideSidebar",
        value: function hideSidebar() {
          this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.openSidebar);
        }
      }]);

      return AsideLeftHeaderComponent;
    }();

    AsideLeftHeaderComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    AsideLeftHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-aside-left-header",
      template: "\n    <div class=\"sidebar-header d-flex align-items-center\">\n      <a routerLink=\"/home\" class=\"brand\" (click)=\"hideSidebar()\">\n        <img\n          [src]=\"brand.logo\"\n          alt=\"{{ sanitized.bypassSecurityTrustHtml(brand.name) }}\"\n        />\n      </a>\n\n      <button\n        type=\"button\"\n        class=\"btn p-0 ml-auto\"\n        id=\"hideSidebar\"\n        (click)=\"hideSidebar()\"\n      >\n        <i class=\"ion-md-arrow-back h3\"></i>\n      </button>\n\n      <button\n        type=\"button\"\n        class=\"btn toggle-menu\"\n        (click)=\"toggleIconicSidebar()\"\n      >\n        <span *ngFor=\"let number of [0, 1, 2]\"></span>\n      </button>\n    </div>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))], AsideLeftHeaderComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/aside/aside-left/aside-left.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/content/layout/aside/aside-left/aside-left.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AsideLeftComponent */

  /***/
  function srcAppContentLayoutAsideAsideLeftAsideLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideLeftComponent", function () {
      return AsideLeftComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services/menu-config.service */
    "./src/app/core/services/menu-config.service.ts");
    /* harmony import */


    var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/services/skin.service */
    "./src/app/core/services/skin.service.ts");
    /* harmony import */


    var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../core/services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AsideLeftComponent = /*#__PURE__*/function () {
      function AsideLeftComponent(document, menuConfigService, localStorageService, skinService) {
        _classCallCheck(this, AsideLeftComponent);

        this.document = document;
        this.menuConfigService = menuConfigService;
        this.localStorageService = localStorageService;
        this.skinService = skinService;
        this.menuItems = [];
        this.asideFooterButton = {};
        this.sidebarClass = "sidebar-primary";
        this.menuItems = this.menuConfigService.menuItems;
        this.asideFooterButton = {
          icon: "ion-md-musical-note",
          title: "Add Music"
        };
      }

      _createClass(AsideLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var themeSkin = this.localStorageService.getThemeSkin();

          if (themeSkin) {
            this.sidebarClass = "sidebar-" + _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].THEME_CLASSES[themeSkin.sidebar];
          }

          this.skinSubscription = this.skinService.themeSkin.subscribe(function (skin) {
            if (skin) {
              _this.sidebarClass = "sidebar-" + _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].THEME_CLASSES[skin.sidebar];
            }
          });
        }
      }, {
        key: "hideSidebar",
        value: function hideSidebar() {
          this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].classes.openSidebar);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.skinSubscription.unsubscribe();
        }
      }]);

      return AsideLeftComponent;
    }();

    AsideLeftComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }, {
        type: _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfigService"]
      }, {
        type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__["SkinService"]
      }];
    };

    AsideLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-aside-left",
      template: "\n    <aside id=\"sidebar\" [class]=\"sidebarClass\">\n      <app-aside-left-header></app-aside-left-header>\n\n      <nav class=\"navbar\">\n        <perfect-scrollbar class=\"navbar-nav\">\n          <ul class=\"navbar-nav\">\n            <li\n              class=\"nav-item\"\n              *ngFor=\"let item of menuItems\"\n              [ngClass]=\"item.section ? 'nav-header' : ''\"\n              (click)=\"hideSidebar()\"\n            >\n              <ng-container *ngIf=\"item.section; else menuSection\">\n                <i [class]=\"item.icon\"></i>\n                <span> {{ item.section }}</span>\n              </ng-container>\n\n              <ng-template #menuSection>\n                <app-menu-section [menuItem]=\"item\"></app-menu-section>\n              </ng-template>\n            </li>\n          </ul>\n        </perfect-scrollbar>\n      </nav>\n\n      <div class=\"sidebar-footer\">\n        <button\n          type=\"button\"\n          routerLink=\"/add-music\"\n          class=\"btn btn-block btn-success btn-air btn-bold\"\n          (click)=\"hideSidebar()\"\n        >\n          <i [class]=\"asideFooterButton.icon\"></i>\n          <span>{{ asideFooterButton.title }}</span>\n        </button>\n      </div>\n    </aside>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))], AsideLeftComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/aside/aside-right/aside-right.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/content/layout/aside/aside-right/aside-right.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AsideRightComponent */

  /***/
  function srcAppContentLayoutAsideAsideRightAsideRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideRightComponent", function () {
      return AsideRightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_playlist_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services/playlist-config.service */
    "./src/app/core/services/playlist-config.service.ts");
    /* harmony import */


    var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/services/songs-config.service */
    "./src/app/core/services/songs-config.service.ts");

    var AsideRightComponent = /*#__PURE__*/function () {
      function AsideRightComponent(playlistConfigService, songsConfigService) {
        _classCallCheck(this, AsideRightComponent);

        this.playlistConfigService = playlistConfigService;
        this.songsConfigService = songsConfigService;
        this.id = "rightSidebar";
        this.playlist = {};
      }

      _createClass(AsideRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.setDefaultPlaylist();
          this.playlistSubscription = this.playlistConfigService.currentPlaylist.subscribe(function (playlist) {
            _this2.playlist = playlist;
          });
        }
      }, {
        key: "setDefaultPlaylist",
        value: function setDefaultPlaylist() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.songsConfigService.songsList;

                  case 2:
                    _context.t0 = _context.sent;
                    this.playlist = {
                      id: 1,
                      name: "Listen Special",
                      cover_url: "./assets/images/background/horizontal/1.jpg",
                      songs: _context.t0
                    };

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.playlistSubscription.unsubscribe();
        }
      }]);

      return AsideRightComponent;
    }();

    AsideRightComponent.ctorParameters = function () {
      return [{
        type: _core_services_playlist_config_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistConfigService"]
      }, {
        type: _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__["SongsConfigService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("id")], AsideRightComponent.prototype, "id", void 0);
    AsideRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-aside-right",
      template: "\n    <div class=\"right-sidebar-header\">\n      {{ playlist.name ? playlist.name : \"Playlist Name\" }}\n    </div>\n    <perfect-scrollbar class=\"right-sidebar-body\">\n      <ul\n        class=\"list-group list-group-flush song-list\"\n        *ngIf=\"playlist.songs; else noDataFound\"\n      >\n        <!-- Begin | Custom List Item -->\n        <li\n          class=\"custom-list--item list-group-item\"\n          *ngFor=\"let song of playlist.songs; let i = index\"\n        >\n          <app-song-list-view\n            [songNumber]=\"i + 1\"\n            [song]=\"song\"\n            [icon]=\"'la-ellipsis-h'\"\n            [playlist]=\"playlist\"\n            [songIndex]=\"i\"\n          >\n          </app-song-list-view>\n        </li>\n        <!-- End | Custom List Item -->\n      </ul>\n      <ng-template #noDataFound></ng-template>\n    </perfect-scrollbar>\n  "
    })], AsideRightComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/aside/menu-section/menu-section.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/content/layout/aside/menu-section/menu-section.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MenuSectionComponent */

  /***/
  function srcAppContentLayoutAsideMenuSectionMenuSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuSectionComponent", function () {
      return MenuSectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuSectionComponent = /*#__PURE__*/function () {
      function MenuSectionComponent() {
        _classCallCheck(this, MenuSectionComponent);

        this.menuItem = {};
      }

      _createClass(MenuSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuSectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MenuSectionComponent.prototype, "menuItem", void 0);
    MenuSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-section',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/menu-section/menu-section.component.html"))["default"]
    })], MenuSectionComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/footer/footer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/content/layout/footer/footer.component.ts ***!
    \***********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppContentLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.footerButtons = [{
          classes: 'btn btn-dark btn-air platform-btn',
          icon: 'ion-logo-android',
          subtitle: 'Android'
        }, {
          classes: 'btn btn-danger btn-air platform-btn',
          icon: 'ion-logo-apple',
          subtitle: 'App Store'
        }];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/footer/footer.component.html"))["default"]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/header/header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/content/layout/header/header.component.ts ***!
    \***********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppContentLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */


    var _language_language_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./language/language.component */
    "./src/app/content/layout/header/language/language.component.ts");
    /* harmony import */


    var _core_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/search.service */
    "./src/app/core/services/search.service.ts");
    /* harmony import */


    var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../core/services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../core/services/skin.service */
    "./src/app/core/services/skin.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../config/config */
    "./src/app/config/config.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(document, searchService, simpleModalService, localStorageService, skinService) {
        _classCallCheck(this, HeaderComponent);

        this.document = document;
        this.searchService = searchService;
        this.simpleModalService = simpleModalService;
        this.localStorageService = localStorageService;
        this.skinService = skinService;
        this.headerClasses = 'bg-primary';
        this.language = {};
        this.currentUser = {};
        this.language = {
          title: 'Language',
          image: './assets/images/svg/translate.svg'
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.currentUser = this.localStorageService.getCurrentUser();
          var themeSkin = this.localStorageService.getThemeSkin();

          if (themeSkin) {
            this.headerClasses = 'bg-' + _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].THEME_CLASSES[themeSkin.header];
          }

          this.searchSubscription = this.searchService.searchStatus.subscribe(function (value) {
            if (value) {
              _this3.hideSearchResults();
            }
          });
          this.skinSubscription = this.skinService.themeSkin.subscribe(function (skin) {
            if (skin) {
              _this3.headerClasses = 'bg-' + _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].THEME_CLASSES[skin.header];
            }
          });
        }
      }, {
        key: "showSearchResults",
        value: function showSearchResults() {
          this.document.body.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.openSearch);
          this.backdrop.nativeElement.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.show);
        }
      }, {
        key: "hideSearchResults",
        value: function hideSearchResults() {
          this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.openSearch);
          this.backdrop.nativeElement.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.show);
        }
      }, {
        key: "openLanguagesModal",
        value: function openLanguagesModal() {
          this.hideSearchResults();
          var modal = this.simpleModalService.addModal(_language_language_component__WEBPACK_IMPORTED_MODULE_4__["LanguageComponent"], {}).subscribe(function (isConfirmed) {
            if (isConfirmed) {} else {}
          });
        }
      }, {
        key: "openSidebar",
        value: function openSidebar() {
          this.document.body.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.openSidebar);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.searchSubscription.unsubscribe();
          this.skinSubscription.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__["SimpleModalService"]
      }, {
        type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
      }, {
        type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_7__["SkinService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerBackdrop', {
      "static": false
    })], HeaderComponent.prototype, "backdrop", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/header.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/header/language/language.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/content/layout/header/language/language.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LanguageComponent */

  /***/
  function srcAppContentLayoutHeaderLanguageLanguageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageComponent", function () {
      return LanguageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var LanguageComponent = /*#__PURE__*/function (_ngx_simple_modal__WE) {
      _inherits(LanguageComponent, _ngx_simple_modal__WE);

      var _super = _createSuper(LanguageComponent);

      function LanguageComponent() {
        _classCallCheck(this, LanguageComponent);

        return _super.call(this);
      }

      _createClass(LanguageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LanguageComponent;
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);

    LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./language.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/language/language.component.html"))["default"]
    })], LanguageComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/header/login/login.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/content/layout/header/login/login.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppContentLayoutHeaderLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */


    var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../core/services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../config/config */
    "./src/app/config/config.ts");

    var LoginComponent = /*#__PURE__*/function (_ngx_simple_modal__WE2) {
      _inherits(LoginComponent, _ngx_simple_modal__WE2);

      var _super2 = _createSuper(LoginComponent);

      function LoginComponent(localStorageService) {
        var _this4;

        _classCallCheck(this, LoginComponent);

        _this4 = _super2.call(this);
        _this4.localStorageService = localStorageService;
        _this4.formSubmitted = false;
        return _this4;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('listen_app@kri8thm.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123456789', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "submitLogin",
        value: function submitLogin() {
          this.formSubmitted = true;

          if (this.login.invalid) {
            return false;
          } // You can replace this object with your user object


          var user = {
            id: 1,
            role: 'ADMIN',
            userName: this.login.controls.userName.value,
            image: './assets/images/users/thumb.jpg',
            name: 'Halo Admin'
          };
          this.localStorageService.setLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].CURRENT_USER, user);
          this.close();
        }
      }, {
        key: "userName",
        get: function get() {
          return this.login.get('userName');
        }
      }, {
        key: "password",
        get: function get() {
          return this.login.get('password');
        }
      }]);

      return LoginComponent;
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__["SimpleModalComponent"]);

    LoginComponent.ctorParameters = function () {
      return [{
        type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/login/login.component.html"))["default"]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/header/profile/profile.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/content/layout/header/profile/profile.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppContentLayoutHeaderProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services/menu-config.service */
    "./src/app/core/services/menu-config.service.ts");
    /* harmony import */


    var _core_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/services/search.service */
    "./src/app/core/services/search.service.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/content/layout/header/login/login.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(searchService, menuConfigService, simpleModalService) {
        _classCallCheck(this, ProfileComponent);

        this.searchService = searchService;
        this.menuConfigService = menuConfigService;
        this.simpleModalService = simpleModalService;
        this.user = {};
        this.userMenu = [];
        this.userMenu = this.menuConfigService.userMenuItems;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeSearchResult",
        value: function closeSearchResult() {
          this.searchService.hideSearchResult();
        }
      }, {
        key: "openLoginModal",
        value: function openLoginModal() {
          this.closeSearchResult();
          var modal = this.simpleModalService.addModal(_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], {}).subscribe(function (isConfirmed) {
            if (isConfirmed) {} else {}
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfigService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_5__["SimpleModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/profile/profile.component.html"))["default"]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/header/search/search.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/content/layout/header/search/search.component.ts ***!
    \******************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppContentLayoutHeaderSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../core/services/songs-config.service */
    "./src/app/core/services/songs-config.service.ts");
    /* harmony import */


    var _core_services_albums_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../core/services/albums-config.service */
    "./src/app/core/services/albums-config.service.ts");
    /* harmony import */


    var _core_services_artists_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../core/services/artists-config.service */
    "./src/app/core/services/artists-config.service.ts");
    /* harmony import */


    var _core_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../core/services/search.service */
    "./src/app/core/services/search.service.ts");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(router, songsConfigService, albumsConfigService, artistsConfigService, searchService) {
        _classCallCheck(this, SearchComponent);

        this.router = router;
        this.songsConfigService = songsConfigService;
        this.albumsConfigService = albumsConfigService;
        this.artistsConfigService = artistsConfigService;
        this.searchService = searchService;
        this.songsList = [];
        this.albumsList = [];
        this.artistsList = [];
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.songsList = this.songsConfigService.songsList;
          this.songsList = this.songsList.slice(0, 3);
          this.albumsList = this.albumsConfigService.albumsList;
          this.albumsList = this.albumsList.slice(2, 5);
          this.artistsList = this.artistsConfigService.artistsList;
          this.artistsList = this.artistsList.slice(0, 6);
        }
      }, {
        key: "goToPage",
        value: function goToPage(page) {
          page = "/" + page;
          this.searchService.hideSearchResult();
          this.router.navigate([page]);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__["SongsConfigService"]
      }, {
        type: _core_services_albums_config_service__WEBPACK_IMPORTED_MODULE_4__["AlbumsConfigService"]
      }, {
        type: _core_services_artists_config_service__WEBPACK_IMPORTED_MODULE_5__["ArtistsConfigService"]
      }, {
        type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-search",
      template: "\n    <!-- Begin | Search Card [[ Find at scss/framework/base/search/search.scss ]] -->\n    <div class=\"search-card\">\n      <perfect-scrollbar>\n        <!-- Begin | Search Result List -->\n        <div class=\"search-item\">\n          <div class=\"search-item-header\">\n            <span class=\"search-item-title\">Artists</span>\n            <a class=\"search-item-link ml-auto\" (click)=\"goToPage('artists')\"\n              >View All</a\n            >\n          </div>\n          <div class=\"search-item-body row\">\n            <div\n              class=\"col-xl-2 col-md-4 col-6\"\n              *ngFor=\"let artist of artistsList\"\n            >\n              <app-image-card\n                [item]=\"artist\"\n                [imageBorderRadiusClass]=\"'card-img--radius-md'\"\n                [routeLink]=\"'/artist/' + artist.id + '/details'\"\n              ></app-image-card>\n            </div>\n          </div>\n        </div>\n        <!-- End | Search Result List -->\n\n        <!-- Begin | Search Result List -->\n        <div class=\"search-item\">\n          <div class=\"search-item-header\">\n            <span class=\"search-item-title\">Track</span>\n            <a class=\"search-item-link ml-auto\" (click)=\"goToPage('songs')\"\n              >View All</a\n            >\n          </div>\n          <div class=\"search-item-body row\">\n            <div\n              class=\"col-xl-4 col-sm-6 col-12\"\n              *ngFor=\"let song of songsList\"\n            >\n              <app-song-horizontal\n                [song]=\"song\"\n                class=\"song-h song-h--sm\"\n              ></app-song-horizontal>\n            </div>\n          </div>\n        </div>\n        <!-- End | Search Result List -->\n\n        <!-- Begin | Search Result List -->\n        <div class=\"search-item\">\n          <div class=\"search-item-header\">\n            <span class=\"search-item-title\">Albums</span>\n            <a class=\"search-item-link ml-auto\" (click)=\"goToPage('albums')\"\n              >View All</a\n            >\n          </div>\n          <div class=\"search-item-body row\">\n            <div\n              class=\"col-xl-4 col-sm-6 col-12\"\n              *ngFor=\"let album of albumsList\"\n            >\n              <app-song-horizontal\n                [song]=\"album\"\n                class=\"song-h song-h--sm\"\n                [routeLink]=\"'/album/' + album.id + '/details'\"\n              ></app-song-horizontal>\n            </div>\n          </div>\n        </div>\n        <!-- End | Search Result List -->\n      </perfect-scrollbar>\n    </div>\n    <!-- End | Search Card -->\n  "
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/layout.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/content/layout/layout.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppContentLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */


    var _aside_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./aside/aside-left/aside-left.component */
    "./src/app/content/layout/aside/aside-left/aside-left.component.ts");
    /* harmony import */


    var _aside_aside_left_aside_left_header_aside_left_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./aside/aside-left/aside-left-header/aside-left-header.component */
    "./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.ts");
    /* harmony import */


    var _aside_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./aside/menu-section/menu-section.component */
    "./src/app/content/layout/aside/menu-section/menu-section.component.ts");
    /* harmony import */


    var _aside_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./aside/aside-right/aside-right.component */
    "./src/app/content/layout/aside/aside-right/aside-right.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/content/layout/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/content/layout/footer/footer.component.ts");
    /* harmony import */


    var _player_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./player/player.component */
    "./src/app/content/layout/player/player.component.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/content/layout/section/section.component.ts");
    /* harmony import */


    var _partials_partials_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../partials/partials.module */
    "./src/app/content/partials/partials.module.ts");
    /* harmony import */


    var _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./header/profile/profile.component */
    "./src/app/content/layout/header/profile/profile.component.ts");
    /* harmony import */


    var _header_language_language_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./header/language/language.component */
    "./src/app/content/layout/header/language/language.component.ts");
    /* harmony import */


    var _header_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header/search/search.component */
    "./src/app/content/layout/header/search/search.component.ts");
    /* harmony import */


    var _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./header/login/login.component */
    "./src/app/content/layout/header/login/login.component.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_aside_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__["AsideLeftComponent"], _aside_aside_left_aside_left_header_aside_left_header_component__WEBPACK_IMPORTED_MODULE_9__["AsideLeftHeaderComponent"], _aside_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_11__["AsideRightComponent"], _aside_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__["MenuSectionComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_14__["PlayerComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"], _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"], _header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"], _header_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"], _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]],
      exports: [_aside_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__["AsideLeftComponent"], _aside_aside_left_aside_left_header_aside_left_header_component__WEBPACK_IMPORTED_MODULE_9__["AsideLeftHeaderComponent"], _aside_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_11__["AsideRightComponent"], _aside_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__["MenuSectionComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _player_player_component__WEBPACK_IMPORTED_MODULE_14__["PlayerComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"], _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"], _header_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"], _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"], _partials_partials_module__WEBPACK_IMPORTED_MODULE_16__["PartialsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalModule"].forRoot({
        container: document.body
      })],
      entryComponents: [_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"], _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, {
        provide: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["DefaultSimpleModalOptionConfig"],
        useValue: Object.assign({}, ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["defaultSimpleModalOptions"], {
          wrapperDefaultClasses: 'simple-modal modal fade',
          wrapperClass: 'show',
          closeOnEscape: true,
          closeOnClickOutside: true,
          animationDuration: 1000
        })
      }]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/content/layout/loader/loader.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/content/layout/loader/loader.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppContentLayoutLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/loading.service */
    "./src/app/core/services/loading.service.ts");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent(loadingService) {
        _classCallCheck(this, LoaderComponent);

        this.loadingService = loadingService;
        this.loading = false;
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.loadingSubscription = this.loadingService.loadingStatus.subscribe(function (value) {
            _this5.loading = value;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.loadingSubscription.unsubscribe();
        }
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }];
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/loader/loader.component.html"))["default"]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/player/player.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/content/layout/player/player.component.ts ***!
    \***********************************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppContentLayoutPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/songs-config.service */
    "./src/app/core/services/songs-config.service.ts");
    /* harmony import */


    var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/skin.service */
    "./src/app/core/services/skin.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../config/config */
    "./src/app/config/config.ts");
    /* harmony import */


    var amplitudejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! amplitudejs */
    "./node_modules/amplitudejs/dist/amplitude.js");
    /* harmony import */


    var amplitudejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(amplitudejs__WEBPACK_IMPORTED_MODULE_7__);

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent(document, localStorageService, songsConfigService, skinService) {
        _classCallCheck(this, PlayerComponent);

        this.document = document;
        this.localStorageService = localStorageService;
        this.songsConfigService = songsConfigService;
        this.skinService = skinService;
        this.song = {};
        this.volumeIcon = "ion-md-volume-low";
        this.showPlaylist = "open-right-sidebar";
        this.playerClass = "player-primary";
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.song = this.songsConfigService.defaultSong;
          amplitudejs__WEBPACK_IMPORTED_MODULE_7__["init"]({
            songs: [this.song]
          });
          var themeSkin = this.localStorageService.getThemeSkin();

          if (themeSkin) {
            this.playerClass = "player-" + _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].THEME_CLASSES[themeSkin.player];
          }

          this.skinSubscription = this.skinService.themeSkin.subscribe(function (skin) {
            if (skin) {
              _this6.playerClass = "player-" + _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].THEME_CLASSES[skin.player];
            }
          });
        }
      }, {
        key: "changeVolumeIcon",
        value: function changeVolumeIcon(event) {
          var value = event.target.value;

          if (value < 1) {
            this.volumeIcon = "ion-md-volume-mute";
          } else if (value > 0 && value < 70) {
            this.volumeIcon = "ion-md-volume-low";
          } else if (value > 70) {
            this.volumeIcon = "ion-md-volume-high";
          }
        }
      }, {
        key: "openPlaylist",
        value: function openPlaylist() {
          if (this.document.body.classList.contains(this.showPlaylist)) {
            this.document.body.classList.remove(this.showPlaylist);
          } else {
            this.document.body.classList.add(this.showPlaylist);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.skinSubscription.unsubscribe();
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
      }, {
        type: _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__["SongsConfigService"]
      }, {
        type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_5__["SkinService"]
      }];
    };

    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-player",
      template: "\n    <!-- Begin | Audio Player [[ Find at scss/framework/base/audio-player/audio-player.scss ]] -->\n    <div id=\"audioPlayer\" [class]=\"playerClass\">\n      <!-- Begin | Audio Player Progress -->\n      <div id=\"progress-container\">\n        <input type=\"range\" class=\"amplitude-song-slider\" />\n        <progress\n          class=\"audio-progress audio-progress--played amplitude-song-played-progress\"\n        ></progress>\n        <progress\n          class=\"audio-progress audio-progress--buffered amplitude-buffered-progress\"\n          value=\"0\"\n        ></progress>\n      </div>\n      <!-- End | Audio Player Progress -->\n\n      <!-- Begin | Audio -->\n      <div class=\"audio\">\n        <div class=\"song-image\">\n          <img\n            data-amplitude-song-info=\"cover_art_url\"\n            [src]=\"song?.cover_art_url\"\n            alt=\"\"\n          />\n        </div>\n        <div class=\"song-info pl-3\">\n          <span\n            class=\"song-name d-inline-block text-truncate\"\n            data-amplitude-song-info=\"name\"\n          ></span>\n          <span\n            class=\"song-artists d-block text-muted\"\n            data-amplitude-song-info=\"artist\"\n          ></span>\n        </div>\n      </div>\n      <!-- End | Audio -->\n\n      <!-- Begin | Audio Controls -->\n      <div class=\"audio-controls\">\n        <div class=\"audio-controls--left d-flex mr-auto\">\n          <button class=\"btn btn-icon-only amplitude-repeat\">\n            <i class=\"ion-md-sync\"></i>\n          </button>\n        </div>\n        <div class=\"audio-controls--main d-flex\">\n          <button class=\"btn btn-icon-only amplitude-prev\">\n            <i class=\"ion-md-skip-backward\"></i>\n          </button>\n          <button\n            class=\"btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause\"\n          >\n            <i class=\"ion-md-play\"></i>\n            <i class=\"ion-md-pause\"></i>\n          </button>\n          <button class=\"btn btn-icon-only amplitude-next\">\n            <i class=\"ion-md-skip-forward\"></i>\n          </button>\n        </div>\n        <div class=\"audio-controls--right d-flex ml-auto\">\n          <button\n            class=\"btn btn-icon-only amplitude-shuffle amplitude-shuffle-off\"\n          >\n            <i class=\"ion-md-shuffle\"></i>\n          </button>\n        </div>\n      </div>\n      <!-- End | Audio Controls -->\n\n      <!-- Begin | Audio Info -->\n      <div class=\"audio-info d-flex align-items-center pr-4\">\n        <span class=\"mr-4\">\n          <span class=\"amplitude-current-minutes\"></span>:<span\n            class=\"amplitude-current-seconds\"\n          ></span>\n          / <span class=\"amplitude-duration-minutes\"></span>:<span\n            class=\"amplitude-duration-seconds\"\n          ></span>\n        </span>\n        <div class=\"audio-volume dropdown\">\n          <button\n            class=\"btn btn-icon-only\"\n            data-toggle=\"dropdown\"\n            aria-haspopup=\"true\"\n            aria-expanded=\"false\"\n          >\n            <i [class]=\"volumeIcon\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right volume-dropdown-menu\">\n            <input\n              type=\"range\"\n              class=\"amplitude-volume-slider\"\n              value=\"100\"\n              (change)=\"changeVolumeIcon($event)\"\n            />\n          </div>\n        </div>\n\n        <!-- Song options -->\n        <app-song-options\n          [icon]=\"'la-ellipsis-v'\"\n          [song]=\"song\"\n        ></app-song-options>\n\n        <button class=\"btn btn-icon-only\" (click)=\"openPlaylist()\">\n          <i class=\"ion-md-musical-note\"></i>\n        </button>\n      </div>\n      <!-- End | Audio Info -->\n    </div>\n    <!-- End | Audio Player -->\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], PlayerComponent);
    /***/
  },

  /***/
  "./src/app/content/layout/section/section.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/content/layout/section/section.component.ts ***!
    \*************************************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppContentLayoutSectionSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent() {
        _classCallCheck(this, SectionComponent);

        this.classes = "carousel";
        this.section = {};
        this.imageCard = false;
        this.primaryCard = false;
        this.secondaryCard = false;
        this.showImageOptions = false;
        this.imageBorderRadiusClass = "card-img--radius-lg";
        this.fourSlideCarousel = false;
        this.artistRouteLink = false;
        this.sliderConfig = {};
      }

      _createClass(SectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var prev = '<button class="btn-prev btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-left"></i></button>';
          var next = '<button class="btn-next btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-right"></i></button>';
          this.sliderConfig = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: this.fourSlideCarousel ? 4 : 6,
            slidesToScroll: 2,
            speed: 1000,
            prevArrow: prev,
            nextArrow: next,
            autoplay: true,
            // Breakpoints
            responsive: [{
              breakpoint: 1440,
              settings: {
                slidesToShow: this.fourSlideCarousel ? 4 : 5
              }
            }, {
              breakpoint: 1200,
              settings: {
                slidesToShow: this.fourSlideCarousel ? 2 : 3
              }
            }, {
              breakpoint: 640,
              settings: {
                slidesToShow: 2
              }
            }, {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }]
          };
          this.classes = this.classes + " " + this.carouselButtonPositionClass;
          setTimeout(function () {// console.log(this.section)
          }, 5000);
        }
      }]);

      return SectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "section", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "imageCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "primaryCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "secondaryCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "showImageOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "imageBorderRadiusClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "carouselButtonPositionClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "fourSlideCarousel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "artistRouteLink", void 0);
    SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-section",
      template: "\n    <!-- Begin | Section [[ Find at scss/base/core.scss ]] -->\n    <div class=\"section\">\n      <div class=\"heading\">\n        <div class=\"d-flex flex-wrap align-items-end\">\n          <div class=\"flex-grow-1\">\n            <h4>{{ section?.title }}</h4>\n            <p>{{ section?.subTitle }}</p>\n          </div>\n          <a\n            class=\"btn btn-sm btn-pill btn-air btn-success\"\n            routerLink=\"{{ section?.page }}\"\n            >View All</a\n          >\n        </div>\n        <hr />\n      </div>\n\n      <ngx-slick-carousel [class]=\"classes\" [config]=\"sliderConfig\">\n        <div ngxSlickItem *ngFor=\"let item of section?.items\" class=\"slide\">\n          <app-image-card\n            *ngIf=\"imageCard\"\n            [item]=\"item\"\n            [imageBorderRadiusClass]=\"imageBorderRadiusClass\"\n            [routeLink]=\"\n              artistRouteLink ? '/artist/' + item.id + '/details' : ''\n            \"\n          ></app-image-card>\n\n          <app-primary-card\n            *ngIf=\"primaryCard\"\n            [song]=\"item\"\n            [showOptions]=\"showImageOptions\"\n            [imageBorderRadiusClass]=\"imageBorderRadiusClass\"\n          ></app-primary-card>\n\n          <app-secondary-card\n            *ngIf=\"secondaryCard\"\n            [item]=\"item\"\n            [imageBorderRadiusClass]=\"imageBorderRadiusClass\"\n          >\n          </app-secondary-card>\n        </div>\n      </ngx-slick-carousel>\n    </div>\n    <!-- End | Section -->\n  "
    })], SectionComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/comment/comment.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/content/partials/comment/comment.component.ts ***!
    \***************************************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppContentPartialsCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommentComponent = /*#__PURE__*/function () {
      function CommentComponent() {
        _classCallCheck(this, CommentComponent);
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommentComponent;
    }();

    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/comment/comment.component.html"))["default"]
    })], CommentComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/countdown/countdown.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/content/partials/countdown/countdown.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CountdownComponent */

  /***/
  function srcAppContentPartialsCountdownCountdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
      return CountdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CountdownComponent = /*#__PURE__*/function () {
      function CountdownComponent() {
        var _this7 = this;

        _classCallCheck(this, CountdownComponent);

        this.displayString = '';
        this.showZero = false;
        this.reached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.display = [];
        this.displayNumbers = [];
        this.wasReached = false;
        setInterval(function () {
          return _this7.countdown();
        }, 100);
      }

      _createClass(CountdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countdown",
        value: function countdown() {
          if (this.wasReached) {
            return false;
          }

          if (typeof this.units === 'string') {
            this.units = this.units.split('|');
          }

          var givenDate = new Date(this.end);
          var now = new Date();
          var dateDifference = givenDate - now;

          if (dateDifference < 100 && dateDifference > 0 || dateDifference < 0 && !this.wasReached) {
            this.wasReached = true;
            this.reached.next(now);
          }

          var lastUnit = this.units[this.units.length - 1];
          var unitConstantForMilliSecs = {
            year: 1000 * 60 * 60 * 24 * 7 * 4 * 12,
            month: 1000 * 60 * 60 * 24 * 7 * 4,
            weeks: 1000 * 60 * 60 * 24 * 7,
            days: 1000 * 60 * 60 * 24,
            hours: 1000 * 60 * 60,
            minutes: 1000 * 60,
            seconds: 1000
          };
          var unitsLeft = {};
          var returnText = '';
          var returnNumbers = '';
          var totalMilliSecsLeft = dateDifference;
          var i;
          var unit;

          for (i in this.units) {
            if (this.units.hasOwnProperty(i)) {
              unit = this.units[i].trim();

              if (unitConstantForMilliSecs[unit.toLowerCase()] === false) {
                throw new Error('Cannot repeat unit: ' + unit);
              }

              if (unitConstantForMilliSecs.hasOwnProperty(unit.toLowerCase()) === false) {
                throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, ' + 'days, hours, minutes, seconds, milliseconds');
              } // If it was reached, everything is zero


              unitsLeft[unit] = this.wasReached ? 0 : totalMilliSecsLeft / unitConstantForMilliSecs[unit.toLowerCase()];

              if (lastUnit === unit) {
                unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
              } else {
                unitsLeft[unit] = Math.floor(unitsLeft[unit]);
              }

              totalMilliSecsLeft -= unitsLeft[unit] * unitConstantForMilliSecs[unit.toLowerCase()];
              unitConstantForMilliSecs[unit.toLowerCase()] = false; // If it's less than 0, round to 0

              unitsLeft[unit] = unitsLeft[unit] > 0 ? unitsLeft[unit] : 0;
              returnNumbers += ' ' + unitsLeft[unit] + ' | ';
              returnText += ' ' + unit;
            }
          }

          if (this.text === null || !this.text) {
            this.text = {
              Year: 'Year',
              Month: 'Month',
              Weeks: 'Weeks',
              Days: 'Days',
              Hours: 'Hours',
              Minutes: 'Minutes',
              Seconds: 'Seconds',
              MilliSeconds: 'Milliseconds'
            };
          }

          this.displayString = returnText.replace('Year', this.text.Year + ' | ').replace('Month', this.text.Month + ' | ').replace('Weeks', this.text.Weeks + ' | ').replace('Days', this.text.Days + ' | ').replace('Hours', this.text.Hours + ' | ').replace('Minutes', this.text.Minutes + ' | ').replace('Seconds', this.text.Seconds);
          this.displayNumbers = returnNumbers.split('|');
          this.display = this.displayString.split('|');
        }
      }]);

      return CountdownComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountdownComponent.prototype, "units", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountdownComponent.prototype, "end", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountdownComponent.prototype, "displayString", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountdownComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountdownComponent.prototype, "divider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountdownComponent.prototype, "showZero", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CountdownComponent.prototype, "reached", void 0);
    CountdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./countdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/countdown/countdown.component.html"))["default"]
    })], CountdownComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/event-cards/event-card/event-card.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/content/partials/event-cards/event-card/event-card.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EventCardComponent */

  /***/
  function srcAppContentPartialsEventCardsEventCardEventCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventCardComponent", function () {
      return EventCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventCardComponent = /*#__PURE__*/function () {
      function EventCardComponent() {
        _classCallCheck(this, EventCardComponent);

        this.musicEvent = {};
        this.eventBorderRadiusClass = 'bg-img-radius-lg';
      }

      _createClass(EventCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.eventBorderRadiusClass = this.eventBorderRadiusClass + ' h-100 event event-h bg-img';
        }
      }]);

      return EventCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCardComponent.prototype, "musicEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCardComponent.prototype, "eventBorderRadiusClass", void 0);
    EventCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-card/event-card.component.html"))["default"]
    })], EventCardComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: EventCountdownCardComponent */

  /***/
  function srcAppContentPartialsEventCardsEventCountdownCardEventCountdownCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventCountdownCardComponent", function () {
      return EventCountdownCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventCountdownCardComponent = /*#__PURE__*/function () {
      function EventCountdownCardComponent() {
        _classCallCheck(this, EventCountdownCardComponent);

        this.musicEvent = {};
        this.eventBorderRadiusClass = 'bg-img-radius-lg';
        this.countText = {};
      }

      _createClass(EventCountdownCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.eventBorderRadiusClass = this.eventBorderRadiusClass + ' h-100 event event-v bg-img';
          this.countText = {
            Year: '',
            Month: '',
            Weeks: '',
            Days: '',
            Hours: '',
            Minutes: '',
            Seconds: '',
            MilliSeconds: ''
          };
        }
      }]);

      return EventCountdownCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCountdownCardComponent.prototype, "musicEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCountdownCardComponent.prototype, "eventBorderRadiusClass", void 0);
    EventCountdownCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-countdown-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-countdown-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.html"))["default"]
    })], EventCountdownCardComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/image-card/image-card.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/content/partials/image-card/image-card.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ImageCardComponent */

  /***/
  function srcAppContentPartialsImageCardImageCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCardComponent", function () {
      return ImageCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/search.service */
    "./src/app/core/services/search.service.ts");

    var ImageCardComponent = /*#__PURE__*/function () {
      function ImageCardComponent(searchService) {
        _classCallCheck(this, ImageCardComponent);

        this.searchService = searchService;
        this.imageBorderRadiusClass = "card-img--radius-lg";
      }

      _createClass(ImageCardComponent, [{
        key: "onClick",
        value: function onClick() {
          this.searchService.hideSearchResult();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageCardComponent;
    }();

    ImageCardComponent.ctorParameters = function () {
      return [{
        type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCardComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCardComponent.prototype, "routeLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ImageCardComponent.prototype, "imageBorderRadiusClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")], ImageCardComponent.prototype, "onClick", null);
    ImageCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-image-card",
      template: "\n    <div class=\"custom-card\" *ngIf=\"routeLink; else withoutLink\">\n      <a class=\"custom-card--link\" routerLink=\"{{ routeLink }}\">\n        <img\n          [src]=\"item.cover_url\"\n          alt=\"{{ item?.name }}\"\n          [class]=\"imageBorderRadiusClass\"\n        />\n        <h6 class=\"mb-0 mt-2\">{{ item?.name }}</h6>\n      </a>\n    </div>\n\n    <ng-template #withoutLink>\n      <div class=\"custom-card\">\n        <a class=\"custom-card--link\">\n          <img\n            [src]=\"item.cover_url\"\n            alt=\"{{ item?.name }}\"\n            [class]=\"imageBorderRadiusClass\"\n          />\n          <h6 class=\"mb-0 mt-2\">{{ item?.name }}</h6>\n        </a>\n      </div>\n    </ng-template>\n  "
    })], ImageCardComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/main-cards/primary-card/primary-card.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/content/partials/main-cards/primary-card/primary-card.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PrimaryCardComponent */

  /***/
  function srcAppContentPartialsMainCardsPrimaryCardPrimaryCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimaryCardComponent", function () {
      return PrimaryCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services/audio-player.service */
    "./src/app/core/services/audio-player.service.ts");

    var PrimaryCardComponent = /*#__PURE__*/function () {
      function PrimaryCardComponent(audioPlayerService) {
        _classCallCheck(this, PrimaryCardComponent);

        this.audioPlayerService = audioPlayerService;
        this.song = {};
        this.showOptions = false;
        this.imageBorderRadiusClass = "card-img--radius-lg";
        this.classes = "";
      }

      _createClass(PrimaryCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.classes = "custom-card--img " + this.imageBorderRadiusClass;
        }
      }, {
        key: "addFavorite",
        value: function addFavorite() {
          this.song.favorite = true;
        }
      }, {
        key: "addInQueue",
        value: function addInQueue() {}
      }, {
        key: "shareSong",
        value: function shareSong() {}
      }, {
        key: "addInPlayer",
        value: function addInPlayer() {
          this.audioPlayerService.playSong(this.song);
        }
      }]);

      return PrimaryCardComponent;
    }();

    PrimaryCardComponent.ctorParameters = function () {
      return [{
        type: _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_2__["AudioPlayerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PrimaryCardComponent.prototype, "song", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PrimaryCardComponent.prototype, "showOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PrimaryCardComponent.prototype, "imageBorderRadiusClass", void 0);
    PrimaryCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-primary-card",
      template: "\n    <!-- Begin | Custom Card [[ Find at scss/framework/components/custom-card/custom-card.scss ]] -->\n    <div class=\"custom-card\">\n      <div [class]=\"classes\">\n        <!-- Begin | Custom Card Info -->\n        <div class=\"custom-card--info\" *ngIf=\"showOptions\">\n          <ul\n            class=\"custom-card--labels d-flex\"\n            *ngIf=\"song?.premium || song?.favorite\"\n          >\n            <li *ngIf=\"song?.premium\">\n              <span class=\"badge badge-pill badge-warning\"\n                ><i class=\"la la-star\"></i\n              ></span>\n            </li>\n            <li *ngIf=\"song?.favorite\">\n              <span class=\"badge badge-pill badge-danger\"\n                ><i class=\"la la-heart\"></i\n              ></span>\n            </li>\n          </ul>\n          <!-- Custom Card Options Dropdown -->\n          <div class=\"dropdown dropdown-icon\">\n            <a\n              href=\"javascript:;\"\n              role=\"button\"\n              data-toggle=\"dropdown\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n            >\n              <i class=\"ion-md-more\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n              <li class=\"dropdown-item\">\n                <a\n                  href=\"javascript:;\"\n                  class=\"dropdown-link\"\n                  (click)=\"addFavorite()\"\n                >\n                  <i class=\"la la-heart-o\"></i>\n                </a>\n              </li>\n              <li class=\"dropdown-item\">\n                <a\n                  href=\"javascript:;\"\n                  class=\"dropdown-link\"\n                  (click)=\"addInQueue()\"\n                >\n                  <i class=\"la la-plus\"></i>\n                </a>\n              </li>\n              <li class=\"dropdown-item\">\n                <a [href]=\"song?.url\" class=\"dropdown-link\" download>\n                  <i class=\"la la-download\"></i>\n                </a>\n              </li>\n              <li class=\"dropdown-item\">\n                <a\n                  href=\"javascript:;\"\n                  class=\"dropdown-link\"\n                  (click)=\"shareSong()\"\n                >\n                  <i class=\"la la-share-alt\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- End | Custom Card Info -->\n        <a (click)=\"addInPlayer()\">\n          <img [src]=\"song?.cover_url\" alt=\"{{ song?.name }}\" />\n        </a>\n      </div>\n\n      <!-- Custom Card Options Dropdown -->\n      <a\n        class=\"custom-card--link mt-2\"\n        [routerLink]=\"'/song/' + song.id + '/details'\"\n      >\n        <h6 class=\"text-truncate\" title=\"{{ song?.name }}\">{{ song?.name }}</h6>\n        <p\n          class=\"text-truncate\"\n          title=\"{{ song?.artist }}\"\n          *ngIf=\"song?.artist\"\n        >\n          {{ song?.artist }}\n        </p>\n      </a>\n    </div>\n    <!-- Begin | Custom Card [[ Find at scss/framework/components/custom-card/custom-card.scss ]] -->\n  "
    })], PrimaryCardComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/main-cards/secondary-card/secondary-card.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/content/partials/main-cards/secondary-card/secondary-card.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SecondaryCardComponent */

  /***/
  function srcAppContentPartialsMainCardsSecondaryCardSecondaryCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondaryCardComponent", function () {
      return SecondaryCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SecondaryCardComponent = /*#__PURE__*/function () {
      function SecondaryCardComponent() {
        _classCallCheck(this, SecondaryCardComponent);

        this.item = {};
        this.imageBorderRadiusClass = "card-img--radius-md";
      }

      _createClass(SecondaryCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondaryCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryCardComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SecondaryCardComponent.prototype, "imageBorderRadiusClass", void 0);
    SecondaryCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-secondary-card",
      template: "\n    <div class=\"custom-card\">\n      <div class=\"custom-card--img\">\n        <a href=\"javascript:;\">\n          <img\n            [src]=\"item?.cover_url\"\n            alt=\"{{ item?.name }}\"\n            [class]=\"imageBorderRadiusClass\"\n          />\n          <span class=\"bg-blur\">{{ item?.name }}</span>\n        </a>\n      </div>\n    </div>\n  "
    })], SecondaryCardComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/partials.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/content/partials/partials.module.ts ***!
    \*****************************************************/

  /*! exports provided: PartialsModule */

  /***/
  function srcAppContentPartialsPartialsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartialsModule", function () {
      return PartialsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_cards_primary_card_primary_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-cards/primary-card/primary-card.component */
    "./src/app/content/partials/main-cards/primary-card/primary-card.component.ts");
    /* harmony import */


    var _main_cards_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-cards/secondary-card/secondary-card.component */
    "./src/app/content/partials/main-cards/secondary-card/secondary-card.component.ts");
    /* harmony import */


    var _event_cards_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./event-cards/event-card/event-card.component */
    "./src/app/content/partials/event-cards/event-card/event-card.component.ts");
    /* harmony import */


    var _event_cards_event_countdown_card_event_countdown_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./event-cards/event-countdown-card/event-countdown-card.component */
    "./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.ts");
    /* harmony import */


    var _core_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../core/pipes/truncate.pipe */
    "./src/app/core/pipes/truncate.pipe.ts");
    /* harmony import */


    var _song_list_view_song_list_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./song-list-view/song-list-view.component */
    "./src/app/content/partials/song-list-view/song-list-view.component.ts");
    /* harmony import */


    var _song_options_song_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./song-options/song-options.component */
    "./src/app/content/partials/song-options/song-options.component.ts");
    /* harmony import */


    var _song_horizontal_song_horizontal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./song-horizontal/song-horizontal.component */
    "./src/app/content/partials/song-horizontal/song-horizontal.component.ts");
    /* harmony import */


    var _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./image-card/image-card.component */
    "./src/app/content/partials/image-card/image-card.component.ts");
    /* harmony import */


    var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./comment/comment.component */
    "./src/app/content/partials/comment/comment.component.ts");
    /* harmony import */


    var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./theme-settings/theme-settings.component */
    "./src/app/content/partials/theme-settings/theme-settings.component.ts");
    /* harmony import */


    var _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./countdown/countdown.component */
    "./src/app/content/partials/countdown/countdown.component.ts");

    var PartialsModule = function PartialsModule() {
      _classCallCheck(this, PartialsModule);
    };

    PartialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_main_cards_primary_card_primary_card_component__WEBPACK_IMPORTED_MODULE_4__["PrimaryCardComponent"], _main_cards_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryCardComponent"], _event_cards_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_6__["EventCardComponent"], _event_cards_event_countdown_card_event_countdown_card_component__WEBPACK_IMPORTED_MODULE_7__["EventCountdownCardComponent"], _core_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"], _song_list_view_song_list_view_component__WEBPACK_IMPORTED_MODULE_9__["SongListViewComponent"], _song_options_song_options_component__WEBPACK_IMPORTED_MODULE_10__["SongOptionsComponent"], _song_horizontal_song_horizontal_component__WEBPACK_IMPORTED_MODULE_11__["SongHorizontalComponent"], _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_12__["ImageCardComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"], _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_14__["ThemeSettingsComponent"], _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_15__["CountdownComponent"]],
      exports: [_main_cards_primary_card_primary_card_component__WEBPACK_IMPORTED_MODULE_4__["PrimaryCardComponent"], _main_cards_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryCardComponent"], _event_cards_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_6__["EventCardComponent"], _event_cards_event_countdown_card_event_countdown_card_component__WEBPACK_IMPORTED_MODULE_7__["EventCountdownCardComponent"], _song_list_view_song_list_view_component__WEBPACK_IMPORTED_MODULE_9__["SongListViewComponent"], _song_options_song_options_component__WEBPACK_IMPORTED_MODULE_10__["SongOptionsComponent"], _song_horizontal_song_horizontal_component__WEBPACK_IMPORTED_MODULE_11__["SongHorizontalComponent"], _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_12__["ImageCardComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"], _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_14__["ThemeSettingsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], PartialsModule);
    /***/
  },

  /***/
  "./src/app/content/partials/song-horizontal/song-horizontal.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/content/partials/song-horizontal/song-horizontal.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SongHorizontalComponent */

  /***/
  function srcAppContentPartialsSongHorizontalSongHorizontalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongHorizontalComponent", function () {
      return SongHorizontalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/search.service */
    "./src/app/core/services/search.service.ts");
    /* harmony import */


    var _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/audio-player.service */
    "./src/app/core/services/audio-player.service.ts");

    var SongHorizontalComponent = /*#__PURE__*/function () {
      function SongHorizontalComponent(router, searchService, audioPlayerService) {
        _classCallCheck(this, SongHorizontalComponent);

        this.router = router;
        this.searchService = searchService;
        this.audioPlayerService = audioPlayerService;
        this.classes = "song-h";
        this.song = {};
        this.largeImage = false;
        this.imageBorderRadiusClass = "card-img--radius-sm";
        this.routeLink = "";
      }

      _createClass(SongHorizontalComponent, [{
        key: "onClick",
        value: function onClick() {
          this.searchService.hideSearchResult();

          if (this.playlist) {
            // Add playlist in audio play and play selected song
            this.audioPlayerService.playNowPlaylist(this.playlist, this.songIndex);
          } else if (this.routeLink) {
            this.router.navigate([this.routeLink]);
          } else {
            // Play selected song
            this.audioPlayerService.playSong(this.song);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.largeImage) {
            this.classes += " song-h--lg";
          } else {
            this.classes += " song-h--sm";
          }
        }
      }]);

      return SongHorizontalComponent;
    }();

    SongHorizontalComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_4__["AudioPlayerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class")], SongHorizontalComponent.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongHorizontalComponent.prototype, "song", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongHorizontalComponent.prototype, "largeImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongHorizontalComponent.prototype, "imageBorderRadiusClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongHorizontalComponent.prototype, "playlist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongHorizontalComponent.prototype, "routeLink", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongHorizontalComponent.prototype, "songIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")], SongHorizontalComponent.prototype, "onClick", null);
    SongHorizontalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-song-horizontal",
      template: "\n    <div class=\"song-h--img\">\n      <img\n        [src]=\"song?.cover_url\"\n        alt=\"{{ song?.name }}\"\n        [class]=\"imageBorderRadiusClass\"\n      />\n    </div>\n    <div class=\"song-h--desc\">\n      <span class=\"text-truncate song-h--name\" title=\"{{ song?.name }}\">{{\n        song?.name\n      }}</span>\n      <p\n        class=\"text-truncate song-h--artist\"\n        title=\"{{ song?.artist }}\"\n        *ngIf=\"song?.artist\"\n      >\n        {{ song?.artist }}\n      </p>\n    </div>\n  "
    })], SongHorizontalComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/song-list-view/song-list-view.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/content/partials/song-list-view/song-list-view.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SongListViewComponent */

  /***/
  function srcAppContentPartialsSongListViewSongListViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongListViewComponent", function () {
      return SongListViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SongListViewComponent = /*#__PURE__*/function () {
      function SongListViewComponent() {
        _classCallCheck(this, SongListViewComponent);

        this.classes = "song-list--item";
        this.song = {};
        this.imageBorderRadiusClass = "card-img--radius-sm";
        this.icon = "la-ellipsis-v";
      }

      _createClass(SongListViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.playlist) {
            this.classes += " amplitude-song-container amplitude-play-pause";
          }
        }
      }]);

      return SongListViewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("class")], SongListViewComponent.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongListViewComponent.prototype, "song", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongListViewComponent.prototype, "songNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongListViewComponent.prototype, "imageBorderRadiusClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongListViewComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongListViewComponent.prototype, "playlist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongListViewComponent.prototype, "songIndex", void 0);
    SongListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-song-list-view",
      template: "\n    <div class=\"song-list--item-number\">\n      {{ songNumber < 10 ? \"0\" + songNumber : songNumber }}\n    </div>\n\n    <app-song-horizontal\n      [song]=\"song\"\n      [imageBorderRadiusClass]=\"imageBorderRadiusClass\"\n      [playlist]=\"playlist\"\n      [songIndex]=\"songIndex\"\n    ></app-song-horizontal>\n\n    <ul class=\"custom-card--labels d-flex ml-auto\">\n      <li *ngIf=\"song?.favorite\">\n        <span class=\"badge badge-pill badge-danger\"\n          ><i class=\"la la-heart\"></i\n        ></span>\n      </li>\n      <li *ngIf=\"song?.premium\">\n        <span class=\"badge badge-pill badge-warning\"\n          ><i class=\"la la-star\"></i\n        ></span>\n      </li>\n      <li class=\"ml-4\">\n        <app-song-options [icon]=\"icon\" [song]=\"song\"></app-song-options>\n      </li>\n    </ul>\n  "
    })], SongListViewComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/song-options/song-options.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/content/partials/song-options/song-options.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SongOptionsComponent */

  /***/
  function srcAppContentPartialsSongOptionsSongOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongOptionsComponent", function () {
      return SongOptionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SongOptionsComponent = /*#__PURE__*/function () {
      function SongOptionsComponent() {
        _classCallCheck(this, SongOptionsComponent);

        this["class"] = 'dropleft';
        this.icon = '';
      }

      _createClass(SongOptionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.icon = 'la ' + this.icon;
        }
      }, {
        key: "addFavorite",
        value: function addFavorite() {
          this.song.favorite = true;
        }
      }, {
        key: "addToPlayList",
        value: function addToPlayList() {}
      }, {
        key: "shareSong",
        value: function shareSong() {}
      }]);

      return SongOptionsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], SongOptionsComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongOptionsComponent.prototype, "song", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SongOptionsComponent.prototype, "icon", void 0);
    SongOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-song-options',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./song-options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-options/song-options.component.html"))["default"]
    })], SongOptionsComponent);
    /***/
  },

  /***/
  "./src/app/content/partials/theme-settings/theme-settings.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/content/partials/theme-settings/theme-settings.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ThemeSettingsComponent */

  /***/
  function srcAppContentPartialsThemeSettingsThemeSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function () {
      return ThemeSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/skin.service */
    "./src/app/core/services/skin.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../config/config */
    "./src/app/config/config.ts");

    var ThemeSettingsComponent = /*#__PURE__*/function () {
      function ThemeSettingsComponent(localStorageService, skinService) {
        _classCallCheck(this, ThemeSettingsComponent);

        this.localStorageService = localStorageService;
        this.skinService = skinService;
        this.config = new _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"]();
        this.themeClass = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].THEME_CLASSES;
        this.settingOpen = "open-settings";
        this.themeSkin = this.localStorageService.getThemeSkin();

        if (!this.themeSkin) {
          this.themeSkin = this.config.config.themeSkin;
        } else {
          this.config.config.themeSkin = this.themeSkin;
        }

        this.themeSkin.theme = "dark";
        this.setHeaderSkin(6);
        this.setPlayerSkin(2);
      }

      _createClass(ThemeSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//  this.setSidebarSkin("dark");
        }
      }, {
        key: "openSettings",
        value: function openSettings() {
          if (this.settingsWrapper.nativeElement.classList.contains(this.settingOpen)) {
            this.settingsWrapper.nativeElement.classList.remove(this.settingOpen);
          } else {
            this.settingsWrapper.nativeElement.classList.add(this.settingOpen);
          }
        }
      }, {
        key: "closeSettings",
        value: function closeSettings() {
          this.settingsWrapper.nativeElement.classList.remove(this.settingOpen);
        }
      }, {
        key: "setThemeSkin",
        value: function setThemeSkin(event) {
          if (event.target.checked) {
            this.themeSkin.theme = "dark";
          } else if (!event.target.checked) {
            this.themeSkin.theme = "light";
          }

          this.skinService.skin = this.themeSkin;
        }
      }, {
        key: "setHeaderSkin",
        value: function setHeaderSkin(index) {
          this.themeSkin.header = index;
          this.skinService.skin = this.themeSkin;
        }
      }, {
        key: "setSidebarSkin",
        value: function setSidebarSkin(index) {
          this.themeSkin.sidebar = index;
          this.skinService.skin = this.themeSkin;
        }
      }, {
        key: "setPlayerSkin",
        value: function setPlayerSkin(index) {
          this.themeSkin.player = index;
          this.skinService.skin = this.themeSkin;
        }
      }]);

      return ThemeSettingsComponent;
    }();

    ThemeSettingsComponent.ctorParameters = function () {
      return [{
        type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }, {
        type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__["SkinService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("settingsWrapper", {
      "static": false
    })], ThemeSettingsComponent.prototype, "settingsWrapper", void 0);
    ThemeSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-theme-settings",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./theme-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/theme-settings/theme-settings.component.html"))["default"]
    })], ThemeSettingsComponent);
    /***/
  },

  /***/
  "./src/app/core/pipes/truncate.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/pipes/truncate.pipe.ts ***!
    \*********************************************/

  /*! exports provided: TruncatePipe */

  /***/
  function srcAppCorePipesTruncatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
      return TruncatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TruncatePipe = /*#__PURE__*/function () {
      function TruncatePipe() {
        _classCallCheck(this, TruncatePipe);
      }

      _createClass(TruncatePipe, [{
        key: "transform",
        value: function transform(value) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          var completeWords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var ellipsis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';
          var htmlTag = /<\/?[^>]*>/;
          var result = value || '';

          if (htmlTag.test(result)) {
            return this.truncateHtml(result, limit, ellipsis);
          } else {
            if (completeWords) {
              limit = result.substr(0, limit).lastIndexOf(' ');
            }

            return "".concat(result.substr(0, limit)).concat(ellipsis);
          }
        }
      }, {
        key: "truncateHtml",
        value: function truncateHtml(html, limit, ellipsis) {
          if (limit >= html.length) {
            return html;
          }

          var str = ''; // final content

          var i = 0; // position in source

          var tag = ''; // current tag contents (used during content reading)

          var c = ''; // current char (used during content reading)

          var end = 0; // ending position of tag (used during content reading)

          var cnt = 0; // content size

          var tagTree = []; // open tags

          var len = html.length; // length of the source

          /**
           * Strips parameters and <> from tag
           * @param {content} content full tag content (ex.: <span a="b">)
           * @returns {content} tag name (ex.: span)
           */

          var tagStrip = function tagStrip(content) {
            var index = tag.indexOf(' '); // check for space (ex.: <span a="b">)

            if (index === -1) {
              // no space (ex.: <span>)
              return content.slice(1, -1);
            }

            return content.slice(1, index);
          }; // Go trough the content until we read enough of it


          while (cnt < limit && i < len) {
            c = html.charAt(i); // Read next char

            if (c === '<') {
              // Tag found
              end = html.slice(i).indexOf('>');

              if (end === -1) {
                // Check for incomplete tag
                return str;
              }

              end += i + 1;
              tag = html.slice(i, end); // Read tag contents

              str += tag; // Append the tag to final content

              if (tag.charAt(1) === '/') {
                // Closing tag
                tagTree = tagTree.slice(0, -1);
              } else {
                // New tag
                tagTree.push(tagStrip(tag));
              }

              i = end; // Move the position to end of the tag
            } else {
              // Append content character and move the position
              str += c;
              i++;
              cnt++;
            }
          }

          return str + ellipsis;
        }
      }]);

      return TruncatePipe;
    }();

    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'truncate'
    })], TruncatePipe);
    /***/
  },

  /***/
  "./src/app/core/services/albums-config.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/services/albums-config.service.ts ***!
    \********************************************************/

  /*! exports provided: AlbumsConfigService */

  /***/
  function srcAppCoreServicesAlbumsConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumsConfigService", function () {
      return AlbumsConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../config/albums */
    "./src/app/config/albums.ts");
    /* harmony import */


    var _deezer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deezer-service */
    "./src/app/core/services/deezer-service.ts");

    var AlbumsConfigService = /*#__PURE__*/function () {
      function AlbumsConfigService(chartsService) {
        _classCallCheck(this, AlbumsConfigService);

        this.chartsService = chartsService;
        this.albumsConfig = new _config_albums__WEBPACK_IMPORTED_MODULE_4__["AlbumsConfig"]();
      }

      _createClass(AlbumsConfigService, [{
        key: "getAlbumByIb",
        value: function getAlbumByIb(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var list;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.albumsList.toPromise();

                  case 2:
                    list = _context2.sent;
                    list.find(function (album) {
                      return album.id === id;
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "albumsList",
        get: function get() {
          return this.albumsConfig.config.items;
        }
      }, {
        key: "deezerAlbumsList",
        get: function get() {
          try {
            var source$ = this.chartsService.chartsObservable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])("albums"));
            return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
              return console.log("Response from getCharts -> ", response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (albums) {
              return albums.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data.map(function (data) {
                return {
                  id: data.id || "",
                  name: data.title || "",
                  artist: data.artist.name || "",
                  album: data.title || "",
                  url: data.artist.link || "",
                  cover_art_url: data.cover || "",
                  cover_url: data.cover_medium || "",
                  ratings: 4.5 || false,
                  composer: data.artist.name || "",
                  lyricist: data.artist.name || "",
                  director: "",
                  downloads: "",
                  lyrics: ""
                };
              }));
            }));
          } catch (error) {
            console.log("getCharts Error::", error);
          }
        }
      }]);

      return AlbumsConfigService;
    }();

    AlbumsConfigService.ctorParameters = function () {
      return [{
        type: _deezer_service__WEBPACK_IMPORTED_MODULE_5__["DeezerService"]
      }];
    };

    AlbumsConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AlbumsConfigService);
    /***/
  },

  /***/
  "./src/app/core/services/artists-config.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/artists-config.service.ts ***!
    \*********************************************************/

  /*! exports provided: ArtistsConfigService */

  /***/
  function srcAppCoreServicesArtistsConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistsConfigService", function () {
      return ArtistsConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _config_artists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../config/artists */
    "./src/app/config/artists.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json")
    };

    var ArtistsConfigService = /*#__PURE__*/function () {
      function ArtistsConfigService(http) {
        _classCallCheck(this, ArtistsConfigService);

        this.http = http;
        this.artistsConfig = new _config_artists__WEBPACK_IMPORTED_MODULE_6__["ArtistsConfig"]();
      }

      _createClass(ArtistsConfigService, [{
        key: "getArtistByIb",
        value: function getArtistByIb(id) {
          return this.artistsList.find(function (artist) {
            return artist.id === id;
          });
        }
      }, {
        key: "artistsList",
        get: function get() {
          return this.artistsConfig.config.items;
        }
      }, {
        key: "artistsListDeezer",
        get: function get() {
          var path = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseURL + "chart";
          return this.http.get(path, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.artists;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (artists) {
            return artists.data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(data.map(function (data) {
              return {
                id: data.id || "",
                name: data.name || "",
                dob: "",
                cover_url: data.picture_medium || "",
                ratings: 4.5 || false,
                bio: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia repellat reprehenderit sunt tempore vitae voluptatem. Adipisci debitis eos labore nihil sapiente?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum, eveniet expedita illum vero voluptates! Corporis, distinctio est fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde voluptatem voluptates.</p>"
              };
            }));
          }));
        }
      }]);

      return ArtistsConfigService;
    }();

    ArtistsConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ArtistsConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], ArtistsConfigService);
    /***/
  },

  /***/
  "./src/app/core/services/audio-player.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/audio-player.service.ts ***!
    \*******************************************************/

  /*! exports provided: AudioPlayerService */

  /***/
  function srcAppCoreServicesAudioPlayerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioPlayerService", function () {
      return AudioPlayerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var amplitudejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! amplitudejs */
    "./node_modules/amplitudejs/dist/amplitude.js");
    /* harmony import */


    var amplitudejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amplitudejs__WEBPACK_IMPORTED_MODULE_2__);

    var AudioPlayerService = /*#__PURE__*/function () {
      function AudioPlayerService() {
        _classCallCheck(this, AudioPlayerService);
      }

      _createClass(AudioPlayerService, [{
        key: "playSong",
        value: function playSong(song) {
          amplitudejs__WEBPACK_IMPORTED_MODULE_2__["removeSong"](0);
          amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playNow"](song);
        }
      }, {
        key: "playlistKayName",
        value: function playlistKayName(playlistName) {
          return playlistName.toLowerCase().replace(' ', '_');
        }
      }, {
        key: "playNowPlaylist",
        value: function playNowPlaylist(playlist) {
          var songIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var listName = this.playlistKayName(playlist.name);
          amplitudejs__WEBPACK_IMPORTED_MODULE_2__["removeSong"](0);
          amplitudejs__WEBPACK_IMPORTED_MODULE_2__["addPlaylist"](listName, {
            name: listName
          }, playlist.songs);
          amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playPlaylistSongAtIndex"](songIndex, listName);
        }
      }]);

      return AudioPlayerService;
    }();

    AudioPlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AudioPlayerService);
    /***/
  },

  /***/
  "./src/app/core/services/deezer-service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/deezer-service.ts ***!
    \*************************************************/

  /*! exports provided: DeezerService */

  /***/
  function srcAppCoreServicesDeezerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeezerService", function () {
      return DeezerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json")
    };

    var DeezerService = /*#__PURE__*/function () {
      function DeezerService(http) {
        _classCallCheck(this, DeezerService);

        this.http = http; // Node/Express API

        this.REST_API = "http://localhost:3000/api";
        this.chartSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.chartsObservable$ = this.chartSource$.asObservable();
      } // Load the charts data from the microservice


      _createClass(DeezerService, [{
        key: "initialize",
        value: function initialize() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.chartItems.toPromise();

                  case 2:
                    response = _context3.sent;

                    if (response) {
                      this.chartSource$.next(response);
                      console.log("Deezer response -> ", response);
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "chartItems",
        get: function get() {
          var path = "".concat(this.REST_API, "/getCharts");
          return this.http.get(path, httpOptions);
        }
      }]);

      return DeezerService;
    }();

    DeezerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DeezerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], DeezerService);
    /***/
  },

  /***/
  "./src/app/core/services/loading.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/loading.service.ts ***!
    \**************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppCoreServicesLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoadingService = /*#__PURE__*/function () {
      function LoadingService() {
        _classCallCheck(this, LoadingService);

        this.loader = false;
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loader);
      }

      _createClass(LoadingService, [{
        key: "startLoading",
        value: function startLoading() {
          this.loading = true;
        }
      }, {
        key: "stopLoading",
        value: function stopLoading() {
          this.loading = false;
        }
      }, {
        key: "loading",
        get: function get() {
          return this.loader;
        },
        set: function set(value) {
          this.loader = value;
          this.loadingStatus.next(value);
        }
      }]);

      return LoadingService;
    }();

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoadingService);
    /***/
  },

  /***/
  "./src/app/core/services/local-storage.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/services/local-storage.service.ts ***!
    \********************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppCoreServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "setLocalStorage",
        value: function setLocalStorage(key, data) {
          try {
            localStorage.setItem(key, JSON.stringify(data));
          } catch (e) {
            console.error('Error saving to local storage', e);
            return null;
          }
        }
      }, {
        key: "getLocalStorage",
        value: function getLocalStorage(key) {
          try {
            return JSON.parse(localStorage.getItem(key));
          } catch (e) {
            console.error('Error getting data from local storage', e);
            return null;
          }
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.getLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].CURRENT_USER);
        }
      }, {
        key: "getThemeSkin",
        value: function getThemeSkin() {
          return this.getLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].THEME_SKIN);
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalStorageService);
    /***/
  },

  /***/
  "./src/app/core/services/menu-config.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/services/menu-config.service.ts ***!
    \******************************************************/

  /*! exports provided: MenuConfigService */

  /***/
  function srcAppCoreServicesMenuConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuConfigService", function () {
      return MenuConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/menu */
    "./src/app/config/menu.ts");

    var MenuConfigService = /*#__PURE__*/function () {
      function MenuConfigService() {
        _classCallCheck(this, MenuConfigService);

        this.menuConfig = new _config_menu__WEBPACK_IMPORTED_MODULE_2__["MenuConfig"]();
      }

      _createClass(MenuConfigService, [{
        key: "menuItems",
        get: function get() {
          return this.menuConfig.config.aside.items;
        }
      }, {
        key: "userMenuItems",
        get: function get() {
          return this.menuConfig.config.userMenu.items;
        }
      }]);

      return MenuConfigService;
    }();

    MenuConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MenuConfigService);
    /***/
  },

  /***/
  "./src/app/core/services/playlist-config.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/services/playlist-config.service.ts ***!
    \**********************************************************/

  /*! exports provided: PlaylistConfigService */

  /***/
  function srcAppCoreServicesPlaylistConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistConfigService", function () {
      return PlaylistConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/playlist */
    "./src/app/config/playlist.ts");

    var PlaylistConfigService = /*#__PURE__*/function () {
      function PlaylistConfigService() {
        _classCallCheck(this, PlaylistConfigService);

        this.songsQueue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playlistConfig = new _config_playlist__WEBPACK_IMPORTED_MODULE_2__["PlaylistConfig"]();
      }

      _createClass(PlaylistConfigService, [{
        key: "playlist",
        get: function get() {
          return this.playlistConfig.config.items;
        }
      }, {
        key: "currentPlaylist",
        set: function set(playlist) {
          this.songsQueue.emit(playlist);
        },
        get: function get() {
          return this.songsQueue;
        }
      }]);

      return PlaylistConfigService;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PlaylistConfigService.prototype, "songsQueue", void 0);
    PlaylistConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PlaylistConfigService);
    /***/
  },

  /***/
  "./src/app/core/services/search.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/search.service.ts ***!
    \*************************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppCoreServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchService = /*#__PURE__*/function () {
      function SearchService() {
        _classCallCheck(this, SearchService);

        this.search = false;
        this.searchStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.search);
      }

      _createClass(SearchService, [{
        key: "hideSearchResult",
        value: function hideSearchResult() {
          this.searchResult = true;
        }
      }, {
        key: "searchResult",
        get: function get() {
          return this.search;
        },
        set: function set(value) {
          this.search = value;
          this.searchStatus.next(value);
        }
      }]);

      return SearchService;
    }();

    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchService);
    /***/
  },

  /***/
  "./src/app/core/services/skin.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/skin.service.ts ***!
    \***********************************************/

  /*! exports provided: SkinService */

  /***/
  function srcAppCoreServicesSkinServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkinService", function () {
      return SkinService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./local-storage.service */
    "./src/app/core/services/local-storage.service.ts");
    /* harmony import */


    var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config/config */
    "./src/app/config/config.ts");

    var SkinService = /*#__PURE__*/function () {
      function SkinService(localStorageService) {
        _classCallCheck(this, SkinService);

        this.localStorageService = localStorageService;
        this.themeSkin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SkinService, [{
        key: "skin",
        get: function get() {
          return this.themeSkin;
        },
        set: function set(value) {
          this.themeSkin.emit(value);
          this.localStorageService.setLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].THEME_SKIN, value);
        }
      }]);

      return SkinService;
    }();

    SkinService.ctorParameters = function () {
      return [{
        type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    SkinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SkinService);
    /***/
  },

  /***/
  "./src/app/core/services/songs-config.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/songs-config.service.ts ***!
    \*******************************************************/

  /*! exports provided: SongsConfigService */

  /***/
  function srcAppCoreServicesSongsConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongsConfigService", function () {
      return SongsConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_songs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config/songs */
    "./src/app/config/songs.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _deezer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./deezer-service */
    "./src/app/core/services/deezer-service.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Content-Type", "application/json")
    };

    var SongsConfigService = /*#__PURE__*/function () {
      function SongsConfigService(chartsService) {
        _classCallCheck(this, SongsConfigService);

        this.chartsService = chartsService;
        this.songsConfig = new _config_songs__WEBPACK_IMPORTED_MODULE_2__["SongsConfig"]();
      }

      _createClass(SongsConfigService, [{
        key: "getSongByIb",
        value: function getSongByIb(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var list;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.songsList.toPromise();

                  case 2:
                    list = _context4.sent;
                    list.find(function (song) {
                      return song.id === id;
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "fetchTracks",
        value: function fetchTracks() {
          try {
            return this.chartsService.chartsObservable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])("tracks")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (tracks) {
              return tracks.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data.map(function (data) {
                return {
                  id: data.id || "",
                  name: data.title || "",
                  artist: data.artist.name || "",
                  album: data.album.title || "",
                  url: data.artist.link || "",
                  cover_art_url: data.album.cover || "",
                  cover_url: data.album.cover_medium || "",
                  ratings: 4.5 || false,
                  composer: data.artist.name || "",
                  lyricist: data.artist.name || "",
                  director: "",
                  downloads: "",
                  lyrics: ""
                };
              }));
            }));
          } catch (error) {
            console.log("getCharts Error::", error);
          }
        }
      }, {
        key: "fetch_TopTenAlbums",
        value: function fetch_TopTenAlbums() {
          try {
            return this.topChart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.albums;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (albums) {
              return albums.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data.map(function (data) {
                return {
                  id: data.id || "",
                  name: data.title || "",
                  artist: data.artist.name || "",
                  album: data.title || "",
                  url: data.artist.link || "",
                  cover_art_url: data.cover || "",
                  cover_url: data.cover_medium || "",
                  ratings: 4.5 || false,
                  composer: data.artist.name || "",
                  lyricist: data.artist.name || "",
                  director: "",
                  downloads: "",
                  lyrics: ""
                };
              }));
            }));
          } catch (error) {
            console.log("getCharts Error::", error);
          }
        }
      }, {
        key: "fetch_TopTenArtist",
        value: function fetch_TopTenArtist() {
          try {
            return this.topChart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.artists;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (artists) {
              return artists.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data.map(function (data) {
                return {
                  id: data.id || "",
                  name: data.name || "",
                  artist: data.name || "",
                  album: "",
                  url: data.link || "",
                  cover_art_url: data.picture_big || "",
                  cover_url: data.picture_medium || "",
                  ratings: 4.5 || false,
                  tracklist: data.tracklist,
                  composer: data.name || "",
                  lyricist: data.name || "",
                  director: "",
                  downloads: "",
                  lyrics: ""
                };
              }));
            }));
          } catch (error) {
            console.log("getCharts Error::", error);
          }
        }
      }, {
        key: "fetch_TopTenPlaylist",
        value: function fetch_TopTenPlaylist() {
          try {
            return this.topChart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.playlists;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (playlist) {
              return playlist.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data.map(function (data) {
                return {
                  id: data.id || "",
                  name: data.title || "",
                  artist: "",
                  album: data.title || "",
                  url: data.link || "",
                  cover_art_url: data.picture_big || "",
                  cover_url: data.picture_medium || "",
                  ratings: 4.5 || false,
                  composer: "",
                  lyricist: "",
                  tracklist: data.tracklist,
                  director: "",
                  downloads: "",
                  lyrics: ""
                };
              }));
            }));
          } catch (error) {
            console.log("getCharts Error::", error);
          }
        }
      }, {
        key: "fetch_TopTenPodcast",
        value: function fetch_TopTenPodcast() {
          try {
            return this.topChart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return response.podcasts;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (podcasts) {
              return podcasts.data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data.map(function (data) {
                return {
                  id: data.id || "",
                  name: data.title || "",
                  description: data.description,
                  artist: "",
                  album: data.title || "",
                  url: data.link || "",
                  cover_art_url: data.picture_big || "",
                  cover_url: data.picture_medium || "",
                  ratings: 4.5 || false,
                  composer: "",
                  lyricist: "",
                  director: "",
                  downloads: "",
                  lyrics: ""
                };
              }));
            }));
          } catch (error) {
            console.log("getCharts Error::", error);
          }
        }
      }, {
        key: "songsList",
        get: function get() {
          return this.songsConfig.config.items;
        }
      }, {
        key: "defaultSong",
        get: function get() {
          return this.songsConfig.config.items[0];
        }
      }]);

      return SongsConfigService;
    }();

    SongsConfigService.ctorParameters = function () {
      return [{
        type: _deezer_service__WEBPACK_IMPORTED_MODULE_6__["DeezerService"]
      }];
    };

    SongsConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SongsConfigService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var CORS = "https://cors-anywhere.herokuapp.com/";
    var environment = {
      production: false,
      baseURL: "https://api.deezer.com/"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Zim\Downloads\projects\Ng-Deezer-music-streaming-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map