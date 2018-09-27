const APIUtil = require('./api_utils.js');
const FollowToggle = require('./follow_toggle.js');
class UsersSearch {

  constructor(el) {
    this.$el = $(el);
    this.$input = $('nav input');
    this.$ul = $('nav ul');

    this.handleInput();
  }

  handleInput() {
    this.$input.on("input", e => {
      APIUtil.searchUsers(this.$input.val())
      .then( (users) => this.renderResults(users));
    });
  }

  renderResults(users) {
    console.log(users);
    this.$ul.empty();
    users.forEach( (user) => {
      let $result = $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      let $followButton = $(`<button class="follow-toggle" ></button>`);
      new FollowToggle($followButton, {userId: user.id, followState: user.followed});
      this.$ul.append($result).append($followButton);
    });
  }
}

module.exports = UsersSearch;
