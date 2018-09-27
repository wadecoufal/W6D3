

const APIUtil = {

  followUser: id => {

    return $.ajax({
      url: `/users/${id}/follow`,
      method: "POST",
      dataType: 'JSON',
    });
  },

  unfollowUser: id => {

    return $.ajax({
      url: `/users/${id}/follow`,
      method: "DELETE",
      dataType: 'JSON',
    });
  },

  searchUsers: (queryVal) => {
    return $.ajax({
      url: `/users/search`,
      data: {
        query: queryVal
      },
      dataType: 'JSON'
    });
  },

  createTweet: (data) => {
    return $.ajax({
      url: '/tweets',
      method: 'POST',
      data: {
        tweet: data
      }
    });
  }

};

module.exports = APIUtil;
