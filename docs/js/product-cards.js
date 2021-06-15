const cardsList = document.querySelectorAll('.catalog__list-item');

const PRODUCT_DESCRIPTIONS = [
  'Odio ut sem nulla pharetra diam sit amet. Risus viverra adipiscing at in.',
  'Gravida neque convallis a cras. Ut consequat semper viverra nam libero justo laoreet sit. Nunc mattis enim ut tellus elementum sagittis vitae et leo.',
  'Eget nunc lobortis mattis aliquam faucibus purus in. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed elementum tempus egestas sed.',
  'Sed augue lacus viverra vitae congue eu consequat. Mi in nulla posuere sollicitudin aliquam. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna.',
  'Potenti nullam ac tortor vitae purus faucibus ornare. Nec dui nunc mattis enim ut tellus elementum sagittis.',
  'Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Magnis dis parturient montes nascetur ridiculus mus mauris.',
  'Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Luctus accumsan tortor posuere ac ut consequat semper viverra.',
  'In est ante in nibh. Quis eleifend quam adipiscing vitae proin. Facilisi etiam dignissim diam quis enim lobortis scelerisque.',
  'Turpis tincidunt id aliquet risus feugiat. Dui sapien eget mi proin sed libero. Pretium viverra suspendisse potenti nullam ac tortor.',
];

for(let i = 0; i < cardsList.length; i++) {
  cardsList[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    const imageSource = cardsList[i].querySelector('.catalog__list-item__img').getAttribute('src');
    const title = cardsList[i].querySelector('.catalog__list-item__description').textContent;
    const price = cardsList[i].querySelector('.catalog__list-item__price').innerHTML;

    const template = document.querySelector('#card').content;
    const productCard = template.cloneNode(true);
    const productImage = productCard.querySelector('.product-card__img');
    const productImageContainer = productCard.querySelector('.product-card__img-container');
    const productTitle = productCard.querySelector('.product-card__title');
    const productPrice = productCard.querySelector('.product-card__price');
    const closeButton = productCard.querySelector('.product-card__close-button');
    const productDescription = productCard.querySelector('.product-card__description');

    productImage.src = imageSource;
    productTitle.textContent = title;
    productDescription.textContent = PRODUCT_DESCRIPTIONS[i];
    productPrice.innerHTML = price;

    if (cardsList[i].classList.contains('catalog__list-item--new')) {
      productImageContainer.classList.add('product-card__img-container--new');
    }

    if (cardsList[i].classList.contains('catalog__list-item--sale')) {
      productImageContainer.classList.add('product-card__img-container--sale');
    }

    const main = document.querySelector('.page-main');
    const catalog = main.querySelector('.catalog');
    catalog.classList.add('muted');
    main.appendChild(productCard);

    const closeProductCardHandler = () => {
      const popup = main.querySelector('.product-card');
      main.removeChild(popup);
      catalog.classList.remove('muted');
      closeButton.removeEventListener('click', closeProductCardHandler);
      document.removeEventListener('keydown', onEscKeydown);
    }

    const onEscKeydown = (evt) => {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        closeProductCardHandler();
      }
    }

    document.addEventListener('keydown', onEscKeydown);
    closeButton.addEventListener('click', closeProductCardHandler);
  })
};
