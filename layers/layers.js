var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_adm_antapani_1 = new ol.format.GeoJSON();
var features_adm_antapani_1 = format_adm_antapani_1.readFeatures(json_adm_antapani_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_antapani_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_antapani_1.addFeatures(features_adm_antapani_1);
var lyr_adm_antapani_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_antapani_1, 
                style: style_adm_antapani_1,
                popuplayertitle: "adm_antapani",
                interactive: true,
                title: '<img src="styles/legend/adm_antapani_1.png" /> adm_antapani'
            });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });
var format_UTMPerindukanVektor_3 = new ol.format.GeoJSON();
var features_UTMPerindukanVektor_3 = format_UTMPerindukanVektor_3.readFeatures(json_UTMPerindukanVektor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMPerindukanVektor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMPerindukanVektor_3.addFeatures(features_UTMPerindukanVektor_3);
var lyr_UTMPerindukanVektor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMPerindukanVektor_3, 
                style: style_UTMPerindukanVektor_3,
                popuplayertitle: "UTM Perindukan Vektor",
                interactive: true,
                title: '<img src="styles/legend/UTMPerindukanVektor_3.png" /> UTM Perindukan Vektor'
            });
var format_bufferd200_4 = new ol.format.GeoJSON();
var features_bufferd200_4 = format_bufferd200_4.readFeatures(json_bufferd200_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferd200_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferd200_4.addFeatures(features_bufferd200_4);
var lyr_bufferd200_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bufferd200_4, 
                style: style_bufferd200_4,
                popuplayertitle: "bufferd 200",
                interactive: true,
                title: '<img src="styles/legend/bufferd200_4.png" /> bufferd 200'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_adm_antapani_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_UTMPerindukanVektor_3.setVisible(true);lyr_bufferd200_4.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_adm_antapani_1,lyr_SUNGAI_LN_25K_2,lyr_UTMPerindukanVektor_3,lyr_bufferd200_4];
lyr_adm_antapani_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_UTMPerindukanVektor_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_bufferd200_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_antapani_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_UTMPerindukanVektor_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_bufferd200_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_adm_antapani_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_UTMPerindukanVektor_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_bufferd200_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_bufferd200_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});