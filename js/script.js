const tabs = document.querySelectorAll('.calculator__tab');
const blocks = document.querySelectorAll('.calculator-block');

const tabsChange = () => {
  tabs.forEach ((tab, i) => {
    tab.addEventListener('click', () => {
      if (!tab.matches('.active')) {
        tabs.forEach(tab => {
          tab.classList.remove('active');
          blocks.forEach(block => {
            block.classList.remove('active');
          })
        });
        blocks[i].classList.add('active');
        tab.classList.add('active');
      }
    });
  });
};
tabsChange();