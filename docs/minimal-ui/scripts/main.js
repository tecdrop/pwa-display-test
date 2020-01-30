/*
 *  PWA Display Test. Copyright (c) 2018 HWALab. MIT License.
 *  https://hwalab.com/pwadisplaytest/
 */

/* eslint-disable no-console */

let installPromptEvent;
const installLink = document.querySelector(".install-link");

// Install App functionality
window.addEventListener("beforeinstallprompt", event => {
    console.log("beforeinstallprompt Event");

    // Suppress automatic prompting
    event.preventDefault();

    // Stash the event so it can be triggered later.
    installPromptEvent = event;

    // Show the (hidden-by-default) install link
    installLink.hidden = false;
});

installLink.addEventListener("click", event => {
    console.log("Install App Link Click Event");
    event.preventDefault();

    // Update the install UI to remove the install button
    installLink.hidden = true;

    // Show the modal add to home screen dialog
    installPromptEvent.prompt();

    // Wait for the user to respond to the prompt
    installPromptEvent.userChoice.then(choice => {
        if (choice.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
        } else {
            console.log("User dismissed the A2HS prompt");
        }
        // Clear the saved prompt since it can't be used again
        installPromptEvent = null;
    });
});
