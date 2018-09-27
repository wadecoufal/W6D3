const APIUtil = require('./api_utils.js');
class FollowToggle {
  constructor(el, options){
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;
    this.render();

    this.$el.on("click", e => {
      e.preventDefault();
      this.handleClick();
    });
  }

  render() {
    if (this.followState === 'following' || this.followState === "unfollowing") {
      this.$el.prop("disabled", true);
    }
    if(this.followState === true){
      this.$el.text("Unfollow!");
      this.$el.prop("disabled", false);
    } else if (this.followState === false){
      this.$el.text("Follow!");
      this.$el.prop("disabled", false);
    }
  }

  handleClick() {

    let method_type;
    if (this.followState) {
      this.followState = 'unfollowing';
    } else {
      this.followState = 'following';
    }
    this.render();

    if (this.followState === 'unfollowing') {

      APIUtil.unfollowUser(this.userId).
      then( () => {
        toggleState.bind(this)();
        this.render.bind(this)();
      });
    } else {

      APIUtil.followUser(this.userId).
      then( () => {
        toggleState.bind(this)();
        this.render.bind(this)();
      });
    }

    function toggleState(){
      if(this.followState === 'following'){
        this.followState = true;
      }else {
        this.followState = false;
      }
    }
  }

}

module.exports = FollowToggle;
