class CellSelect {

  static start() {
    this.getTable();
    this.getForm();
  }
  // default values
  static params = {
    number: 1,
    defaultCellColor: '#f00505',
    fontStyle: 'italic',
    fontColor: '#0905f0',
    selectCellColor: '#ffffff',
  };
  static form = null;
  static nodeListTd = [];
  // get dom-elements
  static getForm() {
    this.form = document.getElementById('form');
    this.form.addEventListener('submit', (e) => this.onSubmitHandler(e));
  }

  static getTable() {
    const { number, defaultCellColor, fontStyle, fontColor } = this.params;
    this.nodeListTd = document.querySelectorAll('#table td');
    this.nodeListTd[0].style.background = defaultCellColor;
    this.nodeListTd[0].textContent = number;
    this.nodeListTd[0].style.color = fontColor;
    this.nodeListTd[0].style.fontStyle = fontStyle;
  }
  // set selected params
  static setParamsTd(selectNumber, selectColor) {
    const { fontStyle, fontColor, selectCellColor } = this.params;
    this.nodeListTd.forEach((td, index) => {
      if (++index === +selectNumber) {
        td.style.background = selectCellColor;
        td.textContent = selectNumber;
        td.style.color = fontColor;
        td.style.fontStyle = fontStyle;
      } else {
        td.style.background = selectColor;
        td.textContent = '';
      }
    });
  }
  // submit form
  static onSubmitHandler(e) {
    e.preventDefault();
    const number = this.form['number'].value;
    const color = this.form['color'].value;
    this.setParamsTd(number, color);
  }
}

//
CellSelect.start();

