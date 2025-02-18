const factsContainer = document.getElementById('facts-container');

// Sample facts data (replace with your actual data)
const facts = {
    
    '2025-02-16': 'Fact about Feb 13th',
    '2025-02-15': 'Fact about Feb 13th',
    '2025-02-14': 'Fact about Feb 13th',
    '2025-02-13': 'Fact about Feb 13th',
    '2025-02-12': 'Fact about Feb 12th',
    '2025-02-11': 'Fact about Feb 11th',
    '2025-02-10': 'Fact about Feb 10th',
    '2025-02-09': 'Fact about Feb 09th',
    '2025-02-08': 'Fact about Feb 08th',
    '2025-02-07': 'Fact about Feb 07th',
    '2025-02-06': 'Fact about Feb 06th',
    '2025-02-05': 'Fact about Feb 05th',
    '2025-02-04': 'Fact about Feb 04th',
    '2025-02-03': 'Fact about Feb 03rd',
    '2025-02-02': 'Fact about Feb 02nd',
    '2025-02-01': 'Fact about Feb 01st',
    '2025-01-31': 'Fact about Jan 31st',
    '2025-01-30': 'Fact about Jan 30th',
    // ... add more facts
    '2025-01-29': 'Fact about Jan 29th',
    '2025-01-28': 'Fact about Jan 28th',
    '2025-01-27': 'Fact about Jan 27th',
    '2025-01-26': 'Fact about Jan 26th',
    '2025-01-25': 'Fact about Jan 25th',
    '2025-01-24': 'Fact about Jan 24th',
    '2025-01-23': 'Fact about Jan 23th',
    '2025-01-22': 'Fact about Jan 22th',
    '2025-01-21': 'Fact about Jan 21th',
    '2025-01-20': 'Fact about Jan 20th',
    '2025-01-19': 'Fact about Jan 19th',
    '2025-01-18': 'Fact about Jan 18th',
    '2025-01-17': 'Fact about Jan 17th',
    '2025-01-16': 'Fact about Jan 16th',
    '2025-01-15': 'Fact about Jan 15th',
    '2025-01-14': 'Fact about Jan 14th',
    '2025-01-13': 'Fact about Jan 13th',
    '2025-01-12': 'Fact about Jan 12th',
    '2025-01-11': 'Fact about Jan 11th',
    '2025-01-10': 'Fact about Jan 10th',
    '2025-01-09': 'Fact about Jan 09th',
    '2025-01-08': 'Fact about Jan 08th',
    '2025-01-07': 'Fact about Jan 07th',
    '2025-01-06': 'Fact about Jan 06th',
    '2025-01-05': 'Fact about Jan 05th',
    '2025-01-04': 'Fact about Jan 04th',
    '2025-01-03': 'Who were the 4 Beatles? The Beatles were an English rock band that formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the greatest and most influential act of the rock era.'
    '2025-01-02': 'Why do our teeth chatter when we are cold? When it is cold outside and your body temperature starts to drop, the hypothalamus sends a message to your body that it needs to warm up. One way it does that is through your muscles, which generate heat by shivering. Teeth chattering is just a form of shivering.',
    '2025-01-01': 'Which month has the most sunlight in the northern hemisphere? In the Northern Hemisphere, winter generally begins on December 21 or 22. This is the winter solstice, the day of the year with the shortest period of daylight. Summer begins on June 20 or 21, the summer solstice, which has the most daylight of any day in the year.'
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