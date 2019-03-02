module.exports = () => ({
  hosts: [
    {
      domain: 'staging2.engineers.sg',
      root: './dist',
      fallback: {
        200: 'index.html'
      }
    }
  ]
})
