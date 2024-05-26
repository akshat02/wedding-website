const content = {
    en: {
        title: "Our Wedding",
        homeTitle: "Welcome to Our Wedding",
        homeContent: "We are excited to share this special day with you!",
        links: {
            home: "Home",
            things: "Things to do",
            story: "Our Story",
            travel: "Travel",
            itinerary: "Itinerary"
        }
    },
    hi: {
        title: "हमारी शादी",
        homeTitle: "हमारी शादी में आपका स्वागत है",
        homeContent: "हम आपके साथ इस खास दिन को साझा करने के लिए उत्साहित हैं!",
        links: {
            home: "मुख पृष्ठ",
            things: "करने योग्य चीजें",
            story: "हमारी कहानी",
            travel: "यात्रा",
            itinerary: "कार्यक्रम"
        }
    }
};

function setLanguage(lang) {
    document.getElementById('title').textContent = content[lang].title;
    document.getElementById('home-title').textContent = content[lang].homeTitle;
    document.getElementById('home-content').textContent = content[lang].homeContent;
    document.getElementById('home-link').textContent = content[lang].links.home;
    document.getElementById('things-link').textContent = content[lang].links.things;
    document.getElementById('story-link').textContent = content[lang].links.story;
    document.getElementById('travel-link').textContent = content[lang].links.travel;
    document.getElementById('itinerary-link').textContent = content[lang].links.itinerary;
}

// Set default language to English
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
});
