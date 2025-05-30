const factsContainer = document.getElementById('facts-container');

// Sample facts data (replace with your actual data)
const facts = {
  '04-14-2025':"How many amendments have been added to the constitution since 1789? Since 1789, over 10,000 amendments to the Constitution have been introduced in Congress. Of those, only 33 were adopted and sent to the states for ratification, and only 27 were ultimately ratified.",
  '04-13-2025':"What province is the farthest west in Canada? British Columbia is the province located the farthest west in Canada and is bounded by the Alaska Panhandle, the Yukon and Northwest Territories, Alberta and the U.S. states of Montana, Idaho and Washington.",
  '04-12-2025':"Updating",
  '04-11-2025':"What was the last film personally overseen by Walt Disney? The Jungle Book (1967) - Trivia - IMDb. The Jungle Book (1967) The last film personally overseen by Walt Disney.",
  '04-10-2025':"Updating",
  '04-09-2025':"When was the artificial heart invented? “In 1963, Mr. Winchell patented an artificial heart that he said was a collaboration with Henry J. Heimlich, inventor of the maneuver for choking victims. Mr. Winchell's device was considered the prototype for the one designed by Robert K. Jarvik that was successfully implanted in a human in 1982”.",
  '04-08-2025':"Updating",
  '04-07-2025':"Updating",
  '04-06-2025':"Updating",
  '04-05-2025':"Updating",
  '04-04-2025':"Updating",
  '04-03-2025':"Updating",
  '04-02-2025':"Where can you find alligators and crocodiles? Alligators are mostly found in the southern United States and the crocodiles in Africa, India, South America, and southern United States. They are among the largest reptiles. Their bodies are covered with scales and they have webbed toes. They live in swamps and along the banks of rivers.",
  '04-01-2025':"APRIL FOOLS! There are no facts, there never were.",
  '03-30-2025':"Updating",
  '03-29-2025':"Updating",
  '03-28-2025':"Updating",
  '03-27-2025':"Where are bees not found? They are found on every continent except Antarctica, in every habitat on the planet that contains insect-pollinated flowering plants. Bees are adapted for feeding on nectar and pollen, the former primarily as an energy source and the latter primarily for protein and other nutrients.",
  '03-26-2025':"Updating",
  '03-25-2025':"Updating",
  '03-24-2025':"Updating",
  '03-23-2025':"Updating",
  '03-22-2025':"Updating",
  '03-21-2025':"Updating",
  '03-20-2025':"Updating",
  '03-19-2025':"Updating",
  '03-18-2025':"Updating",
  '03-17-2025':"Updating",
  '03-16-2025':"Updating",
  '03-15-2025':"How is a day on Venus longer than a year? Unlike planet Earth, it actually takes longer for Venus to rotate on its own axis (representing the cycle of a day) than it does for it to revolve around the sun (representing the cycle of a year).",
  '03-14-2025':"How long does it take for a diamond to form? Most natural diamonds are formed at high temperature and pressure at depths of 140 to 190 kilometers (87 to 118 mi) in the Earth's mantle. Carbon-containing minerals provide the carbon source, and the growth occurs over periods from 1 billion to 3.3 billion years (25% to 75% of the age of the Earth).",
  '03-13-2025':"When was the last time the US Constitution was amended? Twenty-seventh Amendment, amendment (1992) to the Constitution of the United States that required any change to the rate of compensation for members of the U.S. Congress to take effect only after the subsequent election in the House of Representatives.",
  '03-12-2025':"Who introduced tobacco to France? Nicotine is named after the tobacco plant Nicotiana tabacum, which in turn is named after the French ambassador in Portugal, Jean Nicot de Villemain, who sent tobacco and seeds to Paris in 1560, and who promoted their medicinal use.",
  '03-11-2025':"How many gallons of water does an average household use per day? If your family's water usage is more than that amount, you need to look at your water-use habits. An average usage is 50 gallons/day/person. An average usage for a family of four for a 30-day billing period would be 6,000 gallons or 8 ccf. Teens tend to stay in the shower longer.",
  '03-10-2025':"When was roller skating invented? The first patented roller skate was introduced in 1760 by Belgian inventor John Joseph Merlin. His roller skate wasn't much more than an ice skate with wheels where the blade goes, (a style we would call inlines today).",
  '03-9-2025':"Who has the most children in the world? Vassilyev and his first wife, whose name is unknown, hold the record for the most children a couple has parented. She gave birth to a total of 69 children – sixteen pairs of twins, seven sets of triplets and four sets of quadruplets – between 1725 and 1765, in a total of 27 births.",
  '03-8-2025':"Ketchup was once sold as a medicine in the 1830s, touted to cure upset stomachs.",
  '03-7-2025':"The average person will walk the equivalent of five times around the Earth in their lifetime.",
  '03-6-2025':" Koalas have fingerprints that are so similar to humans that they can be very difficult to tell apart, even under a microscope. ",
  '03-5-2025':"How many frames per second are typically projected in modern movies? Many modern 35 mm film projectors use three-blade shutters to give 72 images per second—each frame is flashed on screen three times. Motion picture film[edit] In the motion picture industry, where traditional film stock is used, the industry standard filming and projection formats are 24 frames per second (fps).",
  '03-4-2025':"Can Animals Dream? In fact, they concluded that animals can have very complex dreams that include memories or replays of events that happened while they were awake. The researchers studied rats that had been trained to run on a track. They mapped and measured brain activity with electrodes while the rats were awake and running.",
  '03-3-2025':"Your brain hides your nose from your field of vision, a process called unconscious selective attention. You can see your nose, but your brain filters it out so it doesn't constantly intrude on your sight.",
  '03-2-2025':"The total weight of all ants on Earth is roughly equal to the weight of all humans.",
  '03-1-2025':"In Georgia (the US state), it's illegal to carry an ice cream cone in your back pocket on Sundays.",
    '02-30-2025':"The Eiffel Tower can be about 15 cm taller during the summer due to thermal expansion, which means the iron heats up and expands.",
    '02-29-2025':"There are more possible iterations of a game of chess than there are atoms in the observable universe.",
    '02-28-2025':"There's a planet made almost entirely of diamond, called 55 Cancri e. It's an exoplanet, meaning it orbits a star outside our solar system, and it's about twice the size of Earth and eight times more massive.",
    '02-27-2025':"Why do you cover a horse's eyes? A fly mask or fly cap is a mask used on horses to cover the eyes, jaw, and sometimes the ears and muzzle to protect from flies. The mask is semi-transparent and made from a mesh allowing the horse to see and hear while wearing it. The mask may also provide some protection from UV-light.",
  '02-26-2025':"How many symphonies did Mozart write? For years this was categorized as a Mozart symphony, but later scholarship determined that it was actually composed by Michael Haydn (No. 25), and Mozart wrote only the slow introduction for it. The three final symphonies (Nos. 39-41) were completed in about three months in 1788.",
    '02-25-2025': 'When was alcohol made legal again? Alcohol consumption was never illegal under federal law. Nationwide prohibition did not begin in the United States until 1920, when the Eighteenth Amendment to the U.S. Constitution went into effect, and was repealed in 1933, with the ratification of the Twenty-first Amendment.',
    '02-24-2025': 'What color was originally associated with Saint Patricks Day? A particular blue hue was known as St. Patrick blue and for hundreds of years it was this blue that was associated with the holiday. However, green became the dominant color of St Patricks day over time as the holiday was used to highlight Irish nationalism against British rule in the 1790s.',
    '02-23-2025': 'Why do firefighters have Dalmations? Dalmatians are perhaps best known for their role as fire-fighting apparatus escorts and firehouse mascots. Since Dalmatians and horses are very compatible, the dogs were easily trained to run in front of the carriages to help clear a path and quickly guide the horses and firefighters to the fires.',
    '02-22-2025': 'Why is it called Greenland? The name Greenland comes from Scandinavian settlers. In the Norse sagas, it is said that Erik the Red was exiled from Iceland for murder. He set out in ships to find land rumoured to be to the northwest. After settling there, he named the land Grfnland (Greenland), possibly to attract more people to settle there.',
    '02-22-2025': 'How many white keys are there on a piano? Almost every modern piano has 52 white keys and 36 black keys for a total of 88 keys (seven octaves plus a minor third, from A0 to C8). Many older pianos only have 85 keys (seven octaves from A0 to A7). Some piano manufacturers extend the range further in one or both directions.',
    '02-21-2025': 'What continent is Russia in? The Asian part of Russia is known as Siberia. However, in terms of population, the situation is reversed: Roughly three out of four Russians live in the European part of the country and just one out of four live in the Asian part. Europe and Asia actually share a single landmass, which is known as Eurasia.',
    '02-20-2025': 'What is the ocean that borders Antarctica? The Southern Ocean contains the waters that surround Antarctica and sometimes is considered an extension of Pacific, Atlantic and Indian Oceans. In 1928, the first edition of the International Hydrographic Organizations (IHO) Limits of Oceans and Seas publication included the Southern Ocean around Antarctica.',
    '02-19-2025': 'What Is A Claddagh Ring and what does it mean? Claddagh ring. The Claddagh ring (Irish: fáinne Chladaigh) is a traditional Irish ring given which represents love, loyalty, and friendship (the hands represent friendship, the heart represents love, and the crown represents loyalty).',
    '02-18-2025': 'When was glass first made? Archaeologists have found evidence of man-made glass which dates back to 4000 BC; this took the form of glazes used for coating stone beads. It was not until 1500 BC that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    '02-17-2025': 'How are Franklin D Roosevelt and Teddy Roosevelt related? While many Americans may assume that President Franklin D. Roosevelt (1933-1945) was the son of Theodore Roosevelt (1901-1909), the two former presidents who led the country three decades apart were actually fifth cousins. Their closest tie was FDR is wife Eleanor who was also the niece of President Theodore Roosevelt.',
    '02-16-2025': 'Which planet is made of ice? Neptune, like Uranus, is one of the two outer planets known as an "ice giant." Made up of more ices than Jupiter and Saturn, the chilly body almost seems to be in a class by itself. Different images emphasize the features on Neptune.',
    '02-15-2025': 'What does menthol come from? Menthol is an organic compound made synthetically or obtained from cornmint, peppermint or other mint oils. It is a waxy, crystalline substance, clear or white in color, which is solid at room temperature and melts slightly above.',
    '02-14-2025': 'Where is the Fly Geyser? Fly Geyser, also known as Fly Ranch Geyser is a small geothermal geyser that is located approximately 20 miles (32 km) north of Gerlach in Washoe County, Nevada. The Geyser is located in Hualapai Flat, about 1/3 of a mile from State Route 34.',
    '02-13-2025': 'Who discovered over 200 uses for the peanut? George Washington Carver reputedly discovered three hundred uses for peanuts and hundreds more for soybeans, pecans and sweet potatoes.',
    '02-12-2025': 'What animal is called the ship of the desert? Camels are the only animals that can carry heavy loads from place to place in the desert because they can go for long periods without eating or drinking water. A camels hump doesn not carry water, as some believe. Instead the hump is filled with fat, which is a built-in food supply.',
    '02-11-2025': 'Where did Lego get its name? The Lego Group began in the workshop of Ole Kirk Christiansen (born 7 April 1891), a carpenter from Billund, Denmark, who began making wooden toys in 1932. In 1934, his company came to be called "Lego", from the Danish phrase leg godt, which means "play well".',
    '02-10-2025': 'Which president was divorced? America has only had one divorcee president, but two widower presidents moved on to second wives while in office. And one president never got married at all. Ronald Reagan was the only president who ever divorced his wife.',
    '02-09-2025': 'When was the segregation law abolished? Although sometimes counted among "Jim Crow laws" of the South, such laws were also passed by other states. Anti-miscegenation laws were not repealed by the Civil Rights Act of 1964 but were declared unconstitutional by the 1967 Supreme Court ruling in Loving v. Virginia.',
    '02-08-2025': 'Do Huntsman make webs? As adults, huntsman spiders do not build webs, but hunt and forage for food: their diet consists primarily of insects and other invertebrates, and occasionally small skinks and geckos. They live in the crevices of tree bark, but will frequently wander into homes and vehicles.',
    '02-07-2025': 'When did the first microwaves come out? Raytheon later licensed its patents for a home-use microwave oven that was first introduced by Tappan in 1955, but these units were still too large and expensive for general home use. The countertop microwave oven was first introduced in 1967 by the Amana Corporation, which was acquired in 1965 by Raytheon.',
    '02-06-2025': 'Who introduced tobacco to France? Nicotine is named after the tobacco plant Nicotiana tabacum, which in turn is named after the French ambassador in Portugal, Jean Nicot de Villemain, who sent tobacco and seeds to Paris in 1560, and who promoted their medicinal use.',
    '02-05-2025': 'What is the RPM of a half speed record? Vinyl records are produced to be played at one of three speeds: 33 1/3 RPM, 45 RPM, and 78 RPM. You will almost never deal with 78 RPM records, so don not worry about that. Most full-size 12-inch records will be 33 1/3 RPM, though some — mainly EPs and maxi-singles — will be at 45 RPM.',
    '02-04-2025': 'Do you weigh less at the equator? If you weighed 100 pounds at the north pole on a spring scale, at the equator you would weigh 99.65 pounds, or 5.5 ounces less. Your mass, in grams, however would stay the same because grams is a measure of the resistance of a body to being moved and has nothing to do with acceleration or gravity.',
    '02-03-2025': 'Who invented the game of dominoes? History of Dominoes. Tile games have been found in China as early as 1120 CE. Some historical accounts have traced evidence of the existence of the pieces, way back to a soldier-hero named Hung Ming (181-234 CE). Other historians believe that Keung T ai Kung, in the twelfth century BCE had created them.',
    '02-02-2025': 'Is the sun a yellow dwarf star? The sun is classified as a G-type main-sequence star, or G dwarf star, or more imprecisely, a yellow dwarf. Actually, the sun — like other G-type stars — is white, but appears yellow through Earths atmosphere. Stars generally get bigger as they grow older.',
    '02-01-2025': 'What is the size of the biggest snowflake ever recorded? Guinness World Records lists the largest snowflakes as having fallen during a storm in January 1887 at Fort Keogh, in Montana. A rancher nearby, the book says, called them “larger than milk pans” and measured one at 15 inches wide.',
    '2025-01-31': 'When was the Rococo period? Rococo Style. Rococo Style, style of 18th-century painting and decoration characterized by lightness, delicacy, and elaborate ornamentation. The rococo period corresponded roughly to the reign (1715-74) of King Louis XV of France.',
    '2025-01-30': 'How many symphonies did Mozart write? For years this was categorized as a Mozart symphony, but later scholarship determined that it was actually composed by Michael Haydn (No. 25), and Mozart wrote only the slow introduction for it. The three final symphonies (Nos. 39-41) were completed in about three months in 1788.',
    // ... add more facts
    '2025-01-29': 'Is an ostrichs eye bigger than its brain? An ostrichs eye is bigger than its brain. It is not true that the ostrich hides its head in the sand in time of danger. But young birds will conceal themselves by lying down and stretching their necks out along the ground.',
    '2025-01-28': 'Is it true that shaving makes hair grow faster? No — shaving hair doesn not change its thickness, color or rate of growth. Shaving facial or body hair gives the hair a blunt tip. The tip might feel coarse or "stubbly" for a time as it grows out. During this phase, the hair might be more noticeable and perhaps appear darker or thicker — but it is not.',
    '2025-01-27': 'When was the first regular TV broadcast in the United States? Profile America -- Thursday, May 12th. This week marks the anniversary of the first regularly scheduled television broadcasts -- and the date may surprise you. They were made in 1928 and originated from radio station WGY in Schenectady, New York.',
    '2025-01-26': 'Which country has the longest written constitution? The Constitution of India is the longest written constitution of any sovereign country in the world, containing 444 articles in 22 parts, 12 schedules and 118 amendments, with 117,369 words in its English-language translation, while the United States Constitution is the shortest written constitution, at 7 articles and ...',
    '2025-01-25': 'How much was Manhattan island purchased for in 1626? According to tradition, he purchased the island of Manhattan from Native Americans on May 24, 1626 for goods valued at 60 Dutch guilders, which in the 19th century was estimated to be the equivalent of US$24 (or $680 today).',
    '2025-01-24': 'When was the signing of the Warsaw Pact? Communist Bloc Conclave: The Warsaw Pact conference, 11 May 1955, Warsaw, Poland.The Treaty of Friendship, Co-operation and Mutual Assistance concluded after three days of discussions in Warsaw created a belated eastern military counterpart to the western powers North Atlantic Treaty Organization',
    '2025-01-23': 'How many Christmas presents are in the 12 days? The answer is not 78 but 364, almost one for every day of the year. On day one, the character in the song gets a single present (a partridge in a pear tree). But on day two, the beneficiary receives a new present (a pair of turtle doves) plus another partridge in a pear tree.',
    '2025-01-22': 'What is the only sport played on the moon? Forty years ago this Sunday, Apollo 14 astronauts Alan Shepard and Edgar Mitchell took an entirely different kind of "giant leap for mankind," playing sports on the lunar surface. Shepard famously hit golf balls with a modified six-iron, and Mitchell threw a javelin.',
    '2025-01-21': 'When was Mountain Dew Invented? Mountain Dew (currently stylized as Mtn Dew in the United States) is a carbonated soft drink brand produced and owned by PepsiCo. The original formula was invented in 1940 by Tennessee beverage bottlers Barney and Ally Hartman. A revised formula was created by Bill Bridgforth in 1958.',
    '2025-01-20': 'How old was Mozart when he wrote his first song? By the time he was five years old, Mozart had complete mastery of keyboards and violin, and had written his first five compositions. At six, he toured Europe as a child prodigy; by 16, he had already written three operas and 25 symphonies.',
    '2025-01-19': 'Is your prescription for glasses different than your prescription for contact? Contact lens prescriptions and eyeglass prescriptions are not the same. They are significantly different because eyeglass lenses are positioned approximately 12 millimeters from your eyes, whereas contact lenses rest directly on the surface of your eyes.',
    '2025-01-18': 'What does domo arigato mean in English? Domo arigato means "thank you very much" in Japanese. The term was very popular in the 1980s with the release of the Styx album Killroy Was Here and the hit song Mr Roboto.',
    '2025-01-17': 'What temperature is the same number of degrees in both Celsius and Fahrenheit? To find the temperature when both are equal, we use an old algebra trick and just set ºF = ºC and solve one of the equations. So the temperature when both the Celsius and Fahrenheit scales are the same is -40 degrees.',
    '2025-01-16': 'What is Catalin netHow much time do NFL players actually play? An average professional football game lasts 3 hours and 12 minutes, but if you tally up the time when the ball is actually in play, the action amounts to a mere 11 minutes.',
    '2025-01-15': 'How much does an ATM machine weigh? The weight of an ATM machine is typically 150 – 250 pounds or more (depending on the model).',
    '2025-01-14': 'Who formulated the first periodic table? Although precursors exist, Dmitri Mendeleev is generally credited with the publication, in 1869, of the first widely recognized periodic table. He developed his table to illustrate periodic trends in the properties of the then-known elements.',
    '2025-01-13': 'FWhat is the color of hydrogen? For example, hydrogen is a colorless gas, carbon as charcoal or graphite is black, common sulfur is yellow, chlorine is a greenish gas, bromine is a dark red liquid, iodine in ether is violet, amorphous phosphorus is red, rust is dark orange-red, etc.',
    '2025-01-12': 'When was the world discovered to be round? After the Greek philosophers Pythagoras, in the 6th century BC, and Parmenides, in the 5th, recognized that the Earth is spherical, the spherical view spread rapidly in the Greek world. Around 330 BC, Aristotle maintained on the basis of physical theory and observational evidence that the Earth was spherical.',
    '2025-01-11': 'Who invented the dartboard? The man who is credited with the invention of the numbering sequence of the modern standard dartboard is BRIAN GAMLIN. Gamlin was a carpenter from Bury in the County of Lancashire, England and came up with the infuriating sequence in 1896, at the age of 44.',
    '2025-01-10': 'Which country first adopted time zones? On November 2, 1868, the then-British colony of New Zealand officially adopted a standard time to be observed throughout the colony, and was perhaps the first country to do so. It was based on the longitude 172°30′ East of Greenwich, that is 11 hours 30 minutes ahead of GMT.',
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