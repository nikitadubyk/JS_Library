# JS_Library

# Оглавление
1. [Быстрый старт](https://github.com/nikitadubyk/JS_Library/#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82)
2. [Поиск и общение с элементами](https://github.com/nikitadubyk/JS_Library/#%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BC)
3. [Готовые компоненты](https://github.com/nikitadubyk/JS_Library/#%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B)
   * [DropDown Menu](https://github.com/nikitadubyk/JS_Library/new/#dropdown-menu)
   * [Компонент модального окна и карточки товара](https://github.com/nikitadubyk/JS_Library/#%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82-%D0%BC%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BE%D0%BA%D0%BD%D0%B0-%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%B5%D0%BA-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B0)
   * [Создание модального окна](https://github.com/nikitadubyk/JS_Library/#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BC%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BE%D0%BA%D0%BD%D0%B0)
   * [Слайдер](https://github.com/nikitadubyk/JS_Library/#%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80)
   * [Аккардион](https://github.com/nikitadubyk/JS_Library/#%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80)
   * [Табы](https://github.com/nikitadubyk/JS_Library/#%D1%82%D0%B0%D0%B1%D1%8B)
4. [Отступы](https://github.com/nikitadubyk/JS_Library/#%D0%BE%D1%82%D1%81%D1%82%D1%83%D0%BF%D1%8B)
5. [Отображение и расположение элементов](https://github.com/nikitadubyk/JS_Library/#%D0%BE%D1%82%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2)
6. [Текст](https://github.com/nikitadubyk/JS_Library/#%D1%82%D0%B5%D0%BA%D1%81%D1%82)
7. [Размеры](https://github.com/nikitadubyk/JS_Library/#%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B)

# Быстрый старт
Все компоненты данной библиотеки используют для работы JavaScript и CSS с готовыми стилями. Скачайте script.js и style.css из папки dist и поместите их в свой проект.
Подключение JS: <br>
`<script src='script.js'></script>`

В конце страницы html вставьте данный код для подключения скрипта.
Подключение CSS: <br>
При необходимости подключите стили в head
`<link rel="stylesheet" href="style.css">`

Супер! Теперь вы можете использовать библиотеку в своих проектах!

# Поиск и обращение к элементам
Синтаксис библиотеки специально разработан для выбора элементов HTML и выполнения некоторых действий с элементом (ами).

Базовый синтаксис: $ (селектор) .action ()

Знак $ для определения / доступа к библиотеки, а (селектор) для "запроса (или поиска)" HTML-элементов

# Готовые Компоненты
### DropDown Menu
Для использования необходимо вставить код в html.  Оберните свой dropdown в оболочку с классом .dropdown. Важная информация для правильной работы меню, идентификатор кнопки и data-атрибут у меню должны быть одинаковыми.

````
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
        <a href="#" class="dropdown-item">Link 1</a>
        <a href="#" class="dropdown-item">Link 2</a>
        <a href="#" class="dropdown-item">Link 3</a>
    </div>
</div>
````
Далее в файле script.js необходимо произвести инициализацию меню. Для этого получите оболочку .dropdown и вызовите метод dropdown()
````
$('.dropdown-toggle').dropdown();
````
### Компонент модального окна и карточек товара
Для использования необходимо вставить код в html. Оберните карточку в класс .goods. Внутри вы можете поменять картинку, заголовок, описание и кнопку, при нажатии которой всплывает модальное окно с id указанным в data-target. Обязательно нужно ставить # перед id. Также необходимо указать data-toggle = ‘modal’
````
<div class="goods d-flex f-space-around">
    <div class="card">
        <img class="card-img" src="https://avatarko.ru/img/kartinka/14/multfilm_13267.jpg" alt="photo">
        <div class="card-body">
            <h5 class="card-title">Card Title #2</h5>
            <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum sit exercitationem facilis natus</p>
            <a href="#" class="btn btn-primary card-btn" data-toggle="modal" data-target="#exampleModal2">Link to</a>
        </div>
    </div>
</div>
````

### Создание модального окна
Оберните модальное окно в класс .modal и задайте ему уникальный id. Внутри вы можете менять заголовок, текст и кнопки.
````
<div class="modal" id="exampleModal2">
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close><span>&times;</span></button>
            <div class="modal-header">
                <div class="modal-title">Modal Title #2</div>
            </div>
            <div class="modal-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam saepe laborum a consequuntur voluptates neque vel alias in exercitationem</div>
            <div class="modal-footer">
                <button class="btn btn-danger" data-close>Close</button>
                <button class="btn btn-success">Save</button>
            </div>
        </div>
    </div>
</div>
````
Для работы с модальным окном в основном файле js найдите все модальные окна с data-toggle = ‘modal’ и вызовите метод modal()
````
$('[data-toggle="modal"]').modal(); 
````
Для **динамического создания** модального окна, вы можете добавить обработчик события на необходимую кнопку и вызвать метод createModal и в качестве настроек передать необходимые значения. Вот пример:
````
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Тест');
                }
            ]
        ]
    }
}));
````

### Слайдер
Для создания слайдера необходимо вставить html код в нужную часть вашего проекта. Задайте слайдеру уникальный идентификатор, добавьте необходимое количество изображение и индикаторов (.carousel-indicators). Также индикатору необходимо задать data атрибут (data-slide-to) с позицией слайда, к которому он будет перелистывать.
```` 
<div class="carousel" id="example">
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
            <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1519478224231-4f91b359198b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img">
            </div>
            <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1629810082983-866e626b6418?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80" alt="img">
            </div>
            <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img">
            </div>
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide='prev'>
        <span class="carousel-prev-icon">&lt;</span>
    </a>
    <a href="#" class="carousel-next" data-slide='next'>
        <span class="carousel-next-icon">&gt;</span>
    </a>
</div>
````
### Аккордеон
Для использования аккордеона необходимо поместить html шаблон в нужную часть вашего проекта. Заметите текст на нужный.
````
<div class="accordion">
    <div class="accordion-heading"><span>Accodrion Header #1</span></div>
    <div class="accordion-block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt tenetur nemo est voluptatum incidunt possimus similique maxime unde, quis aut, tempora delectus. Aliquam excepturi accusantium tempora alias sunt omnis!
    </div>
    <div class="accordion-heading"><span>Accodrion Header #2</span></div>
    <div class="accordion-block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt tenetur nemo est voluptatum incidunt possimus similique maxime unde, quis aut, tempora delectus. Aliquam excepturi accusantium tempora alias sunt omnis!
    </div>
    <div class="accordion-heading"><span>Accodrion Header #3</span></div>
    <div class="accordion-block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt tenetur nemo est voluptatum incidunt possimus similique maxime unde, quis aut, tempora delectus. Aliquam excepturi accusantium tempora alias sunt omnis!
    </div>
    <div class="accordion-heading"><span>Accodrion Header #4</span></div>
    <div class="accordion-block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt tenetur nemo est voluptatum incidunt possimus similique maxime unde, quis aut, tempora delectus. Aliquam excepturi accusantium tempora alias sunt omnis!
    </div>
</div>
````
### Табы
Для использования табов необходимо поместить html шаблон в нужную часть вашего проекта. Заметите текст на нужный. В .tab-panel можно размещать готовый компонент drop-down меню.
````
<div class="tab">
    <div class="tab-panel" data-tabpanel>
        <div class="tab-item tab-item--active">Content 1</div>
        <div class="tab-item">Content 2</div>
        <div class="tab-item">Content 3</div>
    </div>
    <div class="tab-content tab-content--active">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum, optio omnis fuga saepe voluptate culpa illum iste necessitatibus magni, tenetur at maiores nobis, maxime dolorem delectus aspernatur suscipit facilis?
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptate nemo deleniti odio blanditiis sit asperiores quas facere vel laudantium quibusdam molestias, esse quo consectetur fugit iusto dolorem repellat.
    </div>
    <div class="tab-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum, optio omnis fuga saepe voluptate culpa illum iste necessitatibus magni, tenetur at maiores nobis, maxime dolorem delectus aspernatur suscipit facilis?
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptate nemo deleniti odio blanditiis sit asperiores quas facere vel laudantium quibusdam molestias, esse quo consectetur fugit iusto dolorem repellat.
    </div>
    <div class="tab-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatum, optio omnis fuga saepe voluptate culpa illum iste necessitatibus magni, tenetur at maiores nobis, maxime dolorem delectus aspernatur suscipit facilis?
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat voluptate nemo deleniti odio blanditiis sit asperiores quas facere vel laudantium quibusdam molestias, esse quo consectetur fugit iusto dolorem repellat.
    </div>
</div>
````

# Отступы
Как это работает? <br>
Для быстрого и удобного добавления отступов margin и padding используются специальные классы в CSS.
| Класс | Значение |
| ----- |:--------:|
| .m10| margin: 10px|
| .m20 | margin: 20px |
| .mt-10 | margin-top: 10px |
| .mt-20 | margin-top: 20px |
| .mr-10 | margin-right: 10px |
| .mr-20 | margin-right: 20px |
| .ml-10 | margin-left: 10px |
| .ml-20 | margin-left: 20px |
| .mb-10 | margin-bottom: 10px |
| .mb-20 | margin-bottom: 20px |

И так далее. Для padding используется сокращения pt, pb, p. Просто добавьте в поле классов нужный вам отступ: 
````
<button class="btn btn-primary m20" id="first">Text example</button>
````

# Отображение и расположение элементов
Изменяйте свойство display при помощи быстрых и удобных классов. Вы можете комбинировать значение с другими классами для достижения желаемого расположения элемента.
| Класс | Значение |
| ----- |:--------:|
| .d-flex | display: flex |
| .d-block | display: block |
| .d-non | display: none |

Например:
````
<div class="goods d-flex f-space-around"></div>
````
Также существуют классы для расположения элементов, которые имеют **display: flex**
| Класс | Значение |
| ----- |:--------:|
| .f-centered | align-items: center, justify-content: center |
| .f-space-around | align-items: center, justify-content: space-around |
| f-space-between | align-items: center, justify-content: space- between |

Для изменения свойства **visible**:
| Класс | Значение |
| ----- |:--------:|
| .hidden | скрывает элемент с страницы |
| .visible | отображает элемент на странице |

# Текст
Текст
Легко выравнивайте текст в центр при помощи класса .text-center.
Изменяйте размер шрифта и его толщину на нужный:
````
.fz-16, .fz-20, .fz-24, .fz-26, .fz-28, .fz-30 – устанавливает размер шрифта <br>
.bold, .thin, .italic – устанавливают толщину шрифта
````

# Размеры
С помощью утилит ширины и высоты вы сможете легко создать элемент нужного размера.

| Класс        | Что делает |
| ------------- |:-------------:|
| .w-100     | ширина 100% по отношению к родительскому элементу |
| .w-50     | ширина 50% по отношению к родительскому элементу |
| .w-300 | ширина 300px |
| .w-500 | ширина 500px |
| .h-100 | высота 100% по отношению к родительскому элементу |
| .h-50 | высота 50% по отношению к родительскому элементу |
| .h-300 | высота 300px |
| .h-500 | высота 500px |
