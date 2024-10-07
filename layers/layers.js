var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Anexo003_1 = new ol.format.GeoJSON();
var features_Anexo003_1 = format_Anexo003_1.readFeatures(json_Anexo003_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo003_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo003_1.addFeatures(features_Anexo003_1);
var lyr_Anexo003_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo003_1, 
                style: style_Anexo003_1,
                popuplayertitle: "Anexo 003",
                interactive: true,
                title: '<img src="styles/legend/Anexo003_1.png" /> Anexo 003'
            });
var format_Anexo002_2 = new ol.format.GeoJSON();
var features_Anexo002_2 = format_Anexo002_2.readFeatures(json_Anexo002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo002_2.addFeatures(features_Anexo002_2);
var lyr_Anexo002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo002_2, 
                style: style_Anexo002_2,
                popuplayertitle: "Anexo 002",
                interactive: true,
                title: '<img src="styles/legend/Anexo002_2.png" /> Anexo 002'
            });
var format_Anexo001PolgonoPrincipal_3 = new ol.format.GeoJSON();
var features_Anexo001PolgonoPrincipal_3 = format_Anexo001PolgonoPrincipal_3.readFeatures(json_Anexo001PolgonoPrincipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anexo001PolgonoPrincipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo001PolgonoPrincipal_3.addFeatures(features_Anexo001PolgonoPrincipal_3);
var lyr_Anexo001PolgonoPrincipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo001PolgonoPrincipal_3, 
                style: style_Anexo001PolgonoPrincipal_3,
                popuplayertitle: "Anexo 001 - Polígono Principal",
                interactive: true,
                title: '<img src="styles/legend/Anexo001PolgonoPrincipal_3.png" /> Anexo 001 - Polígono Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Anexo003_1.setVisible(true);lyr_Anexo002_2.setVisible(true);lyr_Anexo001PolgonoPrincipal_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Anexo003_1,lyr_Anexo002_2,lyr_Anexo001PolgonoPrincipal_3];
lyr_Anexo003_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Anexo002_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Anexo001PolgonoPrincipal_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Anexo003_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Anexo002_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Anexo001PolgonoPrincipal_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Anexo003_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Anexo002_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Anexo001PolgonoPrincipal_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Anexo001PolgonoPrincipal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});