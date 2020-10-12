module.exports = {
  basePath: '',
  trailingSlash: true,
  async rewrites () {
    return [
      { source: '/proxy/kpay', destination: 'http://kpay-center-srv-us-test.4wps.net' }
    ]
  }
};
