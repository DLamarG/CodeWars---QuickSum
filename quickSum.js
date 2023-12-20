function quicksum(packet){
    if(packet.match(/[^a-z\0-9\A-Z\s]/g)){return 0} // --> match: is a function in which 'strings' and regular expressions, and I used a regular expression to capture the packet labels that only contained lowercase letters, uppercase letters, white space(s), and numbers
    if(packet.match(/[^0-9\A-Z\s]/g)){return 0}  // -->  I used a regular expression to capture the packet labels that only contained uppercase letters, white space(s), and numbers
      let alphaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // --> I created this string for two reasons: 1. to have a comparable charachter reference when looping, and for the index values of the chars respective index
      let count = 0; // --> initialized the variable "count" to numerical value 0
      let charsList = packet.split(''); // --> I created an array using a javascript method 'split', which will spit a string (packet) into individual chars, with individual indexes
      let results = [];
      for(let i=0; i<charsList.length; i++){ // this is my initialization of a for let loop, which I will use to individually view the chars in the charsList array
        let current = charsList[i]; // initializing variable for easier reference
        count += 1
        if(current.match(/[A-Z\s]/g)){ // this is my conditional which will catch all chars matching either a UpperCase char, or whitespace character
          results.push(current.split('').map(x=> alphaStr.indexOf(x)+1) * count) // I utilize the map function to compare the char to the chars in my 'alphaStr' string, and if they match push the index + 1 to my 'results' array
        }
      }
      if(results.length === 0){return 0} // if the length of my results array is 0, no need to do any more actions, simply return 0
      if(results.length > 0){return results.reduce((a,b)=> a+b)} // if the results array length greater than 0, then call the reduce function to sum the results of the array indexes. 
  }





  console.log(quicksum("ACM")) // --> 46
  console.log(quicksum("MID CENTRAL")) // --> 650
  console.log(quicksum("BBC")) // --> 15
  console.log(quicksum("???")) // --> 0
  console.log(quicksum("234 234 WEF ASDF AAA 554211 ???? "))  // --> 0
