var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Cheloniamydas_1 = new ol.format.GeoJSON();
var features_Cheloniamydas_1 = format_Cheloniamydas_1.readFeatures(json_Cheloniamydas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cheloniamydas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cheloniamydas_1.addFeatures(features_Cheloniamydas_1);
var lyr_Cheloniamydas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cheloniamydas_1, 
                style: style_Cheloniamydas_1,
                popuplayertitle: 'Chelonia mydas',
                interactive: true,
                title: '<img src="styles/legend/Cheloniamydas_1.png" /> Chelonia mydas'
            });
var format_Dermochelyscoriacea_2 = new ol.format.GeoJSON();
var features_Dermochelyscoriacea_2 = format_Dermochelyscoriacea_2.readFeatures(json_Dermochelyscoriacea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dermochelyscoriacea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermochelyscoriacea_2.addFeatures(features_Dermochelyscoriacea_2);
var lyr_Dermochelyscoriacea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dermochelyscoriacea_2, 
                style: style_Dermochelyscoriacea_2,
                popuplayertitle: 'Dermochelys coriacea',
                interactive: true,
                title: '<img src="styles/legend/Dermochelyscoriacea_2.png" /> Dermochelys coriacea'
            });
var format_Lepidochelysolivacea_3 = new ol.format.GeoJSON();
var features_Lepidochelysolivacea_3 = format_Lepidochelysolivacea_3.readFeatures(json_Lepidochelysolivacea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lepidochelysolivacea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lepidochelysolivacea_3.addFeatures(features_Lepidochelysolivacea_3);
var lyr_Lepidochelysolivacea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lepidochelysolivacea_3, 
                style: style_Lepidochelysolivacea_3,
                popuplayertitle: 'Lepidochelys olivacea',
                interactive: true,
                title: '<img src="styles/legend/Lepidochelysolivacea_3.png" /> Lepidochelys olivacea'
            });
var format_Eretmochelysimbricata_4 = new ol.format.GeoJSON();
var features_Eretmochelysimbricata_4 = format_Eretmochelysimbricata_4.readFeatures(json_Eretmochelysimbricata_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eretmochelysimbricata_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eretmochelysimbricata_4.addFeatures(features_Eretmochelysimbricata_4);
var lyr_Eretmochelysimbricata_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eretmochelysimbricata_4, 
                style: style_Eretmochelysimbricata_4,
                popuplayertitle: 'Eretmochelys imbricata',
                interactive: true,
                title: '<img src="styles/legend/Eretmochelysimbricata_4.png" /> Eretmochelys imbricata'
            });
var format_Carettacaretta_5 = new ol.format.GeoJSON();
var features_Carettacaretta_5 = format_Carettacaretta_5.readFeatures(json_Carettacaretta_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carettacaretta_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carettacaretta_5.addFeatures(features_Carettacaretta_5);
var lyr_Carettacaretta_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carettacaretta_5, 
                style: style_Carettacaretta_5,
                popuplayertitle: 'Caretta caretta',
                interactive: true,
                title: '<img src="styles/legend/Carettacaretta_5.png" /> Caretta caretta'
            });
var group_Tortugas = new ol.layer.Group({
                                layers: [lyr_Cheloniamydas_1,lyr_Dermochelyscoriacea_2,lyr_Lepidochelysolivacea_3,lyr_Eretmochelysimbricata_4,lyr_Carettacaretta_5,],
                                fold: 'close',
                                title: 'Tortugas'});
var group_Focasloboselefantes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Focas-lobos-elefantes'});
var group_Ballenas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ballenas'});
var group_Delfines = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Delfines'});
var group_Zifidos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Zifidos'});
var group_Quimeras = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Quimeras'});
var group_Heterodontiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Heterodontiformes'});
var group_Orectolobiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Orectolobiformes'});
var group_Lamniformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lamniformes'});
var group_Sphyrnidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sphyrnidae'});
var group_Triakidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Triakidae'});
var group_Carcharhinidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Carcharhinidae'});
var group_Scyliorhinidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Scyliorhinidae'});
var group_Hexanchiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hexanchiformes'});
var group_Platyrhynidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Platyrhynidae'});
var group_Urotrygonidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Urotrygonidae'});
var group_Dasyatidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Dasyatidae'});
var group_Gymnuridae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Gymnuridae'});
var group_Myliobatiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Myliobatiformes'});
var group_Aetobatidae = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Aetobatidae'});
var group_Rajiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rajiformes'});
var group_Squantiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Squantiformes'});
var group_Torpediniformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Torpediniformes'});
var group_Rhinobatiformes = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rhinobatiformes'});

lyr_ESRISatellite_0.setVisible(true);lyr_Cheloniamydas_1.setVisible(true);lyr_Dermochelyscoriacea_2.setVisible(true);lyr_Lepidochelysolivacea_3.setVisible(true);lyr_Eretmochelysimbricata_4.setVisible(true);lyr_Carettacaretta_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,group_Tortugas];
lyr_Cheloniamydas_1.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Fecha': 'Fecha', 'lat': 'lat', 'lon': 'lon', 'IUCN': 'IUCN', 'NOM-059': 'NOM-059', 'Referencia': 'Referencia', 'URL': 'URL', 'BD-orig': 'BD-orig', });
lyr_Dermochelyscoriacea_2.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Fecha': 'Fecha', 'lat': 'lat', 'lon': 'lon', 'IUCN': 'IUCN', 'NOM-059': 'NOM-059', 'Referencia': 'Referencia', 'URL': 'URL', 'BD-orig': 'BD-orig', });
lyr_Lepidochelysolivacea_3.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Fecha': 'Fecha', 'lat': 'lat', 'lon': 'lon', 'IUCN': 'IUCN', 'NOM-059': 'NOM-059', 'Referencia': 'Referencia', 'URL': 'URL', 'BD-orig': 'BD-orig', });
lyr_Eretmochelysimbricata_4.set('fieldAliases', {'Especie': 'Especie', 'lat': 'lat', 'lon': 'lon', 'Referencia': 'Referencia', 'URL': 'URL', 'BD-orig': 'BD-orig', 'Fecha': 'Fecha', 'id': 'id', 'IUCN': 'IUCN', 'NOM-059': 'NOM-059', });
lyr_Carettacaretta_5.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'lat': 'lat', 'lon': 'lon', 'IUCN': 'IUCN', 'NOM-059': 'NOM-059', 'Fecha': 'Fecha', 'Referencia': 'Referencia', 'BD-orig': 'BD-orig', 'URL': 'URL', });
lyr_Cheloniamydas_1.set('fieldImages', {'id': '', 'Especie': '', 'Fecha': '', 'lat': '', 'lon': '', 'IUCN': '', 'NOM-059': '', 'Referencia': '', 'URL': '', 'BD-orig': '', });
lyr_Dermochelyscoriacea_2.set('fieldImages', {'id': '', 'Especie': '', 'Fecha': '', 'lat': '', 'lon': '', 'IUCN': '', 'NOM-059': '', 'Referencia': '', 'URL': '', 'BD-orig': '', });
lyr_Lepidochelysolivacea_3.set('fieldImages', {'id': '', 'Especie': '', 'Fecha': '', 'lat': '', 'lon': '', 'IUCN': '', 'NOM-059': '', 'Referencia': '', 'URL': '', 'BD-orig': '', });
lyr_Eretmochelysimbricata_4.set('fieldImages', {'Especie': '', 'lat': '', 'lon': '', 'Referencia': '', 'URL': '', 'BD-orig': '', 'Fecha': '', 'id': '', 'IUCN': '', 'NOM-059': '', });
lyr_Carettacaretta_5.set('fieldImages', {'id': '', 'Especie': '', 'lat': '', 'lon': '', 'IUCN': '', 'NOM-059': '', 'Fecha': '', 'Referencia': '', 'BD-orig': '', 'URL': '', });
lyr_Cheloniamydas_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'lat': 'hidden field', 'lon': 'hidden field', 'IUCN': 'inline label - visible with data', 'NOM-059': 'inline label - visible with data', 'Referencia': 'inline label - visible with data', 'URL': 'inline label - visible with data', 'BD-orig': 'inline label - visible with data', });
lyr_Dermochelyscoriacea_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'lat': 'hidden field', 'lon': 'hidden field', 'IUCN': 'inline label - visible with data', 'NOM-059': 'inline label - visible with data', 'Referencia': 'inline label - visible with data', 'URL': 'inline label - visible with data', 'BD-orig': 'inline label - visible with data', });
lyr_Lepidochelysolivacea_3.set('fieldLabels', {'id': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'lat': 'hidden field', 'lon': 'hidden field', 'IUCN': 'inline label - visible with data', 'NOM-059': 'inline label - visible with data', 'Referencia': 'inline label - visible with data', 'URL': 'inline label - visible with data', 'BD-orig': 'inline label - visible with data', });
lyr_Eretmochelysimbricata_4.set('fieldLabels', {'Especie': 'inline label - visible with data', 'lat': 'hidden field', 'lon': 'hidden field', 'Referencia': 'inline label - visible with data', 'URL': 'inline label - visible with data', 'BD-orig': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'id': 'inline label - visible with data', 'IUCN': 'inline label - visible with data', 'NOM-059': 'inline label - visible with data', });
lyr_Carettacaretta_5.set('fieldLabels', {'id': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'lat': 'hidden field', 'lon': 'hidden field', 'IUCN': 'inline label - visible with data', 'NOM-059': 'inline label - visible with data', 'Fecha': 'inline label - visible with data', 'Referencia': 'inline label - visible with data', 'BD-orig': 'inline label - visible with data', 'URL': 'inline label - visible with data', });
lyr_Carettacaretta_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});