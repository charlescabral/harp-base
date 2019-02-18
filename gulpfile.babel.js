import gulp from "gulp"
import { series, parallel } from "gulp"
import { path } from "./gulp/config"
import { serve, reload } from "./gulp/tasks/servers/harp"
import { clean } from "./gulp/tasks/clean"

const watcher = ()=> {
  gulp.watch( path.harp.watch, series(reload))
}

gulp.task('clean', series(clean))

export const build = series(clean)
export const dev = series(serve, watcher)
export default dev