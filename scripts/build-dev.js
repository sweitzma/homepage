require('esbuild').buildSync({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  sourcemap: true,
  outfile: 'dev-dist/bundle.js',
  loader: {
    '.png': 'file',
    '.jpg': 'file'
  },
})
