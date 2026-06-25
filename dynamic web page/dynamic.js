// fetch() - async await

let fetchapi = async () => {
    let root = document.getElementById('root')
    try {
        let apidata = await fetch("https://api.github.com/users")
        let array = await apidata.json()

        array.map((elem) => {
            console.log(elem.login)
            root.innerHTML += `
            <div class=card>
                <div><img src="${elem.avatar_url}"></div>
                <h2>${elem.login}</h2>
            </div>`
        })
    }
    catch (error){
        console.error('elli eno samasye ede')
    }
}
fetchapi()