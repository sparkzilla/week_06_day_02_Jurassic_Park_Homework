const Park = function (name, ticketPrice, dinosaurs, daysOpen) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
  this.daysOpen = daysOpen;


  Park.prototype.addDinosaur = function(dino){
    this.dinosaurs.push(dino);
  }

  Park.prototype.removeDinosaur = function(dino){
    for( var i = 0; i < this.dinosaurs.length; i++){
    if ( this.dinosaurs[i] === dino) {
      this.dinosaurs.splice(i, 1);
     }
    }
  }

  Park.prototype.mostPopularDinosaur = function(){
     let result = [];
     sorted_list = this.dinosaurs.sort((a, b) => (a.guestsAttractedPerDay < b.guestsAttractedPerDay) ? 1 : -1);
     result = sorted_list[0];
     return result.species;
    }

//note: this methiod returns objects

    Park.prototype.species = function(species){
      let result = [];
       for (let dino of this.dinosaurs){
        if (dino.species === species ) {
          result.push(dino);
        }
      }
      return result;
    }

    Park.prototype.totalVisitorsDay = function(){
      let result = 0;
      for (let dino of this.dinosaurs){
        result += dino.guestsAttractedPerDay;
        }
        return result;
    }

     Park.prototype.totalVisitorsYear = function(){
       return this.totalVisitorsDay() * this.daysOpen;
    }

    Park.prototype.totalRevenueYear = function(){
      return this.totalVisitorsYear() * this.ticketPrice;
   }

}


module.exports = Park;
