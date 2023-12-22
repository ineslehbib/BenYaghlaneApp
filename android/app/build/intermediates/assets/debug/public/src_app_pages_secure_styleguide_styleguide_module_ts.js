"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secure_styleguide_styleguide_module_ts"],{

/***/ 266:
/*!**********************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageRoutingModule": () => (/* binding */ StyleguidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide.page */ 44236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _styleguide_page__WEBPACK_IMPORTED_MODULE_0__.StyleguidePage
}];
class StyleguidePageRoutingModule {}
StyleguidePageRoutingModule.ɵfac = function StyleguidePageRoutingModule_Factory(t) {
  return new (t || StyleguidePageRoutingModule)();
};
StyleguidePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: StyleguidePageRoutingModule
});
StyleguidePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StyleguidePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 95594:
/*!**************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePageModule": () => (/* binding */ StyleguidePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleguide-routing.module */ 266);
/* harmony import */ var _styleguide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleguide.page */ 44236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class StyleguidePageModule {}
StyleguidePageModule.ɵfac = function StyleguidePageModule_Factory(t) {
  return new (t || StyleguidePageModule)();
};
StyleguidePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: StyleguidePageModule
});
StyleguidePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StyleguidePageModule, {
    declarations: [_styleguide_page__WEBPACK_IMPORTED_MODULE_1__.StyleguidePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _styleguide_routing_module__WEBPACK_IMPORTED_MODULE_0__.StyleguidePageRoutingModule]
  });
})();

/***/ }),

/***/ 44236:
/*!************************************************************!*\
  !*** ./src/app/pages/secure/styleguide/styleguide.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleguidePage": () => (/* binding */ StyleguidePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class StyleguidePage {
  constructor() {}
  ngOnInit() {}
}
StyleguidePage.ɵfac = function StyleguidePage_Factory(t) {
  return new (t || StyleguidePage)();
};
StyleguidePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StyleguidePage,
  selectors: [["app-styleguide"]],
  decls: 16,
  vars: 1,
  consts: [[3, "fullscreen"], [2, "text-align", "center", "font-weight", "600"], ["slot", "primary"], ["routerLink", "/settings"], ["name", "ellipsis-vertical-outline"], [1, "ion-padding"], [2, "padding", "0px !important", "height", "fit-content", "width", "fit-content", "margin", "0px", "bottom", "0px"], ["src", "../../../../assets/1.png", "width", "auto", 2, "img", "url('../../../../assets/1.png') no-repeat center center fixed !important", "padding", "0px"], ["src", "../../../../assets/2.png", "width", "auto", 2, "img", "url('../../../../assets/1.png') no-repeat center center fixed !important", "padding", "0px"], ["src", "../../../../assets/3.png", "width", "auto", 2, "img", "url('../../../../assets/3.png') no-repeat center center fixed !important", "padding", "0px"]],
  template: function StyleguidePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-toolbar", 1)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nos catalogues ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 2)(5, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["[_nghost-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  color: #523614;\n}\n[_nghost-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  --box-shadow:transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px !important ;\n}\n[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%] {\n  background: #eac24d !important;\n}\n[_nghost-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  background: transparent;\n  --padding: 0px;\n}\n[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #eac24d !important;\n}\n[_nghost-%COMP%]   body[_ngcontent-%COMP%] {\n  --background: #eac24d !important;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  background-color: #eac24d !important;\n  --background: #eac24d !important;\n}\n[_nghost-%COMP%]   body[_ngcontent-%COMP%] {\n  background: #eac24d !important;\n}\n[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%] {\n  background-color: #eac24d !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2VjdXJlL3N0eWxlZ3VpZGUvc3R5bGVndWlkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0FBQUo7QUFHRTtFQUNFLDhHQUFBO0FBREo7QUFJRTtFQUNFLDhCQUFBO0FBRko7QUFLRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQUhKO0FBUUU7RUFDRSxnQ0FBQTtBQU5KO0FBU0U7RUFDRSxnQ0FBQTtBQVBKO0FBVUU7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FBUko7QUFXRTtFQUNFLDhCQUFBO0FBVEo7QUFZRTtFQUNFLG9DQUFBO0FBVkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbmlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogIzUyMzYxNDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIC0tYm94LXNoYWRvdzp0cmFuc3BhcmVudCAwcHggMHB4IDBweCAwcHgsIHRyYW5zcGFyZW50IDBweCAwcHggMHB4IDBweCwgdHJhbnNwYXJlbnQgMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnRcclxuICB9XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VhYzI0ZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmc6IDBweDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWFjMjRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2VhYzI0ZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhYzI0ZCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWFjMjRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlYWMyNGQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhYzI0ZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secure_styleguide_styleguide_module_ts.js.map