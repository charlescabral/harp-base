import gulp from "gulp"
import { series, parallel } from "gulp"
import { path } from "./gulp/config"
import { serve, reload } from "./gulp/tasks/server"
import { html } from './gulp/tasks/html'
import { styles } from './gulp/tasks/styles'
import { clean } from "./gulp/tasks/clean"

const watcher = ()=> {
  gulp.watch( path.harp.watch, series(html, reload) )
  gulp.watch( path.styles.watch, styles )
}

export const build = series(
  clean,
  parallel(html, styles)
)

export const dev = series(build, serve, watcher)
export default dev