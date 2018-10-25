const R = require('ramda');
var db = {
  users: {
    JOE: {
      name: 'Joe',
      followers: ['STEVE', 'SUZY']
    }
  }
}

// We'll pretend to do a db lookup which returns a promise
var lookupUser = (userId) => Promise.resolve(db.users[userId])
var lookupFollowers = (user) => Promise.resolve(user.followers)
const lookupUserThenFollow = lookupUser('JOE').then(lookupFollowers)

//  followersForUser :: String -> Promise [UserId]
var followersForUser = R.composeP(lookupFollowers, lookupUser);
const lookupUserThenFollowersForUsers = followersForUser('JOE').then(followers => console.log('Followers:', followers))

console.log(lookupUserThenFollow, lookupUserThenFollowersForUsers);
