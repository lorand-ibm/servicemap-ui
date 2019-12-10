import config from '../../../../config';

// The default maximum bounds of the map
const defaultMapBounds = {
  maxLat: 60.68260671624568,
  maxLng: 26.05329875808676,
  minLat: 59.695219623662894,
  minLng: 23.39691082417145,
};

const mapOptions = {
  initialPosition: config.initialMapPosition,
  defaultMaxBounds: [
    [defaultMapBounds.maxLat, defaultMapBounds.minLng],
    [defaultMapBounds.maxLat, defaultMapBounds.maxLng],
    [defaultMapBounds.minLat, defaultMapBounds.maxLng],
    [defaultMapBounds.minLat, defaultMapBounds.minLng],
  ],
  // Make district polygon bounds slightly larger than max bounds, so the polygon borders are hidden
  polygonBounds: [
    [defaultMapBounds.maxLat + 10, defaultMapBounds.minLng - 10],
    [defaultMapBounds.maxLat + 10, defaultMapBounds.maxLng + 10],
    [defaultMapBounds.minLat - 10, defaultMapBounds.maxLng + 10],
    [defaultMapBounds.minLat - 10, defaultMapBounds.minLng - 10],
  ],
};

const tileLayers = {
  // These define the options for the different map projections (tms32 and gk25)
  tms32: {
    crsName: 'EPSG:3067',
    projDef: '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    boundsPoints: [[-548576, 6291456], [1548576, 8388608]],
    resolutions: [8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125],
  },
  gk25: {
    crsName: 'EPSG:3879',
    projDef: '+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
    boundsPoints: [[25440000, 6630000], [25571072, 6761072]],
    resolutions: [256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625, 0.03125],
  },
};

const mapTypes = {
  // These define the map tiles and options of individual map types
  servicemap: {
    name: 'servicemap',
    layer: tileLayers.tms32,
    url: 'https://tiles.hel.ninja/wmts/osm-sm-hq/etrs_tm35fin_hq/{z}/{x}/{y}.png',
    minZoom: 6,
    maxZoom: 15,
    zoom: 10,
    mobileZoom: 9,
    transitZoom: 14,
    mobileTransitZoom: 13,
  },
  ortoImage: {
    name: 'ortoImage',
    layer: tileLayers.gk25,
    // TODO: maybe have map names and formats as variables from the URL, like in the old version
    url: 'https://kartta.hsy.fi/geoserver/gwc/service/wmts?layer=taustakartat_ja_aluejaot:Ortoilmakuva_2017&tilematrixset=ETRS-GK25&Service=WMTS&Request=GetTile&Version=1.0.0&TileMatrix=ETRS-GK25:{z}&TileCol={x}&TileRow={y}&Format=image/jpeg',
    minZoom: 3,
    maxZoom: 10,
    zoom: 5,
    mobileZoom: 4,
    transitZoom: 9,
    mobileTransitZoom: 8,
    mapBounds: [
      [60.590720832407364, 25.390521218333532],
      [60.590720832407364, 24.276736721022225],
      [59.8994284703215, 24.276736721022225],
      [59.8994284703215, 25.390521218333532],
    ],
  },
  guideMap: {
    name: 'guideMap',
    layer: tileLayers.gk25,
    // TODO: maybe have map names and formats as variables from the URL, like in the old version
    url: 'https://kartta.hel.fi/ws/geoserver/gwc/service/tms/1.0.0/avoindata:Karttasarja_PKS@ETRS-GK25@png/{z}/{x}/{-y}.png',
    minZoom: 3,
    maxZoom: 10,
    zoom: 5,
    mobileZoom: 4,
    transitZoom: 9,
    mobileTransitZoom: 8,
    mapBounds: [
      [60.402200415095926, 25.271114398151653],
      [60.402200415095926, 24.49246149510767],
      [60.00855312110063, 24.49246149510767],
      [60.00855312110063, 25.271114398151653],
    ],
  },
};

const transitIconSize = 30;
const userIconSize = 50;

export {
  mapOptions,
  mapTypes,
  transitIconSize,
  userIconSize,
};
