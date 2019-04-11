import harp from 'harp'
import { base, path } from './../config'

export function html(cb) {
  harp.compile(base.root, null, ()=> {})
  cb()
}