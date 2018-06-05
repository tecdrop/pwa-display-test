console.log("main.js");

let installPromptEvent;

const installLinkEl = document.querySelector(".install-link");

window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt");
    // Prevent Chrome <= 67 from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    installPromptEvent = event;
    // Update the install UI to notify the user app can be installed
    installLinkEl.hidden = false;
});

installLinkEl.addEventListener("click", () => {
    console.log("click");
    // Update the install UI to remove the install button
    document.querySelector(".install-link").hidden = true;
    // Show the modal add to home screen dialog
    installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    // installPromptEvent.userChoice.then(choice => {
    //     if (choice.outcome === "accepted") {
    //         console.log("User accepted the A2HS prompt");
    //     } else {
    //         console.log("User dismissed the A2HS prompt");
    //     }
    //     // Clear the saved prompt since it can't be used again
    //     installPromptEvent = null;
    // });
});
