function randomID(){return Array.from(crypto.getRandomValues(new Uint8Array(4)),r=>`0${(r&255).toString(16)}`.slice(-2)).join("")}

export { randomID as r };