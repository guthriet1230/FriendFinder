const friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    function getSum(total, num) {
      return total + num;
  }
    //* Define the user and compare the information to the 'friends' array to identify what to do with the information
    let user = req.body;
    let userScores = [];
    let friendNumbs = [];
    for (q=0; q<user.scores.length; q++){
    userScores.push(parseInt(user.scores[q]));
      }
    console.log("userScores: ", userScores);
    // console.log(userScores);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* looping through each person in the FRIENDS ARRAY
for (i=0;i<friends.length; i++){
  // for (i=0; i<1; i++){
  //* what each person scored on the survey
  let friendScores = [];
  //* differences in score for each question
  let friendDiff = [];

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //* looping through each person to COMPARE SCORES
  for (j=0; j<friends[i].scores.length; j++){
    //* array of each 'friends' scores
    friendScores.push(friends[i].scores[j]);
    //* find the difference between user scores and 'friend' scores
    let scoreDiff = Math.abs(userScores[j] - friends[i].scores[j]);
    //* push the difference in the 'friends' scores against the user scores into an array
    friendDiff.push(scoreDiff); 
      }
 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


      //* total difference in scores (if this number is lowest, you've found your new best friend!)
      let friendDiffTotal = friendDiff.reduce(getSum);
      // console.log(friendDiffTotal);
      friendNumbs.push(friendDiffTotal);
      console.log("friend: ", friendNumbs);
      // console.log('/n ---------------------------------------' + '\n')
    

      
    }
    console.log('/n ---------------------------------------' + '\n')
    const lowScore = Math.min.apply(null, friendNumbs);
    console.log("LowScore: ", lowScore);
    for (q=0;q<friends.length; q++){  
      // console.log("hello")
      if (friends[q] === lowScore){
        console.log("HI FRIEND: ", friends[q]);
        const bff = friends[q];
        console.log("BFF: ", bff);
    }
  }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//! if the friendDiffTotal is the lowest, then push that friend's information to the front end to display in a modal


// let lowScore = Math.min.apply(null, friendNumbs);
// console.log(lowScore);

//* send the matched user data to the front-end


    //* save the user to the database
    // if (friends){
    //   // console.log(req.body);
    //   friends.push(user);
    //   res.json(true);
    // }
  }
  );
};
