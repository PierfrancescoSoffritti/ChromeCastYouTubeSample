export function YouTubeMessage(type="", data = "") {
    return { type, data }
}

export function isMessagePoperlyFormatted(message) {
    const sampleMessage = new YouTubeMessage();

    for (const key in sampleMessage) 
        if (!message.hasOwnProperty(key))
            return false;

    return true;
}