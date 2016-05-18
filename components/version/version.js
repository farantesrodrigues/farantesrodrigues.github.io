'use strict';

angular.module('aia.version', [
  'aia.version.interpolate-filter',
  'aia.version.version-directive'
])

.value('version', '0.1');
