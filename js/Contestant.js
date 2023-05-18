class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
     contestantCountRef.on("value",function(data){
        contestantCount = data.val();
     })

  }

  updateCount(count){
     database.ref('/').update({
       contestantCount: count
     });

  }

 
}