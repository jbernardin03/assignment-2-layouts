document.addEventListener("DOMContentLoaded", () => {
  const eventCards = document.querySelectorAll(".event-card");
  const summarySection = createSummarySection();
  const savedEvents = new Map();

  eventCards.forEach(card => {
    const button = createSaveButton();
    card.appendChild(button);

    button.addEventListener("click", () => {
      const eventInfo = extractEventInfo(card);

      if (savedEvents.has(eventInfo.id)) {
        removeEvent(eventInfo.id, card, button, savedEvents, summarySection);
      } else {
        saveEvent(eventInfo, card, button, savedEvents, summarySection);
      }
    });
  });
});

/* ---------------------------
Save Button
---------------------------- */
function createSaveButton() {
  const btn = document.createElement("button");
  btn.textContent = "Save Event";
  btn.classList.add("save-event-btn");
  return btn;
}

/* ---------------------------
   Extract Event Info
---------------------------- */
function extractEventInfo(card) {
  const title = card.querySelector("h3").textContent.trim();
  const meta = card.querySelector(".event-meta").textContent.trim();

  return {
    id: title, // unique enough for this project
    title,
    meta
  };
}

/* ---------------------------
   Save & Remove Event
---------------------------- */
function saveEvent(eventInfo, card, button, savedEvents, summarySection) {
  savedEvents.set(eventInfo.id, eventInfo);

  const img = card.querySelector("figure img");
  if (img) {
    img.style.border = "6px solid #f1c40f";
    img.style.borderRadius = "6px";
    img.style.boxShadow = "0 0 14px rgba(241, 196, 15, 0.7)";
  }

  button.textContent = "Remove Event";
  updateSummaryList(savedEvents, summarySection);
}

function removeEvent(id, card, button, savedEvents, summarySection) {
  savedEvents.delete(id);

  const img = card.querySelector("figure img");
  if (img) {
    img.style.border = "";
    img.style.borderRadius = "";
    img.style.boxShadow = "";
  }

  button.textContent = "Save Event";
  updateSummaryList(savedEvents, summarySection);
}




/* ---------------------------
   Create Summary Section
---------------------------- */
function createSummarySection() {
  const section = document.createElement("section");
  section.id = "saved-events-section";

  const heading = document.createElement("h2");
  heading.textContent = "Saved Events";

  const list = document.createElement("ul");
  list.id = "saved-events-list";

  section.appendChild(heading);
  section.appendChild(list);

  document.querySelector("main").appendChild(section);

  return section;
}

function updateSummaryList(savedEvents, summarySection) {
  const list = summarySection.querySelector("#saved-events-list");

  // Clear list without using innerHTML
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  if (savedEvents.size === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No events saved yet.";
    list.appendChild(msg);
    return;
  }

  savedEvents.forEach(event => {
    const li = document.createElement("li");

    const title = document.createElement("strong");
    title.textContent = event.title;

    const meta = document.createElement("span");
    meta.textContent = " — " + event.meta;

    li.appendChild(title);
    li.appendChild(meta);

    list.appendChild(li);
  });
}
