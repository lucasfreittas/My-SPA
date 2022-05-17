const links = {
    "/": "/home.html",
    "/about": "/about.html",
    "/contact": "/contact.html",
    "/404": "/404.html",
}

function getLink(){
    window.event.preventDefault()

    window.history.pushState({}, "", event.target.href )

    changeLink()
}

function changeLink(){
    const { pathname } = window.location
    const routes = links[pathname]

    fetch(routes)
    .then(page => page.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html
    })
}

changeLink()

window.getLink = () => getLink()