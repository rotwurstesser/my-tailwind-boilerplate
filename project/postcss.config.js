module.exports = {
  plugins: [
    require("tailwindcss")(),
    require("postcss-preset-env")({
      features: {
        "nesting-rules": true
      }
    }),
    require("autoprefixer")()
  ]
};
