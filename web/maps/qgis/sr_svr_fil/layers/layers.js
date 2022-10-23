var wms_layers = [];

var format_sr_svr_fil_0 = new ol.format.GeoJSON();
var features_sr_svr_fil_0 = format_sr_svr_fil_0.readFeatures(json_sr_svr_fil_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sr_svr_fil_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sr_svr_fil_0.addFeatures(features_sr_svr_fil_0);
var lyr_sr_svr_fil_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sr_svr_fil_0, 
                style: style_sr_svr_fil_0,
                interactive: true,
    title: 'sr_svr_fil<br />\
    <img src="styles/legend/sr_svr_fil_0_0.png" /> -0.81 - 0.2<br />\
    <img src="styles/legend/sr_svr_fil_0_1.png" /> 0.2 - 0.75<br />\
    <img src="styles/legend/sr_svr_fil_0_2.png" /> 0.75 - 1.41<br />\
    <img src="styles/legend/sr_svr_fil_0_3.png" /> 1.41 - 2.41<br />\
    <img src="styles/legend/sr_svr_fil_0_4.png" /> 2.41 - 18.33<br />'
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

lyr_sr_svr_fil_0.setVisible(true);lyr_depok_shp_1.setVisible(true);
var layersList = [lyr_sr_svr_fil_0,lyr_depok_shp_1];
lyr_sr_svr_fil_0.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'sr_svr_fil': 'sr_svr_fil', });
lyr_depok_shp_1.set('fieldAliases', {'fid': 'fid', 'iddesa': 'iddesa', 'idkab': 'idkab', 'idkec': 'idkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'sumber': 'sumber', 'periode': 'periode', });
lyr_sr_svr_fil_0.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'sr_svr_fil': 'TextEdit', });
lyr_depok_shp_1.set('fieldImages', {'fid': 'TextEdit', 'iddesa': 'TextEdit', 'idkab': 'TextEdit', 'idkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', });
lyr_sr_svr_fil_0.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'sr_svr_fil': 'inline label', });
lyr_depok_shp_1.set('fieldLabels', {'fid': 'no label', 'iddesa': 'no label', 'idkab': 'no label', 'idkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'sumber': 'no label', 'periode': 'no label', });
lyr_depok_shp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});