class Radio {
    constructor(stations){
      this.stations = stations
            
    }
    
    changeStation(){
      let stationIdx = Math.floor(Math.random() * this.stations.length)
      console.log(this.stations[stationIdx].name)
      this.stations[stationIdx].changeSong()
    }
  }
  
  class Station {
    constructor(name, songs){
      this.name = name
      this.songs = songs
    }
    changeSong(){
      let songIdx = Math.floor(Math.random() * this.songs.length)
      console.log(" is playing "+ this.songs[songIdx].title, "by "+this.songs[songIdx].artist)
    }
  }
  
    
  let songs = [{title: "As It Was", artist: "Harry Styles"}, 
  {title: "Heat Waves", artist: "Glass Animals"}, 
  {title: "Big Energy", artist: "Latto"}, 
  {title: "Stay", artist: "The Kid LAROI & Justin Beiber"}, 
  {title: "Enemy", artist: "Imagine Drangons X JID"}, 
  {title: "Super Gremlin", artist: "Kodak Black" }]
  
  let stations = [{name: "Station One", songs: songs}, {name: "Station Four", songs: songs}]
  let classStations = []
  
    
    stations.forEach(song => {
    let ns = new Station(song.name, song.songs)
    classStations.push(`now playing ${ns}`)
    })
    
    const myRadio = new Radio (classStations)
  myRadio.changeStation()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  