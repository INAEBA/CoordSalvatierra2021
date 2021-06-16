var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSalvatierra_3 = new ol.format.GeoJSON();
var features_CoordinacionSalvatierra_3 = format_CoordinacionSalvatierra_3.readFeatures(json_CoordinacionSalvatierra_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalvatierra_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalvatierra_3.addFeatures(features_CoordinacionSalvatierra_3);
var lyr_CoordinacionSalvatierra_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalvatierra_3, 
                style: style_CoordinacionSalvatierra_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSalvatierra_3.png" /> Coordinacion Salvatierra'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionTARI1_5 = new ol.format.GeoJSON();
var features_MicroregionTARI1_5 = format_MicroregionTARI1_5.readFeatures(json_MicroregionTARI1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionTARI1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionTARI1_5.addFeatures(features_MicroregionTARI1_5);
var lyr_MicroregionTARI1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionTARI1_5, 
                style: style_MicroregionTARI1_5,
                interactive: false,
    title: 'Microregion TARI1<br />\
    <img src="styles/legend/MicroregionTARI1_5_0.png" /> 2 - 19 Personas<br />\
    <img src="styles/legend/MicroregionTARI1_5_1.png" /> 19 - 61 Personas<br />\
    <img src="styles/legend/MicroregionTARI1_5_2.png" /> 61 - 143 Personas<br />\
    <img src="styles/legend/MicroregionTARI1_5_3.png" /> 143 - 274 Personas<br />\
    <img src="styles/legend/MicroregionTARI1_5_4.png" /> 274 - 564 Personas<br />'
        });
var format_MicroregionSTM1_6 = new ol.format.GeoJSON();
var features_MicroregionSTM1_6 = format_MicroregionSTM1_6.readFeatures(json_MicroregionSTM1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSTM1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSTM1_6.addFeatures(features_MicroregionSTM1_6);
var lyr_MicroregionSTM1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSTM1_6, 
                style: style_MicroregionSTM1_6,
                interactive: false,
    title: 'Microregion STM1<br />\
    <img src="styles/legend/MicroregionSTM1_6_0.png" /> 2 - 62 Personas <br />\
    <img src="styles/legend/MicroregionSTM1_6_1.png" /> 62 - 147 Personas <br />\
    <img src="styles/legend/MicroregionSTM1_6_2.png" /> 147 - 262 Personas <br />\
    <img src="styles/legend/MicroregionSTM1_6_3.png" /> 262 - 404 Personas <br />\
    <img src="styles/legend/MicroregionSTM1_6_4.png" /> 404 - 493 Personas <br />'
        });
var format_MicroregionSL3_7 = new ol.format.GeoJSON();
var features_MicroregionSL3_7 = format_MicroregionSL3_7.readFeatures(json_MicroregionSL3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSL3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSL3_7.addFeatures(features_MicroregionSL3_7);
var lyr_MicroregionSL3_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSL3_7, 
                style: style_MicroregionSL3_7,
                interactive: false,
    title: 'Microregion SL3<br />\
    <img src="styles/legend/MicroregionSL3_7_0.png" /> 3 - 17 Personas<br />\
    <img src="styles/legend/MicroregionSL3_7_1.png" /> 17 - 45 Personas<br />\
    <img src="styles/legend/MicroregionSL3_7_2.png" /> 45 - 131 Personas<br />\
    <img src="styles/legend/MicroregionSL3_7_3.png" /> 131 - 569 Personas<br />\
    <img src="styles/legend/MicroregionSL3_7_4.png" /> 569 - 820 Personas<br />'
        });
var format_MicroregionSL2_8 = new ol.format.GeoJSON();
var features_MicroregionSL2_8 = format_MicroregionSL2_8.readFeatures(json_MicroregionSL2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSL2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSL2_8.addFeatures(features_MicroregionSL2_8);
var lyr_MicroregionSL2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSL2_8, 
                style: style_MicroregionSL2_8,
                interactive: false,
    title: 'Microregion SL2<br />\
    <img src="styles/legend/MicroregionSL2_8_0.png" /> 3 - 19 Personas<br />\
    <img src="styles/legend/MicroregionSL2_8_1.png" /> 19 - 82 Personas<br />\
    <img src="styles/legend/MicroregionSL2_8_2.png" /> 82 - 221 Personas<br />\
    <img src="styles/legend/MicroregionSL2_8_3.png" /> 221 - 348 Personas<br />\
    <img src="styles/legend/MicroregionSL2_8_4.png" /> 348 - 504 Personas<br />'
        });
var format_MicroregionSL1_9 = new ol.format.GeoJSON();
var features_MicroregionSL1_9 = format_MicroregionSL1_9.readFeatures(json_MicroregionSL1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSL1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSL1_9.addFeatures(features_MicroregionSL1_9);
var lyr_MicroregionSL1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSL1_9, 
                style: style_MicroregionSL1_9,
                interactive: false,
    title: 'Microregion SL1<br />\
    <img src="styles/legend/MicroregionSL1_9_0.png" /> 1 - 17 Personas<br />\
    <img src="styles/legend/MicroregionSL1_9_1.png" /> 17 - 41 Personas<br />\
    <img src="styles/legend/MicroregionSL1_9_2.png" /> 41 - 88 Personas<br />\
    <img src="styles/legend/MicroregionSL1_9_3.png" /> 88 - 310 Personas<br />\
    <img src="styles/legend/MicroregionSL1_9_4.png" /> 310 - 535 Personas<br />'
        });
var format_CoordinacionSalvatierra_10 = new ol.format.GeoJSON();
var features_CoordinacionSalvatierra_10 = format_CoordinacionSalvatierra_10.readFeatures(json_CoordinacionSalvatierra_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalvatierra_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalvatierra_10.addFeatures(features_CoordinacionSalvatierra_10);
var lyr_CoordinacionSalvatierra_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalvatierra_10, 
                style: style_CoordinacionSalvatierra_10,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSalvatierra_10.png" /> Coordinacion Salvatierra'
            });
var group_CoordinacionSalvatierraRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionTARI1_5,lyr_MicroregionSTM1_6,lyr_MicroregionSL3_7,lyr_MicroregionSL2_8,lyr_MicroregionSL1_9,],
                                title: "Coordinacion Salvatierra Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSalvatierra_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSalvatierra_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionTARI1_5.setVisible(true);lyr_MicroregionSTM1_6.setVisible(true);lyr_MicroregionSL3_7.setVisible(true);lyr_MicroregionSL2_8.setVisible(true);lyr_MicroregionSL1_9.setVisible(true);lyr_CoordinacionSalvatierra_10.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSalvatierraRezago,lyr_CoordinacionSalvatierra_10];
lyr_CoordinacionSalvatierra_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionTARI1_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSTM1_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSL3_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSL2_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSL1_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSalvatierra_10.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSalvatierra_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionTARI1_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSTM1_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSL3_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSL2_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSL1_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSalvatierra_10.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSalvatierra_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionTARI1_5.set('fieldLabels', {});
lyr_MicroregionSTM1_6.set('fieldLabels', {});
lyr_MicroregionSL3_7.set('fieldLabels', {});
lyr_MicroregionSL2_8.set('fieldLabels', {});
lyr_MicroregionSL1_9.set('fieldLabels', {});
lyr_CoordinacionSalvatierra_10.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSalvatierra_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});