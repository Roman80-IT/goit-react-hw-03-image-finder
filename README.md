# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого
застосунку дивись за посиланням.

Створи компоненти `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
`<Loader>`, `<Button>` і `<Modal>`. Готові стилі компонентів можна взяти у файлі
`styles.css` і підправити під себе, якщо потрібно.

## Інструкція Pixabay API

Зареєструйся та отримай приватний ключ доступу. Для HTTP-запитів використовуй
публічний сервіс пошуку зображень Pixabay.

URL-рядок HTTP-запиту.

`https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`

Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1.
Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі per_page. Не
забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення
page до 1.

У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- id - унікальний ідентифікатор
- webformatURL - посилання на маленьке зображення для списку карток
- largeImageURL - посилання на велике зображення для модального вікна

## Опис компонента `<Searchbar>`

Компонент приймає один проп `onSubmit` – функцію для передачі значення інпута
під час сабміту форми. Створює DOM-елемент наступної структури.

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## Опис компонента <ImageGallery>

Список карток зображень. Створює DOM-елемент наступної структури.

```html
<ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul>
```

## Опис компонента <ImageGalleryItem>

Компонент елемента списку із зображенням. Створює DOM-елемент наступної
структури.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## Опис компонента <Button>

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція
зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише
тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.

## Опис компонента <Loader>

Компонент спінера відображається, доки відбувається завантаження зображень.
Використовуйте будь-який готовий компонент, наприклад
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) або
будь-який інший.

## Опис компонента <Modal>

Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним
оверлеєм і відображатися велика версія зображення. Модальне вікно повинно
закриватися по натисканню клавіші `ESC` або по кліку на оверлеї.

Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість
білого модального вікна рендериться зображення (у прикладі натисніть `Run`).
Анімацію робити не потрібно!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```

# Виконання

## Настанови ментора

Вся основна логіка повинна бути в **`Арр`**. Для запиту використовуємо метод
життєвого циуклу класового компонента `componentDidUpdate`. Робити запит на
бекенд потрібно в **`Арр`**, достатньо однієї умови для запиту:

```jsx
componentDidUpdate(prevProps, prevState){ if(this.state.page !==
prevState.page || this.state.query!== prevState.query ){ fetch() } }
```

Функція для запиту повинна бути в окремому файлі, в **`Арр`** її лише
викликаємо. Коли на бекенді закінчилися фото, приховуємо кнопку `“Load more”`.
Для перевірки можна використовувати слова для пошуку `“min” “max”`. Один із
варіантів реалізації приховування кнопки `“Load more”`

```jsx
this.steState(prev => ({
  images: [...prev.images, ...hits],
  loadMore: this.state.page < Math.ceil(totalHits / 12),
}));
```

Не забуваємо коректно опрацьовувати слухача для клавіатури в компоненті
модального вікна.

## Installation

Після виконнання команди `npm i` є такі помилки:

```
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
```

Ці помилки пов'язані з застарілими версіями пакетів, які використовуються в
проекті. Для виправлення цих помилок слід оновити пакети до актуальних версій.

Для оновлення `source-map-resolve` виконуємо команду:

```
npm install source-map-resolve@latest --save-dev
```

Для оновлення `svgo` виконуємо команду:

```
npm install svgo@latest --save-dev
```

### Підключення нормалайзеру (найоптимальніший варіант)

https://cdnjs.com/libraries/modern-normalize

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css"
  integrity="sha512-4xo8blKMVCiXpTaLzQSLSw3KFOVPWhm/TRtuPVc4WG6kUgjH6J03IBuG7JZPkcWMxJ5huwaBpOpnwYElP/m6wg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

вставимо код в **index.html**

### Встановимо Styled Components:

`npm install styled-components`

є такі помилки:

```
npm WARN deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.

npm WARN deprecated @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
```

Оновимо залежності Babel:

```
npm update @babel/core @babel/preset-env
```

### axios:

[https://axios-http.com](https://axios-http.com/ru/docs/intro)

Встановлення:

```
$ npm install axios
```

### react-loader-spinner

[https://react-loader-spinner](https://github.com/mhnpd/react-loader-spinner)
[https://react-loader-spinner/color-ring](https://mhnpd.github.io/react-loader-spinner/docs/components/color-ring)

```
npm install react-loader-spinner --save
```

### pixabay

https://pixabay.com/api/docs/
[https://pixabay.com/](https://pixabay.com/api/docs/)

Реєстрація: https://pixabay.com/ru/users/u_5xz6tscj6g-38932805/

```
my API key: 38932805-d594196d8ad5a18d00bd574f9
```
