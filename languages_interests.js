users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

function userLanguages(x) {
    for (let value of x) {
      let holder = [];
      let int = value.interests; 
      let keys = Object.keys(int);
      keys.forEach((key) => {
          holder.push(int[key]);
          });
      console.log(`${value.fname} ${value.lname} knows ${value.languages}.\n${value.fname} is also interested in ${holder}.`);
    }
}

userLanguages(users)
