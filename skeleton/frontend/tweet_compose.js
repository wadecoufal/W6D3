
class TweetCompose {

  constructor(el) {
    this.$el = $(el);

    this.$el.on("submit", e => {
      console.log('submitted');
      e.preventDefault();
      this.submit();
    });
  }

  submit() {
    debugger;

    $(':input').each( (index, el) => {
      el.props('disabled', true);
    });
}

module.exports = TweetCompose;
