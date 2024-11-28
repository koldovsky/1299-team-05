const faqDataLeft = [
  {
    question: "How can you be useful for us?",
    answer:
      "We can take on most of the tasks related to your business. We simplify many processes and offer modern solutions, so you have more time left to deal directly with operational tasks.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide literally all kinds of services for business. These include web development, marketing, sales, integrations, analytics, accounting and much more.",
  },
  {
    question: "What if we are only planning to enter the market?",
    answer:
      "Of course, you can do without our services, but together with MDX Company you are more likely to build a great startup that can withstand the first few years of challenges.",
  },
  {
    question: "How can we check what you do?",
    answer:
      "You will see the results from our cooperation in a month. In addition, every week we meet in person with our clients to tell what has been done and what are our plans for the next week.",
  },
  {
    question: "What if we are not satisfied with your services?",
    answer:
      "If you think that some of our services were not provided in full or not effective, you can terminate the contract and not pay the remaining amount.",
  },
];

const faqDataRight = [
  {
    question: "Do you have experience with large companies?",
    answer:
      "Yes, for 12 years, we have worked with a large number of major companies and we know the specifics of their processes.",
  },
  {
    question: "Do you have any custom plans for big companies?",
    answer:
      "All our services are custom, depending on your needs and goals. The pricing for the services depends on the scope of work.",
  },
  {
    question: "What if we want to make changes to the action plan?",
    answer:
      "We think it's great when the business does not just follow our recommendations but participates in the process of developing an action plan. We can always adapt our services to your wishes.",
  },
  {
    question: "Can I get exclusive offers for my company?",
    answer:
      "We can discuss special conditions, depending on the amount of work and your budget. Please contact us for more details.",
  },
  {
    question: "Is support available?",
    answer:
      "Of course! We have built-in website support available 24/7. In addition, you can always make an appointment and consult with our specialists.",
  },
];

const arrowUp = "&#10548";
const arrowDown = "&#10549";

function renderFAQ(data, containerSelector, startID) {
  const container = document.querySelector(containerSelector);
  if (!container) return startID;

  const htmlContent = data
    .map(
      (item, index) => `
          <div class="accordion__item">
            <div class="accordion__item-title" id="accordion-item-${
              startID + index
            }">
              <span class="accordion__item-title--text">${item.question}</span>
              <img class="accordion__item-title--icon" src="img/global/arrow-down.svg" alt="item icon">
            </div>
            <div class="accordion__content">
              <p>${item.answer}</p>
            </div>
          </div>
        `
    )
    .join("");

  container.innerHTML = htmlContent;
  return startID + data.length;
}

let nextID = renderFAQ(faqDataLeft, ".index-faq__accordion-left", 0);
renderFAQ(faqDataRight, ".index-faq__accordion-right", nextID);


