var size = 0;
var placement = 'point';

var style_WilayahAdministrasi_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Liberation Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0000000000000018;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("nmdesa") !== null) {
        labelText = String(feature.get("nmdesa"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(243,166,178,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
