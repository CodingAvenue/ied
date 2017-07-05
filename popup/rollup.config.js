import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/app.tsx',
  dest: 'bundle.js',
  format: 'iife',
  external: [
      'react', 
      'react-dom', 
      'axios', 
  ],
  globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'axios': 'axios'
  },
  plugins: [
      typescript({
          typescript: require('typescript')
      })
  ]
}
