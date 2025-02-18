const app = document.getElementById("app")

const formAction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
        event.preventDefault()
    }
}

const startApp = () => {
    const content = 
    `
    <form id="form">
        <input type="email" name="email" id="iemail" placeholder="E-mail">
        <input type="tel" name="tel" id="itel" placeholder="Telefone">
        <button>
            Confirmar
        </button>
    </form>
    `

    app.innerHTML = content
    
    formAction()
}

startApp()