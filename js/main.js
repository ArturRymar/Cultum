'use strict';

function init() {

  class Tags {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.tabsBlock = this.wrapper.getElementsByClassName('tabs')[0];
      this.tabs = this.wrapper.getElementsByClassName('tab');
      this.tabsContent = this.wrapper.getElementsByClassName('tabs-content');
      this.tabAccordion = this.wrapper.getElementsByClassName('tabs-accordion')[0];
      this.accordion = this.wrapper.getElementsByClassName('accordion');
      this.panel = this.wrapper.getElementsByClassName('panel');
      this.accordionBtn = this.wrapper.getElementsByClassName('accordion-btn')[0];
      this.tabsBlock.addEventListener('click', this.showTabsContent);
      this.tabAccordion.addEventListener('click', this.showAccordionContent);
      this.accordionBtn.addEventListener('click', this.changeTheme)
    };

    showTabsContent = ({target}) => {
      for (let i = 0; i < this.tabs.length; i++) {
        if (target === this.tabs[i]) {
          this.tabsContent[i].classList.toggle('show');
          this.tabs[i].classList.toggle('active-btn');
        } else {
          this.tabsContent[i].classList.remove('show');
          this.tabs[i].classList.remove('active-btn');
          this.panel[i].classList.add('hide');
          this.accordion[i].classList.remove('accordion-margin');
          this.accordion[i].classList.remove('up');
          this.accordion[i].classList.add('down');
        }
      }
    };

    showAccordionContent = ({target}) => {
      for (let i = 0; i < this.panel.length; i++)
        if (target === this.accordion[i]) {
          this.panel[i].classList.toggle('hide');
          this.accordion[i].classList.toggle('accordion-margin');
          this.accordion[i].classList.toggle('down');
          this.accordion[i].classList.toggle('up');
        }
    };

    changeTheme = () => {
      for (let i = 0; i < this.accordion.length; i++) {
        this.accordion[i].classList.toggle('theme');
        this.accordion[i].classList.toggle('changeTheme');
      }
    };
  }
  Array.from(document.getElementsByClassName('wrapper')).map(elem => new Tags(elem));
}
document.addEventListener('DOMContentLoaded',init);




