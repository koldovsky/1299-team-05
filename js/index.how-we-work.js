const steps = [
    {
        id: "1",
        image: "img/index.how-we-work/how-we-work-contact-us.svg",
        title: "a list of paper and pen",
        step: "Step 1. Contact us",
        description: "Tell our specialists about your company and the business goals you want to achieve."


    },
    {
        id: "2",
        image: "img/index.how-we-work/how-we-work-offer.svg",
        title: "a pack of money",
        step: "Step 2. Approve our offer",
        description: "We will offer you an effective action plan. You can accept it or make amendments"

    },
    {
        id: "3",
        image: "img/index.how-we-work/how-we-work-payments.svg",
        title: "hands with star inside",
        step: "Step 3. Make the payment",
        description: "After the payment is made we start our work. All you need is to observe the results. "
    },

];

function renderSteps(steps) {
    let stepsHtml = '';
    for (const step of steps) {
        stepsHtml += `
        <div class="how-we-work__step">
            <div class="how-we-work__image">
                <img class="how-we-work__image-icon" src="${step.image}"
                    alt="${step.title}">
            </div>
            <div class="how-we-work__item">
                <h3 class="how-we-work__step-title">${step.step}</h3>
                <p class="how-we-work__step-description">${step.description}</p>
            </div>        
        </div> `;

    }
    document.querySelector('.how-we-work__steps').innerHTML = stepsHtml;
}

renderSteps(steps);
