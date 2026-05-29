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
      { id: '107', number: '107', name: 'Кабинет 107', x: 74, y: 86, icon: 'icons/FirstIcons/Voenkom.svg', size: 'sm', staff: [ { role: "Специалист по воинскому учёту", name: "Чиркова Марина Владимировна", roomLabel: "107 каб.", phone: "+7 (950) 741-77-12", photo: "photos/FirstFloor/Chirkova.svg" } ] },
      { id: 'Clothes', number: '', name: 'Гардероб', description: 'Здесь можно оставить верхнюю одежду', x: 71, y: 68, icon: 'icons/FirstIcons/Clothes.svg', size: 'sm' },
      { id: 'Cafe', number: '', name: 'Бистро "Апельсин"', description: 'Здесь можно перекусить', x: 40, y: 70, icon: 'icons/FirstIcons/Cafe.svg', size: 'sm', workingHours: {
          title: 'Режим работы Бистро «АПЕЛЬСИН»',
          items: [
            { days: 'Понедельник - Пятница', hours: '9:00 - 20:00', subtitle: 'Обед: 14:30 - 15:00' },
            { days: 'Суббота - Воскресенье', hours: '9:00 - 15:00' }
          ]
        } },
      { id: 'Stolovaya', number: '', name: 'Столовая "Ариадна"', description: 'Здесь можно полноценно пообедать', x: 15, y: 60, icon: 'icons/FirstIcons/Stolovaya.svg', size: 'sm', workingHours: {
          title: 'Режим работы Столовой «АРИАДНА»',
          items: [
            { days: 'Понедельник', hours: '11:00 - 17:00', subtitle: 'Спецобслуживание: 12:20 - 13:00' },
            { days: 'Вторник - Пятница', hours: '11:00 - 17:00', subtitle: 'Спецобслуживание: 12:00 - 13:00' },
            { days: 'Суббота', hours: 'Выходной', isClosed: true },
            { days: 'Воскресенье', hours: 'Выходной', isClosed: true }
          ]
        } },
      { id: '109', number: '109', name: 'Деканат', x: 86, y: 86, icon: 'icons/FirstIcons/Deans.svg', size: 'sm', staff: [ { role: "Заведующий отделением заочного обучения", name: "Блудова Анна Георгиевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-18", photo: "photos/FirstFloor/Bludova.jpg" }, { role: "Специалист по учебно-методической работе (кафедра математики и информатики, кафедра экономики и управления)", name: "Демакова Инна Игоревна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-09", photo: "photos/FirstFloor/Demakova.jpg" }, { role: "Специалист по учебно-методической работе (кафедра гостеприимства и международных бизнес-коммуникаций)", name: "Казанцева Ольга Юрьевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-26", photo: "photos/FirstFloor/Kazantseva.jpg" }, { role: "Ведущий специалист учебно-методического управления", name: "Кравченко Марина Алексеевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-18", photo: "photos/FirstFloor/Kravchenko.jpg" } ] },
      { id: 'Canz', number: '', name: 'Канцелярия', description: 'Магазин канцелярских предметов', x: 76, y: 23, icon: 'icons/FirstIcons/Pencil.svg', size: 'sm', workingHours: {
          title: 'Режим работы магазина канцелярии',
          items: [
            { days: 'Понедельник', hours: '9:00 - 16:00' },
            { days: 'Вторник', hours: '9:00 - 16:00' },
            { days: 'Среда', hours: '9:00 - 16:00' },
            { days: 'Четверг', hours: '9:00 - 16:00' },
            { days: 'Пятница', hours: '9:00 - 16:00' },
            { days: 'Суббота', hours: 'Выходной', isClosed: true },
            { days: 'Воскресенье', hours: 'Выходной', isClosed: true }
          ]
        } },
      { id: '111', number: '111', name: 'Учебный отдел', x: 90, y: 78, icon: 'icons/FirstIcons/StudyOffice.svg', size: 'sm', staff: [ { role: "Начальник учебно-методического управления", name: "Михалина Алёна Владимировна", roomLabel: "111 каб.", phone: "+7 (351) 216-10-38", photo: "photos/FirstFloor/Mihalina.jpg" }, { role: "Диспетчер УМУ", name: "Докучаева Полина Алексеевна", roomLabel: "111 каб.", phone: "", photo: "photos/FirstFloor/Dokuchaeva.jpg" }, { role: "Диспетчер УМУ", name: "Боровинских Наталья Владимировна", roomLabel: "111 каб.", phone: "", photo: "photos/FirstFloor/Borovinskih.jpg" } ] },
      { id: 'WC1', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 35, y: 66, icon: 'icons/FirstIcons/Toilet.svg', size: 'sm' },
      { id: 'WC2', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 27, y: 66, icon: 'icons/FirstIcons/Toilet.svg', size: 'sm' },
      { id: 'WC3', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 69, y: 15, icon: 'icons/FirstIcons/Toilet.svg', size: 'sm' },
      { id: '104', number: '104', name: 'Отдел безопасности', description: 'Отдел безопасности МИДиС', x: 35, y: 86, icon: 'icons/FirstIcons/Ohrana.svg', size: 'sm' },
      { id: 'Book', number: '122', name: 'Библиотека', x: 40, y: 35, icon: 'icons/FirstIcons/Biblioteka.svg', size: 'sm', staff: [ { role: "Заведующая библиотекой", name: "Сигитова Юлия Николаевна", roomLabel: "122 каб.", phone: "+7 (351) 216-10-19", photo: "photos/FirstFloor/Sigitova.jpg" } ] },
    ]
  },
  {
    id: 'inst_f2',
    name: 'Этаж 2 институт',
    title: 'Этаж 2',
    image: 'img/SecondFloor.svg',
    legend: [
      { icon: 'icons/SecondIcons/Toilet.svg', label: 'Туалеты' },
      { icon: 'icons/SecondIcons/Arrow.svg', label: 'Переход в школу' },
      { icon: 'icons/SecondIcons/kassa.svg', label: 'Касса' },
      { icon: 'icons/SecondIcons/Accounting.svg', label: 'Бухгалтерия' },
      { icon: 'icons/SecondIcons/Rector.svg', label: 'Приемная ректора' },
      { icon: 'icons/SecondIcons/Vospitatel.svg', label: 'Отдел воспитательной работы' },
      { icon: 'icons/SecondIcons/Science.svg', label: 'Проректор по научной работе' },
      { icon: 'icons/SecondIcons/Director.svg', label: 'Проректор по учебно-проектной работе' },
      { icon: 'icons/SecondIcons/IT.svg', label: 'Кафедра математики и информатики' },
      { icon: 'icons/SecondIcons/Travel.svg', label: 'Кафедра туризма и сервиса, Кафедра гостеприимства и коммуникаций' },
      { icon: 'icons/SecondIcons/Business.svg', label: 'Проректор по развитию бизнес коммуникаций' },
    ],
    rooms: [
      { id: '205', number: '205', name: 'Касса', description: 'Здесь можно оплатить за учёбу', x: 45, y: 90, icon: 'icons/SecondIcons/kassa.svg', size: 'sm' },
      { id: '203', number: '203', name: 'Бухгалтерия', description: 'Бухгалтерия', x: 40, y: 87, icon: 'icons/SecondIcons/Accounting.svg', size: 'sm' },
      { id: '208', number: '208', name: 'Приёмная ректора', x: 59, y: 87, icon: 'icons/SecondIcons/Rector.svg', size: 'sm', staff: [ { role: "Ректор", name: "Усынин Максим Валерьевич", roomLabel: "208 каб.", phone: "+7 (351) 216-10-30", photo: "photos/SecondFloor/Rector.jpg" } ] },
      { id: 'WC4', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 35, y: 70, icon: 'icons/SecondIcons/Toilet.svg', size: 'sm' },
      { id: '209', number: '209', name: 'Отдел воспитательной работы', x: 69, y: 87, icon: 'icons/SecondIcons/Vospitatel.svg', size: 'sm', staff: [ { role: "Проректор по воспитательной работе", name: "Истомина Александра Владиславовна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-14", photo: "photos/SecondFloor/Istomina.jpg" }, { role: "Проректор по развитию студенческих инициатив", name: "Факидий Линда Евгеньевна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-13", photo: "photos/SecondFloor/Fakidi.jpg" }, { role: "Специалист отдела по воспитательной работе", name: "Баталина Ольга Стефановна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-??", photo: "" } ] },
      { id: 'To7Keys', number: '', name: 'Переход в школу', description: 'Переход в школьное здание. Территория второй обуви', x: 90, y: 18, icon: 'icons/SecondIcons/Arrow.svg', size: 'sm' },
      { id: '211', number: '211', name: 'Проректор по учебно-проектной работе', x: 90, y: 89, icon: 'icons/SecondIcons/Director.svg', size: 'sm', staff: [ { role: "Проректор по учебно-проектной работе", name: "Попова Наталья Аркадьевна", roomLabel: "211 каб.", phone: "+7 (351) 216-10-20", photo: "photos/SecondFloor/Director.jpg" } ] },
      { id: '210', number: '210', name: 'Проректор по научной работе', x: 74, y: 87, icon: 'icons/SecondIcons/Science.svg', size: 'sm', staff: [ { role: "Проректор по научной работе", name: "Дегтеренко Людмила Николаевна", roomLabel: "210 каб.", phone: "+7 (351) 216-10-25", photo: "photos/SecondFloor/Degterenko.png" } ] },
      { id: 'WC5', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 70, y: 14, icon: 'icons/SecondIcons/Toilet.svg', size: 'sm' },
      { id: '241', number: '241', name: 'Кафедра математики и информатики', description: 'Преподавательская кафедры математики и информатики', x: 12, y: 41, icon: 'icons/SecondIcons/IT.svg', size: 'sm' },
      { id: '234', number: '234', name: 'Кафедра гостеприимства и международных бизнес-коммуникаций', x: 57, y: 25, icon: 'icons/SecondIcons/Travel.svg', size: 'sm', staff: [ { role: "Директор учебно-производственного комбината (Школа гастрономии и гостиничного дела)", name: "Кажура Игорь Игоревич", roomLabel: "234 каб.", phone: "+7 (351) 216-10-0612", photo: "photos/SecondFloor/Kazhura.jpg" }, { role: "Заведующий кафедрой гостеприимства и международных бизнес-коммуникаций", name: "Василиженко Мария Валерьевна", roomLabel: "234 каб.", phone: "+7 (351) 216-10-13", photo: "photos/SecondFloor/Vasilizhenko.jpg" } ] },
      { id: '222', number: '222', name: 'Кабинет 222', x: 76, y: 41.5, icon: 'icons/SecondIcons/Business.svg', size: 'sm', staff: [ { role: "Проректор по маркетингу и развитию бизнес коммуникаций", name: "Полушина Ирина Сергеевна", roomLabel: "222 каб.", phone: "+7 (351) 216-10-48", photo: "photos/SecondFloor/Polushina.jpg" } ] },
    ]
  },
  {
    id: 'inst_f2_5',
    name: 'Этаж 2,5 институт',
    title: 'Этаж 2,5',
    image: 'img/SecondHalfFloor.svg',
    legend: [
      { icon: 'icons/SecondHalfIcons/Toilet.svg', label: 'Туалеты' },
      { icon: 'icons/SecondHalfIcons/Calc.svg', label: 'Заведующий кафедры экономики и управления' },
      { icon: 'icons/SecondHalfIcons/Lamp.svg', label: 'Кафедра экономики и управления' },
    ],
    rooms: [
      { id: 'WC6', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 60, y: 90, icon: 'icons/SecondHalfIcons/Toilet.svg', size: 'sm' },
      { id: '343', number: '343', name: 'Кабинет 343', x: 39, y: 96, icon: 'icons/SecondHalfIcons/Calc.svg', size: 'sm', staff: [ { role: "Заведующий кафедрой экономики и управления", name: "Бодрова Екатерина Григорьевна", roomLabel: "343 каб.", phone: "+7 (351) 216-10-51", photo: "photos/SecondFloor/Bodrova.jpg" } ] },
      { id: '345', number: '345', name: 'Кафедра экономики и управления', description: 'Кафедра экономики и управления', x: 49, y: 90, icon: 'icons/SecondHalfIcons/Lamp.svg', size: 'sm' },
    ]
  },
  {
    id: 'inst_f3',
    name: 'Этаж 3 институт',
    title: 'Этаж 3',
    image: 'img/ThirdFloor.svg',
    legend: [
      { icon: 'icons/ThirdIcons/Toilet.svg', label: 'Туалеты' },
      { icon: 'icons/ThirdIcons/Museum.svg', label: 'Музей моды' },
      { icon: 'icons/ThirdIcons/kist.svg', label: 'Кафедра дизайна' },
      { icon: 'icons/ThirdIcons/Metod.svg', label: 'Учебно-методическое управление' },
      { icon: 'icons/ThirdIcons/palette.svg', label: 'Заведующий кафедрой дизайна, рисунка и живописи' },
      { icon: 'icons/ThirdIcons/business.svg', label: 'Руководитель бизнес-центра' },
    ],
    rooms: [
      { id: '303', number: '303', name: 'Музей моды', description: 'Уникальная коллекция костюмов различных эпох', x: 24.5, y: 85, icon: 'icons/ThirdIcons/Museum.svg', size: 'sm' },
      { id: '305', number: '305', name: 'Кафедра дизайна', description: 'Основная база кафедры дизайна и графики', x: 33, y: 85, icon: 'icons/ThirdIcons/kist.svg', size: 'sm' },
      { id: 'WC7', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 55, y: 18, icon: 'icons/ThirdIcons/Toilet.svg', size: 'lg' },
      { id: '339', number: '339', name: 'Учебно-методическое управление', x: 11, y: 55, icon: 'icons/ThirdIcons/Metod.svg', size: 'sm', staff: [ { role: "Специалист по учебно-методической работе (кафедры дизайна, рисунка и живописи)", name: "Швецова Надежда Сергеевна", roomLabel: "339 каб.", phone: "+7 (351) 216-10-08", photo: "photos/ThirdFloor/Shvetsova.jpg" } ] },
      { id: '307', number: '307', name: 'Кабинет 307', x: 44, y: 85, icon: 'icons/ThirdIcons/palette.svg', size: 'sm', staff: [ { role: "Заведующий кафедрой дизайна, рисунка и живописи", name: "Одношовина Юлия Владимировна", roomLabel: "307 каб.", phone: "+7 (351) 216-10-28", photo: "photos/ThirdFloor/Odnoshovina.png" } ] },
      { id: '322', number: '322', name: 'Руководитель бизнес-центра', x: 48, y: 29, icon: 'icons/ThirdIcons/business.svg', size: 'sm', staff: [ { role: "Руководитель бизнес-центра", name: "Куликова Ольга Сергеевна", roomLabel: "322 каб.", phone: "+7 (351) 216-10-42", photo: "photos/ThirdFloor/Kulikova.jpg" } ] },
    ]
  },
  {
    id: 'inst_f4',
    name: 'Этаж 4 институт',
    title: 'Этаж 4',
    image: 'img/FourthFloor.svg',
    legend: [
      { icon: 'icons/FourthIcons/Book.svg', label: 'Отдел СПО' },
      { icon: 'icons/FourthIcons/Neuro.svg', label: 'Психолог' },
      { icon: 'icons/FourthIcons/Mind.svg', label: 'Преподавательская кафедры психологии и гуманитарных дисциплин' },
      { icon: 'icons/FourthIcons/Highlighter.svg', label: 'Научно-методический отдел' },
      { icon: 'icons/FourthIcons/fx.svg', label: 'Заведующий кафедрой математики и информатики' },
      { icon: 'icons/FourthIcons/Office.svg', label: 'Преподавательская кафедры математики и информатики' },
    ],
    rooms: [
      { id: '401', number: '401', name: 'Кабинет 401', x: 16, y: 58, icon: 'icons/FourthIcons/fx.svg', size: 'sm', staff: [ { role: "Заведующий кафедрой математики и информатики", name: "Кондаков Сергей Александрович", roomLabel: "401 каб.", phone: "+7 (351) 216-10-05", photo: "photos/FourthFloor/Kondakov.jpg" } ] },
      { id: '404', number: '404', name: 'Психолог', x: 60, y: 24, icon: 'icons/FourthIcons/Neuro.svg', size: 'sm', staff: [ { role: "Психолог", name: "Долгих Алёна Александровна", roomLabel: "404 каб.", phone: "https://vk.ru/alena.dolgih86", photo: "photos/FourthFloor/Dolgih.jpg" } ] },
      { id: '405', number: '405', name: 'Отдел СПО', x: 60, y: 33, icon: 'icons/FourthIcons/Book.svg', size: 'sm', staff: [ { role: "Заведующий отделением среднего профессионального образования документовед", name: "Хаятова Лилия Рэхтямовна", roomLabel: "405 каб.", phone: "+7 (351) 216-10-??", photo: "photos/FourthFloor/Hayatova.jpg" } ] },
      { id: '406', number: '406', name: 'Научно-методический отдел', x: 60, y: 46, icon: 'icons/FourthIcons/Highlighter.svg', size: 'sm', staff: [ { role: "Заведующий научно-методическим отделом", name: "Кокорин Сергей Александрович", roomLabel: "406 каб.", phone: "+7 (351) 216-10-50", photo: "photos/FourthFloor/Kokorin.jpg" }, { role: "Заведующий отделением среднего профессионального образования документовед", name: "Хаятова Лилия Рэхтямовна", roomLabel: "406 каб.", phone: "+7 (351) 216-10-??", photo: "photos/FourthFloor/Hayatova.jpg" } ] },
      { id: '407', number: '407', name: 'Преподавательская кафедры психологии и гуманитарных дисциплин', description: 'Преподавательская кафедры психологии и гуманитарных дисциплин', x: 60, y: 63, icon: 'icons/FourthIcons/Mind.svg', size: 'sm' },
      { id: '408', number: '408', name: 'Преподавательская кафедры математики и информатики', x: 70, y: 78, icon: 'icons/FourthIcons/Office.svg', size: 'sm' },
    ]
  },
  {
    id: 'sch_f1',
    name: 'Этаж 1 школа',
    title: 'Этаж 1 - школа',
    image: 'img/SchoolFirstFloor.svg',
    legend: [
      { icon: 'icons/SchoolFirstIcons/Girl.svg', label: 'Женская раздевалка бассейна' },
      { icon: 'icons/SchoolFirstIcons/Boy.svg', label: 'Мужская раздевалка бассейна' },
      { icon: 'icons/SchoolFirstIcons/Sauna.svg', label: 'Сауна' },
      { icon: 'icons/SchoolFirstIcons/Medic.svg', label: 'Медпункт' },
      { icon: 'icons/SchoolFirstIcons/Boys.svg', label: 'Мужская раздевалка спортзала' },
      { icon: 'icons/SchoolFirstIcons/Girls.svg', label: 'Женская раздевалка спортзала' },
      { icon: 'icons/SchoolFirstIcons/Sport.svg', label: 'Спортзал' },
      { icon: 'icons/SchoolFirstIcons/Pool.svg', label: 'Бассейн' },
    ],
    rooms: [
      { id: 'Cl1', number: '', name: 'Женская раздевалка бассейна', x: 70, y: 78, icon: 'icons/SchoolFirstIcons/Girl.svg', size: 'sm' },
      { id: 'Cl2', number: '', name: 'Мужская раздевалка бассейна', x: 87, y: 78, icon: 'icons/SchoolFirstIcons/Boy.svg', size: 'sm' },
      { id: 'Saun', number: '', name: 'Сауна', x: 94, y: 82, icon: 'icons/SchoolFirstIcons/Sauna.svg', size: 'sm' },
      { id: 'Med', number: '', name: 'Медпункт', x: 41, y: 95, icon: 'icons/SchoolFirstIcons/Medic.svg', size: 'sm' },
      { id: 'Cl3', number: '', name: 'Мужская раздевалка спортзала', x: 66, y: 53, icon: 'icons/SchoolFirstIcons/Boys.svg', size: 'sm' },
      { id: 'Cl4', number: '', name: 'Женская раздевалка спортзала', x: 55, y: 53, icon: 'icons/SchoolFirstIcons/Girls.svg', size: 'sm' },
      { id: 'Pool', number: '', name: 'Бассейн', x: 75, y: 94, icon: 'icons/SchoolFirstIcons/Pool.svg', size: 'sm' },
      { id: 'Sport', number: '', name: 'Спортзал', x: 71, y: 15, icon: 'icons/SchoolFirstIcons/Sport.svg', size: 'sm' },

    ]
  },
  {
    id: 'sch_f2',
    name: 'Этаж 2 школа',
    title: 'Этаж 2 - школа',
    image: 'img/SchoolSecondFloor.svg',
    legend: [
      { icon: 'icons/SchoolSecondIcons/Arrow.svg', label: 'Переход в институт' },
    ],
    rooms: [
      { id: 'ToMIDiS', number: '', name: 'Переход', description: 'Переход в здание института.', x: 41, y: 59, icon: 'icons/SchoolSecondIcons/Arrow.svg', size: 'sm' },
    ]
  },
  {
    id: 'sch_f3',
    name: 'Этаж 3 школа',
    title: 'Этаж 3 - школа',
    image: 'img/SchoolThirdFloor.svg',
    legend: [
      { icon: 'icons/SchoolThirdIcons/Mask.svg', label: 'Сцена' },
      { icon: 'icons/SchoolThirdIcons/Seat.svg', label: 'Зрительный зал' },
      { icon: 'icons/SchoolThirdIcons/Kulisi.svg', label: 'Кулисы' },
    ],
    rooms: [
      { id: 'Scene', number: '', name: 'Сцена', description: '', x: 73, y: 64, icon: 'icons/SchoolThirdIcons/Mask.svg', size: 'sm' },
      { id: 'Kulisi', number: '', name: 'Кулисы', description: '', x: 73, y: 52, icon: 'icons/SchoolThirdIcons/Kulisi.svg', size: 'sm' },
      { id: 'Seat', number: '', name: 'Зрительный зал', description: '', x: 73, y: 85, icon: 'icons/SchoolThirdIcons/Seat.svg', size: 'sm' },
    ]
  }
];
