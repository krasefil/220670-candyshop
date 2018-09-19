'use strict';

var nameAssort = ['Чесночные сливки','Огуречный педант','Молочная хрюша','Грибной шейк','Баклажановое безумие',
            'Паприколу итальяно','Нинзя-удар васаби','Хитрый баклажан','Горчичный вызов','Кедровая липучка',
            'Корманный портвейн','Чилийский задира','Беконовый взрыв','Арахис vs виноград','Сельдерейная душа',
            'Початок в бутылке','Чернющий мистер чеснок','Раша федераша','Кислая мина','Кукурузное утро',
            'Икорный фуршет','Новогоднее настроение','С пивком потянет','Мисс креветка','Бесконечный взрыв',
            'Невинные винные','Бельгийское пенное','Острый язычок'];
var picture = ['gum-cedar', 'gum-chile','gum-eggplant','gum-mustard',
               'gum-portwine','gum-wasabi','ice-cucumber','ice-eggplant','ice-garlic',
               'ice-italian','ice-mushroom', 'ice-pig', 'marmalade-beer',
                'marmalade-caviar', 'marmalade-corn', 'marmalade-new-year','marmalade-sour',
                'marshmallow-bacon','marshmallow-beer', 'marshmallow-shrimp', 'marshmallow-spicy',
                'marshmallow-wine','soda-bacon','soda-celery','soda-cob','soda-garlic',
                'soda-peanut-grapes', 'soda-russian'];
var contents = ['молоко','сливки','вода','пищевой краситель','патока','ароматизатор бекона','ароматизатор свинца',
               'ароматизатор дуба, идентичный натуральному','ароматизатор картофеля','лимонная кислота','загуститель',
               'эмульгатор','консервант: сорбат калия','посолочная смесь: соль, нитрит натрия','ксилит','карбамид',
               'вилларибо','виллабаджо'];
var energy = randomInteger(70, 500);

function showSostav () {
  var startIndex = randomInteger(0, contents.length - 1);
  var quantity = randomInteger(startIndex, contents.length - 1);
  var prop = contents[startIndex];
  for (var i = startIndex + 1 ; i <= quantity; i++) {
      prop += ', ' + contents[i] ;}
  prop += '.';
  return prop;
};

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

document.querySelector('.catalog__cards').classList.remove('catalog__cards--load');
document.querySelector('.catalog__load').classList.add('visually-hidden');

var createCard = function () {
    var card = document.querySelector('#card').cloneNode(true).content;
    var img = card.querySelector('.card__img');
    img.src = 'img/cards/' + picture[randomInteger(0,picture.length - 1)] + '.jpg';
    card.querySelector('.catalog__card').classList.remove('card--in-stock');

    var searchCard = card.querySelector('.catalog__card');
    var amount = randomInteger(0, 20);
    if (amount === 0) {
      searchCard.classList.add('card--soon');
    } else if (amount < 5) {
        searchCard.classList.add('card--little');
    } else  {
        searchCard.classList.add('card--in-stock');
    };


    var cardName =card.querySelector('.card__title').textContent = nameAssort[randomInteger(0,nameAssort.length - 1)];

    var price = randomInteger(110, 1500);
    var weight = randomInteger(30, 300);
    card.querySelector('.card__price').innerHTML = price + ' <span class="card__currency">₽</span><span class="card__weight">' + '/ ' + weight + ' Г</span>';

    card.querySelector('.stars__rating').classList.remove('stars__rating--five');
    var value = randomInteger(1, 5);
    var searchStar = card.querySelector('.stars__rating');
    if ( value === 1) {
        searchStar.classList.add('stars__rating--one');
    } else if (value === 2) {
        searchStar.classList.add('stars__rating--two');
    } else if (value === 3) {
        searchStar.classList.add('stars__rating--three');
    } else if (value === 4) {
        searchStar.classList.add('stars__rating--four');
    } else {
        searchStar.classList.add('stars__rating--five');
    };

    var number = Math.round(randomInteger(10, 900));
    card.querySelector('.star__count').textContent = '(' + number + ')';

    var sugar = randomInteger(true, false);
    sugar === 1? card.querySelector('.card__characteristic').innerHTML = '<p>Без сахара</p>' :
    card.querySelector('.card__characteristic').textContent = 'Содержит сахар';


    card.querySelector('.card__composition-list').textContent = showSostav();

    return card;

};


var cardList = document.querySelector('.catalog__cards');
function cloneCard () {
  for (var i = 0; i < 26; i++) {
  var cardItem = createCard();
  cardList.appendChild(cardItem);
  }
};

cloneCard();


var goodsCatalogCards = document.querySelector('.goods__cards').classList.remove('goods__cards--empty');
var goodsCatalogLoad = document.querySelector('.goods__card-empty').classList.add('visually-hidden');

var createCardOrder = function () {
    var cardOrder = document.querySelector('#card-order').cloneNode(true).content;
    var img = cardOrder.querySelector('.card-order__img');
    img.src = 'img/cards/' + picture[randomInteger(0,picture.length - 1)] + '.jpg';

    var cardName =cardOrder.querySelector('.card-order__title').textContent = nameAssort[randomInteger(0,nameAssort.length - 1)];

    var price = randomInteger(110, 1500);
    cardOrder.querySelector('.card-order__main').innerHTML = price + ' <span class="card-order__price">₽</span>';

    return card;

};

function cloneCardOrder () {
  for (var i = 0; i < 3; i++) {
  var cardList = document.querySelector('.goods__cards');
  var cardItem = createCardOrder();
  cardList.appendChild(cardItem);
  }
};
cloneCardOrder ();
