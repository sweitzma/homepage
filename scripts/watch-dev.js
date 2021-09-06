require('esbuild').build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  sourcemap: true,
  outfile: 'dev-dist/bundle.js',
  loader: {
    '.png': 'file',
    '.jpg': 'file'
  },
  watch: {
    onRebuild(error, result) {
      if (error) console.log('watch build failed')
      else console.log('watch build succeeded')
    },
  },
}).then(result => {});
