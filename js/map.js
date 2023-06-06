// map
let myMap;
ymaps.ready(init);
function init() {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 17,
        controls: [],

    }, {
        suppressMapOpenBlock: true
    });

    var placemark = new ymaps.Placemark([55.76, 37.64], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/svg/geoPoint.svg',
        iconImageSize: [62, 62],
    });

    myMap.geoObjects.add(placemark);
}
