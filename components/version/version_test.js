'use strict';

describe('aia.version module', function() {
  beforeEach(module('myAaiapp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
