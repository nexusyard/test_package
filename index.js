
function nexusGreeting() {
    let messages = ['Welcome', 'Hey', 'Hi', 'Howdy', 'Namaskar', 'How are you?', 'Thank you!']
    return messages[Math.floor(Math.random() * messages.length)]
}

module.exports = nexusGreeting;