class RightsTweet {
    constructor(id, name, screenName, userPhoto, text, time) {
        this.id = id;
        this.name = name;
        this.screenName = screenName;
        this.userPhoto = userPhoto;
        this.text = text;
        this.time = time;
        this.link = `https://twitter.com/${this.screenName}/status/${this.id}`;
    }
}

export default RightsTweet;