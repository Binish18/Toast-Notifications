const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

//an array named messages is created, containing four string elements, each representing a different message.



const types = ['info', 'success', 'error']

//This line creates an array named types with three string elements, representing different types of notifications: 'info', 'success', and 'error'.

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    //The createNotification function is defined, which takes two 
    //optional parameters: message and type. If these parameters are not provided, they default to null.
    const notif = document.createElement('div') 
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    //Inside the createNotification function, a new div 
    //element is created and assigned to the constant variable 
    //notif. CSS classes 'toast' and a type (either provided or randomly generated using getRandomType()) are added to the div.

    notif.innerText = message ? message : getRandomMessage()
    //The content of the notification (innerText) is set to the provided message or a randomly generated message using getRandomMessage().
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)

    //The notification div is appended to the toasts element, which presumably holds all the notification elements.
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}

//The getRandomType function returns a randomly selected type from the types array.

