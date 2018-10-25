webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">Kvartinator.ru</h4>\n  <div class=\"card-block\">\n    <ul>\n      <li><b>Author:</b> <a href=\"http://maxs.rocks\" target=\"_blank\">Maksim Sergeev (maxs.rocks)</a></li>\n      <li><b>Purpose:</b>A service for fast and smart search for fitting properties to get the data while on a phone/meeting with a lead.</li>\n      <li><b>Project status:</b> Open Alpha</li>\n      <li><b>Technology stack - MEAN:</b></li>\n      <ul>\n        <li><a href=\"http://www.mongoosejs.com\" target=\"_blank\"><b>M</b>ongoose.js</a> (<a href=\"https://www.mongodb.com\" target=\"_blank\">MongoDB</a>)</li>\n        <li><a href=\"http://www.expressjs.com\" target=\"_blank\"><b>E</b>xpress.js</a></li>\n        <li><a href=\"https://www.angular.io\" target=\"_blank\"><b>A</b>ngular 2+</a></li>\n        <li><a href=\"https://www.nodejs.org\" target=\"_blank\"><b>N</b>ode.js</a></li>\n      </ul>\n      <li><b>Extra libraries consumed:</b></li>\n      <ul>\n        <li><a href=\"https://cli.angular.io\" target=\"_blank\">Angular CLI</a></li>\n        <li><a href=\"http://www.getbootstrap.com\" target=\"_blank\">Bootstrap</a></li>\n        <li><a href=\"http://www.fontawesome.io\" target=\"_blank\">Font Awesome</a></li>\n        <li><a href=\"https://jwt.io\" target=\"_blank\">JSON Web Token</a></li>\n        <li><a href=\"https://github.com/auth0/angular2-jwt\" target=\"_blank\">Angular 2 JWT</a></li>\n        <li><a href=\"https://github.com/dcodeIO/bcrypt.js\" target=\"_blank\">Bcrypt.js</a></li>\n      </ul>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../client/app/about/about.component.html")
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../client/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Account settings</h4>\n  <div class=\"card-block\">\n    <form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"user.role\">\n          <option value=\"\" disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\n        <i class=\"fa fa-save\"></i> Save\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.user = {};
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AccountComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../client/app/account/account.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-apartments/add-apartments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n\n<div class=\"card\" (click)=\"closeAutocomplete()\">\n    <h4 class=\"card-header\">Add property</h4>\n    <div class=\"type_buttons\">\n        <div class=\"type\" [class.active]=\"type=='buy'\" (click)=\"type = 'buy'\">Buy</div>\n        <div class=\"type\" [class.active]=\"type=='sell'\" (click)=\"type = 'sell'\">Sell</div>\n    </div>\n    <div id=\"map\" class=\"map\"></div>\n    <div class=\"card-block\" *ngIf=\"type=='sell'\">\n        <form [formGroup]=\"addCatForm\" (ngSubmit)=\"addCat()\">\n            <div class=\"form-group\">\n                <span>Address (Moscow)</span>\n                <input class=\"form-control\" type=\"text\" name=\"location_address\" formControlName=\"location_address\" placeholder=\"\">\n                <div class=\"autocomplete\" *ngIf=\"autocompleteList['location_address'].length\">\n                    <div *ngFor=\"let item of autocompleteList['location_address']; let i = index\" tabindex=\"0\" class=\"autocomplete_item autocomplete-item-{{i}}\"\n                        (click)=\"choseItem(item, 'location_address')\">{{item.title}}</div>\n                </div>\n                <div class=\"metroList\" *ngIf=\"metroSuggestions['location_address'].length\">\n                    <div class=\"metro\" *ngFor=\"let item of metroSuggestions['location_address']\">{{item.title}} ({{item.distance | number: '.1'}})</div>\n                </div>\n\n\n            </div>\n            <div class=\"form-group\">\n                <span>Rooms</span>\n                <input class=\"form-control\" type=\"text\" name=\"rooms\" formControlName=\"rooms\" placeholder=\"\">\n            </div>\n            <div class=\"form-group\">\n                <span>Area</span>\n                <input class=\"form-control\" type=\"text\" name=\"size\" formControlName=\"size\" placeholder=\"\">\n            </div>\n            <div class=\"form-group\">\n                <span>Price</span>\n                <input class=\"form-control\" type=\"text\" name=\"price\" formControlName=\"price\" placeholder=\"\">\n            </div>\n            <div class=\"form-group\">\n                <span>Floor</span>\n                <input class=\"form-control\" type=\"text\" name=\"level\" formControlName=\"level\" placeholder=\"\">\n            </div>\n            <div class=\"form-group\">\n                <span>Description: </span>\n                <textarea class=\"form-control\" type=\"text\" name=\"description\" formControlName=\"description\" placeholder=\"\"></textarea>\n            </div>\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n        </form>\n    </div>\n    <div class=\"card-block\" *ngIf=\"type=='buy'\">\n        <form [formGroup]=\"addBuyForm\" (ngSubmit)=\"addCat(true)\">\n            <div class=\"form-group\">\n                <span>Address</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_location_address1\" formControlName=\"buy_location_address1\" placeholder=\"\">\n                <div class=\"autocomplete\" *ngIf=\"autocompleteList['buy_location_address1'].length\">\n                    <div *ngFor=\"let item of autocompleteList['buy_location_address1']; let i = index\" tabindex=\"0\" class=\"autocomplete_item autocomplete-item-{{i}}\"\n                        (click)=\"choseItem(item, 'buy_location_address1')\">{{item.title}}</div>\n                </div>\n                <div class=\"metroList\" *ngIf=\"metroSuggestions['buy_location_address1'].length\">\n                    <div class=\"metro\" *ngFor=\"let item of metroSuggestions['buy_location_address1']\">{{item.title}} ({{item.distance | number: '.1'}})</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <span>Address (extra)</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_location_address2\" formControlName=\"buy_location_address2\" placeholder=\"\">\n                <div class=\"autocomplete\" *ngIf=\"autocompleteList['buy_location_address2'].length\">\n                    <div *ngFor=\"let item of autocompleteList['buy_location_address2']; let i = index\" tabindex=\"0\" class=\"autocomplete_item autocomplete-item-{{i}}\"\n                        (click)=\"choseItem(item, 'buy_location_address2')\">{{item.title}}</div>\n                </div>\n                <div class=\"metroList\" *ngIf=\"metroSuggestions['buy_location_address2'].length\">\n                    <div class=\"metro\" *ngFor=\"let item of metroSuggestions['buy_location_address2']\">{{item.title}} ({{item.distance | number: '.1'}})</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <span>Address (extra)</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_location_address3\" formControlName=\"buy_location_address3\" placeholder=\"\">\n                <div class=\"autocomplete\" *ngIf=\"autocompleteList['buy_location_address3'].length\">\n                    <div *ngFor=\"let item of autocompleteList['buy_location_address3']; let i = index\" tabindex=\"0\" class=\"autocomplete_item autocomplete-item-{{i}}\"\n                        (click)=\"choseItem(item, 'buy_location_address3')\">{{item.title}}</div>\n                </div>\n                <div class=\"metroList\" *ngIf=\"metroSuggestions['buy_location_address3'].length\">\n                    <div class=\"metro\" *ngFor=\"let item of metroSuggestions['buy_location_address3']\">{{item.title}} ({{item.distance | number: '.1'}})</div>\n                </div>\n            </div>\n            <div class=\"form-group inline\">\n                <span>Rooms from</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_rooms_from\" formControlName=\"buy_rooms_from\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Rooms to</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_rooms_to\" formControlName=\"buy_rooms_to\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Area from</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_size_from\" formControlName=\"buy_size_from\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Area to</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_size_to\" formControlName=\"buy_size_to\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Price from</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_price_from\" formControlName=\"buy_price_from\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Price to</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_price_to\" formControlName=\"buy_price_to\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Floor from</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_level_from\" formControlName=\"buy_level_from\" placeholder=\"\">\n            </div>\n            <div class=\"form-group inline\">\n                <span>Floor to</span>\n                <input class=\"form-control\" type=\"text\" name=\"buy_level_to\" formControlName=\"buy_level_to\" placeholder=\"\">\n            </div>\n            <div class=\"form-group\">\n                <span>Description: </span>\n                <textarea class=\"form-control\" type=\"text\" name=\"buy_description\" formControlName=\"buy_description\" placeholder=\"\"></textarea>\n            </div>\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n        </form>\n    </div>\n</div>\n\n\n<div class=\"card\" *ngIf=\"filteredCats.length\">\n    <h4 class=\"card-header\">Fitting apartments ({{filteredCats.length}})</h4>\n    <div class=\"card-block\">\n        <!-- <table class=\"table table-bordered table-striped\"> -->\n\n        <div class=\"apartments\">\n            <div class=\"apartment\" *ngFor=\"let cat of filteredCats; let i = index\">\n                <form class=\"form-inline\" #form=\"ngForm\" *ngIf=\"cat.type=='sell'\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n                    <b>Property for sale from {{cat.added_by}}</b>\n                    <div class=\"attribute\" *ngIf=\"cat.location_address != 'false'\">\n                        <span class=\"name\">Address</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.location_address}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.location_address\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.rooms != 'false'\">\n                        <span class=\"name\">Rooms</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.rooms}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.rooms\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.size != 'false'\">\n                        <span class=\"name\">Area</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.size}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.size\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.price != 'false'\">\n                        <span class=\"name\">Price</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.price}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.price\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.level != 'false'\">\n                        <span class=\"name\">Floor</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.level}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.level\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.description != 'false'\">\n                        <span class=\"name\">Description: </span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.description}}</span>\n                        <span *ngIf=\"isEditing == i\"><textarea class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.description\" placeholder=\"\" required></textarea></span>\n                    </div>\n                    <div class=\"buttons\" *ngIf=\"isEditing == -1\">\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat, i)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n                    </div>\n                    <div class=\"buttons\" *ngIf=\"isEditing == i\">\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing(i)\"><i class=\"fa fa-times\"></i> Cancel</button>\n                    </div>\n                </form>\n\n                <form class=\"form-inline\" #form1=\"ngForm\" *ngIf=\"cat.type=='buy'\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n                    <b>Buy request added by {{cat.added_by}}</b>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_location_address1 != 'false'\">\n                        <span class=\"name\">Address</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_location_address1}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_location_address1\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_location_address2 != 'false'\">\n                        <span class=\"name\">Address 1</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_location_address2}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_location_address2\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_location_address3 != 'false'\">\n                        <span class=\"name\">Address 2</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_location_address3}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_location_address3\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_rooms_from != 'false'\">\n                        <span class=\"name\">Rooms from</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_rooms_from}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_rooms_from\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_rooms_to != 'false'\">\n                        <span class=\"name\">Rooms to</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_rooms_to}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_rooms_to\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_size_from != 'false'\">\n                        <span class=\"name\">Area from</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_size_from}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_size_from\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_to != 'false'\">\n                        <span class=\"name\">Area to</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_size_to}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_size_to\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_price_from != 'false'\">\n                        <span class=\"name\">Price from</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_price_from}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_price_from\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_price_to != 'false'\">\n                        <span class=\"name\">Price to</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_price_to}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_price_to\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_level_from != 'false'\">\n                        <span class=\"name\">Floor from</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_level_from}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_level_from\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_level_to != 'false'\">\n                        <span class=\"name\">Floor to</span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_level_to}}</span>\n                        <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_level_to\" placeholder=\"\" required></span>\n                    </div>\n                    <div class=\"attribute\" *ngIf=\"cat.buy_description != 'false'\">\n                        <span class=\"name\">Description: </span>\n                        <span *ngIf=\"isEditing == -1\">{{cat.buy_description}}</span>\n                        <span *ngIf=\"isEditing == i\"><textarea class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.description\" placeholder=\"\" required></textarea></span>\n                    </div>\n                    <div class=\"buttons\" *ngIf=\"isEditing == -1\">\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat, i)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n                    </div>\n                    <div class=\"buttons\" *ngIf=\"isEditing == i\">\n                        <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n                        <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing(i)\"><i class=\"fa fa-times\"></i> Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/add-apartments/add-apartments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n  background-color: green; }\n\n.form-group.inline {\n  display: inline-block;\n  width: 40%; }\n\n.metro {\n  color: gray;\n  font-size: 14px;\n  display: inline-block;\n  margin-right: 10px; }\n\n.autocomplete {\n  position: absolute;\n  height: auto;\n  background-color: white;\n  width: 100%;\n  padding: 10px; }\n\n.autocomplete_item {\n  height: auto;\n  border-bottom: 1px solid #949ba2;\n  padding: 3px;\n  cursor: pointer; }\n  .autocomplete_item:focus {\n    font-weight: bold;\n    color: black; }\n  .autocomplete_item:hover {\n    font-weight: bold;\n    color: black; }\n\n.map {\n  width: 100%;\n  height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/add-apartments/add-apartments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddApartmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__("../../../../../client/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddApartmentsComponent = (function () {
    function AddApartmentsComponent(catService, formBuilder, gs, _sanitizer, toast, router, auth) {
        var _this = this;
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.gs = gs;
        this._sanitizer = _sanitizer;
        this.toast = toast;
        this.router = router;
        this.auth = auth;
        this.breakNextAutocomplete = false;
        this.autocompleteList = {
            location_address: [],
            buy_location_address1: [],
            buy_location_address2: [],
            buy_location_address3: []
        };
        this.location_address = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.rooms = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.size = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.price = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.description = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.level = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.metroSuggestions = {
            location_address: [],
            buy_location_address1: [],
            buy_location_address2: [],
            buy_location_address3: []
        };
        this.buy_location_address1 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_location_address2 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_location_address3 = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_rooms_from = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_rooms_to = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_size_from = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_size_to = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_price_from = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_price_to = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_level_from = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_level_to = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.buy_description = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', []);
        this.filteredCats = [];
        this.cats = [];
        this.catsCounter = 0;
        this.cat = {};
        this.isLoading = true;
        this.isEditing = -1;
        console.log('addApartments here');
        this.addCatForm = this.formBuilder.group({
            location_address: this.location_address,
            rooms: this.rooms,
            size: this.size,
            price: this.price,
            description: this.description,
            level: this.level,
        });
        this.addBuyForm = this.formBuilder.group({
            buy_location_address1: this.buy_location_address1,
            buy_location_address2: this.buy_location_address2,
            buy_location_address3: this.buy_location_address3,
            buy_rooms_from: this.buy_rooms_from,
            buy_rooms_to: this.buy_rooms_to,
            buy_size_from: this.buy_size_from,
            buy_size_to: this.buy_size_to,
            buy_price_from: this.buy_price_from,
            buy_price_to: this.buy_price_to,
            buy_level_from: this.buy_level_from,
            buy_level_to: this.buy_level_to,
            buy_description: this.buy_description,
        });
        this.location_address.valueChanges.subscribe(function (val) {
            console.log('run autocomplete!');
            _this.runAutocomplete(val, 'location_address');
        });
        this.buy_location_address1.valueChanges.subscribe(function (val) {
            _this.runAutocomplete(val, 'buy_location_address1');
        });
        this.buy_location_address2.valueChanges.subscribe(function (val) {
            _this.runAutocomplete(val, 'buy_location_address2');
        });
        this.buy_location_address3.valueChanges.subscribe(function (val) {
            _this.runAutocomplete(val, 'buy_location_address3');
        });
    }
    AddApartmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('current user,', this.auth.currentUser);
        this.user = this.auth.currentUser;
        var init = function () {
            _this.map = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 10
            });
        };
        ymaps.ready(init);
        this.getCats('');
        this.price.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.size.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.level.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.rooms.valueChanges.subscribe(function (res) {
            console.log('rooms value changes', res, _this.addCatForm.value);
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_rooms_from.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_rooms_to.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_size_from.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_size_to.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_price_from.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_price_to.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_level_from.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        this.buy_level_to.valueChanges.subscribe(function (res) {
            if (_this.type == 'buy')
                _this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
            if (_this.type == 'sell')
                _this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        });
        // this.addBuyForm.valueChanges.subscribe(res => {
        //     this.gs.runOnTimeout(() => this.sortCats('buy'));
        // })
        // this.addCatForm.valueChanges.subscribe(res => {
        //     this.gs.runOnTimeout(() => this.sortCats('sell'));
        // })
    };
    AddApartmentsComponent.prototype.sortCats = function (type) {
        var _this = this;
        this.filteredCats = [];
        this.map.geoObjects.removeAll();
        this.cats.forEach(function (cat) {
            var compareScore;
            var form = _this.addCatForm.value;
            console.log('form here is ', form);
            if (type == 'buy')
                form = _this.addBuyForm.value;
            form['location_address_x'] = _this.location_address_x;
            form['location_address_y'] = _this.location_address_y;
            form['buy_location_address1_y'] = _this.buy_location_address1_y;
            form['buy_location_address1_x'] = _this.buy_location_address1_x;
            form['buy_location_address2_y'] = _this.buy_location_address2_y;
            form['buy_location_address2_x'] = _this.buy_location_address2_x;
            form['buy_location_address3_y'] = _this.buy_location_address3_y;
            form['buy_location_address3_x'] = _this.buy_location_address3_x;
            form['type'] = _this.type;
            console.log('!!!!!before-compare', form, cat);
            // setTimeout(() => {
            if (type == 'buy')
                compareScore = _this.gs.getCompareBuy(form, cat);
            if (type == 'sell')
                compareScore = _this.gs.getCompareSell(form, cat);
            console.log('compare_sore', compareScore);
            if (compareScore && compareScore.score) {
                cat['compare'] = compareScore.score;
                if (type == 'buy')
                    _this.addApartmentOnMap(cat);
                if (type == 'sell') {
                    cat.fit_address = cat['buy_location_address' + compareScore.fit_address_index];
                    cat.fit_x = cat['buy_location_address' + compareScore.fit_address_index + '_x'];
                    cat.fit_y = cat['buy_location_address' + compareScore.fit_address_index + '_y'];
                    _this.addApartmentOnMap(cat);
                }
                _this.filteredCats.push(cat);
            }
            // }, 100)
        });
        console.log('cats sorted', this.filteredCats);
        this.filteredCats.sort(function (a, b) {
            if (a.compare > b.compare)
                return 1;
            else if (a.compare < b.compare)
                return -1;
            else
                return 0;
        });
    };
    AddApartmentsComponent.prototype.runAutocomplete = function (val, type) {
        var _this = this;
        console.log('val changed', val);
        this.autocompleteList[type] = [];
        this.gs.runOnTimeout2(function () {
            console.log('run!', _this.breakNextAutocomplete);
            if (_this.breakNextAutocomplete)
                _this.breakNextAutocomplete = false;
            else
                _this.gs.geocode(val).subscribe(function (res) {
                    console.log('got res', res, res.response);
                    res.response.GeoObjectCollection.featureMember.forEach(function (member) {
                        _this.autocompleteList[type].push({ title: member.GeoObject.name, gps: member.GeoObject.Point.pos });
                    });
                    console.log('got autocompletelist', _this.autocompleteList);
                });
        });
    };
    AddApartmentsComponent.prototype.closeAutocomplete = function () {
        var _this = this;
        setTimeout(function () {
            _this.autocompleteList = {
                location_address: [],
                buy_location_address1: [],
                buy_location_address2: [],
                buy_location_address3: []
            };
        }, 50);
    };
    AddApartmentsComponent.prototype.addApartmentOnMap = function (item) {
        console.log('addapartments on map');
        var myGeoObject;
        if (item.type == 'buy') {
            var shownProps = [];
            if (item.fit_address && item.fit_address != 'false') {
                shownProps.push(item.fit_address);
            }
            if (item.buy_price_from && item.buy_price_from != 'false') {
                shownProps.push('Цена от: ' + item.buy_price_from + 'руб.');
            }
            if (item.buy_price_to && item.buy_price_to != 'false') {
                shownProps.push('Цена до: ' + item.buy_price_to + 'руб.');
            }
            if (item.buy_size_from && item.buy_size_from != 'false') {
                shownProps.push('Площадь от: ' + item.buy_size_from + 'кв.м.');
            }
            if (item.buy_size_to && item.buy_size_to != 'false') {
                shownProps.push('Площадь до: ' + item.buy_size_to + 'кв.м.');
            }
            if (item.buy_rooms_from && item.buy_rooms_from != 'false') {
                shownProps.push('Комнат от: ' + item.buy_rooms_from);
            }
            if (item.buy_rooms_to && item.buy_rooms_to != 'false') {
                shownProps.push('Комнат до: ' + item.buy_rooms_to);
            }
            if (item.buy_description && item.buy_description != 'false') {
                shownProps.push('Доп. описание: ' + item.buy_description);
            }
            myGeoObject = new ymaps.Circle([[item.fit_x, item.fit_y], 3000], {
                // Контент метки.
                iconContent: shownProps[0],
                hintContent: shownProps.join('; ')
            }, {
                geodesic: true
            });
        }
        else {
            var shownProps = [];
            if (item.location_address && item.location_address != 'false') {
                shownProps.push(item.location_address);
            }
            if (item.price && item.price != 'false') {
                shownProps.push('Цена: ' + item.price + 'руб.');
            }
            if (item.size && item.size != 'false') {
                shownProps.push('Площадь: ' + item.size + 'кв.м.');
            }
            if (item.rooms && item.rooms != 'false') {
                shownProps.push('Комнат: ' + item.rooms);
            }
            if (item.description && item.description != 'false') {
                shownProps.push('Доп. описание: ' + item.description);
            }
            myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [item.location_address_x, item.location_address_y]
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    iconContent: shownProps[0],
                    hintContent: shownProps.join('; ')
                }
            }, {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon'
            });
            console.log('add apartment on map', item);
        }
        this.map.geoObjects.add(myGeoObject);
    };
    AddApartmentsComponent.prototype.choseItem = function (item, input) {
        var _this = this;
        this.autocompleteList[input] = [];
        this.breakNextAutocomplete = true;
        this[input].setValue(item.title);
        var latLng = item.gps.split(' ');
        this[input + '_x'] = latLng[1];
        this[input + '_y'] = latLng[0];
        console.log('!!!!!choseItem latLng', latLng, this.buy_location_address1_x, this.buy_location_address1_y);
        var myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [latLng[1], latLng[0]]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Это здесь',
                hintContent: item.title
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon'
        });
        this.map.geoObjects.add(myGeoObject);
        // this.map.geoObjects.clear();
        this.map.setCenter([latLng[1], latLng[0]]);
        var metroSuggestions = [];
        this.gs.reverseGeocode(latLng).subscribe(function (res) {
            console.log('got reverse geocode!', res);
            res.response.GeoObjectCollection.featureMember.forEach(function (member) {
                if (metroSuggestions.indexOf(member.GeoObject.name) == -1) {
                    var latLngPoint = member.GeoObject.Point.pos.split(' ');
                    // console.log('distance between apartment and ' + member.GeoObject.name,
                    // this.gs.getDistanceFromLatLonInKm(latLng[0], latLng[1], latLngPoint[0], latLngPoint[1]));
                    metroSuggestions.push({ title: member.GeoObject.name, distance: _this.gs.getDistanceFromLatLonInKm(latLng[0], latLng[1], latLngPoint[0], latLngPoint[1]) });
                }
            });
            _this.metroSuggestions[input] = metroSuggestions;
        });
        if (input.indexOf('buy') == -1)
            this.gs.runOnTimeout(function () { return _this.sortCats('sell'); });
        else
            this.gs.runOnTimeout(function () { return _this.sortCats('buy'); });
    };
    AddApartmentsComponent.prototype.getCats = function (type) {
        var _this = this;
        this.catService.getCats().subscribe(function (data) {
            _this.cats = data;
        }, function (error) { return console.log(error); });
    };
    AddApartmentsComponent.prototype.addCat = function (buy) {
        var _this = this;
        if (buy === void 0) { buy = false; }
        var form = this.addCatForm.value;
        if (buy)
            form = this.addBuyForm.value;
        form['added_by'] = this.user.username;
        form['location_address_x'] = this.location_address_x;
        form['location_address_y'] = this.location_address_y;
        form['buy_location_address1_y'] = this.buy_location_address1_y;
        form['buy_location_address1_x'] = this.buy_location_address1_x;
        form['buy_location_address2_y'] = this.buy_location_address2_y;
        form['buy_location_address2_x'] = this.buy_location_address2_x;
        form['buy_location_address3_y'] = this.buy_location_address3_y;
        form['buy_location_address3_x'] = this.buy_location_address3_x;
        form['type'] = this.type;
        console.log('add cat ', form);
        this.catService.addCat(form).subscribe(function (res) {
            var newCat = res.json();
            // this.cats.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('Добавили квартиру на продажу!', 'success');
            _this.router.navigateByUrl('/cats');
        }, function (error) { return console.log(error); });
    };
    AddApartmentsComponent.prototype.enableEditing = function (cat, i) {
        this.isEditing = i;
        this.cat = cat;
    };
    AddApartmentsComponent.prototype.cancelEditing = function (i) {
        this.isEditing = -1;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats('');
    };
    AddApartmentsComponent.prototype.editCat = function (cat) {
        var _this = this;
        this.catService.editCat(cat).subscribe(function (res) {
            _this.isEditing = -1;
            _this.cat = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddApartmentsComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.catService.deleteCat(cat).subscribe(function (res) {
                var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                _this.cats.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return AddApartmentsComponent;
}());
AddApartmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'add-apartments',
        template: __webpack_require__("../../../../../client/app/add-apartments/add-apartments.component.html"),
        styles: [__webpack_require__("../../../../../client/app/add-apartments/add-apartments.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_cat_service__["a" /* CatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cat_service__["a" /* CatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
], AddApartmentsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-apartments.component.js.map

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Username</th>\n          <th>Email</th>\n          <th>Role</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"users.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no registered users.</td>\n        </tr>  \n      </tbody>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.username}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.role}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </td>\n        </tr>  \n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/admin/admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <nav class=\"navbar navbar-dark bg-primary\">\n    <div class=\"nav navbar-nav\">\n      <a routerLink=\"/cats\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Properties List\n      </a>\n      <a routerLink=\"/add-apartments\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-list\"></i> Add Property\n      </a>\n      <a routerLink=\"/login\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n        <i class=\"fa fa-sign-in\"></i> Login\n      </a>\n      <a routerLink=\"/register\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n        <i class=\"fa fa-user-plus\"></i> Sign Up\n      </a>\n      <a routerLink=\"/account\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-user\"></i> Account ({{auth.currentUser.username}})\n      </a>\n      <a routerLink=\"/admin\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.isAdmin\">\n        <i class=\"fa fa-lock\"></i> Admin\n      </a>\n      <a routerLink=\"/logout\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n        <i class=\"fa fa-sign-out\"></i> Logout\n      </a>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        // ymaps.load(["regions", "metro"], () => { console.log('YMap modules loaded'); });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global_service__ = __webpack_require__("../../../../../client/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_apartments_add_apartments_component__ = __webpack_require__("../../../../../client/app/add-apartments/add-apartments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngui_auto_complete__ = __webpack_require__("../../../../@ngui/auto-complete/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("../../../../../client/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// Import relevant http modules


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__cats_cats_component__["a" /* CatsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_1__add_apartments_add_apartments_component__["a" /* AddApartmentsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HttpClientJsonpModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_3__ngui_auto_complete__["NguiAutoCompleteModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
            __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */],
            __WEBPACK_IMPORTED_MODULE_6__services_cat_service__["a" /* CatService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_global_service__["a" /* GlobalService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Properties ({{cats.length}})</h4>\n  <div class=\"card-block\">\n    <!-- <table class=\"table table-bordered table-striped\"> -->\n\n    <div class=\"apartments\">\n      <div class=\"apartment\" *ngFor=\"let cat of cats; let i = index\">\n        <form class=\"form-inline\" #form=\"ngForm\" *ngIf=\"cat.type=='sell'\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n          <b>Property for sale from {{cat.added_by}}</b>\n          <div class=\"attribute\" >\n            <span class=\"name\">Address</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.location_address}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.location_address\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Rooms</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.rooms}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.rooms\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Area</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.size}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.size\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Price</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.price}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.price\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Floor</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.level}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.level\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Description: </span>\n            <span *ngIf=\"isEditing == -1\">{{cat.description}}</span>\n            <span *ngIf=\"isEditing == i\"><textarea class=\"form-control\" type=\"text\" name=\"name\" rows=\"10\" [(ngModel)]=\"cat.description\" placeholder=\"\" required></textarea></span>\n          </div>\n          <div class=\"buttons\" *ngIf=\"isEditing == -1\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat, i)\"><i class=\"fa fa-pencil\"></i> Change</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </div>\n          <div class=\"buttons\" *ngIf=\"isEditing == i\">\n            <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing(i)\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </div>\n        </form>\n\n        <form class=\"form-inline\" #form1=\"ngForm\" *ngIf=\"cat.type=='buy'\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n          <b>Potential buyer from {{cat.added_by}}</b>\n          <div class=\"attribute\" >\n            <span class=\"name\">Address</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_location_address1}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_location_address1\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Address 1</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_location_address2}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_location_address2\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Address 2</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_location_address3}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_location_address3\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Rooms from</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_rooms_from}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_rooms_from\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Rooms to</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_rooms_to}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_rooms_to\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Area from</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_size_from}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_size_from\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Area to</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_size_to}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_size_to\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Price from</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_price_from}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_price_from\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Price to</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_price_to}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_price_to\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Floor from</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_level_from}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_level_from\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Floor to</span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_level_to}}</span>\n            <span *ngIf=\"isEditing == i\"><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.buy_level_to\" placeholder=\"\" required></span>\n          </div>\n          <div class=\"attribute\" >\n            <span class=\"name\">Description: </span>\n            <span *ngIf=\"isEditing == -1\">{{cat.buy_description}}</span>\n            <span *ngIf=\"isEditing == i\"><textarea class=\"form-control\" type=\"text\" name=\"name\" rows=\"10\" [(ngModel)]=\"cat.buy_description\" placeholder=\"\" required></textarea></span>\n          </div>\n          <div class=\"buttons\" *ngIf=\"isEditing == -1\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat, i)\"><i class=\"fa fa-pencil\"></i> Change</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </div>\n          <div class=\"buttons\" *ngIf=\"isEditing == i\">\n            <button class=\"btn btn-sm btn-primary\" type=\"submit\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing(i)\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td,\n.table th {\n  text-align: center;\n  width: 25%; }\n\n.form-group.inline {\n  display: inline-block;\n  width: 40%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatsComponent = (function () {
    function CatsComponent(catService, formBuilder, toast) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.cat = {};
        this.cats = [];
        this.isLoading = true;
        this.isEditing = -1;
        this.location_address = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        this.rooms = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        this.size = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        // creator = new FormControl('',[]);
        this.description = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        this.level = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.getCats();
        this.addCatForm = this.formBuilder.group({
            location_address: this.location_address,
            rooms: this.rooms,
            size: this.size,
            price: this.price,
            // creator: this.creator,
            description: this.description,
            level: this.level,
        });
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this.catService.getCats().subscribe(function (data) {
            _this.cats = data;
            _this.cats.forEach(function (cat, i) {
                for (var key in cat) {
                    console.log('iterating', cat[key], typeof cat[key]);
                    if (!cat[key])
                        delete _this.cats[i][key];
                }
            });
            console.log('got cats', data);
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CatsComponent.prototype.addCat = function () {
        var _this = this;
        this.catService.addCat(this.addCatForm.value).subscribe(function (res) {
            var newCat = res.json();
            _this.cats.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.enableEditing = function (cat, i) {
        this.isEditing = i;
        this.cat = cat;
    };
    CatsComponent.prototype.cancelEditing = function (i) {
        this.isEditing = -1;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats();
    };
    CatsComponent.prototype.editCat = function (cat) {
        var _this = this;
        this.catService.editCat(cat).subscribe(function (res) {
            _this.isEditing = -1;
            _this.cat = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        if (window.confirm('Вы точно уверены, что хотите удалить эту квартиру?')) {
            this.catService.deleteCat(cat).subscribe(function (res) {
                var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                _this.cats.splice(pos, 1);
                _this.toast.setMessage('Квартира успешно удалена.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats',
        template: __webpack_require__("../../../../../client/app/cats/cats.component.html"),
        styles: [__webpack_require__("../../../../../client/app/cats/cats.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_cat_service__["a" /* CatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cat_service__["a" /* CatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object])
], CatsComponent);

var _a, _b, _c;
//# sourceMappingURL=cats.component.js.map

/***/ }),

/***/ "../../../../../client/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Login</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <p>The page you requested was not found.</p>\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../client/app/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../client/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Register</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n      <div class=\"input-group\" [ngClass]=\"setClassUsername()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" formControlName=\"role\">\n          <option value=\"\" selected disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!registerForm.valid\"><i class=\"fa fa-user-plus\"></i> Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z0-9_-\\s]*')
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)
        ]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../client/app/register/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../client/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_apartments_add_apartments_component__ = __webpack_require__("../../../../../client/app/add-apartments/add-apartments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'cats', component: __WEBPACK_IMPORTED_MODULE_3__cats_cats_component__["a" /* CatsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'add-apartments', component: __WEBPACK_IMPORTED_MODULE_0__add_apartments_add_apartments_component__["a" /* AddApartmentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_8__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/notfound' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    return AuthGuardAdmin;
}());
AuthGuardAdmin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardAdmin);

var _a, _b;
//# sourceMappingURL=auth-guard-admin.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    return AuthGuardLogin;
}());
AuthGuardLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardLogin);

var _a, _b;
//# sourceMappingURL=auth-guard-login.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', username: '', role: '' };
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/cat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatService = (function () {
    function CatService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CatService.prototype.getCats = function () {
        return this.http.get('/api/cats').map(function (res) { return res.json(); });
    };
    CatService.prototype.countCats = function () {
        return this.http.get('/api/cats/count').map(function (res) { return res.json(); });
    };
    CatService.prototype.addCat = function (cat) {
        return this.http.post('/api/cat', JSON.stringify(cat), this.options);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http.get("/api/cat/" + cat._id).map(function (res) { return res.json(); });
    };
    CatService.prototype.editCat = function (cat) {
        return this.http.put("/api/cat/" + cat._id, JSON.stringify(cat), this.options);
    };
    CatService.prototype.deleteCat = function (cat) {
        return this.http.delete("/api/cat/" + cat._id, this.options);
    };
    return CatService;
}());
CatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatService);

var _a;
//# sourceMappingURL=cat.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalService = (function () {
    function GlobalService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    GlobalService.prototype.runOnTimeout = function (callback) {
        if (this.timeoutCooldown)
            clearTimeout(this.timeoutCooldown);
        this.timeoutCooldown = setTimeout(callback, 500);
    };
    GlobalService.prototype.runOnTimeout2 = function (callback) {
        if (this.timeoutCooldown2)
            clearTimeout(this.timeoutCooldown2);
        this.timeoutCooldown2 = setTimeout(callback, 500);
    };
    GlobalService.prototype.geocode = function (address) {
        return this.http.get('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + address + ',Москва').map(function (res) { return res.json(); });
    };
    GlobalService.prototype.reverseGeocode = function (latLng) {
        return this.http.get('https://geocode-maps.yandex.ru/1.x/?geocode=' + latLng[0] + ',' + latLng[1] + '&spn=0.1,0.1&kind=metro&rspn=1&format=json').map(function (res) { return res.json(); });
    };
    GlobalService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    GlobalService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    GlobalService.prototype.removeEmptyKeys = function (object) {
        for (var key in object) {
            if (key != 'type' && key != 'description' && key.indexOf('location') == -1 && key != 'added_by') {
                ////console.log('iterate through object', object, key, 'value of the key is [' + object[key] + ']', typeof object[key]);
                if (!object[key] || object[key] == "") {
                    ////console.log('this key sucks!', key);
                    object[key] = false;
                }
                else
                    object[key] = parseInt(object[key]);
            }
        }
        return object;
    };
    GlobalService.prototype.getCompareBuy = function (inputData, apt) {
        inputData = this.removeEmptyKeys(inputData);
        apt = this.removeEmptyKeys(apt);
        console.log('comparedatabuy', inputData, apt);
        if (apt.type == 'buy')
            return;
        var compare = 0;
        //geo
        if (inputData.buy_location_address1 || inputData.buy_location_address2 || inputData.buy_location_address3) {
            console.log('geo 1');
            if (inputData.buy_location_address1_x && inputData.buy_location_address1_y) {
                console.log('geo 2');
                var distance = this.getDistanceFromLatLonInKm(inputData.buy_location_address1_x, inputData.buy_location_address1_y, apt.location_address_x, apt.location_address_y);
                if (distance <= 1)
                    compare = compare + 3;
                else if (distance <= 5)
                    compare++;
                else if (distance <= 7)
                    compare--;
                else
                    return;
                console.log('geo 3', compare);
            }
            if (inputData.buy_location_address2_x && inputData.buy_location_address2_y) {
                var distance = this.getDistanceFromLatLonInKm(inputData.buy_location_address2_x, inputData.buy_location_address2_y, apt.location_address_x, apt.location_address_y);
                if (distance <= 1)
                    compare = compare + 3;
                else if (distance <= 5)
                    compare++;
                else if (distance <= 7)
                    compare--;
                else
                    return;
            }
            if (inputData.buy_location_address3_x && inputData.buy_location_address3_y) {
                var distance = this.getDistanceFromLatLonInKm(inputData.buy_location_address3_x, inputData.buy_location_address3_y, apt.location_address_x, apt.location_address_y);
                if (distance <= 1)
                    compare = compare + 3;
                else if (distance <= 5)
                    compare++;
                else if (distance <= 7)
                    compare--;
                else
                    return;
            }
        }
        //rooms
        if (inputData.buy_rooms_from || inputData.buy_rooms_to) {
            if (inputData.buy_rooms_from) {
                if (apt.rooms >= inputData.buy_rooms_from)
                    compare = compare + 2;
                else if (apt.rooms >= inputData.buy_rooms_from - 1)
                    compare = compare + 1;
                else
                    return;
            }
            if (inputData.buy_rooms_to) {
                if (apt.rooms <= inputData.buy_rooms_to)
                    compare = compare + 2;
                else if (apt.rooms <= inputData.buy_rooms_to + 1)
                    compare = compare + 1;
                else
                    return;
            }
        }
        //price
        if (inputData.buy_price_from || inputData.buy_price_to) {
            if (inputData.buy_price_from) {
                if (apt.price >= inputData.buy_price_from)
                    compare = compare + 2;
                else if (apt.price >= inputData.buy_price_from - 1000000)
                    compare = compare + 1;
                else
                    return;
            }
            if (inputData.buy_price_to) {
                if (apt.price <= inputData.buy_price_to)
                    compare = compare + 2;
                else if (apt.price <= inputData.buy_price_to + 1000000)
                    compare = compare + 1;
                else
                    return;
            }
        }
        //size
        if (inputData.buy_size_from || inputData.buy_size_to) {
            ////console.log('going to compare prices !');
            if (inputData.buy_size_from) {
                ////console.log('going to compare FROM size !');
                if (apt.size >= inputData.buy_size_from) {
                    ////console.log('size+2');
                    compare = compare + 2;
                }
                else if (apt.size >= inputData.buy_size_from - 10) {
                    ////console.log('size+1');
                    compare = compare + 1;
                }
                else {
                    ////console.log('fuck it');
                    return;
                }
            }
            if (inputData.buy_size_to) {
                ////console.log('compare 1');
                if (apt.size <= inputData.buy_size_to)
                    compare = compare + 2;
                else if (apt.size <= inputData.buy_size_to + 10)
                    compare = compare + 1;
                else
                    return;
            }
        }
        //level
        if (inputData.buy_level_from || inputData.buy_level_to) {
            if (inputData.buy_level_from) {
                ////console.log('compare 11');
                if (apt.level >= inputData.buy_level_from)
                    compare = compare + 2;
                else
                    return;
            }
            if (inputData.buy_level_to) {
                ////console.log('compare 111');
                if (apt.level <= inputData.buy_level_to)
                    compare = compare + 2;
                else
                    return;
            }
        }
        ////console.log('compare now is', compare);
        return { score: compare };
    };
    GlobalService.prototype.getCompareSell = function (inputData, apt) {
        inputData = this.removeEmptyKeys(inputData);
        apt = this.removeEmptyKeys(apt);
        //console.log('comparedatasell', inputData, apt);
        if (apt.type == 'sell')
            return;
        var compare = 0;
        var fai;
        //geo
        if (inputData.location_address_x && inputData.location_address_y) {
            console.log('IF1 passed');
            if (apt.buy_location_address1_x && apt.buy_location_address1_y) {
                console.log('IF2 passed');
                var distance = this.getDistanceFromLatLonInKm(apt.buy_location_address1_x, apt.buy_location_address1_y, inputData.location_address_x, inputData.location_address_y);
                console.log('IF1 passed distance ' + distance);
                if (distance <= 1) {
                    compare = compare + 3;
                    fai = 1;
                }
                else if (distance <= 5) {
                    compare++;
                    fai = 1;
                }
                else if (distance <= 7) {
                    fai = 1;
                    compare--;
                }
                else
                    return;
            }
            if (apt.buy_location_address2_x && apt.buy_location_address2_y) {
                var distance = this.getDistanceFromLatLonInKm(apt.buy_location_address2_x, apt.buy_location_address2_y, inputData.location_address_x, inputData.location_address_y);
                if (distance <= 1) {
                    compare = compare + 3;
                    fai = 2;
                }
                else if (distance <= 5) {
                    compare++;
                    fai = 2;
                }
                else if (distance <= 7) {
                    fai = 2;
                    compare--;
                }
                else
                    return;
            }
            if (apt.buy_location_address3_x && apt.buy_location_address3_y) {
                var distance = this.getDistanceFromLatLonInKm(apt.buy_location_address3_x, apt.buy_location_address3_y, inputData.location_address_x, inputData.location_address_y);
                if (distance <= 1) {
                    compare = compare + 3;
                    fai = 3;
                }
                else if (distance <= 5) {
                    compare++;
                    fai = 3;
                }
                else if (distance <= 7) {
                    fai = 3;
                    compare--;
                }
                else
                    return;
            }
        }
        //rooms
        if (inputData.rooms) {
            if (apt.buy_rooms_from || apt.buy_rooms_to) {
                if (apt.buy_rooms_from) {
                    if (inputData.rooms >= apt.buy_rooms_from)
                        compare = compare + 2;
                    else if (inputData.rooms >= apt.buy_rooms_from - 1)
                        compare = compare + 1;
                    else
                        return;
                }
                if (apt.buy_rooms_to) {
                    if (inputData.rooms <= apt.buy_rooms_to)
                        compare = compare + 2;
                    else if (inputData.rooms <= apt.buy_rooms_to + 1)
                        compare = compare + 1;
                    else
                        return;
                }
            }
        }
        //price
        if (inputData.price) {
            //console.log('price 1', apt.buy_price_from, apt.buy_price_to);
            if (apt.buy_price_from || apt.buy_price_to) {
                //console.log('price 2');
                if (apt.buy_price_from) {
                    //console.log('price 3', apt.buy_price_from, typeof apt.buy_price_from);
                    if (inputData.price >= apt.buy_price_from) {
                        //console.log('price 4');
                        compare = compare + 2;
                    }
                    else if (inputData.price >= apt.buy_price_from - 1000000) {
                        //console.log('price 5');
                        compare = compare + 1;
                    }
                    else
                        return;
                }
                if (apt.buy_price_to) {
                    //console.log('price 22');
                    if (inputData.price <= apt.buy_price_to) {
                        //console.log('price 23');
                        compare = compare + 2;
                    }
                    else if (inputData.price <= apt.buy_price_to + 1000000) {
                        //console.log('price 24');
                        compare = compare + 1;
                    }
                    else
                        return;
                }
            }
        }
        //size
        if (inputData.size) {
            if (apt.buy_size_from || apt.buy_size_to) {
                if (apt.buy_size_from) {
                    if (inputData.size >= apt.buy_size_from)
                        compare = compare + 2;
                    else if (inputData.size >= apt.buy_size_from - 10)
                        compare = compare + 1;
                    else
                        return;
                }
                if (apt.buy_size_to) {
                    if (inputData.size <= apt.buy_size_to)
                        compare = compare + 2;
                    else if (inputData.size <= apt.buy_size_to + 10)
                        compare = compare + 1;
                    else
                        return;
                }
            }
        }
        //level
        if (inputData.level) {
            if (apt.buy_level_from || apt.buy_level_to) {
                if (apt.buy_level_from) {
                    if (inputData.level >= apt.buy_level_from)
                        compare = compare + 2;
                    else
                        return;
                }
                if (apt.buy_level_to) {
                    if (inputData.level <= apt.buy_level_to)
                        compare = compare + 2;
                    else
                        return;
                }
            }
        }
        return { score: compare, fit_address_index: fai };
    };
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Jsonp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Jsonp"]) === "function" && _b || Object])
], GlobalService);

var _a, _b;
//# sourceMappingURL=global.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users').map(function (res) { return res.json(); });
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user._id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/user/" + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/user/" + user._id, this.options);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"condition\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "condition", void 0);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../client/app/shared/loading/loading.component.html")
    })
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__("../../../../../client/app/shared/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        exports: [
            // Shared Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // Shared Components
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  bottom: 15px;\n  left: 25%;\n  opacity: .9;\n  position: fixed;\n  width: 50%;\n  z-index: 999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__("../../../../../client/app/shared/toast/toast.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/toast/toast.component.scss")]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map