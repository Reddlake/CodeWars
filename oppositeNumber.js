function opposite(number) {
    let sign = Math.sign(number)
    if(sign === 1){
        return number * -1;
    } else if (sign === -1){
        return number * sign
    } else {
        return number
    }
   }

   console.log(opposite(0));





   //Very simple, given an integer or a floating-point number, find its opposite.

   /* Figure out how this works
   
   function opposite(number) {
  /* Now this is the story all about how
      My life got flipped, turned upside down
      And I'd like to take a minute just sit right there
      I'll tell you how I became the prince of a town called Bel-air
      
      In west Philadelphia born and raised
      On the playground where I spent most of my days
      Chilling out, maxing, relaxing all cool
      And all shooting some b-ball outside of the school
      When a couple of guys, they were up to no good
      Started making trouble in my neighbourhood
      I got in one little fight and my mom got scared
      And said "You're moving with your auntie and uncle in Bel-air"
      
      I whistled for a cab and when it came near the
      License plate said "fresh" and had a dice in the mirror
      If anything I could say that this cab was rare
      But I thought nah, forget it, yo homes to Bel-air!
      
      I pulled up to a house about seven or eight
      And I yelled to the cabby "Yo, homes smell you later!"
      Looked at my kingdom I was finally there
      To sit on my throne as the prince of Bel-air *//*
  return -number;
}  


same as this one 

const opposite = number => -number;


*/