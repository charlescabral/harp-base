export const base = {
  root: './',
  src: './src',
  dest: './www',
  host: 'localhost',
  port: 9000
}

export const path = {
  harp: {
    public: './public/',
    watch: './public/**/*.+(ejs|jade|md|json)'
  },
  styles: {
    src: `${base.src}/styles/main.scss`,
    watch: `${base.src}/styles/**/*.scss`,
    modules: `${base.src}/modules/**/*.scss`,
    dest: `${base.dest}/assets/css`,
    lint: `${base.src}/styles/**/*.s+(a|c)ss`
  },
}

export const isProd = process.env.NODE_ENV === `production`;