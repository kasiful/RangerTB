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
var format_AlokasiDana2021Rp_1 = new ol.format.GeoJSON();
var features_AlokasiDana2021Rp_1 = format_AlokasiDana2021Rp_1.readFeatures(json_AlokasiDana2021Rp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlokasiDana2021Rp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlokasiDana2021Rp_1.addFeatures(features_AlokasiDana2021Rp_1);
var lyr_AlokasiDana2021Rp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlokasiDana2021Rp_1, 
                style: style_AlokasiDana2021Rp_1,
                interactive: true,
    title: 'Alokasi Dana 2021 (Rp)<br />\
    <img src="styles/legend/AlokasiDana2021Rp_1_0.png" /> Rendah (0 - 697694)<br />\
    <img src="styles/legend/AlokasiDana2021Rp_1_1.png" /> Sedang (697694 - 2058316)<br />\
    <img src="styles/legend/AlokasiDana2021Rp_1_2.png" /> Tinggi (2058316 - 7640710)<br />'
        });
var format_AlokasiDana2022Rp_2 = new ol.format.GeoJSON();
var features_AlokasiDana2022Rp_2 = format_AlokasiDana2022Rp_2.readFeatures(json_AlokasiDana2022Rp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlokasiDana2022Rp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlokasiDana2022Rp_2.addFeatures(features_AlokasiDana2022Rp_2);
var lyr_AlokasiDana2022Rp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlokasiDana2022Rp_2, 
                style: style_AlokasiDana2022Rp_2,
                interactive: true,
    title: 'Alokasi Dana 2022 (Rp)<br />\
    <img src="styles/legend/AlokasiDana2022Rp_2_0.png" /> Rendah (0 - 542517)<br />\
    <img src="styles/legend/AlokasiDana2022Rp_2_1.png" /> Sedang (542517 - 1600516)<br />\
    <img src="styles/legend/AlokasiDana2022Rp_2_2.png" /> Tinggi (1600516 - 5941302)<br />'
        });
var format_PolusiUdaraCO_3 = new ol.format.GeoJSON();
var features_PolusiUdaraCO_3 = format_PolusiUdaraCO_3.readFeatures(json_PolusiUdaraCO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolusiUdaraCO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolusiUdaraCO_3.addFeatures(features_PolusiUdaraCO_3);
var lyr_PolusiUdaraCO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolusiUdaraCO_3, 
                style: style_PolusiUdaraCO_3,
                interactive: true,
    title: 'Polusi Udara (CO)<br />\
    <img src="styles/legend/PolusiUdaraCO_3_0.png" /> Rendah (0 - 0,03328)<br />\
    <img src="styles/legend/PolusiUdaraCO_3_1.png" /> Sedang (0,03328 - 0,03357)<br />\
    <img src="styles/legend/PolusiUdaraCO_3_2.png" /> Tinggi (0,03357 - 0,035)<br />'
        });
var format_IndeksLahanTerbangunNDBI_4 = new ol.format.GeoJSON();
var features_IndeksLahanTerbangunNDBI_4 = format_IndeksLahanTerbangunNDBI_4.readFeatures(json_IndeksLahanTerbangunNDBI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksLahanTerbangunNDBI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksLahanTerbangunNDBI_4.addFeatures(features_IndeksLahanTerbangunNDBI_4);
var lyr_IndeksLahanTerbangunNDBI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndeksLahanTerbangunNDBI_4, 
                style: style_IndeksLahanTerbangunNDBI_4,
                interactive: true,
    title: 'Indeks Lahan Terbangun (NDBI)<br />\
    <img src="styles/legend/IndeksLahanTerbangunNDBI_4_0.png" /> Rendah (-0,22 - -0,045)<br />\
    <img src="styles/legend/IndeksLahanTerbangunNDBI_4_1.png" /> Sedang (-0,045 - 0,049)<br />\
    <img src="styles/legend/IndeksLahanTerbangunNDBI_4_2.png" /> Tinggi (diatas 0,049)<br />'
        });
var format_TemperaturPermukaanCelsius_5 = new ol.format.GeoJSON();
var features_TemperaturPermukaanCelsius_5 = format_TemperaturPermukaanCelsius_5.readFeatures(json_TemperaturPermukaanCelsius_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemperaturPermukaanCelsius_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperaturPermukaanCelsius_5.addFeatures(features_TemperaturPermukaanCelsius_5);
var lyr_TemperaturPermukaanCelsius_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TemperaturPermukaanCelsius_5, 
                style: style_TemperaturPermukaanCelsius_5,
                interactive: true,
    title: 'Temperatur Permukaan (Celsius)<br />\
    <img src="styles/legend/TemperaturPermukaanCelsius_5_0.png" /> Rendah (32,41 - 34,3)<br />\
    <img src="styles/legend/TemperaturPermukaanCelsius_5_1.png" /> Sedang (34,3 - 35,8)<br />\
    <img src="styles/legend/TemperaturPermukaanCelsius_5_2.png" /> Tinggi (35,8 - 38)<br />'
        });
var format_IndeksVegetasiNDVI_6 = new ol.format.GeoJSON();
var features_IndeksVegetasiNDVI_6 = format_IndeksVegetasiNDVI_6.readFeatures(json_IndeksVegetasiNDVI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndeksVegetasiNDVI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndeksVegetasiNDVI_6.addFeatures(features_IndeksVegetasiNDVI_6);
var lyr_IndeksVegetasiNDVI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndeksVegetasiNDVI_6, 
                style: style_IndeksVegetasiNDVI_6,
                interactive: true,
    title: 'Indeks Vegetasi (NDVI)<br />\
    <img src="styles/legend/IndeksVegetasiNDVI_6_0.png" /> 0 - 0,24<br />\
    <img src="styles/legend/IndeksVegetasiNDVI_6_1.png" /> 0,24 - 0,47<br />\
    <img src="styles/legend/IndeksVegetasiNDVI_6_2.png" /> 0,47 - 0,71<br />'
        });
var format_PrediksiJumlahKasusTB_7 = new ol.format.GeoJSON();
var features_PrediksiJumlahKasusTB_7 = format_PrediksiJumlahKasusTB_7.readFeatures(json_PrediksiJumlahKasusTB_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediksiJumlahKasusTB_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediksiJumlahKasusTB_7.addFeatures(features_PrediksiJumlahKasusTB_7);
var lyr_PrediksiJumlahKasusTB_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrediksiJumlahKasusTB_7, 
                style: style_PrediksiJumlahKasusTB_7,
                interactive: true,
    title: 'Prediksi Jumlah Kasus TB<br />\
    <img src="styles/legend/PrediksiJumlahKasusTB_7_0.png" /> Rendah (0 - 2)<br />\
    <img src="styles/legend/PrediksiJumlahKasusTB_7_1.png" /> Sedang (2 - 5)<br />\
    <img src="styles/legend/PrediksiJumlahKasusTB_7_2.png" /> Tinggi (5 - 20)<br />'
        });
var format_WilayahAdministrasi_8 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_8 = format_WilayahAdministrasi_8.readFeatures(json_WilayahAdministrasi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_8.addFeatures(features_WilayahAdministrasi_8);
var lyr_WilayahAdministrasi_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_8, 
                style: style_WilayahAdministrasi_8,
                interactive: false,
                title: '<img src="styles/legend/WilayahAdministrasi_8.png" /> Wilayah Administrasi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AlokasiDana2021Rp_1.setVisible(false);lyr_AlokasiDana2022Rp_2.setVisible(false);lyr_PolusiUdaraCO_3.setVisible(false);lyr_IndeksLahanTerbangunNDBI_4.setVisible(false);lyr_TemperaturPermukaanCelsius_5.setVisible(false);lyr_IndeksVegetasiNDVI_6.setVisible(false);lyr_PrediksiJumlahKasusTB_7.setVisible(false);lyr_WilayahAdministrasi_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AlokasiDana2021Rp_1,lyr_AlokasiDana2022Rp_2,lyr_PolusiUdaraCO_3,lyr_IndeksLahanTerbangunNDBI_4,lyr_TemperaturPermukaanCelsius_5,lyr_IndeksVegetasiNDVI_6,lyr_PrediksiJumlahKasusTB_7,lyr_WilayahAdministrasi_8];
lyr_AlokasiDana2021Rp_1.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'dana_2021': 'dana_2021', });
lyr_AlokasiDana2022Rp_2.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'dana_2022': 'dana_2022', });
lyr_PolusiUdaraCO_3.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'CO': 'CO', });
lyr_IndeksLahanTerbangunNDBI_4.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'NDBI': 'NDBI', });
lyr_TemperaturPermukaanCelsius_5.set('fieldAliases', {'LST': 'LST', });
lyr_IndeksVegetasiNDVI_6.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'NDVI': 'NDVI', });
lyr_PrediksiJumlahKasusTB_7.set('fieldAliases', {'id': 'id', 'nmdesa': 'nmdesa', 'rf_fill': 'rf_fill', });
lyr_WilayahAdministrasi_8.set('fieldAliases', {'fid': 'fid', 'iddesa': 'iddesa', 'idkab': 'idkab', 'idkec': 'idkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'sumber': 'sumber', 'periode': 'periode', });
lyr_AlokasiDana2021Rp_1.set('fieldImages', {'id': 'TextEdit', 'nmdesa': 'TextEdit', 'dana_2021': 'TextEdit', });
lyr_AlokasiDana2022Rp_2.set('fieldImages', {'id': 'TextEdit', 'nmdesa': 'TextEdit', 'dana_2022': 'TextEdit', });
lyr_PolusiUdaraCO_3.set('fieldImages', {'id': 'TextEdit', 'nmdesa': 'TextEdit', 'CO': 'TextEdit', });
lyr_IndeksLahanTerbangunNDBI_4.set('fieldImages', {'id': 'TextEdit', 'nmdesa': 'TextEdit', 'NDBI': 'TextEdit', });
lyr_TemperaturPermukaanCelsius_5.set('fieldImages', {'LST': 'TextEdit', });
lyr_IndeksVegetasiNDVI_6.set('fieldImages', {'id': 'TextEdit', 'nmdesa': 'TextEdit', 'NDVI': 'TextEdit', });
lyr_PrediksiJumlahKasusTB_7.set('fieldImages', {'id': 'TextEdit', 'nmdesa': 'TextEdit', 'rf_fill': 'TextEdit', });
lyr_WilayahAdministrasi_8.set('fieldImages', {'fid': 'TextEdit', 'iddesa': 'TextEdit', 'idkab': 'TextEdit', 'idkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', });
lyr_AlokasiDana2021Rp_1.set('fieldLabels', {'id': 'no label', 'nmdesa': 'inline label', 'dana_2021': 'inline label', });
lyr_AlokasiDana2022Rp_2.set('fieldLabels', {'id': 'no label', 'nmdesa': 'inline label', 'dana_2022': 'inline label', });
lyr_PolusiUdaraCO_3.set('fieldLabels', {'id': 'no label', 'nmdesa': 'inline label', 'CO': 'inline label', });
lyr_IndeksLahanTerbangunNDBI_4.set('fieldLabels', {'id': 'no label', 'nmdesa': 'inline label', 'NDBI': 'inline label', });
lyr_TemperaturPermukaanCelsius_5.set('fieldLabels', {'LST': 'inline label', });
lyr_IndeksVegetasiNDVI_6.set('fieldLabels', {'id': 'no label', 'nmdesa': 'inline label', 'NDVI': 'inline label', });
lyr_PrediksiJumlahKasusTB_7.set('fieldLabels', {'id': 'no label', 'nmdesa': 'inline label', 'rf_fill': 'inline label', });
lyr_WilayahAdministrasi_8.set('fieldLabels', {'fid': 'no label', 'iddesa': 'no label', 'idkab': 'no label', 'idkec': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmdesa': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kddesa': 'no label', 'sumber': 'no label', 'periode': 'no label', });
lyr_WilayahAdministrasi_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});