function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
      mapId: "",
      center: { lat: 35.703021749493416, lng: -5.799041690221782 },
      zoom: 7,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });

    const markers = [
      [35.76510235973331,-5.852195487484731],
      [35.183552538340535, -4.676658389440796]
    ];
    for(let i=0;i<markers.length;i++){
      const currMark = markers[i];
      new google.maps.Marker({
        position : {lat:currMark[0],lng:currMark[1]},
        map:map,
      })
    }

    const marker = new google.maps.Marker({
      position: {lat:35.901277344759826, lng:-5.403877236249287},
      map,
      title: "Hello World!",
      animation: google.maps.Animation.DROP,
      icon : {
        url: 'mario.png',
        scaledSize: new google.maps.Size(78,61)
      }
    });

    const InfoWindow = new google.maps.InfoWindow({
      content: "hi from my house",
    });
    marker.addListener("click",()=>{
      InfoWindow.open(map,marker);
    })

  }
  
  window.initMap = initMap;