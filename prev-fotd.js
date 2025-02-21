const factsContainer = document.getElementById('facts-container');

// Sample facts data (replace with your actual data)
const facts = {
    '02-21-2025': 'What continent is Russia in? The Asian part of Russia is known as Siberia. However, in terms of population, the situation is reversed: Roughly three out of four Russians live in the European part of the country and just one out of four live in the Asian part. Europe and Asia actually share a single landmass, which is known as Eurasia.',
    '02-20-2025': 'What is the ocean that borders Antarctica? The Southern Ocean contains the waters that surround Antarctica and sometimes is considered an extension of Pacific, Atlantic and Indian Oceans. In 1928, the first edition of the International Hydrographic Organizations (IHO) Limits of Oceans and Seas publication included the Southern Ocean around Antarctica.',
    '02-19-2025': 'What Is A Claddagh Ring and what does it mean? Claddagh ring. The Claddagh ring (Irish: fáinne Chladaigh) is a traditional Irish ring given which represents love, loyalty, and friendship (the hands represent friendship, the heart represents love, and the crown represents loyalty).',
    '02-18-2025': 'When was glass first made? Archaeologists have found evidence of man-made glass which dates back to 4000 BC; this took the form of glazes used for coating stone beads. It was not until 1500 BC that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    '02-17-2025': 'How are Franklin D Roosevelt and Teddy Roosevelt related? While many Americans may assume that President Franklin D. Roosevelt (1933-1945) was the son of Theodore Roosevelt (1901-1909), the two former presidents who led the country three decades apart were actually fifth cousins. Their closest tie was FDR is wife Eleanor who was also the niece of President Theodore Roosevelt.',
    '02-16-2025': 'Which planet is made of ice? Neptune, like Uranus, is one of the two outer planets known as an "ice giant." Made up of more ices than Jupiter and Saturn, the chilly body almost seems to be in a class by itself. Different images emphasize the features on Neptune.',
    '02-15-2025': 'What does menthol come from? Menthol is an organic compound made synthetically or obtained from cornmint, peppermint or other mint oils. It is a waxy, crystalline substance, clear or white in color, which is solid at room temperature and melts slightly above.',
    '02-14-2025': 'Fact about Feb 14th',
    '02-13-2025': 'Fact about Feb 13th',
    '02-12-2025': 'Fact about Feb 12th',
    '02-11-2025': 'Fact about Feb 11th',
    '02-10-2025': 'Fact about Feb 10th',
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
    '2025-01-09': 'How much did Heinz sell for? H.J. Heinz Co. is eliminating 600 jobs across the U.S. and in Canada, including 350 in Pittsburgh, nearly a third of the operation in its hometown, it said Tuesday. The ketchup maker was sold in June to Buffett is Berkshire Hathaway and the Brazilian investment firm 3G Capital for $23.3 billion.',
    '2025-01-08': 'How many moons does Mars have? Mars has two moons, Phobos and Deimos, which are thought to be captured asteroids. Both satellites were discovered in 1877 by Asaph Hall and are named after the characters Phobos (panic/fear) and Deimos (terror/dread) who, in Greek mythology, accompanied their father Ares, god of war, into battle.',
    '2025-01-07': 'What oceans are there? Historically, there are four named oceans: the Atlantic, Pacific, Indian, and Arctic. However, most countries—including the United States—now recognize the Southern (Antarctic) as the fifth ocean. The Pacific, Atlantic, and Indian are known as the three major oceans.',
    '2025-01-06': 'Do babies have kneecaps when they are born? As such, it takes a little longer than some bones to, well, become bone. Although it doesn not show up on X-rays, your baby does in fact have kneecaps. They are just not bony kneecaps. At birth, these kneecaps are still cartilage, and remain so for a few years.',
    '2025-01-05': 'How long does a migraine usually last? Migraines are disabling headaches that most likely stem from problems with the nerves and blood vessels in the head. Migraine headaches typically last from 4-72 hours. They may occur as often as several times a week to only once a year. People who have migraines are called migraineurs.',
    '2025-01-04': 'What countries use chopsticks? Chopsticks originated in ancient China and later spread to Vietnam, Korea and Japan. They can also be found in some areas of Tibet and Nepal that are close to Han Chinese populations. Chopsticks are smoothed and frequently tapered, and are commonly made of bamboo, plastic, wood, or stainless steel.',
    '2025-01-03': 'Who were the 4 Beatles? The Beatles were an English rock band that formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became widely regarded as the greatest and most influential act of the rock era.',
    '2025-01-02': 'Why do our teeth chatter when we are cold? When it is cold outside and your body temperature starts to drop, the hypothalamus sends a message to your body that it needs to warm up. One way it does that is through your muscles, which generate heat by shivering. Teeth chattering is just a form of shivering.',
    '2025-01-01': 'Which month has the most sunlight in the northern hemisphere? In the Northern Hemisphere, winter generally begins on December 21 or 22. This is the winter solstice, the day of the year with the shortest period of daylight. Summer begins on June 20 or 21, the summer solstice, which has the most daylight of any day in the year.',
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