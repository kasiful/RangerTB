var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AlokasiDana2021_1 = new ol.format.GeoJSON();
var features_AlokasiDana2021_1 = format_AlokasiDana2021_1.readFeatures(json_AlokasiDana2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlokasiDana2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlokasiDana2021_1.addFeatures(features_AlokasiDana2021_1);
var lyr_AlokasiDana2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlokasiDana2021_1, 
                style: style_AlokasiDana2021_1,
                interactive: true,
    title: 'Alokasi Dana 2021<br />\
    <img src="styles/legend/AlokasiDana2021_1_0.png" /> 0 - 445197<br />\
    <img src="styles/legend/AlokasiDana2021_1_1.png" /> 445197 - 1172784<br />\
    <img src="styles/legend/AlokasiDana2021_1_2.png" /> 1172784 - 2076999<br />\
    <img src="styles/legend/AlokasiDana2021_1_3.png" /> 2076999 - 3648833<br />\
    <img src="styles/legend/AlokasiDana2021_1_4.png" /> 3648833 - 7640710<br />'
        });
var format_AlokasiDana2022_2 = new ol.format.GeoJSON();
var features_AlokasiDana2022_2 = format_AlokasiDana2022_2.readFeatures(json_AlokasiDana2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlokasiDana2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlokasiDana2022_2.addFeatures(features_AlokasiDana2022_2);
var lyr_AlokasiDana2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlokasiDana2022_2, 
                style: style_AlokasiDana2022_2,
                interactive: true,
    title: 'Alokasi Dana 2022<br />\
    <img src="styles/legend/AlokasiDana2022_2_0.png" /> 0 - 346178<br />\
    <img src="styles/legend/AlokasiDana2022_2_1.png" /> 346178 - 911939<br />\
    <img src="styles/legend/AlokasiDana2022_2_2.png" /> 911939 - 1615044<br />\
    <img src="styles/legend/AlokasiDana2022_2_3.png" /> 1615044 - 2837279<br />\
    <img src="styles/legend/AlokasiDana2022_2_4.png" /> 2837279 - 5941302<br />'
        });
var format_CO_3 = new ol.format.GeoJSON();
var features_CO_3 = format_CO_3.readFeatures(json_CO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO_3.addFeatures(features_CO_3);
var lyr_CO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CO_3, 
                style: style_CO_3,
                interactive: true,
    title: 'CO<br />\
    <img src="styles/legend/CO_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/CO_3_1.png" /> 0 - 0.03319<br />\
    <img src="styles/legend/CO_3_2.png" /> 0.03319 - 0.03342<br />\
    <img src="styles/legend/CO_3_3.png" /> 0.03342 - 0.03366<br />\
    <img src="styles/legend/CO_3_4.png" /> 0.03366 - 0.03413<br />'
        });
var format_LST_4 = new ol.format.GeoJSON();
var features_LST_4 = format_LST_4.readFeatures(json_LST_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LST_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LST_4.addFeatures(features_LST_4);
var lyr_LST_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LST_4, 
                style: style_LST_4,
                interactive: true,
    title: 'LST<br />\
    <img src="styles/legend/LST_4_0.png" /> 0 - 0<br />\
    <img src="styles/legend/LST_4_1.png" /> 0 - 15360<br />\
    <img src="styles/legend/LST_4_2.png" /> 15360 - 15413<br />\
    <img src="styles/legend/LST_4_3.png" /> 15413 - 15462<br />\
    <img src="styles/legend/LST_4_4.png" /> 15462 - 15544<br />'
        });
var format_NDBI_5 = new ol.format.GeoJSON();
var features_NDBI_5 = format_NDBI_5.readFeatures(json_NDBI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDBI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDBI_5.addFeatures(features_NDBI_5);
var lyr_NDBI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDBI_5, 
                style: style_NDBI_5,
                interactive: true,
    title: 'NDBI<br />\
    <img src="styles/legend/NDBI_5_0.png" /> -0.22 - -0.098<br />\
    <img src="styles/legend/NDBI_5_1.png" /> -0.098 - -0.028<br />\
    <img src="styles/legend/NDBI_5_2.png" /> -0.028 - 0.029<br />\
    <img src="styles/legend/NDBI_5_3.png" /> 0.029 - 0.09<br />\
    <img src="styles/legend/NDBI_5_4.png" /> 0.09 - 0.204<br />'
        });
var format_NDVI_6 = new ol.format.GeoJSON();
var features_NDVI_6 = format_NDVI_6.readFeatures(json_NDVI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_6.addFeatures(features_NDVI_6);
var lyr_NDVI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVI_6, 
                style: style_NDVI_6,
                interactive: true,
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_6_0.png" /> 0 - 0.12<br />\
    <img src="styles/legend/NDVI_6_1.png" /> 0.12 - 0.28<br />\
    <img src="styles/legend/NDVI_6_2.png" /> 0.28 - 0.39<br />\
    <img src="styles/legend/NDVI_6_3.png" /> 0.39 - 0.52<br />\
    <img src="styles/legend/NDVI_6_4.png" /> 0.52 - 0.71<br />'
        });
var format_SpatialRandomForest_7 = new ol.format.GeoJSON();
var features_SpatialRandomForest_7 = format_SpatialRandomForest_7.readFeatures(json_SpatialRandomForest_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpatialRandomForest_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpatialRandomForest_7.addFeatures(features_SpatialRandomForest_7);
var lyr_SpatialRandomForest_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpatialRandomForest_7, 
                style: style_SpatialRandomForest_7,
                interactive: true,
    title: 'Spatial Random Forest<br />\
    <img src="styles/legend/SpatialRandomForest_7_0.png" /> -0.9 - 1<br />\
    <img src="styles/legend/SpatialRandomForest_7_1.png" /> 1 - 2.8<br />\
    <img src="styles/legend/SpatialRandomForest_7_2.png" /> 2.8 - 5<br />\
    <img src="styles/legend/SpatialRandomForest_7_3.png" /> 5 - 8.8<br />\
    <img src="styles/legend/SpatialRandomForest_7_4.png" /> 8.8 - 18.3<br />'
        });
var format_SpatialSupportVectorRegression_8 = new ol.format.GeoJSON();
var features_SpatialSupportVectorRegression_8 = format_SpatialSupportVectorRegression_8.readFeatures(json_SpatialSupportVectorRegression_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpatialSupportVectorRegression_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpatialSupportVectorRegression_8.addFeatures(features_SpatialSupportVectorRegression_8);
var lyr_SpatialSupportVectorRegression_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpatialSupportVectorRegression_8, 
                style: style_SpatialSupportVectorRegression_8,
                interactive: true,
    title: 'Spatial Support Vector Regression<br />\
    <img src="styles/legend/SpatialSupportVectorRegression_8_0.png" /> -0.8 - 0.8<br />\
    <img src="styles/legend/SpatialSupportVectorRegression_8_1.png" /> 0.8 - 2.2<br />\
    <img src="styles/legend/SpatialSupportVectorRegression_8_2.png" /> 2.2 - 4.4<br />\
    <img src="styles/legend/SpatialSupportVectorRegression_8_3.png" /> 4.4 - 8.8<br />\
    <img src="styles/legend/SpatialSupportVectorRegression_8_4.png" /> 8.8 - 18.3<br />'
        });
var format_RandomForest_9 = new ol.format.GeoJSON();
var features_RandomForest_9 = format_RandomForest_9.readFeatures(json_RandomForest_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RandomForest_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RandomForest_9.addFeatures(features_RandomForest_9);
var lyr_RandomForest_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RandomForest_9, 
                style: style_RandomForest_9,
                interactive: true,
    title: 'Random Forest<br />\
    <img src="styles/legend/RandomForest_9_0.png" /> 0 - 1.1<br />\
    <img src="styles/legend/RandomForest_9_1.png" /> 1.1 - 2.8<br />\
    <img src="styles/legend/RandomForest_9_2.png" /> 2.8 - 5<br />\
    <img src="styles/legend/RandomForest_9_3.png" /> 5 - 8.8<br />\
    <img src="styles/legend/RandomForest_9_4.png" /> 8.8 - 18.3<br />'
        });
var format_SupportVectorRegression_10 = new ol.format.GeoJSON();
var features_SupportVectorRegression_10 = format_SupportVectorRegression_10.readFeatures(json_SupportVectorRegression_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupportVectorRegression_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupportVectorRegression_10.addFeatures(features_SupportVectorRegression_10);
var lyr_SupportVectorRegression_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SupportVectorRegression_10, 
                style: style_SupportVectorRegression_10,
                interactive: true,
    title: 'Support Vector Regression<br />\
    <img src="styles/legend/SupportVectorRegression_10_0.png" /> -0.04 - 0.83<br />\
    <img src="styles/legend/SupportVectorRegression_10_1.png" /> 0.83 - 2.15<br />\
    <img src="styles/legend/SupportVectorRegression_10_2.png" /> 2.15 - 4.43<br />\
    <img src="styles/legend/SupportVectorRegression_10_3.png" /> 4.43 - 8.75<br />\
    <img src="styles/legend/SupportVectorRegression_10_4.png" /> 8.75 - 18.33<br />'
        });
var format_WilayahAdministrasiDepok_11 = new ol.format.GeoJSON();
var features_WilayahAdministrasiDepok_11 = format_WilayahAdministrasiDepok_11.readFeatures(json_WilayahAdministrasiDepok_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasiDepok_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasiDepok_11.addFeatures(features_WilayahAdministrasiDepok_11);
var lyr_WilayahAdministrasiDepok_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasiDepok_11, 
                style: style_WilayahAdministrasiDepok_11,
                interactive: true,
                title: '<img src="styles/legend/WilayahAdministrasiDepok_11.png" /> Wilayah Administrasi Depok'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AlokasiDana2021_1.setVisible(false);lyr_AlokasiDana2022_2.setVisible(false);lyr_CO_3.setVisible(false);lyr_LST_4.setVisible(false);lyr_NDBI_5.setVisible(false);lyr_NDVI_6.setVisible(false);lyr_SpatialRandomForest_7.setVisible(false);lyr_SpatialSupportVectorRegression_8.setVisible(false);lyr_RandomForest_9.setVisible(false);lyr_SupportVectorRegression_10.setVisible(false);lyr_WilayahAdministrasiDepok_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AlokasiDana2021_1,lyr_AlokasiDana2022_2,lyr_CO_3,lyr_LST_4,lyr_NDBI_5,lyr_NDVI_6,lyr_SpatialRandomForest_7,lyr_SpatialSupportVectorRegression_8,lyr_RandomForest_9,lyr_SupportVectorRegression_10,lyr_WilayahAdministrasiDepok_11];
lyr_AlokasiDana2021_1.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'dana_2021': 'dana_2021', });
lyr_AlokasiDana2022_2.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'dana_2022': 'dana_2022', });
lyr_CO_3.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'CO': 'CO', });
lyr_LST_4.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'LST': 'LST', });
lyr_NDBI_5.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'NDBI': 'NDBI', });
lyr_NDVI_6.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'NDVI': 'NDVI', });
lyr_SpatialRandomForest_7.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'sr_rf_fill': 'sr_rf_fill', });
lyr_SpatialSupportVectorRegression_8.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'sr_svr_fil': 'sr_svr_fil', });
lyr_RandomForest_9.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'rf_fill': 'rf_fill', });
lyr_SupportVectorRegression_10.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'svr_fill': 'svr_fill', });
lyr_WilayahAdministrasiDepok_11.set('fieldAliases', {'fid': 'fid', 'iddesa': 'iddesa', 'idkab': 'idkab', 'idkec': 'idkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'sumber': 'sumber', 'periode': 'periode', });
lyr_AlokasiDana2021_1.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'dana_2021': 'TextEdit', });
lyr_AlokasiDana2022_2.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'dana_2022': 'TextEdit', });
lyr_CO_3.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'CO': 'TextEdit', });
lyr_LST_4.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'LST': 'TextEdit', });
lyr_NDBI_5.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'NDBI': 'TextEdit', });
lyr_NDVI_6.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'NDVI': 'TextEdit', });
lyr_SpatialRandomForest_7.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'sr_rf_fill': 'TextEdit', });
lyr_SpatialSupportVectorRegression_8.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'sr_svr_fil': 'TextEdit', });
lyr_RandomForest_9.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'rf_fill': 'TextEdit', });
lyr_SupportVectorRegression_10.set('fieldImages', {'id': 'Range', 'nmdesa': 'TextEdit', 'svr_fill': 'TextEdit', });
lyr_WilayahAdministrasiDepok_11.set('fieldImages', {'fid': 'TextEdit', 'iddesa': 'TextEdit', 'idkab': 'TextEdit', 'idkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', });
lyr_AlokasiDana2021_1.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'dana_2021': 'inline label', });
lyr_AlokasiDana2022_2.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'dana_2022': 'inline label', });
lyr_CO_3.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'CO': 'no label', });
lyr_LST_4.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'LST': 'inline label', });
lyr_NDBI_5.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'NDBI': 'inline label', });
lyr_NDVI_6.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'NDVI': 'inline label', });
lyr_SpatialRandomForest_7.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'sr_rf_fill': 'inline label', });
lyr_SpatialSupportVectorRegression_8.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'sr_svr_fil': 'inline label', });
lyr_RandomForest_9.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'rf_fill': 'inline label', });
lyr_SupportVectorRegression_10.set('fieldLabels', {'id': 'inline label', 'nmdesa': 'inline label', 'svr_fill': 'inline label', });
lyr_WilayahAdministrasiDepok_11.set('fieldLabels', {'fid': 'no label', 'iddesa': 'no label', 'idkab': 'no label', 'idkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'sumber': 'no label', 'periode': 'no label', });
lyr_WilayahAdministrasiDepok_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});