/* Mister Sigurd, this is a template of the markers of the game. Implement it in the file / component you want */ 

var MarkerGR = L.Icon.extend({
    options: {
        iconSize:     [100, 100],
        iconAnchor:   [50, 50],
        popupAnchor:  [50, 50]
    }
});

var shinko = new MarkerGR({iconUrl: 'shinko.png'}),
    letter = new MarkerGR({iconUrl: 'letter.png'}),
    village = new MarkerGR({iconUrl: 'village_it.png'}),
    place = new MarkerGR({iconUrl: 'place_it.png'}),
    fercheval = new MarkerGR({iconUrl: 'fer_cheval.png'});
