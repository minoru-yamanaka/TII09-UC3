const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}

// const button = document.getElementById('button')
// const toasts = document.getElementById('toasts')

// button.addEventListener('click', () => {
//     const notif = document.createElement('div')
//     notif.classList.add('toast')
//     notif.classList.add('info')

//     notif.innerText = 'Message One';

//     toasts.appendChild(notif)

//     setTimeout(() => {
//         notif.remove()
//     }, 2000);
// });
