const content = {
  en: {
      title: "Our Wedding",
      homeTitle: "Welcome to Our Wedding",
      homeContent: "Join us as we celebrate our union with traditions from both Kashmiri Pandit and Rajput cultures.",
      links: {
          home: "Home",
          rituals: "Rituals",
          photos: "Photos",
          travel: "Travel",
          guestbook: "Guest Book",
          music: "Music"
      },
      events: [
          {
              title: "Engagement",
              description: "The formal agreement between families, marking the start of wedding preparations."
          },
          {
              title: "Mehendi",
              description: "The bride's hands and feet are adorned with intricate henna designs."
          },
          {
              title: "Sangeet",
              description: "A night of music and dance, celebrating the upcoming wedding."
          },
          {
              title: "Wedding Ceremony",
              description: "The main event where the couple is united in matrimony according to tradition."
          },
          {
              title: "Reception",
              description: "A grand celebration with family and friends to conclude the wedding festivities."
          }
      ]
  },
  hi: {
      title: "हमारी शादी",
      homeTitle: "हमारी शादी में आपका स्वागत है",
      homeContent: "कश्मीरी पंडित और राजपूत संस्कृतियों की परंपराओं के साथ हमारे संघ का जश्न मनाने में हमारा साथ दें।",
      links: {
          home: "मुख पृष्ठ",
          rituals: "अनुष्ठान",
          photos: "तस्वीरें",
          travel: "यात्रा",
          guestbook: "अतिथि पुस्तक",
          music: "संगीत"
      },
      events: [
          {
              title: "सगाई",
              description: "परिवारों के बीच औपचारिक समझौता, जो शादी की तैयारियों की शुरुआत को चिह्नित करता है।"
          },
          {
              title: "मेहंदी",
              description: "दुल्हन के हाथों और पैरों पर जटिल मेंहदी डिजाइन बनाए जाते हैं।"
          },
          {
              title: "संगीत",
              description: "संगीत और नृत्य की एक रात, जो आगामी शादी का जश्न मनाती है।"
          },
          {
              title: "शादी समारोह",
              description: "मुख्य कार्यक्रम जहां जोड़े को परंपरा के अनुसार विवाह में बांधा जाता है।"
          },
          {
              title: "रिसेप्शन",
              description: "शादी की गतिविधियों का समापन करने के लिए परिवार और दोस्तों के साथ एक भव्य उत्सव।"
          }
      ]
  }
};

function setLanguage(lang) {
  document.getElementById('title').textContent = content[lang].title;
  document.getElementById('home-title').textContent = content[lang].homeTitle;
  document.getElementById('home-content').textContent = content[lang].homeContent;
  document.getElementById('home-link').textContent = content[lang].links.home;
  document.getElementById('rituals-link').textContent = content[lang].links.rituals;
  document.getElementById('photos-link').textContent = content[lang].links.photos;
  document.getElementById('travel-link').textContent = content[lang].links.travel;
  document.getElementById('guestbook-link').textContent = content[lang].links.guestbook;
  document.getElementById('music-link').textContent = content[lang].links.music;

  const timelineContainer = document.querySelector('.timeline');
  timelineContainer.innerHTML = '';
  content[lang].events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;
      timelineContainer.appendChild(eventElement);
  });
}

// Set default language to English
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
});
