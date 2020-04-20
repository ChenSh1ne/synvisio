import getPlotDimensions from '../../utils/getPlotDimensions';

const configuration = getPlotDimensions();

export default {
  oracle: {
    isDark: true,
    isSnapShotAvailable: true,
    sourceID: 'bn',
    searchResult: [],
    multiLevel: false,
    multiLevelType: 'tree',
    plotType: 'dashboard',
    trackType: [{ 'type': 'track-heatmap', 'color': 'red' },
    { 'type': 'track-heatmap', 'color': 'red' },
    { 'type': 'track-heatmap', 'color': 'red' },
    { 'type': 'track-heatmap', 'color': 'red' }],
    loaderState: false,
    snapshotList: [],
    configuration: {
      ...configuration,
      showScale: false,
      isChromosomeModeON: false,
      showTracks: false,
      isBlockModeON: false,
      'markers': { 'source': [], 'target': [] }, // default preset markers are loaded from the sampleSourceMapper
      'reversedMarkers': { 'source': [], 'target': [] },//same structure but array contains the marker that is reversed
      'alignmentList': [],
      'filterLevel': {}
    }
  }
};
