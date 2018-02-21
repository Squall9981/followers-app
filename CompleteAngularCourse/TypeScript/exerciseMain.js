"use strict";
exports.__esModule = true;
var exerciseModule_1 = require("./exerciseModule");
var like = new exerciseModule_1.LikeComponent(10, false);
like.clickLike();
console.log("likesCount: " + like.totalLikes + ", isLiked: " + like.isLiked);
