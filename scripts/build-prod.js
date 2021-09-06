require('esbuild').buildSync({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  minify: true,
  outfile: 'dist/bundle.js',
  loader: {
    '.png': 'file',
    '.jpg': 'file'
  },
})
