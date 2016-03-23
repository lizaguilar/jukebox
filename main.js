$(document).ready(function(){
  





  // var audio = ["audio/blowsmymind.mp3"];

  


  // $("button").click( function (){
  //      $("#demo")[0].play(); 
  // });
 
   // var audio = ["audio/blowsmymind.mp3"];

  function Song(songFile){
    this.songFile = songFile;
  }

  function Jukebox(){
    this.index = 0
    this.array = []

    this.play = function(){
      $("#play").click(function(){
        $("#demo")[0].play();
      });
    };

    this.pause = function(){
      $("#stop").click(function(){
        $("#demo")[0].pause();
      });
    };


    // this.songs = ["audio/92413.mp3", "lol"];

    // console.log(this.songs);

    


    this.nextSong = function(){
      $("#next").click(function(){
         this.index++ ; this.play()


         // this.songs = ["audio/92413.mp3", "lol"];
        // this.songs.push(song);
        // console.log(this.songs);
        // $("#song2")[0].play();
        // console.log(this.songs);

      });
    }

  }

  var new_play = new Jukebox()
  new_play.play()
  new_play.pause()
  new_play.nextSong(new Song("audio/92413.mp3"))



});