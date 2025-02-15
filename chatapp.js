(function () {
  // Create the chat button
  let chatButton = document.createElement("button");
  chatButton.style.position = "fixed";
  chatButton.style.bottom = "20px";
  chatButton.style.right = "20px";
  chatButton.style.width = "60px";
  chatButton.style.height = "60px";
  chatButton.style.border = "none";
  chatButton.style.borderRadius = "50%";
  chatButton.style.cursor = "pointer";
  chatButton.style.background = "#fff";
  chatButton.style.padding = "5px";
  chatButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  chatButton.style.overflow = "hidden";
  chatButton.style.zIndex = "1000";
  chatButton.style.transition = "transform 0.2s ease-in-out, box-shadow 0.2s";

  // Add FontAwesome CSS for icons
  let fontAwesomeCSS = document.createElement("link");
  fontAwesomeCSS.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  fontAwesomeCSS.rel = "stylesheet";
  document.head.appendChild(fontAwesomeCSS);

  // Use FontAwesome icon for the chat button
  let chatIcon = document.createElement("i");
  chatIcon.className = "fas fa-comments"; // FontAwesome chat icon
  chatIcon.style.color = "#007bff";
  chatIcon.style.fontSize = "24px";
  chatButton.appendChild(chatIcon);

  // Add hover effects to the chat button
  chatButton.addEventListener("mouseover", function () {
    chatButton.style.transform = "scale(1.1)";
    chatButton.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
  });

  chatButton.addEventListener("mouseout", function () {
    chatButton.style.transform = "scale(1)";
    chatButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
  });

  // Create the chat box
  let chatBox = document.createElement("div");
  chatBox.id = "chatbox-widget";
  chatBox.style.position = "fixed";
  chatBox.style.bottom = "80px";
  chatBox.style.right = "20px";
  chatBox.style.width = "400px"; // Larger width
  chatBox.style.height = "500px"; // Larger height
  chatBox.style.background = "#fff";
  chatBox.style.border = "1px solid #ddd";
  chatBox.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
  chatBox.style.borderRadius = "10px";
  chatBox.style.overflow = "hidden";
  chatBox.style.zIndex = "1000";
  chatBox.style.display = "none";
  chatBox.style.flexDirection = "column";

  // Create the chat header
  let chatHeader = document.createElement("div");
  chatHeader.innerText = "Chat Support";
  chatHeader.style.background = "#007bff";
  chatHeader.style.color = "#fff";
  chatHeader.style.padding = "12px";
  chatHeader.style.fontSize = "18px";
  chatHeader.style.textAlign = "center";
  chatHeader.style.fontWeight = "bold";
  chatHeader.style.position = "relative";

  // Create the close button
  let closeButton = document.createElement("button");
  closeButton.innerText = "×";
  closeButton.style.position = "absolute";
  closeButton.style.top = "8px";
  closeButton.style.right = "12px";
  closeButton.style.background = "transparent";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.fontSize = "20px";
  closeButton.style.cursor = "pointer";

  // Create the chat messages container
  let chatMessages = document.createElement("div");
  chatMessages.style.flex = "1";
  chatMessages.style.padding = "12px";
  chatMessages.style.overflowY = "auto";
  chatMessages.style.maxHeight = "400px"; // Adjusted for larger chat box
  chatMessages.style.borderBottom = "1px solid #ddd";
  chatMessages.style.background = "#f9f9f9";

  // Create the chat input container
  let chatInputContainer = document.createElement("div");
  chatInputContainer.style.display = "flex";
  chatInputContainer.style.padding = "10px";
  chatInputContainer.style.background = "#fff";

  // Create the chat input field
  let chatInput = document.createElement("input");
  chatInput.type = "text";
  chatInput.placeholder = "Type a message...";
  chatInput.style.flex = "1";
  chatInput.style.padding = "10px";
  chatInput.style.border = "1px solid #ccc";
  chatInput.style.borderRadius = "5px";
  chatInput.style.fontSize = "14px";

  // Submit on Enter key
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Create the send button
  let sendButton = document.createElement("button");
  sendButton.innerText = "Send";
  sendButton.style.marginLeft = "10px";
  sendButton.style.padding = "10px 14px";
  sendButton.style.background = "#007bff";
  sendButton.style.color = "#fff";
  sendButton.style.border = "none";
  sendButton.style.borderRadius = "5px";
  sendButton.style.cursor = "pointer";
  sendButton.style.fontSize = "14px";
  sendButton.style.transition = "background 0.3s ease";

  // Function to send a message
  function sendMessage() {
    let message = chatInput.value.trim();
    if (message) {
      // Disable the send button and show loading
      sendButton.disabled = true;
      sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; // Loading spinner
      sendButton.style.background = "#ccc";

      // User message (aligned to the right)
      let userMessage = document.createElement("div");
      userMessage.style.display = "flex";
      userMessage.style.justifyContent = "flex-end";
      userMessage.style.marginBottom = "8px";

      let userText = document.createElement("div");
      userText.innerText = message;
      userText.style.padding = "8px";
      userText.style.background = "#007bff";
      userText.style.color = "#fff";
      userText.style.borderRadius = "10px 10px 0 10px";
      userText.style.maxWidth = "70%";

      userMessage.appendChild(userText);
      chatMessages.appendChild(userMessage);

      // Scroll to the bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Simulate API call delay (2 seconds)
      setTimeout(() => {
        // Re-enable the send button
        sendButton.disabled = false;
        sendButton.innerHTML = "Send";
        sendButton.style.background = "#007bff";

        // Bot response (aligned to the left)
        let botMessage = document.createElement("div");
        botMessage.style.display = "flex";
        botMessage.style.alignItems = "center";
        botMessage.style.marginBottom = "8px";

        let botAvatar = document.createElement("i");
        botAvatar.className = "fas fa-robot";
        botAvatar.style.marginRight = "8px";
        botAvatar.style.color = "#007bff";
        botAvatar.style.fontSize = "16px";

        let botText = document.createElement("div");
        botText.innerText = "Thanks for your message!";
        botText.style.padding = "8px";
        botText.style.background = "#f1f1f1";
        botText.style.borderRadius = "10px 10px 10px 0";
        botText.style.maxWidth = "70%";

        botMessage.appendChild(botAvatar);
        botMessage.appendChild(botText);
        chatMessages.appendChild(botMessage);

        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 2000); // Simulated 2-second delay

      // Clear the input field
      chatInput.value = "";
    }
  }

  // Send message on button click
  sendButton.addEventListener("click", sendMessage);

  // Close the chat box
  closeButton.addEventListener("click", function () {
    chatBox.style.display = "none";
  });

  // Toggle the chat box
  chatButton.addEventListener("click", function () {
    chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
  });

  // Append elements to the chat box
  chatInputContainer.appendChild(chatInput);
  chatInputContainer.appendChild(sendButton);
  chatHeader.appendChild(closeButton);
  chatBox.appendChild(chatHeader);
  chatBox.appendChild(chatMessages);
  chatBox.appendChild(chatInputContainer);

  // Append the chat button and chat box to the body
  document.body.appendChild(chatButton);
  document.body.appendChild(chatBox);
})();
