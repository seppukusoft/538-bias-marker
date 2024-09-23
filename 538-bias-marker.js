// ==UserScript==
// @name        538 Political Markers
// @match       *://projects.fivethirtyeight.com/*
// @version     1.0
// @author      your mom
// @description Displays the political leaning of polls featured on 538 where not provided.
// ==/UserScript==

window.onload = function() {
    // Create a new <style> element
    const style = document.createElement('style');

    // Define the CSS rules for smaller and lighter squares
    style.innerHTML = `
    .partisan.red {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #cc241a;
        transform: rotate(45deg);
        margin-right: 5px;
    }

    .partisan.blue {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #3255a4;
        transform: rotate(45deg);
        margin-right: 5px;
    }

    .partisan.leanred {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #FFC0CB;
        transform: rotate(45deg);
        margin-right: 5px;
    }

    .partisan.leanblue {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #add8e6;
        transform: rotate(45deg);
        margin-right: 5px;
    }

    .partisan.unreliable {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #FFFF00;
        transform: rotate(45deg);
        margin-right: 5px;
    }

    .partisan.external {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #A020F0;
        transform: rotate(45deg);
        margin-right: 5px;
    }
    `;

    // Append the <style> element to the <head> of the document
    document.head.appendChild(style);

    // Fetch pollster bias data
    function addMarkers(){
    fetch("https://raw.githubusercontent.com/seppukusoft/538-bias-marker/refs/heads/main/list.json")
        .then(res => res.json())
        .then(data => {
            let firstObject = data[0];

            let redPollsters = firstObject.red;
            let bluePollsters = firstObject.blue;
            let leanRedPollsters = firstObject.leanred;
            let leanBluePollsters = firstObject.leanblue;
            let unreliablePollsters = firstObject.unreliable;

            let pollsterArray = document.getElementsByClassName("pollster-name");
            let sponsorArray = document.getElementsByClassName("sponsor");

            // Fetch and filter the external page elements
            fetch('https://projects.fivethirtyeight.com/pollster-ratings/')
                .then(response => response.text())
                .then(htmlString => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlString, 'text/html');
                    const elements = Array.from(doc.getElementsByClassName('innerDiv'));
                    const filteredElements = elements.filter(el => {
                        const textContent = el.textContent || '';
                        return !/\d/.test(textContent);  // Keep elements without numbers in their text
                    });
                    const top50Pollsters = filteredElements.slice(0, 50).map(el => el.textContent);
                    const markedPollsters = new Set();
                    const markedSponsors = new Set();
                    // checks pollsters
                    for (let i = 0; i < pollsterArray.length; i++) {
                        let pollsterName = pollsterArray[i].innerText;
                        // checks top 50
                        for (let j = 0; j < top50Pollsters.length; j++) {
                            if (pollsterName === top50Pollsters[j]) {
                                pollsterArray[i].insertAdjacentHTML("beforebegin", '<span class="partisan external"></span>');
                                pollsterArray[i].insertAdjacentHTML("beforeend", '<span class="partisan external"></span>');
                            }
                        }
                        // checks red
                        for (let j = 0; j < redPollsters.length; j++) {
                            if (pollsterName === redPollsters[j]) {
                                pollsterArray[i].insertAdjacentHTML("beforebegin", '<span class="partisan red"></span>');
                            }
                        }
                        // checks blue
                        for (let j = 0; j < bluePollsters.length; j++) {
                            if (pollsterName === bluePollsters[j]) {
                                pollsterArray[i].insertAdjacentHTML("beforebegin", '<span class="partisan blue"></span>');
                            }
                        }
                        // checks lean red
                        for (let j = 0; j < leanRedPollsters.length; j++) {
                            if (pollsterName === leanRedPollsters[j]) {
                                pollsterArray[i].insertAdjacentHTML("beforebegin", '<span class="partisan leanred"></span>');
                            }
                        }
                        // checks lean blue
                        for (let j = 0; j < leanBluePollsters.length; j++) {
                            if (pollsterName === leanBluePollsters[j]) {
                                pollsterArray[i].insertAdjacentHTML("beforebegin", '<span class="partisan leanblue"></span>');
                            }
                        }
                        // checks unreliable
                        for (let j = 0; j < unreliablePollsters.length; j++) {
                            if (pollsterName === unreliablePollsters[j]) {
                                pollsterArray[i].insertAdjacentHTML("beforebegin", '<span class="partisan unreliable"></span>');
                            }
                        }
                    }

                    // checks sponsors
                    for (let i = 0; i < sponsorArray.length; i++) {
                        let sponsorName = sponsorArray[i].innerText;
                        // checks red
                        for (let j = 0; j < redPollsters.length; j++) {
                            if (sponsorName == redPollsters[j]) {
                                sponsorArray[i].insertAdjacentHTML("afterbegin", '<span class="partisan red"></span>');
                            }
                        }
                        // checks blue
                        for (let j = 0; j < bluePollsters.length; j++) {
                            if (sponsorName == bluePollsters[j]) {
                                sponsorArray[i].insertAdjacentHTML("afterbegin", '<span class="partisan blue"></span>');
                            }
                        }
                        // checks lean red
                        for (let j = 0; j < leanRedPollsters.length; j++) {
                            if (sponsorName == leanRedPollsters[j]) {
                                sponsorArray[i].insertAdjacentHTML("afterbegin", '<span class="partisan leanred"></span>');
                            }
                        }
                        // checks lean blue
                        for (let j = 0; j < leanBluePollsters.length; j++) {
                            if (sponsorName == leanBluePollsters[j]) {
                                sponsorArray[i].insertAdjacentHTML("afterbegin", '<span class="partisan leanblue"></span>');
                            }
                        }
                        // checks lean blue
                        for (let j = 0; j < unreliablePollsters.length; j++) {
                            if (sponsorName == unreliablePollsters[j]) {
                                sponsorArray[i].insertAdjacentHTML("afterbegin", '<span class="partisan unreliable"></span>');
                            }
                        }
                    }
                })
            .catch(error => console.error('Error fetching or parsing external page:', error));
        })
        .catch(error => console.error('Error fetching JSON:', error));
    }
        addMarkers();

        let buttonPressed = false;
        let searchBoxActive = false;

        // Button interaction
        const showMoreButton = document.querySelector('.more-polls');
        if (showMoreButton) {
            showMoreButton.onclick = function() {
                buttonPressed = true; // Set the flag when the button is pressed
                setTimeout(() => {
                    addMarkers();
                    buttonPressed = false; // Reset the flag
                }, 5000); // Delay for 5 seconds
            };
        }

        let lastRunTime = 0; // Timestamp for the last run of addMarkers

        // Search box interaction
        const searchBox = document.querySelector('.search');
        if (searchBox) {
            searchBox.addEventListener('input', () => {
                const currentTime = Date.now();

                // Only call addMarkers if more than 1.5 seconds passed since the last run
                if (currentTime - lastRunTime > 1500) {
                    lastRunTime = currentTime; // Update the last run time
                    setTimeout(() => {
                        addMarkers(); // Call addMarkers after a short delay for new inputs
                    }, 1000); // Delay for 1 second (adjust as needed)
                }
            });
        }

        // Set up MutationObserver to detect changes
        const observer = new MutationObserver((mutations) => {
            if (buttonPressed || searchBoxActive) {
                addMarkers(); // Call addMarkers if the button was pressed or the search box was interacted with
            }
        });
};