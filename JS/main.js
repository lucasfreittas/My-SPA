import { Routes } from "./links.js"

const router = new Routes()
router.add('/index.html', '/home.html')
router.add('/', '/home.html')
router.add('/about', '/about.html')
router.add('/contact', '/contact.html')
router.add(404, '/404.html')



router.changeLink()

window.onpopstate = () => router.changeLink()
window.getLink = () => router.getLink()