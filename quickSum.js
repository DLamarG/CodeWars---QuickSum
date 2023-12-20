function quicksum(packet){
    if(packet.match(/[^a-z\0-9\A-Z\s]/g)){return 0}
    if(packet.match(/[^0-9\A-Z\s]/g)){return 0}
      let alphaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let count = 0;
      let charsList = packet.split('');
      let results = [];
      for(let i=0; i<charsList.length; i++){
        let current = charsList[i];
        count += 1
        if(current.match(/[A-Z\s]/g)){
          results.push(current.split('').map(x=> alphaStr.indexOf(x)+1) * count)
        }
      }
      if(results.length === 0){return 0}
      if(results.length > 0){return results.reduce((a,b)=> a+b)}
  }





  console.log(quicksum("ACM")) // --> 46
  console.log(quicksum("MID CENTRAL")) // --> 650
  console.log(quicksum("BBC")) // --> 15
  console.log(quicksum("???")) // --> 0
  console.log(quicksum("234 234 WEF ASDF AAA 554211 ???? "))  // --> 0
