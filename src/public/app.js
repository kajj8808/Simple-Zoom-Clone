// Put all your frontend code here.
const socket = new WebSocket(`wss://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Conneted to Server ✨");
});

socket.addEventListener("message", (message) => {
    console.log("New Message", message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server 👋");
});

setTimeout(() => {
    socket.send("Hello Server!")
}, 1000)