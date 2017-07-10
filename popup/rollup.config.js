import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/app.tsx',
  dest: '../build/popup.js',
  format: 'iife',
  external: [
      'react', 
      'react-dom', 
      'redux',
      'react-redux'
  ],
  globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      'react-redux': 'ReactRedux'
  },
  plugins: [
      typescript({
          typescript: require('typescript')
      })
  ]
}