const friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    function getSum(total, num) {
      return total + num;
    }
    // Define the user and compare the information to the 'friends' array to identify what to do with the information
    let user = req.body;
    let userScores = [];
    let friendNumbs = [];
    let bffArray = [];
    for (q = 0; q < user.scores.length; q++) {
      userScores.push(parseInt(user.scores[q]));
    }
    console.log("userScores: ", userScores);
    // console.log(userScores);

    //************************** _FOR LOOP ONE_ ********************************
    // looping through each person in the FRIENDS ARRAY
    for (i = 0; i < friends.length; i++) {
      // for (i=0; i<1; i++){
      // what each person scored on the survey
      let friendScores = [];
      // differences in score for each question
      let friendDiff = [];

      //************************** _FOR LOOP TWO_ ********************************
      // looping through each person to COMPARE SCORES
      for (j = 0; j < friends[i].scores.length; j++) {
        // array of each 'friends' scores
        friendScores.push(friends[i].scores[j]);
        // find the difference between user scores and 'friend' scores
        let scoreDiff = Math.abs(userScores[j] - friends[i].scores[j]);
        // push the difference in the 'friends' scores against the user scores into an array
        friendDiff.push(scoreDiff);
      }

      //************************** _BACK TO ONE_ ********************************
      // total difference in scores (if this number is lowest, you've found your new best friend!)
      let friendDiffTotal = friendDiff.reduce(getSum);
      // console.log(friendDiffTotal);
      friendNumbs.push(friendDiffTotal);
      console.log("friendNumbs: ", friendNumbs);
      // console.log('/n ---------------------------------------' + '\n')


    }

    //************************** _BACK TO GLOBAL_ ********************************
    console.log('/n ---------------------------------------' + '\n')
    const lowScore = Math.min.apply(null, friendNumbs);
    console.log("LowScore: ", lowScore);

    let bffNumb = [];
    for (q = 0; q < friendNumbs.length; q++) {
      // console.log(friendNumbs[q]);
      if (friendNumbs[q] === lowScore) {
        // console.log("HI FRIEND: ", friendNumbs[q]);
        // console.log(friendNumbs.indexOf(friendNumbs[q]));
        bffNumb.push(friendNumbs.indexOf(friendNumbs[q]));
        // const bff = friendNumbs[q];
        console.log("bffNumb: ", bffNumb);
      }

    }
    // if there is more than one best friend, pick the first one
    let absoluteBff = bffNumb[0]

    // console.log('absoluteBff', absoluteBff)

    //   //** OUR NEW BEST FRIEND! */

    let bff = friends[absoluteBff];
    // console.log("BFF: ", bff);

    //* send the matched user data to the front-end
    if (bff) {
      friends.push(bff);
      res.json(bff);
    }

  }
  );
};
