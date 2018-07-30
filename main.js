(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_13__["SignupFormComponent"] },
    { path: 'user', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"] },
    { path: 'signup', component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_13__["SignupFormComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_12__["UserInfoComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_13__["SignupFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
            ],
            providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "isUserAnonymousLoggedIn", {
        get: function () {
            return (this.authState !== null) ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return (this.authState !== null) ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserName", {
        get: function () {
            return this.authState['email'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return (this.authState !== null) ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isUserEmailLoggedIn", {
        get: function () {
            if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signUpWithEmail = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginWithEmail = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/user']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\t\n\t<div class=\"d-flex flex-row wrapper\">\n\t  <div class=\"left-side d-flex flex-column\">\n\t    <div routerLink=\"/user\" class=\"logo-circle\">\n\t      <p class=\"logo-text\">Logo</p>\n\t    </div>\n\t    <div class=\"page-title\">\n\t      Start your 14 day free trial\n\t    </div>\n\t    <div class=\"page-subtitle\">\n\t      No credit card required\n\t    </div>\n\t    <div class=\"form-group sign-up d-flex flex-column\">\n\t      <div class=\"name-input d-flex\">\n\t        <span class=\"d-flex flex-column\">\n\t          <label *ngIf=\"firstName\" class=\"input-label\" for=\"first-name\">FIRST NAME</label>\n\t          <input type=\"text\" class=\"first-name form-control\" name=\"first-name\" placeholder=\"FIRST NAME\" [(ngModel)]=\"firstName\">\n\t          <div class=\"first-name-line line\"></div>\n\t        </span>\n\t        <span class=\"d-flex flex-column\">\n\t          <label *ngIf=\"lastName\" class=\"input-label\" for=\"last-name\">LAST NAME</label>\n\t          <input type=\"text\" class=\"last-name form-control\" name=\"last-name\" placeholder=\"LAST NAME\" [(ngModel)]=\"lastName\">\n\t          <div class=\"last-name-line line\"></div>\n\t        </span>\n\t      </div>\n\t      <label *ngIf=\"companyName\" class=\"input-label\" for=\"company-name\">COMPANY NAME</label>\n\t      <input type=\"text\" class=\"company-name form-control\" name=\"company-name\" placeholder=\"COMPANY NAME\" [(ngModel)]=\"companyName\">\n\t      <div class=\"company-name-line line\"></div>\n\t      <label *ngIf=\"email\" class=\"input-label\" for=\"email\">EMAIL</label>\n\t      <input type=\"text\" class=\"email form-control\" name=\"email\" placeholder=\"EMAIL\" [(ngModel)]=\"email\">\n\t      <div class=\"email-line line\"></div>\n\t      <label *ngIf=\"password\" class=\"input-label\" for=\"password\">PASSWORD</label>\n\t      <div class=\"password-wrapper d-flex\">\n\t        <input [type]=\"showPassword ? 'text' : 'password'\" class=\"password form-control\" name=\"password\" placeholder=\"PASSWORD\" [(ngModel)]=\"password\">\n\t        <img class=\"visibility-off-copy\" src=\"assets/visibility-off-copy@2x.png\" (click)=\"tooglePassword()\">\n\t      </div>\n\t      <div class=\"password-line line\"></div>\n\t      <label *ngIf=\"confirmPassword\" class=\"input-label\" for=\"cofirm-password\">CONFIRM PASSWORD</label>\n\t      <div class=\"confirm-wrapper d-flex\">\n\t        <input [type]=\"showConfirm ? 'text' : 'password'\" class=\"confirm-password form-control\" name=\"cofirm-password\" placeholder=\"COFIRM PASSWORD\" [(ngModel)]=\"confirmPassword\">\n\t        <img class=\"visibility-off-copy\" src=\"assets/visibility-off-copy@2x.png\" (click)=\"toogleConfirm()\">\n\t      </div>\n\t      <div class=\"confirm-line line\"></div>\n\t      <div>\n\t        <input type=\"checkbox\" class=\"checkbox-input\" name=\"check\" [(ngModel)]=\"check\">\n\t        <label class=\"form-check-label\" for=\"check\">I agree to the terms of service</label>\n\t      </div>\n\t      <div class=\"buttons d-flex\">\n\t        <span (click)=\"onSignUp()\" class=\"signup-button\" [class.valid-button]=\"validForm()\">\n\t          Sign Up\n\t        </span>\n\t        <span class=\"cancel-button\">\n\t          <a href=\"\"> Cancel</a>\n\t        </span>\n\t      </div>\n\t    </div>\n\t  </div>\n\t  <div class=\"right-side d-flex flex-column\">\n\t    <img class=\"blue-image\" src=\"assets/group-2.png\">\n\t    <div class=\"caption\">\n\t      <p class=\"caption-title\">Save Time</p>\n\t      <p class=\"caption-content\">With demo project, I've saved <br />\n\t        hundreds of hours that I used to <br />\n\t        waste on manual date entry.</p>\n\t      <p class=\"caption-author\">Helen Jackson</p>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-left: 50px; }\n\n.wrapper {\n  align-items: flex-start; }\n\n.left-side {\n  flex-basis: 35%;\n  margin-top: 62px;\n  margin-right: 72px;\n  max-width: 100%;\n  max-height: auto;\n  flex: 1; }\n\n.right-side {\n  display: table;\n  justify-content: center;\n  margin-right: 0px; }\n\n.name-input {\n  justify-content: space-between; }\n\n.caption {\n  position: absolute;\n  text-align: center;\n  bottom: 54px;\n  margin-left: 313px; }\n\n.caption-title {\n  width: 479px;\n  height: 43px;\n  font-family: Roboto;\n  font-size: 64px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.67;\n  letter-spacing: 0.3px;\n  text-align: center;\n  color: #ffffff;\n  margin-bottom: 84px; }\n\n.caption-content {\n  width: 479px;\n  height: 139px;\n  font-family: Roboto;\n  font-size: 32px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.34;\n  letter-spacing: 0.1px;\n  color: #ffffff; }\n\n.caption-author {\n  width: 479px;\n  height: 43px;\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.79;\n  letter-spacing: 0.1px;\n  text-align: center;\n  color: #ffffff; }\n\n.logo-circle {\n  display: table-cell;\n  height: 70px;\n  width: 70px;\n  background-color: #d8d8d8;\n  border-radius: 50%;\n  text-align: center; }\n\n.logo-text {\n  width: 32px;\n  height: 16px;\n  margin-left: 16.5px;\n  font-family: Roboto;\n  font-size: 14px;\n  -webkit-text-decoration-color: #000000;\n          text-decoration-color: #000000;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  margin-top: 26px; }\n\n.page-title {\n  width: 479px;\n  height: 42px;\n  opacity: 0.87;\n  font-family: Roboto;\n  font-size: 36px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n  margin-top: 25px; }\n\n.page-subtitle {\n  width: 433px;\n  height: 24px;\n  opacity: 0.87;\n  font-family: Roboto;\n  font-size: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n  padding-top: 10px; }\n\n.sign-up {\n  margin-top: 86px;\n  opacity: 0.87;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 1px;\n  color: #939598; }\n\n.signup-button {\n  width: 158px;\n  height: 53px;\n  border-radius: 100px;\n  padding-top: 15px;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  background-color: #bdbebf;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  color: #6b6b6b; }\n\n.cancel-button {\n  padding-top: 15px;\n  padding-left: 15px;\n  -webkit-text-decoration-color: black;\n          text-decoration-color: black; }\n\na {\n  color: black; }\n\ninput {\n  border: 0;\n  max-width: 225px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 28px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 0.86;\n  letter-spacing: 0.1px;\n  color: #4a4a4a; }\n\n.first-name-line {\n  max-width: 200.4px; }\n\n.password-wrapper, .confirm-wrapper {\n  justify-content: space-between; }\n\n.line {\n  height: 1px;\n  background-color: #d8d8d8;\n  border: solid 1px #d8d8d8; }\n\n.first-name-line {\n  max-width: 200.4px;\n  margin-right: 28.6px;\n  margin-top: 14px;\n  margin-bottom: 75px; }\n\n.last-name-line {\n  max-width: 220px;\n  margin-top: 14px;\n  margin-bottom: 75px; }\n\n.company-name-line, .email-line, .password-line {\n  margin-top: 15px;\n  margin-bottom: 74px; }\n\n.confirm-line {\n  margin-top: 14px;\n  margin-bottom: 25px; }\n\n.blue-image {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.form-check-label {\n  padding-left: 9px;\n  max-width: 368px;\n  max-height: 21px;\n  opacity: 0.87;\n  font-family: Roboto;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n  margin-bottom: 47px; }\n\n.checkbox-input {\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  border: solid 1px #6b6b6b; }\n\n.input-label {\n  margin-top: -23px;\n  max-width: 200.4px;\n  height: 15px;\n  opacity: 0.87;\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.7px;\n  color: #939598; }\n\n.visibility-off-copy {\n  width: 19px;\n  height: 16px;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.company-name, .email, .password, .confirm-password {\n  max-width: 392px; }\n\n.valid-button {\n  background-color: #5e60e5;\n  color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authService, router, db) {
        this.authService = authService;
        this.router = router;
        this.db = db;
        this.title = 'SignupFormComponent';
        this.newUser = true; // to toggle login or signup form
        this.passReset = false;
        this.errorMessage = '';
        this.error = { name: '', message: '' };
        this.database = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]();
        this.ref = this.database.ref('users/');
        this.showPassword = false;
    }
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.onSignUp = function () {
        var _this = this;
        if (this.validForm()) {
            this.authService.signUpWithEmail(this.email, this.password)
                .then(function (res) {
                console.log(res);
                _this.errorMessage = '';
                _this.successMessage = 'Your account has been created';
            }, function (err) {
                console.log(err);
                _this.errorMessage = err.message;
                _this.successMessage = '';
            })
                .then(this.ref.push({
                uid: this.authService.currentUserId,
                firstname: this.firstName,
                lastName: this.lastName,
                companyName: this.companyName,
                email: this.email
            }))
                .then(function () { return _this.router.navigate(['/user']); })
                .catch(function (_error) {
                _this.error = _error;
                _this.router.navigate(['/']);
            });
        }
    };
    SignupFormComponent.prototype.tooglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    SignupFormComponent.prototype.toogleConfirm = function () {
        this.showConfirm = !this.showConfirm;
    };
    SignupFormComponent.prototype.validForm = function () {
        if (this.firstName &&
            this.lastName &&
            this.companyName &&
            this.email &&
            this.password &&
            this.confirmPassword &&
            this.check &&
            this.password == this.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupFormComponent.prototype.test = function () {
        console.log('this works!');
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.scss */ "./src/app/signup-form/signup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.currentUser\" class=\"user-data d-flex flex-column\">\n\t<h5>User Information</h5>\n\t<h4>UID: {{ authService.currentUserId }}</h4>\n\t<h4>Email: {{ authService.currentUserName }}</h4>\n\t<button class=\"btn btn-submit\" (click)=\"logout()\">Logout</button>\n</div>\n<div *ngIf=\"!authService.currentUser\">\n\t\t<div class=\"form-group sign-up d-flex flex-column\">\n\t\t\t<h2 class=\"mb-5\">Login Page</h2>\n\t\t\t<input type=\"email\" name=\"email\" class=\"form-control mb-2\" [(ngModel)]=\"email\" placeholder=\"EMAIL\">\n\t\t\t<input type=\"password\" name=\"password\" class=\"form-control mb-5\" [(ngModel)]=\"password\" placeholder=\"PASSWORD\">\n\t\t\t<button type=\"submit\" class=\"btn btn-submit\" (click)=\"onLoginEmail()\">Login</button>\n\t\t\t<a routerLink=\"/\" class=\"mt-5\">Create new user</a>\n\t\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-data {\n  font-family: Roboto;\n  font-size: 15px;\n  letter-spacing: 0.7px;\n  color: #939598;\n  margin: 0 auto;\n  margin-top: 50px;\n  text-align: center; }\n\n.sign-up {\n  max-width: 200px;\n  margin: 0 auto;\n  margin-top: 50px;\n  text-align: center; }\n\nbutton {\n  margin: 0 auto;\n  max-width: 200px; }\n"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.error = { name: '', message: '' };
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.validForm = function () {
        if (this.email && this.password) {
            return true;
        }
    };
    UserInfoComponent.prototype.onLoginEmail = function () {
        var _this = this;
        if (this.validForm()) {
            this.authService.loginWithEmail(this.email, this.password)
                .then(function () { return _this.router.navigate(['/user']); })
                .catch(function (_error) {
                _this.error = _error;
                _this.router.navigate(['/']);
            });
        }
    };
    UserInfoComponent.prototype.onSignUp = function () {
        var _this = this;
        if (this.validForm()) {
            this.authService.signUpWithEmail(this.email, this.password)
                .then(function (res) {
                console.log(res);
                _this.errorMessage = '';
                _this.successMessage = 'Your account has been created';
            }, function (err) {
                console.log(err);
                _this.errorMessage = err.message;
                _this.successMessage = '';
            })
                .then(function () { return _this.router.navigate(['/user']); })
                .catch(function (_error) {
                _this.error = _error;
                _this.router.navigate(['/']);
            });
        }
    };
    UserInfoComponent.prototype.logout = function () {
        this.authService.signOut();
    };
    UserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/user-info/user-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB3SkgBB7thjiL5qCZRd8XDruiIJHvQvN4",
        authDomain: "awesomedemoproject-a1bd5.firebaseapp.com",
        databaseURL: "https://awesomedemoproject-a1bd5.firebaseio.com",
        projectId: "awesomedemoproject-a1bd5",
        storageBucket: "awesomedemoproject-a1bd5.appspot.com",
        messagingSenderId: "664204825248"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ovisi\OneDrive\Documents\Dev Work\awesomeDemoProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map