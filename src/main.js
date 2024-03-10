import "./events.js"
import * as el from './elements.js'
import { changeBackground } from "./change-back.js"

el.router.add('/SPA-universe/', './pages/home.html')
el.router.add('/SPA-universe/universe', './pages/the_universe.html')
el.router.add('/SPA-universe/explore', './pages/explorer.html')
el.router.add('404', './pages/404.html')


el.router.handle()

window.onpopstate = () => el.router.handle()

changeBackground()
