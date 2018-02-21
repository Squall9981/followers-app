"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_totalLikes, _liked) {
        this._totalLikes = _totalLikes;
        this._liked = _liked;
    }
    Object.defineProperty(LikeComponent.prototype, "totalLikes", {
        get: function () {
            return this._totalLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isLiked", {
        get: function () {
            return this._liked;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.clickLike = function () {
        this._liked = !this._liked;
        this._totalLikes += (this._liked) ? 1 : -1;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
