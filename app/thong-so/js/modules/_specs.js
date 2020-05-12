import { pageListener } from './utils';
export default class Specs {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    this.$phoneSelection = $('.phones-selection');
    this.$phoneColorImg = this.$phoneSelection.find('.phone-color-layout .phone-list .phone-item');
    this.$phoneColorItem = this.$phoneSelection.find('.phone-color-layout .color-indicator .color-item');

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.SelectPhoneColorSetup();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  SelectPhoneColorSetup() {
    this.allowChangeColor = true;

    this.$phoneColorItem.on('click', (e) => {
      if(this.allowChangeColor){
        this.allowChangeColor = false;
        let $clickItem = null
        if($(e.target).parents('.color-item').length > 0){
          $clickItem = $(e.target).parents('.color-item')
        } else {
          $clickItem = $(e.target);
        }
        if(!$clickItem.hasClass('active')){
          let switchTarget = $clickItem.data('target-item');
          let $switchPhone = $('.phone-color-layout .phone-item.' + switchTarget);

          this.$phoneColorItem.removeClass('active');
          this.$phoneColorImg.removeClass('active');
          $clickItem.addClass('active');
          $switchPhone.addClass('active');

          setTimeout(() => { this.allowChangeColor = true; }, 150)
        }
      }
    })
  }
}