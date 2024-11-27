const cards = [
    {
        id: "1",
        image: "img/index.why-choose-us/why-choose-us-experience.svg",
        title: "Experience",
        description: "We have more than 10 years of experience and can be proud of 10,000+ completed projects.",
        firstItem: "Different industries",
        secondItem: "Full-range services",
        thirdItem: "Predicted results"

    },
    {
        id: "2",
        image: "img/index.why-choose-us/why-choose-us-support.svg",
        title: "Support",
        description: "We are always ready to help and explain all the points that remained unclear for you.",
        firstItem: "Initial consultations",
        secondItem: "24/7 online support",
        thirdItem: "Knowledge base"
    },
    {
        id: "3",
        image: "img/index.why-choose-us/why-choose-us-technologies.svg",
        title: "Technologies",
        description: "Our specialists integrate new systems and conduct training on them. We use only the cutting-edge technologies.",
        firstItem: "Modern CMS",
        secondItem: "Highly-loaded systems",
        thirdItem: "Elastic Scalability"
    },

];

function renderCards(cards) {
    let cardsHtml = '';
    for (const card of cards) {
        cardsHtml += `
     <div class="choose-us__card">
            <img class="choose-us__icon-card" src="${card.image}" alt="${card.title}" />
            <h3 class="choose-us__card-title">${card.title}</h3>
            <p class="choose-us__card-description">${card.description}</p>
            <ul class="choose-us__list">
                    <li class="choose-us__list-item">${card.firstItem}</li>
                    <li class="choose-us__list-item">${card.secondItemtItem}</li>
                    <li class="choose-us__list-item">${card.thirdItemItem}</li>
                </ul>
     </div>`;
    }
    document.querySelector('.choose-us__cards').innerHTML = cardsHtml;
}

renderCards(cards);
