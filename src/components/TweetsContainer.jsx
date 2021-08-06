import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(0);

  const handleUserClick = (selectedUser) => {
    setSelectedUser(selectedUser - 1);
  };

  const handleTweetCount = (tweetId) => {
    const user = users[selectedUser];
    const updateTweet = user.tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        const newLike = (tweet.favorite_count += 1);
        return {
          ...tweet,
          favorite_count: newLike
        };
      }
      return tweet;
    });

    const newUser = {
      ...user,
      tweets: updateTweet
    };

    setUsers([
      ...users.slice(0, selectedUser),
      newUser,
      ...users.slice(selectedUser + 1)
    ]);
  };

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList
            user={users[selectedUser]}
            handleTweetLike={handleTweetCount}
          />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
