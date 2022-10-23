var wms_layers = [];

var format_NDVI_0 = new ol.format.GeoJSON();
var features_NDVI_0 = format_NDVI_0.readFeatures(json_NDVI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_0.addFeatures(features_NDVI_0);
var lyr_NDVI_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI_0, 
                style: style_NDVI_0,
                interactive: true,
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_0_0.png" /> 0 - 0.262<br />\
    <img src="styles/legend/NDVI_0_1.png" /> 0.262 - 0.323<br />\
    <img src="styles/legend/NDVI_0_2.png" /> 0.323 - 0.369<br />\
    <img src="styles/legend/NDVI_0_3.png" /> 0.369 - 0.435<br />\
    <img src="styles/legend/NDVI_0_4.png" /> 0.435 - 0.708<br />'
        });
var format_depok_shp_1 = new ol.format.GeoJSON();
var features_depok_shp_1 = format_depok_shp_1.readFeatures(json_depok_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_depok_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_depok_shp_1.addFeatures(features_depok_shp_1);
var lyr_depok_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_depok_shp_1, 
                style: style_depok_shp_1,
                interactive: true,
                title: '<img src="styles/legend/depok_shp_1.png" /> depok_shp'
            });

lyr_NDVI_0.setVisible(true);lyr_depok_shp_1.setVisible(true);
var layersList = [lyr_NDVI_0,lyr_depok_shp_1];
lyr_NDVI_0.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'NDVI': 'NDVI', });
lyr_depok_shp_1.set('fieldAliases', {'fid': 'fid', 'iddesa': 'iddesa', 'idkab': 'idkab', 'idkec': 'idkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'sumber': 'sumber', 'periode': 'periode', });
lyr_NDVI_0.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'NDVI': 'TextEdit', });
lyr_depok_shp_1.set('fieldImages', {'fid': 'TextEdit', 'iddesa': 'TextEdit', 'idkab': 'TextEdit', 'idkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', });
lyr_NDVI_0.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'NDVI': 'inline label', });
lyr_depok_shp_1.set('fieldLabels', {'fid': 'no label', 'iddesa': 'no label', 'idkab': 'no label', 'idkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'sumber': 'no label', 'periode': 'no label', });
lyr_depok_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});