export class Section {

  /** 
   * @param items 
   * @param renderer 
   * @param containerSelector 
   */
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /**
   * @param element  */
  addItem(element){
    this._container.append(element);
  }

  /** 
   * @param element  */
  addNewItem(element){
    this._container.prepend(element);
  }

  /** */
  renderElements(items){
    this._container.innerHTML = '';
    items.forEach((element) => {
      this._renderer(element);
    });
  }

}
