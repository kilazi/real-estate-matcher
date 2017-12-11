"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cat_1 = require("../models/cat");
var base_1 = require("./base");
var CatCtrl = (function (_super) {
    __extends(CatCtrl, _super);
    function CatCtrl() {
        var _this = _super.call(this) || this;
        _this.model = cat_1.default;
        _this._insert = function (req, res) {
            console.log('insert extended', req, req.body);
            // const obj = new this.model(req.body);
            // obj.save((err, item) => {
            //   // 11000 is the code for duplicate key error
            //   if (err && err.code === 11000) {
            //     res.sendStatus(400);
            //   }
            //   if (err) {
            //     return console.error(err);
            //   }
            // res.status(200).json(item);
            // });
            res.status(200).json({});
        };
        return _this;
    }
    return CatCtrl;
}(base_1.default));
exports.default = CatCtrl;
//# sourceMappingURL=cat.js.map