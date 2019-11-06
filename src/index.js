const voter_signatures = [
  "Bill Billiamson",
  "Kate Etak",
  "Brandon Brandonus",
  "Simon Simonson",
  "Jane Janesford"
];

const voter_ids = [
  "Bill Billiamson",
  "Kate Eta",
  "Brandon Brandonus",
  "Simon Simonson"
  //'Jane Janesford'
];

const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!

  if (voter_signatures.length === voter_ids.length) {
    for (let i = 0; i < voter_ids.length; i++) {
      if (voter_signatures[i] !== voter_ids[i]) {
        return "FRAUD!";
      }
    }
    return "All clear, we can count the votes!";
  } else {
    //return "FRAUD!";
    return false;
  }
};

let result = voterTurnout(voter_signatures, voter_ids);
console.log(result);
