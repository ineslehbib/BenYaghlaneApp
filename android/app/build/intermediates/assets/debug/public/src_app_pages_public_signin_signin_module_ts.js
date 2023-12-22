"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_public_signin_signin_module_ts"],{

/***/ 54433:
/*!**************************************************************!*\
  !*** ./src/app/pages/public/signin/signin-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 64569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
}];
class SigninPageRoutingModule {}
SigninPageRoutingModule.ɵfac = function SigninPageRoutingModule_Factory(t) {
  return new (t || SigninPageRoutingModule)();
};
SigninPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SigninPageRoutingModule
});
SigninPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SigninPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 93733:
/*!******************************************************!*\
  !*** ./src/app/pages/public/signin/signin.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 54433);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 64569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class SigninPageModule {}
SigninPageModule.ɵfac = function SigninPageModule_Factory(t) {
  return new (t || SigninPageModule)();
};
SigninPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SigninPageModule
});
SigninPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SigninPageModule, {
    declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 64569:
/*!****************************************************!*\
  !*** ./src/app/pages/public/signin/signin.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 60649);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);








class SigninPage {
  constructor(authService, loadingController, formBuilder, toastService, router) {
    this.authService = authService;
    this.loadingController = loadingController;
    this.formBuilder = formBuilder;
    this.toastService = toastService;
    this.router = router;
    this.current_year = new Date().getFullYear();
    this.submit_attempt = false;
  }
  ngOnInit() {
    // Setup form
    this.signin_form = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])]
    });
  }
  // Sign in
  signIn() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
      this.submit_attempt = true;
      if (this.signin_form.valid) {
        const email = this.signin_form.value.email;
        const password = this.signin_form.value.password;
        try {
          const loading = yield this.loadingController.create({
            message: 'Authentification ...'
          });
          yield loading.present();
          const success = yield this.authService.signIn(email, password);
          yield loading.dismiss();
          if (success) {
            // Redirect to the home page or any other page upon successful sign-in
            this.router.navigate(['/home']);
          } else {
            // Display an error message to the user
            this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);
          }
        } catch (error) {
          // Handle and display the error to the user
          this.toastService.presentToast('Error', 'Error signing in. Please try again.', 'top', 'danger', 2000);
          console.error('Error signing in:', error);
        }
      }
    });
  }
}
SigninPage.ɵfac = function SigninPage_Factory(t) {
  return new (t || SigninPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
SigninPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SigninPage,
  selectors: [["app-signin"]],
  decls: 23,
  vars: 1,
  consts: [[1, "ion-padding", "ion-full-height", "ion-flex", "ion-flex-center"], ["src", "../../../../assets/logo.png", 2, "height", "300px", "width", "350px"], ["id", "login-content"], [1, "form-default", 3, "formGroup", "submit"], [1, "animate__animated", "animate__fadeInUp"], ["position", "floating"], ["name", "card-outline"], ["type", "Integer", "formControlName", "email"], ["name", "lock-closed-outline"], ["color", "secondary", "formControlName", "password", "type", "password", "placeholder", "Mot de passe"], ["routerLink", "/home", "expand", "block", "size", "medium", "color", "light", "fill", "clear", 1, "ion-button-small", "ion-margin-top-medium", "ion-button1"], [1, "ion-text-center", "ion-margin-top"], ["color", "light"]],
  template: function SigninPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function SigninPage_Template_form_submit_4_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-item", 4)(6, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Num\u00E9ro de la carte ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-item", 4)(12, "ion-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Mot de passe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Acc\u00E9der ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "ion-text", 12)(21, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Deltasoft International");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signin_form);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["[_nghost-%COMP%]   #login[_ngcontent-%COMP%] {\n  background: url('background.png') no-repeat center center !important;\n}\n[_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 42px;\n}\n[_nghost-%COMP%]   #login-content[_ngcontent-%COMP%] {\n  background-color: #eac24d;\n  height: 60vh;\n  width: 100%;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  border-top-right-radius: 46px;\n  border-top-left-radius: 46px;\n  padding-top: 100px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n[_nghost-%COMP%]   .ion-button1[_ngcontent-%COMP%] {\n  background-color: rgb(6, 186, 77) !important;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHVibGljL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0VBQUE7QUFBRjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLG1CQUFBO0FBRE47QUFHQztFQUNFLHlCQUFBO0VBQ0QsWUFBQTtFQUNFLFdBQUE7RUFDSixRQUFBO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQyxlQUFBO0VBQ0QsNkJBQUE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQU1FO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtBQUpKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4jbG9naW57XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQycHg7XHJcbiAgICB9XHJcbiAjbG9naW4tY29udGVudCB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlYWMyNGQ7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbnJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ2cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tYnV0dG9uMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDE4NiwgNzcsIDI1NSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public_signin_signin_module_ts.js.map