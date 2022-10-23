var wms_layers = [];

var format_LST_0 = new ol.format.GeoJSON();
var features_LST_0 = format_LST_0.readFeatures(json_LST_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LST_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LST_0.addFeatures(features_LST_0);
var lyr_LST_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LST_0, 
                style: style_LST_0,
                interactive: true,
    title: 'LST<br />\
    <img src="styles/legend/LST_0_0.png" /> 0 - 15350<br />\
    <img src="styles/legend/LST_0_1.png" /> 15350 - 15393<br />\
    <img src="styles/legend/LST_0_2.png" /> 15393 - 15422<br />\
    <img src="styles/legend/LST_0_3.png" /> 15422 - 15462<br />\
    <img src="styles/legend/LST_0_4.png" /> 15462 - 15544<br />'
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

lyr_LST_0.setVisible(true);lyr_depok_shp_1.setVisible(true);
var layersList = [lyr_LST_0,lyr_depok_shp_1];
lyr_LST_0.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'LST': 'LST', });
lyr_depok_shp_1.set('fieldAliases', {'fid': 'fid', 'iddesa': 'iddesa', 'idkab': 'idkab', 'idkec': 'idkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'sumber': 'sumber', 'periode': 'periode', });
lyr_LST_0.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'LST': 'TextEdit', });
lyr_depok_shp_1.set('fieldImages', {'fid': 'TextEdit', 'iddesa': 'TextEdit', 'idkab': 'TextEdit', 'idkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', });
lyr_LST_0.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'LST': 'inline label', });
lyr_depok_shp_1.set('fieldLabels', {'fid': 'no label', 'iddesa': 'no label', 'idkab': 'no label', 'idkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'sumber': 'no label', 'periode': 'no label', });
lyr_depok_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});