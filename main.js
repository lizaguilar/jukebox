
function Jukebox(){
  this.song = 0;
  this.songList = [ "audio/92413.mp3", "audio/inmydreams.mp3", "audio/Dracula.mp3", "audio/straighttohell.mp3" ]
 
  
  this.playSong = function(){

      var audio = $("audio")

      audio[this.song].play();
    };

  this.pauseSong = function(){
    $("audio")[this.song].pause();
  };

  this.nextSong = function(){
    this.pauseSong();

    (this.song)++;

    if(this.song > (this.songList.length - 1)){
      this.song = 0
    };

    this.playSong();
  };
};

new_Jukebox = new Jukebox();

$(document).ready(function(){



  $("#play_button").click(function(){
    new_Jukebox.playSong();
  });

  $("#pause_button").click(function(){
    new_Jukebox.pauseSong();
  });



  $("#next_button").click(function(){
    new_Jukebox.nextSong();
  });


});



















// $(document).ready(function(){
  





//   // var audio = ["audio/blowsmymind.mp3"];

  


//   // $("button").click( function (){
//   //      $("#demo")[0].play(); 
//   // });
 
//    // var audio = ["audio/blowsmymind.mp3"];

//   function Song(songFile){
//     this.songFile = songFile;
//   }

//   function Jukebox(){
//     this.index = 0
//     this.array = []

//     this.play = function(){
//       $("#play").click(function(){
//         $("#demo")[0].play();
//       });
//     };

//     this.pause = function(){
//       $("#stop").click(function(){
//         $("#demo")[0].pause();
//       });
//     };


//     // this.songs = ["audio/92413.mp3", "lol"];

//     // console.log(this.songs);

    


//     this.nextSong = function(){
//       $("#next").click(function(){
//          this.index++ ; this.play()


//          // this.songs = ["audio/92413.mp3", "lol"];
//         // this.songs.push(song);
//         // console.log(this.songs);
//         // $("#song2")[0].play();
//         // console.log(this.songs);

//       });
//     }

//   }
