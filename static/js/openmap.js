
  window.segment_paths = ["yodhDwywgOkklYpwns@","e|qbEeahsMjklYqwns@","ctsmDk{fvMag}Sdy}A","wk|gBhuc{OkgvdAuqkr^","uui_BfevePauqG}nqI","cu`xFlnr~Ll~uwCxubfB"];
  window.destination_coordinates = [["32.0456253","76.7235513","Bir","India"],["27.7172453","85.3239605","Kathmandu","Nepal"],["32.0456253","76.7235513","Bir","India"],["28.6139391","77.2090212","New Delhi","India"],["17.189877","-88.49765","Belize","Belize"],["15.783471","-90.230759","Guatemala","Guatemala"],["40.8048207","-73.3362298","Dix Hills","United States"]];
  window.Marker = (function() {
    function Marker() {
      this.icon = {
        url: 'https://triphappy.com/assets/light_marker_outline-2808e21b37562159ba25cdf3a84b607695c6c949b2aff821d5fc3d18779239da.png',
        size: new google.maps.Size(24, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 27)
      };
    }

    return Marker;

  })();

  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.init_google = function(callback_function) {
    var ga_src, options;
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      return callback_function();
    } else {
      google_api_key = "AIzaSyDy012Waf-bDaNBZm7ZTdOtBvBYOENZGTc";
      ga_src = '//maps.googleapis.com/maps/api/js?v=3&key=' + google_api_key + '&libraries=geometry';
      options = {
        dataType: "script",
        cache: true
      };
      return jQuery.ajax(ga_src, options).done(function() {
        return callback_function();
      });
    }
  };

  window.init_map = function(map_div_id, user_options) {
    var default_center, lastValidCenter, map, strictBounds;
    if (user_options == null) {
      user_options = {};
    }
    default_center = {
      lat: 28,
      lng: 0
    };
    map = new google.maps.Map(document.getElementById(map_div_id), {
      center: user_options.center || default_center,
      zoom: user_options.zoom || 3,
      minZoom: user_options.minZoom || 1,
      maxZoom: user_options.maxZoom || null,
      scrollwheel: user_options.scrollwheel || false,
      streetViewControl: user_options.streetViewControl || false,
      disableDefaultUI: user_options.disableDefaultUI || true,
      panControl: user_options.panControl || false,
      mapTypeControl: user_options.mapTypeControl || false,
      mapTypeControlOptions: user_options.mapTypeControlOptions || {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      zoomControl: user_options.zoomControl || true,
      zoomControlOptions: user_options.zoomControlOptions || {
        position: google.maps.ControlPosition.RIGHT_TOP
      },
      styles: user_options.styles || [
        {
          featureType: "administrative",
          elementType: "labels.text",
          stylers: [
            {
              lightness: "15"
            }
          ]
        }, {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              saturation: "-100"
            }, {
              lightness: "23"
            }
          ]
        }, {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              saturation: "35"
            }, {
              lightness: "27"
            }, {
              gamma: 1
            }, {
              hue: "#61ff00"
            }
          ]
        }, {
          featureType: "landscape.natural.terrain",
          elementType: "all",
          stylers: [
            {
              lightness: "16"
            }
          ]
        }, {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              hue: "#78ff00"
            }, {
              saturation: "22"
            }, {
              lightness: "50"
            }, {
              gamma: 1
            }
          ]
        }, {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
            {
              lightness: "-27"
            }, {
              weight: "0.76"
            }, {
              saturation: "0"
            }
          ]
        }, {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              lightness: "21"
            }
          ]
        }, {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              lightness: "-12"
            }
          ]
        }, {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              hue: "#0011ff"
            }, {
              saturation: "-84"
            }, {
              lightness: "59"
            }, {
              gamma: 1
            }, {
              weight: "0.50"
            }
          ]
        }, {
          featureType: "road.highway.controlled_access",
          elementType: "all",
          stylers: [
            {
              lightness: "0"
            }
          ]
        }, {
          featureType: "road.arterial",
          elementType: "all",
          stylers: [
            {
              hue: "#ff0300"
            }, {
              saturation: -100
            }, {
              lightness: 51.19999999999999
            }, {
              gamma: 1
            }
          ]
        }, {
          featureType: "road.local",
          elementType: "all",
          stylers: [
            {
              hue: "#FF0300"
            }, {
              saturation: -100
            }, {
              lightness: 52
            }, {
              gamma: 1
            }
          ]
        }, {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              lightness: "7"
            }
          ]
        }, {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              hue: "#008fff"
            }, {
              saturation: "21"
            }, {
              lightness: "-7"
            }, {
              gamma: 1
            }
          ]
        }
      ]
    });
    lastValidCenter = default_center;
    strictBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-84.9, -180), new google.maps.LatLng(84.9, 180));
    google.maps.event.addListener(map, 'center_changed', function() {
      var ne_bounds, sw_bounds;
      if (typeof map.getBounds() !== 'undefined') {
        ne_bounds = map.getBounds().getNorthEast();
        sw_bounds = map.getBounds().getSouthWest();
        if (strictBounds.contains(ne_bounds) && strictBounds.contains(sw_bounds)) {
          lastValidCenter = map.getCenter();
        }
        return map.panTo(lastValidCenter);
      }
    });
    return map;
  };

  window.init_widget = function() {
    var gmap, map;
    map = init_map('triphappy-map-container');
    gmap = new window.GoogleMap(map);
    return gmap.show_trip();
  };

  window.onload = function() {
    return init_google(init_widget);
  };

  window.Polyline = (function() {
    Polyline.default_color = '#e87767';

    function Polyline(path, encoded1, map1) {
      this.encoded = encoded1;
      this.map = map1 != null ? map1 : null;
      this.get = bind(this.get, this);
      if (this.encoded) {
        this.poly_path = google.maps.geometry.encoding.decodePath(path);
      } else {
        this.poly_path = path;
      }
      this.scale = .33;
      this.offset = '5px';
      this.repeat = '20px';
      this.stroke_color = '#e87767';
      this.geodesic = true;
      this.stroke_opacity = 1.0;
      this.stroke_weight = 7;
    }

    Polyline.prototype.get = function(self) {
      var poly_symbol, polyline;
      if (self == null) {
        self = this;
      }
      poly_symbol = {
        path: 'M22,33V10.944L11,0L0,10.944V33l11-10.943L22,33z',
        fillColor: '#ffffff',
        fillOpacity: 0.4,
        strokeWeight: 0,
        scale: self.scale,
        anchor: new google.maps.Point(11, 0)
      };
      polyline = new google.maps.Polyline({
        path: self.poly_path,
        geodesic: self.geodesic,
        strokeColor: self.stroke_color,
        strokeOpacity: self.stroke_opacity,
        strokeWeight: self.stroke_weight,
        icons: [
          {
            icon: poly_symbol,
            offset: self.offset,
            repeat: self.repeat
          }
        ],
        map: self.map
      });
      return polyline;
    };

    return Polyline;

  })();

  window.GoogleMap = (function() {
  function GoogleMap(map) {
    this.show_trip = bind(this.show_trip, this);
    this.reset_bounds = bind(this.reset_bounds, this);
    this.add_polyline = bind(this.add_polyline, this);
    this.add_marker = bind(this.add_marker, this);
    this.markers = [];
    this.polylines = [];
    this.bounds = null;
    this.map = map;
    this.infowindow = null;
  }

  GoogleMap.prototype.add_marker = function(lat, lng, marker_icon, center_after_add, uid, fit_bounds, name, country) {
    var content, marker, self;
    if (center_after_add == null) {
      center_after_add = true;
    }
    if (uid == null) {
      uid = 0;
    }
    if (fit_bounds == null) {
      fit_bounds = true;
    }
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      destination_uid: uid,
      map: this.map,
      icon: marker_icon
    });
    this.markers.push(marker);
    if (!this.bounds) {
      this.bounds = new google.maps.LatLngBounds;
    }
    this.bounds.extend(marker.position);
    if (this.markers.length === 1 && center_after_add) {
      this.map.setCenter(marker.position);
      this.map.setOptions({
        zoom: 6
      });
    } else if (fit_bounds) {
      this.map.fitBounds(this.bounds);
    }
    if (!this.infowindow) {
      this.infowindow = new google.maps.InfoWindow;
    }
    var content;
    if (country && (country !== null || country !== 'null')) {
      content = '<div id="trip-happy-infowindow"><span id="place-name">' + name + '</span>, <span id="country-name">' + country + '</span></div>';
    } else {
      content = '<div id="trip-happy-infowindow"><span>' + name + '</span></div>';
    }

    self = this;
    marker.addListener('click', function() {
      self.infowindow.setContent(content);
      return self.infowindow.open(self.map, marker);
    });
    return marker;
  };

  GoogleMap.prototype.add_polyline = function(path, encoded, size) {
    var poly_path, polyline;
    if (size == null) {
      size = 'default';
    }
    if (encoded) {
      poly_path = google.maps.geometry.encoding.decodePath(path);
    } else {
      poly_path = path;
    }
    polyline = new window.Polyline(path, encoded, this.map).get();
    this.polylines.push(polyline);
    return polyline;
  };

  GoogleMap.prototype.reset_bounds = function() {
    var i, len, marker, ref;
    if (this.markers.length === 0) {
      return this.map.setOptions({
        zoom: 3,
        center: {
          lat: 28,
          lng: 0
        }
      });
    } else if (this.markers.length === 1) {
      return this.map.setOptions({
        zoom: 6,
        center: this.markers[0].position
      });
    } else {
      this.bounds = new google.maps.LatLngBounds();
      ref = this.markers;
      for (i = 0, len = ref.length; i < len; i++) {
        marker = ref[i];
        if (this.map === marker.getMap()) {
          this.bounds.extend(marker.position);
        }
      }
      return this.map.fitBounds(this.bounds);
    }
  };

  GoogleMap.prototype.show_trip = function() {
    var encoded_path, i, j, len, len1, pos, ref, ref1, self;
    if (window.destination_coordinates && window.segment_paths) {
      ref = window.destination_coordinates;
      for (i = 0, len = ref.length; i < len; i++) {
        pos = ref[i];
        this.add_marker(pos[0], pos[1], (new window.Marker).icon, false, 69, false, pos[2], pos[3]);
      }
      ref1 = window.segment_paths;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        encoded_path = ref1[j];
        this.add_polyline(encoded_path, true, 'small');
      }
      this.reset_bounds();
    }
  };

  return GoogleMap;

})();

