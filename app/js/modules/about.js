export default class About {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor() {
    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents() {
    this.SetupAbout();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  SetupAbout() {
    this.SetupHistorySlider();
  }

  SetupHistorySlider() {
    this.historySwiper = new Swiper(".timeline-holder", {
      slidesPerView: 4,
      slidesPerGroup: 2,
      speed: 550,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: ".history-pagination",
        type: "bullets",
      },
    });
  }
}
