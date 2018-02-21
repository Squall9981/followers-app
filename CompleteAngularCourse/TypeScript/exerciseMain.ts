import {LikeComponent} from './exerciseModule';

let like = new LikeComponent(10,false);

like.clickLike();
console.log(`likesCount: ${like.totalLikes}, isLiked: ${like.isLiked}`);