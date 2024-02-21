'use strict';

import { ImagesAPI } from './js/pixabay-api';
import * as renderFunctions from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const izitoastMessageOptions = {
  message: 'The search field must be filled!',
  messageColor: 'white',
  backgroundColor: 'red',
  close: false,
  position: 'topRight',
  progressBar: false,
  animateInside: false,
  timeout: 3000,
};

export const refs = {
  form: document.querySelector('.form'),
  inputSearch: document.querySelector('[type="search"]'),
  searchButton: document.querySelector('[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', fetchOnPixabayAPI);

function fetchOnPixabayAPI(evt) {
  evt.preventDefault();
  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('hidden');

  const userSearchWords = refs.inputSearch.value.trim();
  const userSearchParams = userSearchWords.split(' ').join('+');

  if (userSearchWords !== '') {
    const imagesApi = new ImagesAPI(userSearchParams);

    refs.loader.classList.remove('hidden');

    imagesApi
      .getImages()
      .then(data => {
        if (data.hits.length !== 0) {
          renderFunctions.createMarkup(data.hits);

          let galleryItem = new SimpleLightbox('.gallery a', {
            captionSelector: 'img',
            captionsData: 'alt',
            captionDelay: 250,
          });

          galleryItem.on('show.simplelightbox');
          galleryItem.refresh();

          refs.form.reset();
        } else {
          iziToast.show({
            ...izitoastMessageOptions,
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        refs.loader.classList.add('hidden');
        refs.form.reset();
      });
  } else {
    refs.loader.classList.add('hidden');
    iziToast.show(izitoastMessageOptions);
  }
}
