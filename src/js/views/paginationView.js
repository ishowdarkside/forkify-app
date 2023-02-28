import View from './View.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      //znaci ovaj piece of code uzima atribut koji stoji na divu i calluje funkciju sa tim brojem
      //i svaki novogenerisani div ce imati div sa datasetom taj broj + 1 i onda ce opet goToPage imati
      //vrijednost veceg broja za 1

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    console.log(this._data);
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1 and there are other pages
    if (currPage === 1 && numPages > 1) {
      return `<button data-goto="${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${currPage}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //page 1 and there are no other pages
    //last page

    if (currPage === numPages && numPages > 1) {
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>`;
    }
    //other page

    if (currPage < numPages) {
      return `<button data-goto="${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>
    <button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${currPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    return '';
  }
}

export default new PaginationView();
