import { expect } from 'chai';
import server from '../../src/server.js';

describe('Server', () => {
  describe('[GET /]', () => {
    it('returns success on root path', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/',
      });
      expect(response.statusCode).to.be.equal(200);
      expect(response.json()).to.be.deep.equal({});
    });
  });

  describe('[GET /health]', () => {
    it('returns ok on health path', async () => {
      const response = await server.inject({
        method: 'GET',
        url: '/health',
      });
      expect(response.statusCode).to.be.equal(200);
      expect(response.json()).to.be.deep.equal({ status: 'ok' });
    });
  });
});
