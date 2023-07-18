let userMessenger;
let API_KEY = "";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    let chatContent = className === "outgoing" ? `<p></p><span class="material-symbols-outlined">
    <img src="images/user.png" alt=""></span>` : ` <span class="material-symbols-outlined">
    <img src="images/chatbot.png" alt=""></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method :"POST",
        Headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": userMessenger}]
        })
    }  
    
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        // console.log(data);
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        // console.log(error);

       
        messageElement.classList.add("error");   //add to style the error
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

//chatbot
const handleChat = () =>  {
    userMessenger = chatInput.value.trim();
    if(!userMessenger) return;
    chatInput.value = "";

    //reset the textarea height to its default height once a message is sent
    chatInput.style.height = `${chatInput.scrollHeight}px`;


    // append user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessenger, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);


    setTimeout(() => {
        // chatbox.appendChild(createChatLi("...", "incoming"));

        const incomingChatLi = createChatLi("...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
};


// adjust the height of the input textarea based on it's content
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// if Enter key is press without shift key and the window with is greater than 800px, handle the chat
chatInput.addEventListener("keydown", (e) => {
    if(e.key === 'Enter' && !e.shiftkey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatBotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
