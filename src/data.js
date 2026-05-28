export const FLOORS_DATA = [
  {
    id: 'inst_f1',
    name: 'Этаж 1 институт',
    title: 'Этаж 1',
    image: 'img/FirstFloor.svg',
    legend: [
      { icon: 'icons/FirstIcons/Clothes.svg', label: 'Гардероб' },
      { icon: 'icons/FirstIcons/Toilet.svg', label: 'Туалеты' },
      { icon: 'icons/FirstIcons/Cafe.svg', label: 'Бистро "Апельсин"' },
      { icon: 'icons/FirstIcons/Stolovaya.svg', label: 'Столовая "Ариадна"' },
      { icon: 'icons/FirstIcons/Biblioteka.svg', label: 'Библиотека' },
      { icon: 'icons/FirstIcons/Pencil.svg', label: 'Канцелярия' },
      { icon: 'icons/FirstIcons/Voenkom.svg', label: 'Специалист по военкомату' },
      { icon: 'icons/FirstIcons/StudyOffice.svg', label: 'Учебный отдел' },
      { icon: 'icons/FirstIcons/Ohrana.svg', label: 'Отдел безопасности' },
      { icon: 'icons/FirstIcons/Deans.svg', label: 'Деканат' },
    ],
    rooms: [
      { id: '107', number: '107', name: 'Кабинет 107', description: 'Специалист по воинскому учёту', x: 74, y: 86, icon: 'icons/FirstIcons/Voenkom.svg', size: 'sm', staff: [ { role: "Специалист по воинскому учёту", name: "Чиркова Марина Владимировна", roomLabel: "107 каб.", phone: "+7 (950) 741-77-12", photo: "photos/FirstFloor/Chirkova.svg" } ] },
      { id: 'Clothes', number: '', name: 'Гардероб', description: 'Здесь можно оставить верхнюю одежду', x: 71, y: 68, icon: 'icons/FirstIcons/Clothes.svg', size: 'sm' },
      { id: 'Cafe', number: '', name: 'Бистро "Апельсин"', description: 'Здесь можно перекусить', x: 40, y: 70, icon: 'icons/FirstIcons/Cafe.svg', size: 'sm' },
      { id: 'Stolovaya', number: '', name: 'Столовая "Ариадна"', description: 'Здесь можно перекусить', x: 15, y: 60, icon: '/public/icons/FirstIcons/Stolovaya.svg', size: 'sm' },
      { id: '109', number: '109', name: 'Деканат', description: 'Деканат МИДиС', x: 86, y: 86, icon: 'icons/FirstIcons/Deans.svg', size: 'sm', staff: [ { role: "Заведующий отделением заочного обучения", name: "Блудова Анна Георгиевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-18", photo: "photos/FirstFloor/Bludova.jpg" }, { role: "Специалист по учебно-методической работе (кафедры математики и информатики, кафедры экономики и управления)", name: "Демакова Инна Игоревна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-09", photo: "photos/FirstFloor/Demakova.jpg" }, { role: "Специалист по учебно-методической работе (кафедры гостеприимства и международных бизнес-коммуникаций)", name: "Казанцева Ольга Юрьевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-26", photo: "photos/FirstFloor/Kazantseva.jpg" }, { role: "Ведущий специалист учебно-методического управления", name: "Кравченко Марина Алексеевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-18", photo: "photos/FirstFloor/Kravchenko.jpg" } ] },
      { id: 'Canz', number: '', name: 'Канцелярия', description: 'Магазин канцелярских предметов', x: 76, y: 23, icon: 'icons/FirstIcons/Pencil.svg', size: 'sm' },
      { id: '111', number: '111', name: 'Учебный отдел', description: 'Учебно-методический отдел', x: 90, y: 78, icon: 'icons/FirstIcons/StudyOffice.svg', size: 'sm', staff: [ { role: "Диспетчер УМУ", name: "Докучаева Полина Алексеевна", roomLabel: "111 каб.", phone: "", photo: "photos/FirstFloor/Dokuchaeva.jpg" }, { role: "Диспетчер УМУ", name: "Боровинских Наталья Владимировна", roomLabel: "111 каб.", phone: "", photo: "photos/FirstFloor/Borovinskih.jpg" }, { role: "Начальник учебно-методического управления", name: "Михалина Алёна Владимировна", roomLabel: "111 каб.", phone: "+7 (351) 216-10-38", photo: "photos/FirstFloor/Mihalina.jpg" } ] },
      { id: 'WC1', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 35, y: 66, icon: 'icons/FirstIcons/Toilet.svg', size: 'sm' },
      { id: 'WC2', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 27, y: 66, icon: 'icons/FirstIcons/Toilet.svg', size: 'sm' },
      { id: 'WC3', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 69, y: 15, icon: 'icons/FirstIcons/Toilet.svg', size: 'sm' },
      { id: '104', number: '104', name: 'Отдел безопасности', description: 'Отдел безопасности МИДиС', x: 35, y: 86, icon: 'icons/FirstIcons/Ohrana.svg', size: 'sm' },
      { id: 'Book', number: '122', name: 'Библиотека', description: 'Здесь можно взять любой учебный материал', x: 40, y: 35, icon: 'icons/FirstIcons/Biblioteka.svg', size: 'sm', staff: [ { role: "Заведующая библиотекой", name: "Сигитова Юлия Николаевна", roomLabel: "122 каб.", phone: "+7 (351) 216-10-19", photo: "photos/FirstFloor/Sigitova.png" } ] },
    ]
  },
  {
    id: 'inst_f2',
    name: 'Этаж 2 институт',
    title: 'Этаж 2',
    image: '/public/img/SecondFloor.svg',
    legend: [
      { icon: '/public/icons/SecondIcons/Toilet.svg', label: 'Туалеты' },
      { icon: '/public/icons/SecondIcons/Arrow.svg', label: 'Переход в школу' },
      { icon: '/public/icons/SecondIcons/kassa.svg', label: 'Касса' },
      { icon: '/public/icons/SecondIcons/Accounting.svg', label: 'Бухгалтерия' },
      { icon: '/public/icons/SecondIcons/Rector.svg', label: 'Приемная ректора' },
      { icon: '/public/icons/SecondIcons/Vospitatel.svg', label: 'Воспитательный отдел' },
      { icon: '/public/icons/SecondIcons/Science.svg', label: 'Проректор по научной работе' },
      { icon: '/public/icons/SecondIcons/Director.svg', label: 'Проректор по учебно-проектной работе' },
      { icon: '/public/icons/SecondIcons/IT.svg', label: 'Кафедра математики и информатики' },
      { icon: '/public/icons/SecondIcons/Travel.svg', label: 'Кафедра туризма и сервиса, Кафедра гостеприимства и коммуникаций' },
      { icon: '/public/icons/SecondIcons/Business.svg', label: 'Проректор по развитию бизнес коммуникаций' },
    ],
    rooms: [
      { id: '205', number: '205', name: 'Касса', description: 'Здесь можно оплатить за учёбу', x: 45, y: 90, icon: '/public/icons/SecondIcons/kassa.svg', size: 'sm' },
      { id: '203', number: '203', name: 'Бухгалтерия', description: 'Бухгалтерия', x: 40, y: 87, icon: '/public/icons/SecondIcons/Accounting.svg', size: 'sm' },
      { id: '208', number: '208', name: 'Приёмная ректора', description: 'Приёмная ректора', x: 59, y: 87, icon: '/public/icons/SecondIcons/Rector.svg', size: 'sm', staff: [ { role: "Ректор", name: "Усынин Максим Валерьевич", roomLabel: "208 каб.", phone: "+7 (351) 216-10-30", photo: "/public/photos/SecondFloor/Rector.jpg" } ] },
      { id: 'WC4', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 35, y: 70, icon: '/public/icons/SecondIcons/Toilet.svg', size: 'sm' },
      { id: '209', number: '209', name: 'Проректор по воспитательной работе', description: 'Проректор по воспитательной работе/инициатив у студентов', x: 69, y: 87, icon: '/public/icons/SecondIcons/Vospitatel.svg', size: 'sm', staff: [ { role: "Проректор по воспитательной работе", name: "Истомина Александра Владиславовна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-14", photo: "/public/photos/SecondFloor/Istomina.jpg" }, { role: "Проректор по развитию студенческих инициатив", name: "Факидий Линда Евгеньевна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-13", photo: "/public/photos/SecondFloor/Fakidi.jpg" } ] },
      { id: 'To7Keys', number: '', name: 'Переход в школу', description: 'Переход в школьное здание. Территория второй обуви', x: 90, y: 18, icon: '/public/icons/SecondIcons/Arrow.svg', size: 'sm' },
      { id: '211', number: '211', name: 'Проректор по учебно-проектной работе', description: 'Проректор по учебно-проектной работе/Директор школы 7 Ключей', x: 90, y: 89, icon: '/public/icons/SecondIcons/Director.svg', size: 'sm', staff: [ { role: "Проректор по учебно-проектной работе", name: "Попова Наталья Аркадьевна", roomLabel: "211 каб.", phone: "+7 (351) 216-10-20", photo: "/public/photos/SecondFloor/Director.jpg" } ] },
      { id: '210', number: '210', name: 'Проректор по научной работе', description: 'Проректор по научной работе', x: 74, y: 87, icon: '/public/icons/SecondIcons/Science.svg', size: 'sm', staff: [ { role: "Проректор по научной работе", name: "Дегтеренко Людмила Николаевна", roomLabel: "210 каб.", phone: "+7 (351) 216-10-25", photo: "/public/photos/SecondFloor/Degterenko.png" } ] },
      { id: 'WC5', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 70, y: 14, icon: '/public/icons/SecondIcons/Toilet.svg', size: 'sm' },
      { id: '241', number: '241', name: 'Кафедра математики и информатики', description: 'Кафедра математики и информатики', x: 12, y: 41, icon: '/public/icons/SecondIcons/IT.svg', size: 'sm' },
      { id: '234', number: '234', name: 'Кафедра туризма и сервиса, Кафедра гостеприимства и коммуникаций', description: 'Кафедра туризма и сервиса, Кафедра гостеприимства и коммуникаций', x: 57, y: 25, icon: '/public/icons/SecondIcons/Travel.svg', size: 'sm', staff: [ { role: "Кафедра гостеприимства и международных бизнес-коммуникаций", name: "Кажура Игорь Игоревич", roomLabel: "234 каб.", phone: "+7 (351) 216-10-0612", photo: "/public/photos/SecondFloor/Kazhura.jpg" }, { role: "Заведующий кафедрой гостеприимства и международных бизнес-коммуникаций", name: "Василиженко Мария Валерьевна", roomLabel: "234 каб.", phone: "+7 (351) 216-10-13", photo: "/public/photos/SecondFloor/Vasilizhenko.jpg" } ] },
      { id: '222', number: '222', name: 'Проректор по развитию бизнес коммуникаций', description: 'Проректор по развитию бизнес коммуникаций', x: 76, y: 41.5, icon: '/public/icons/SecondIcons/Business.svg', size: 'sm', staff: [ { role: "Проректор по маркетингу и развитию бизнес коммуникаций", name: "Полушина Ирина Сергеевна", roomLabel: "222 каб.", phone: "+7 (351) 216-10-48", photo: "/public/photos/SecondFloor/Polushina.jpg" } ] },
    ]
  },
  {
    id: 'inst_f2_5',
    name: 'Этаж 2,5 институт',
    title: 'Этаж 2,5',
    image: '/public/img/SecondHalfFloor.svg',
    legend: [
      { icon: '/public/icons/SecondHalfIcons/Toilet.svg', label: 'Туалеты' },
      { icon: '/public/icons/SecondHalfIcons/Calc.svg', label: 'Зав. кафедры экономики и управления' },
      { icon: '/public/icons/SecondHalfIcons/Lamp.svg', label: 'Кафедра экономики и управления' },
    ],
    rooms: [
      { id: 'WC6', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 60, y: 90, icon: '/public/icons/SecondHalfIcons/Toilet.svg', size: 'sm' },
      { id: '343', number: '343', name: 'Зав. кафедры экономики и управления', description: 'Зав. кафедры экономики и управления', x: 39, y: 96, icon: '/public/icons/SecondHalfIcons/Calc.svg', size: 'sm', staff: [ { role: "Заведующий кафедрой экономики и управления", name: "Бодрова Екатерина Григорьевна", roomLabel: "343 каб.", phone: "+7 (351) 216-10-51", photo: "/public/photos/SecondFloor/Bodrova.jpg" } ] },
      { id: '345', number: '345', name: 'Кафедра экономики и управления', description: 'Кафедра экономики и управления', x: 49, y: 90, icon: '/public/icons/SecondHalfIcons/Lamp.svg', size: 'sm' },
    ]
  },
  {
    id: 'inst_f3',
    name: 'Этаж 3 институт',
    title: 'Этаж 3',
    image: '/public/img/ThirdFloor.svg',
    legend: [
      { icon: '/public/icons/ThirdIcons/Toilet.svg', label: 'Туалеты' },
      { icon: '/public/icons/ThirdIcons/Museum.svg', label: 'Музей моды' },
      { icon: '/public/icons/ThirdIcons/kist.svg', label: 'Кафедра дизайна' },
      { icon: '/public/icons/ThirdIcons/Metod.svg', label: 'Учебно-методическое управление' },
      { icon: '/public/icons/ThirdIcons/palette.svg', label: 'Заведующий кафедрой дизайна, рисунка и живописи' },
      { icon: '/public/icons/ThirdIcons/business.svg', label: 'Руководитель бизнес-центра' },
    ],
    rooms: [
      { id: '303', number: '303', name: 'Музей моды', description: 'Уникальная коллекция костюмов различных эпох', x: 24.5, y: 85, icon: '/public/icons/ThirdIcons/Museum.svg', size: 'sm' },
      { id: '305', number: '305', name: 'Кафедра дизайна', description: 'Основная база кафедры дизайна и графики', x: 33, y: 85, icon: '/public/icons/ThirdIcons/kist.svg', size: 'sm' },
      { id: 'WC7', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 55, y: 18, icon: '/public/icons/ThirdIcons/Toilet.svg', size: 'lg' },
      { id: '339', number: '339', name: 'Учебно-методическое управление', description: 'Учебно-методическое управление', x: 11, y: 55, icon: '/public/icons/ThirdIcons/Metod.svg', size: 'sm', staff: [ { role: "Специалист по учебно-методической работе (кафедры дизайна, рисунка и живописи)", name: "Швецова Надежда Сергеевна", roomLabel: "339 каб.", phone: "+7 (351) 216-10-08", photo: "/public/photos/ThirdFloor/Shvetsova.jpg" } ] },
      { id: '307', number: '307', name: 'Заведующий кафедрой дизайна, рисунка и живописи', description: 'Заведующий кафедрой дизайна, рисунка и живописи', x: 44, y: 85, icon: '/public/icons/ThirdIcons/palette.svg', size: 'sm', staff: [ { role: "Заведующий кафедрой дизайна, рисунка и живописи", name: "Одношовина Юлия Владимировна", roomLabel: "307 каб.", phone: "+7 (351) 216-10-28", photo: "/public/photos/ThirdFloor/Odnoshovina.png" } ] },
      { id: '322', number: '322', name: 'Руководитель бизнес-центра', description: 'Руководитель бизнес-центра', x: 48, y: 29, icon: '/public/icons/ThirdIcons/business.svg', size: 'sm', staff: [ { role: "Руководитель бизнес-центра", name: "Куликова Ольга Сергеевна", roomLabel: "322 каб.", phone: "+7 (351) 216-10-42", photo: "/public/photos/ThirdFloor/Kulikova.jpg" } ] },
    ]
  },
  {
    id: 'inst_f4',
    name: 'Этаж 4 институт',
    title: 'Этаж 4',
    image: '/public/img/FourthFloor.svg',
    legend: [
      { icon: '/public/icons/FourthIcons/Book.svg', label: 'СПО' },
      { icon: '/public/icons/FourthIcons/Neuro.svg', label: 'Психолог' },
      { icon: '/public/icons/FourthIcons/Mind.svg', label: 'Кафедра педагогики' },
      { icon: '/public/icons/FourthIcons/Highlighter.svg', label: 'Научно-методический отдел' },
      { icon: '/public/icons/FourthIcons/fx.svg', label: 'Зав кафедрой математики' },
    ],
    rooms: [
      { id: '401', number: '401', name: 'Зав. кафедрой математики и информатики', description: 'Зав. кафедрой математики и информатики', x: 16, y: 58, icon: '/public/icons/FourthIcons/fx.svg', size: 'lg', staff: [ { role: "Заведущий кафедрой математики и информатики", name: "Кондаков Сергей Александрович", roomLabel: "401 каб.", phone: "+7 (351) 216-10-05", photo: "/public/photos/FourthFloor/Kondakov.jpg" } ] },
      { id: '404', number: '404', name: 'Психолог', description: 'Психолог', x: 60, y: 24, icon: '/public/icons/FourthIcons/Neuro.svg', size: 'lg' },
      { id: '405', number: '405', name: 'СПО', description: 'Отдел СПО', x: 60, y: 33, icon: '/public/icons/FourthIcons/Book.svg', size: 'lg' },
      { id: '406', number: '406', name: 'Научно-методический отдел', description: 'Научно-методический отдел', x: 60, y: 46, icon: '/public/icons/FourthIcons/Highlighter.svg', size: 'lg', staff: [ { role: "Заведующий научно-методическим отделом", name: "Кокорин Сергей Александрович", roomLabel: "406 каб.", phone: "+7 (351) 216-10-50", photo: "/public/photos/FourthFloor/Kokorin.jpg" }, { role: "Заведующий отделением среднего профессионального образования", name: "Хаятова Лилия Рэхтямовна", roomLabel: "406 каб.", phone: "", photo: "/public/photos/FourthFloor/Hayatova.jpg" } ] },
      { id: '407', number: '407', name: 'Кафедра педагогики, психологии и гуманитарных дисциплин', description: 'Кафедра педагогики, психологии и гуманитарных дисциплин', x: 60, y: 63, icon: '/public/icons/FourthIcons/Mind.svg', size: 'lg' },
    ]
  },
  {
    id: 'sch_f1',
    name: 'Этаж 1 школа',
    title: 'Этаж 1 - школа',
    image: '/public/img/SchoolFirstFloor.svg',
    legend: [
      { icon: '/public/icons/SchoolFirstIcons/Girl.svg', label: 'Женская раздевалка бассейна' },
      { icon: '/public/icons/SchoolFirstIcons/Boy.svg', label: 'Мужская раздевалка бассейна' },
      { icon: '/public/icons/SchoolFirstIcons/Sauna.svg', label: 'Сауна' },
      { icon: '/public/icons/SchoolFirstIcons/Shoes.svg', label: 'Обувь' },
      { icon: '/public/icons/SchoolFirstIcons/Medic.svg', label: 'Медпункт' },
      { icon: '/public/icons/SchoolFirstIcons/Boys.svg', label: 'Мужская раздевалка спортзала' },
      { icon: '/public/icons/SchoolFirstIcons/Girls.svg', label: 'Женская раздевалка спортзала' },
    ],
    rooms: [
      { id: 'Cl1', number: '', name: 'Женская раздевалка бассейна', description: '', x: 70, y: 78, icon: '/public/icons/SchoolFirstIcons/Girl.svg', size: 'lg' },
      { id: 'Cl2', number: '', name: 'Мужская раздевалка бассейна', description: '', x: 87, y: 78, icon: '/public/icons/SchoolFirstIcons/Boy.svg', size: 'lg' },
      { id: 'Saun', number: '', name: 'Сауна', description: '', x: 94, y: 82, icon: '/public/icons/SchoolFirstIcons/Sauna.svg', size: 'lg' },
      { id: 'Shoes', number: '', name: 'Обувь', description: '', x: 87, y: 67, icon: '/public/icons/SchoolFirstIcons/Shoes.svg', size: 'lg' },
      { id: 'Med', number: '', name: 'Медпункт', description: '', x: 41, y: 95, icon: '/public/icons/SchoolFirstIcons/Medic.svg', size: 'lg' },
      { id: 'Cl3', number: '', name: 'Мужская раздевалка спортзала', description: '', x: 66, y: 53, icon: '/public/icons/SchoolFirstIcons/Boys.svg', size: 'lg' },
      { id: 'Cl4', number: '', name: 'Женская раздевалка спортзала', description: '', x: 55, y: 53, icon: '/public/icons/SchoolFirstIcons/Girls.svg', size: 'lg' },

    ]
  },
  {
    id: 'sch_f2',
    name: 'Этаж 2 школа',
    title: 'Этаж 2 - школа',
    image: '/public/img/SchoolSecondFloor.svg',
    legend: [
      { icon: '/public/icons/SchoolSecondIcons/Arrow.svg', label: 'Переход в институт' },
    ],
    rooms: [
      { id: 'ToMIDiS', number: '', name: 'Переход', description: 'Переход в здание института.', x: 41, y: 59, icon: '/public/icons/SchoolSecondIcons/Arrow.svg', size: 'lg' },
    ]
  },
  {
    id: 'sch_f3',
    name: 'Этаж 3 школа',
    title: 'Этаж 3 - школа',
    image: '/public/img/SchoolThirdFloor.svg',
    legend: [
      { icon: '/public/icons/SchoolThirdIcons/Mask.svg', label: 'Сцена' },
      { icon: '/public/icons/SchoolThirdIcons/Seat.svg', label: 'Зал' },
      { icon: '/public/icons/SchoolThirdIcons/Kulisi.svg', label: 'Кулисы' },
    ],
    rooms: [
      { id: 'Scene', number: '', name: 'Сцена', description: '', x: 73, y: 64, icon: '/public/icons/SchoolThirdIcons/Mask.svg', size: 'lg' },
      { id: 'Kulisi', number: '', name: 'Кулисы', description: '', x: 73, y: 52, icon: '/public/icons/SchoolThirdIcons/Kulisi.svg', size: 'lg' },
      { id: 'Seat', number: '', name: 'Зал', description: '', x: 73, y: 85, icon: '/public/icons/SchoolThirdIcons/Seat.svg', size: 'lg' },
    ]
  }
];
