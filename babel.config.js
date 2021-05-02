module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['prismjs', {
      languages: ['javascript', 'typescript', 'css', 'markdown'],
      plugins: ['line-numbers', 'show-language'],
      theme: 'okaidia',
      css: true,
    }],
    ['@babel/plugin-proposal-class-properties'],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
