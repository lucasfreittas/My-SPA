export class Routes{
    routes = {}

    add(routeName, link){
        this.routes[routeName] = link
    }

    getLink(){
        window.event.preventDefault()
    
        window.history.pushState({}, "", event.target.href )
    
        this.changeLink()
    }

    changeLink(){
        const { pathname } = window.location
        const newRoutes = this.routes[pathname] || this.routes[404]
    
        fetch(newRoutes)
        .then(page => page.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

}