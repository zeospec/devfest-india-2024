import mainData from "../data/config.json";
import faqData from "../data/faq.json";
import cocData from "../data/coc.json";
import navbarData from "../data/navbar.json";
import eventsData from "../data/events.json";

const currentDate = new Date();

let upcomingDevFests = eventsData.filter(event=>{
  const eventStartDate = new Date(event.StartingDate);
  return eventStartDate >= currentDate;
})

let passedDevFests = eventsData.filter((event) => {
  const eventStartDate = new Date(event.StartingDate);
  return eventStartDate < currentDate;
});

export const useJSONData = () => {

  return {
    mainData,
    faqData,
    cocData,
    navbarData,
    eventsData,
    upcomingDevFests,
    passedDevFests
  };
};
