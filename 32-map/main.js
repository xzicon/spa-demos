$(function(){
  var map = new BMap.Map("allmap");
  map.centerAndZoom(new BMap.Point(114.529963, 38.003679), 25);
  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP
    ]}));
  map.enableScrollWheelZoom(true);
  map.setMapType(BMAP_HYBRID_MAP);
});
