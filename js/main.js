

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  var rules = {
    createHTML: function(src) {
      return src;
    },
    createScriptURL: function(src) {
      return src;
    }
  };
  var ttPolicy;
  
  try {
   ttPolicy = window.trustedTypes.createPolicy('google-maps-api-loader', rules);
  } catch(e) {
    ttPolicy = rules;
  }
  
  function getScript(src) {
    var a, nonce = ((a = document.querySelector("script[nonce]")) == null ? void 0 : a.nonce) || "";
    var s = document.createElement('script');
    
    s.src = ttPolicy.createScriptURL(src);
    s.nonce = nonce;
    document.head.appendChild(s);
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[null,[["https://khms0.googleapis.com/kh?v=998\u0026hl=ru\u0026gl=RU\u0026","https://khms1.googleapis.com/kh?v=998\u0026hl=ru\u0026gl=RU\u0026"],null,null,null,1,"998",["https://khms0.google.com/kh?v=998\u0026hl=ru\u0026gl=RU\u0026","https://khms1.google.com/kh?v=998\u0026hl=ru\u0026gl=RU\u0026"]],null,null,null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=167\u0026hl=ru\u0026gl=RU\u0026","https://khms1.googleapis.com/kh?v=167\u0026hl=ru\u0026gl=RU\u0026"],null,null,null,null,"167",["https://khms0.google.com/kh?v=167\u0026hl=ru\u0026gl=RU\u0026","https://khms1.google.com/kh?v=167\u0026hl=ru\u0026gl=RU\u0026"]],null,null,null,null,null,null,null,[["https://streetviewpixels-pa.googleapis.com/v1/thumbnail?hl=ru\u0026gl=RU\u0026","https://streetviewpixels-pa.googleapis.com/v1/thumbnail?hl=ru\u0026gl=RU\u0026"]]],["ru","RU",null,0,null,null,"https://maps.gstatic.com/mapfiles/",null,"https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com",null,"https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",null,"https://www.google.com",1,"https://maps.googleapis.com/maps_api_js_slo/log?hasfast=true",0,0],["https://maps.googleapis.com/maps-api-v3/api/js/61/4a/intl/ru_ALL","3.61.4a"],[1501952040],null,"google-maps-embed",null,[35,39,1,2,3,8,15,17,18,20,21,23,26,45,47,48,30,10,51,63,68,72,76,85,114,131,136,112],null,null,"onApiLoad",["geometry","search"],null,1,"https://khms.googleapis.com/mz?v=998\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["/maps/vt"],["/maps/vt"],null,null,null,null,null,null,null,null,null,null,["/maps/vt"],"/maps/vt",736000000,736,736495247,1],2,500,[null,null,null,null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/jsapi2/a/b/c/","https://lh4.ggpht.com/jsapi2/a/b/c/","https://lh5.ggpht.com/jsapi2/a/b/c/","https://lh6.ggpht.com/jsapi2/a/b/c/"],"https://streetviewpixels-pa.googleapis.com/v1/tile",["https://lh3.googleusercontent.com/","https://lh4.googleusercontent.com/","https://lh5.googleusercontent.com/","https://lh6.googleusercontent.com/"]],null,null,null,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,null,null,null,["61.4a"],1,0,[1],"CgAShzII4AUSfAgBEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfAgCEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfAgDEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSdggEEnJodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb24tRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfggFEnpodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25Mb3dMaWdodC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJ/CAYSe2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvblNhdGVsbGl0ZS1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJzCAcSb2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJzCAgSb2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJ9CAkSeWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcEFtYmlhY3RpdmUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUScwgKEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfAgLEnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUScwgMEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVRlcnJhaW4tRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSdggNEnJodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb24tRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSdggOEnJodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb24tRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfQgPEnlodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBBbWJpYWN0aXZlLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoMBCBASf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcEFtYmlhY3RpdmVMb3dCaXQtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfggREnpodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25Mb3dMaWdodC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJ6CBISdmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVHJhbnNpdEZvY3VzZWQtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUScwgTEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSeQgUEnVodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvdXRlT3ZlcnZpZXctRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUScwgVEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfQgWEnlodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25BbWJpZW50LUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoEBCBcSfWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkFtYmllbnREYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoMBCBkSf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstQmFzZW1hcEVkaXRpbmdTYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUScwgaEm9odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXAtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSdwgbEnNodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBEYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEn0IHBJ5aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1Sb3V0ZU92ZXJ2aWV3RGFyay1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJ3CB0Sc2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVGVycmFpbkRhcmstRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfggeEnpodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVRyYW5zaXRGb2N1c2VkRGFyay1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJzCB8Sb2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJ3CCASc2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstUm9hZG1hcERhcmstRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSdwghEnNodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLVJvYWRtYXBEYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoABCCUSfGh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkhpZ2hEZXRhaWwtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSiQEIJhKEAWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkhpZ2hEZXRhaWxMb3dMaWdodC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJyCCkSbmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVHJhdmVsLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEnYIKhJyaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1UcmF2ZWxEYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEn8IKxJ7aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1OYXZpZ2F0aW9uU2F0ZWxsaXRlLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEn8ILBJ7aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1UZXJyYWluVmVjdG9yQ2xpZW50LUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoMBCC0Sf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstVGVycmFpblZlY3RvckNsaWVudERhcmstRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfQguEnlodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25BbWJpZW50LUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoEBCC8SfWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkFtYmllbnREYXJrLUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEn0IMBJ5aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1BaXJRdWFsaXR5SGVhdG1hcC1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRKBAQgxEn1odHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLUFpclF1YWxpdHlIZWF0bWFwRGFyay1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZRJ6CDISdmh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkVnbW0tRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSggEIMxJ+aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1OYXZpZ2F0aW9uRWdtbUxvd0xpZ2h0LUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEoMBCDQSf2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvbkVnbW1TYXRlbGxpdGUtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUSfAg1EnhodHRwczovL3d3dy5nc3RhdGljLmNvbS9tYXBzL3Jlcy9Db21wYWN0TGVnZW5kU2RrLU5hdmlnYXRpb25UdW5uZWwtRmV0Y2hhYmxlU3R5bGVTZXRTZGstY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUShQEINhKAAWh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL21hcHMvcmVzL0NvbXBhY3RMZWdlbmRTZGstTmF2aWdhdGlvblR1bm5lbExvd0xpZ2h0LUZldGNoYWJsZVN0eWxlU2V0U2RrLWNkMzkwMWRiZTc4MzQ4M2NkMmE5MTYxYjIzOTIzYWZlEn0INxJ5aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vbWFwcy9yZXMvQ29tcGFjdExlZ2VuZFNkay1OYXZpZ2F0aW9uR2xhc3Nlcy1GZXRjaGFibGVTdHlsZVNldFNkay1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZSIgY2QzOTAxZGJlNzgzNDgzY2QyYTkxNjFiMjM5MjNhZmUoATJyaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3Z0L3N4Zm9ybXM/dj1jZDM5MDFkYmU3ODM0ODNjZDJhOTE2MWIyMzkyM2FmZSZzdHlsZXJfc3VidHlwZT1TVFlMRVJfTEVHRU5EX1NVQlRZUEVfU0RLOmAKLoB8gHiAdIBwgGyAaIBkgGCAXIBYgFSAUIBMgEiARIBAgDyAOIA0gDCALIAogCQSBAgAEAASBAgBEAESBAgCEAISDQgDEP///////////wESDQgEEP7//////////wFCA3NkazjpjrQWOOuIuBY47t+5Fg==",null,1,0.009999999776482582,null,[[[6,"1749645192"]]],1,"async"], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/61/4a/intl/ru_ALL/search.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/61/4a/intl/ru_ALL/geometry.js");
  getScript("https://maps.googleapis.com/maps-api-v3/api/js/61/4a/intl/ru_ALL/main.js");
})();
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'visible');
                backToTopBtn.classList.add('opacity-0', 'invisible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Scroll animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Конфигурация Telegram Bot
    const TELEGRAM_CONFIG = {
        botToken: '7827149542:AAHkJshmbQsRNpeNF09ML5Ryc8g2pjOWSQg',
        chatId: '1632580380'
    };

    // Функция для показа уведомлений
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.className = `mb-4 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`;
            notification.textContent = message;
            notification.classList.remove('hidden');
            
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 5000);
        }
    }

    // Функция для отправки сообщения в Telegram
    async function sendToTelegram(formData) {
        let message = `🔔 Новая запись на прием!\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n💅 Услуга: ${formData.service}\n📅 Желаемая дата: ${formData.date}\n🕐 Желаемое время: ${formData.time}`;
        
        if (formData.messenger && formData.messengerHandle) {
            const messengerName = formData.messenger === 'telegram' ? 'Telegram' : 'WhatsApp';
            message += `\n📱 ${messengerName}: ${formData.messengerHandle}`;
        }
        
        message += `\n\n📅 Дата подачи заявки: ${new Date().toLocaleString('ru-RU')}`;
        
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`;
        
        try {
            const response = await fetch(telegramUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CONFIG.chatId,
                    text: message,
                    parse_mode: 'HTML'
                })
            });

            const result = await response.json();
            
            if (response.ok && result.ok) {
                return { success: true };
            } else {
                throw new Error(result.description || 'Ошибка отправки');
            }
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            return { success: false, error: error.message };
        }
    }

    // Обработчик отправки формы
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            const loadingText = document.getElementById('loadingText');
            
            // Блокируем кнопку и показываем загрузку
            if (submitBtn) {
                submitBtn.disabled = true;
                if (submitText) submitText.classList.add('hidden');
                if (loadingText) loadingText.classList.remove('hidden');
            }
            
            // Собираем данные формы
            const formData = {
                name: document.getElementById('name')?.value.trim() || '',
                phone: document.getElementById('phone')?.value.trim() || '',
                service: document.getElementById('service')?.value || '',
                date: document.getElementById('date')?.value || '',
                time: document.getElementById('time')?.value || '',
                messenger: document.getElementById('messenger')?.value || '',
                messengerHandle: document.getElementById('messengerHandle')?.value.trim() || ''
            };
            
            // Отправляем в Telegram
            const result = await sendToTelegram(formData);
            
            // Восстанавливаем кнопку
            if (submitBtn) {
                submitBtn.disabled = false;
                if (submitText) submitText.classList.remove('hidden');
                if (loadingText) loadingText.classList.add('hidden');
            }
            
            if (result.success) {
                showNotification('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
                bookingForm.reset();
                const phoneInput = document.getElementById('phone');
                if (phoneInput) phoneInput.value = '+7 ';
                const messengerContact = document.getElementById('messengerContact');
                if (messengerContact) messengerContact.style.display = 'none';
            } else {
                showNotification(`Ошибка отправки: ${result.error}. Попробуйте еще раз или свяжитесь с нами по телефону.`, 'error');
            }
        });
    }

    // Форматирование номера телефона
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value;
            
            if (!value.startsWith('+7')) {
                value = '+7 ' + value.replace(/^\+?7?\s?/, '');
            }
            
            let numbers = value.replace('+7 ', '').replace(/\D/g, '');
            
            if (numbers.length > 10) {
                numbers = numbers.substring(0, 10);
            }
            
            if (numbers.length > 0) {
                if (numbers.length <= 3) {
                    value = `+7 (${numbers}`;
                } else if (numbers.length <= 6) {
                    value = `+7 (${numbers.substring(0, 3)}) ${numbers.substring(3)}`;
                } else if (numbers.length <= 8) {
                    value = `+7 (${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`;
                } else {
                    value = `+7 (${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6, 8)}-${numbers.substring(8)}`;
                }
            } else {
                value = '+7 ';
            }
            
            e.target.value = value;
        });

        phoneInput.addEventListener('keydown', function(e) {
            const cursorPosition = e.target.selectionStart;
            if ((e.key === 'Backspace' || e.key === 'Delete') && cursorPosition <= 3) {
                e.preventDefault();
            }
        });
    }

    // Показать/скрыть поле контакта мессенджера
    const messengerSelect = document.getElementById('messenger');
    if (messengerSelect) {
        messengerSelect.addEventListener('change', function(e) {
            const messengerContact = document.getElementById('messengerContact');
            const messengerHandle = document.getElementById('messengerHandle');
            
            if (e.target.value) {
                if (messengerContact) messengerContact.style.display = 'block';
                if (messengerHandle) {
                    if (e.target.value === 'telegram') {
                        messengerHandle.placeholder = '@username';
                    } else if (e.target.value === 'whatsapp') {
                        messengerHandle.placeholder = '+7 (999) 123-45-67';
                    }
                }
            } else {
                if (messengerContact) messengerContact.style.display = 'none';
                if (messengerHandle) messengerHandle.value = '';
            }
        });
    }

    // Установка минимальной даты (сегодня)
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // Карусель мастеров - исправляем логику
    let currentSlide = 0;
    const totalSlides = 3; // У нас 3 мастера
    let autoSlideTimer = null;
    let isAutoSliding = true;

    // Интервалы для каждого слайда (в миллисекундах)
    const slideIntervals = [10000, 5000, 5000]; // 10 сек, 5 сек, 5 сек

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
        console.log('Next slide:', currentSlide);

        // Перезапускаем автоматическое переключение
        if (isAutoSliding) {
            startAutoSlide();
        }
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
        console.log('Prev slide:', currentSlide);

        // Перезапускаем автоматическое переключение
        if (isAutoSliding) {
            startAutoSlide();
        }
    }

    function startAutoSlide() {
        // Очищаем предыдущий таймер
        if (autoSlideTimer) {
            clearTimeout(autoSlideTimer);
        }

        // Устанавливаем новый таймер с интервалом для текущего слайда
        const currentInterval = slideIntervals[currentSlide];
        autoSlideTimer = setTimeout(() => {
            if (isAutoSliding) {
                nextSlide();
            }
        }, currentInterval);
    }

    function stopAutoSlide() {
        isAutoSliding = false;
        if (autoSlideTimer) {
            clearTimeout(autoSlideTimer);
            autoSlideTimer = null;
        }
    }

    function resumeAutoSlide() {
        isAutoSliding = true;
        startAutoSlide();
    }

    function updateCarousel() {
        const carousel = document.querySelector('#masters-carousel');
        if (carousel) {
            const translateX = -currentSlide * 100;
            carousel.style.transform = `translateX(${translateX}%)`;
            carousel.style.transition = 'transform 0.5s ease-in-out';
            
            updateCarouselIndicators();
            console.log('Carousel updated:', translateX + '%');
        } else {
            console.log('Carousel element not found!');
        }
    }

    function updateCarouselIndicators() {
        let indicatorsContainer = document.querySelector('.carousel-indicators');
        if (!indicatorsContainer) {
            indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'carousel-indicators flex justify-center mt-4 space-x-2';
            
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('button');
                indicator.className = `carousel-indicator w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-brand-rose' : 'bg-black/10'}`;
                indicator.addEventListener('click', () => {
                    currentSlide = i;
                    updateCarousel();

                    // Перезапускаем автоматическое переключение
                    if (isAutoSliding) {
                        startAutoSlide();
                    }
                });
                indicatorsContainer.appendChild(indicator);
            }
            
            const carouselContainer = document.querySelector('#masters-carousel').parentElement;
            carouselContainer.appendChild(indicatorsContainer);
        }
        
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.remove('bg-black/10');
                indicator.classList.add('bg-brand-rose');
            } else {
                indicator.classList.remove('bg-brand-rose');
                indicator.classList.add('bg-black/10');
            }
        });
    }

    // Делаем функции глобальными для onclick в HTML
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    // Инициализируем карусель после загрузки DOM
    updateCarousel();

    // Запускаем автоматическое переключение
    startAutoSlide();

    // Останавливаем автоматическое переключение при наведении мыши
    const carouselContainer = document.querySelector('#masters-carousel').parentElement;
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            stopAutoSlide();
        });

        carouselContainer.addEventListener('mouseleave', () => {
            resumeAutoSlide();
        });
    }

    // Обработчик для кнопки "Показать больше" у первого мастера
    const toggleBtn = document.getElementById('toggle-master1');
    const moreText = document.getElementById('more-master1');
    
    if (toggleBtn && moreText) {
        toggleBtn.addEventListener('click', function() {
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                toggleBtn.textContent = 'Показать меньше';
            } else {
                moreText.style.display = 'none';
                toggleBtn.textContent = 'Показать больше';
            }
        });
    }

    // Определяем мобильное устройство
    const isMobile = window.innerWidth <= 768;
    
    // Создание частиц только на десктопе
    function createParticles() {
        if (isMobile) return; // Не создаем частицы на мобильных
        
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const particles = document.createElement('div');
        particles.className = 'particles';
        hero.appendChild(particles);

        for (let i = 0; i < (isMobile ? 20 : 50); i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particles.appendChild(particle);
        }
    }

    // Параллакс отключен для предотвращения перекрытия блока услуг
    // window.addEventListener('scroll', () => {
    //     if (isMobile) return; // Отключаем параллакс на мобильных
    //
    //     const scrolled = window.pageYOffset;
    //     const hero = document.querySelector('.hero');
    //     if (hero) {
    //         hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    //     }
    // });

    // Оптимизированные анимации для мобильных
    const animateElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: isMobile ? 0.05 : 0.1, // Меньший порог для мобильных
        rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
    });

    // Touch события для карусели на мобильных
    if (isMobile) {
        let startX = 0;
        let endX = 0;
        
        const carousel = document.getElementById('masters-carousel');
        if (carousel) {
            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            
            carousel.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const threshold = 50;
                const diff = startX - endX;
                
                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            }
        }
    }

    // Initialize particles and animations
    createParticles();
    animateElements.forEach(el => animationObserver.observe(el));

});

// Podology Modal Functions
function openPodologyModal() {
    const modal = document.getElementById('podologyModal');
    const modalContent = document.getElementById('podologyModalContent');

    if (modal && modalContent) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Animate modal appearance
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

function closePodologyModal() {
    const modal = document.getElementById('podologyModal');
    const modalContent = document.getElementById('podologyModalContent');

    if (modal && modalContent) {
        // Animate modal disappearance
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore background scrolling
        }, 300);
    }
}

// Manicure Modal Functions
function openManicureModal() {
    const modal = document.getElementById('manicureModal');
    const modalContent = document.getElementById('manicureModalContent');

    if (modal && modalContent) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Animate modal appearance
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

function closeManicureModal() {
    const modal = document.getElementById('manicureModal');
    const modalContent = document.getElementById('manicureModalContent');

    if (modal && modalContent) {
        // Animate modal disappearance
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore background scrolling
        }, 300);
    }
}

// Pedicure Modal Functions
function openPedicureModal() {
    const modal = document.getElementById('pedicureModal');
    const modalContent = document.getElementById('pedicureModalContent');

    if (modal && modalContent) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Animate modal appearance
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

function closePedicureModal() {
    const modal = document.getElementById('pedicureModal');
    const modalContent = document.getElementById('pedicureModalContent');

    if (modal && modalContent) {
        // Animate modal disappearance
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore background scrolling
        }, 300);
    }
}

// Close modal with Escape key and outside clicks
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePodologyModal();
        closeManicureModal();
        closePedicureModal();
    }
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const podologyModal = document.getElementById('podologyModal');
    const manicureModal = document.getElementById('manicureModal');
    const pedicureModal = document.getElementById('pedicureModal');

    if (e.target === podologyModal) {
        closePodologyModal();
    }
    if (e.target === manicureModal) {
        closeManicureModal();
    }
    if (e.target === pedicureModal) {
        closePedicureModal();
    }
});

// Reviews Scroll Function
function scrollReviews(direction) {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;

    const scrollAmount = 320; // Width of one card + gap

    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

