export class LikeComponent {

    constructor(private _totalLikes, private _liked){
    }

    get totalLikes() {
        return this._totalLikes;
    }

    get isLiked() {
        return this._liked;
    }

    public clickLike() {
        this._liked = !this._liked;
        this._totalLikes += (this._liked) ? 1 : -1;
    }
}