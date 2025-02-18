const app = document.getElementById("app")
const users = [
    {
        email: 'test@test.com',
        phone: '99999999999',
        ref: 100,
        refBy: null
    },
    {
        email: 'tust@tust.com',
        phone: '9999999999',
        ref: 200,
        refBy: 100
    }

]


const formAction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const userData = {
            email: formData.get('email'),
            phone: formData.get('phone')
        }
    }
}

const startApp = () => {
    const content = 
    `
    <form id="form">
        <input type="email" name="email" id="iemail" placeholder="E-mail">
        <input type="tel" name="phone" id="iphone" placeholder="Telefone">
        <button>
            Confirmar
        </button>
    </form>
    `

    app.innerHTML = content

    formAction()
}

startApp()