const factsContainer = document.getElementById('facts-container');

// Sample facts data (replace with your actual data)
const facts = {
    '2025-02-13': 'Fact about Feb 13th',
    '2025-02-12': 'Fact about Feb 12th',
    '2025-02-11': 'Fact about Feb 11th',
    // ... add more facts
    '2025-01-02': 'Fact about Jan 2nd',
    '2025-01-01': 'Fact about Jan 1st',
};



function displayFacts(factsData) {
    for (const date in factsData) {
      if (factsData.hasOwnProperty(date)) { // Check if it's the object's own property
        const fact = factsData[date];
        const factBox = document.createElement('div');
        factBox.classList.add('fact-box');

        const dateHeading = document.createElement('h2');
        dateHeading.textContent = date; // Display the date as a heading

        const factText = document.createElement('p');
        factText.textContent = fact;

        factBox.appendChild(dateHeading);
        factBox.appendChild(factText);
        factsContainer.appendChild(factBox);
      }
    }
}

displayFacts(facts);