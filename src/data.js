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
      { id: '107', number: 'Кабинет 107', x: 74, y: 89, icon: 'icons/FirstIcons/Voenkom.svg', size: 'xs', staff: [ { role: "Специалист по воинскому учёту", name: "Чиркова Марина Владимировна", roomLabel: "107 каб.", phone: "+7 (950) 741-77-12", photo: "photos/FirstFloor/Chirkova.svg" } ] },
      { id: 'Clothes', number: '', name: 'Гардероб', description: 'Здесь можно оставить верхнюю одежду', x: 71, y: 68, icon: 'icons/FirstIcons/Clothes.svg', size: 'xs' },
      { id: 'Cafe', number: '', name: 'Бистро "Апельсин"', description: 'Здесь можно перекусить', x: 40, y: 70, icon: 'icons/FirstIcons/Cafe.svg', size: 'xs', workingHours: {
          title: 'Режим работы Бистро «АПЕЛЬСИН»',
          items: [
            { days: 'Понедельник - Пятница', hours: '9:00 - 20:00', subtitle: 'Обед: 14:30 - 15:00' },
            { days: 'Суббота - Воскресенье', hours: '9:00 - 15:00' }
          ]
        } },
      { id: 'Stolovaya', number: '', name: 'Столовая "Ариадна"', description: 'Здесь можно полноценно пообедать', x: 15, y: 60, icon: 'icons/FirstIcons/Stolovaya.svg', size: 'xs', workingHours: {
          title: 'Режим работы Столовой «АРИАДНА»',
          items: [
            { days: 'Понедельник', hours: '11:00 - 17:00', subtitle: 'Спецобслуживание: 12:20 - 13:00' },
            { days: 'Вторник - Пятница', hours: '11:00 - 17:00', subtitle: 'Спецобслуживание: 12:00 - 13:00' },
            { days: 'Суббота', hours: 'Выходной', isClosed: true },
            { days: 'Воскресенье', hours: 'Выходной', isClosed: true }
          ]
        } },
      { id: '109', number: 'Кабинет 109', name: 'Деканат', x: 85, y: 89, icon: 'icons/FirstIcons/Deans.svg', size: 'xs', staff: [ { role: "Заместитель начальника учебно-методического управления", name: "Блудова Анна Георгиевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-18", photo: "photos/FirstFloor/Bludova.jpg" }, { role: "Специалист по учебно-методической работе (кафедра математики и информатики, кафедра экономики и управления)", name: "Демакова Инна Игоревна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-09", photo: "photos/FirstFloor/Demakova.jpg" }, { role: "Специалист по учебно-методической работе (кафедра гостеприимства и международных бизнес-коммуникаций)", name: "Казанцева Ольга Юрьевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-26", photo: "photos/FirstFloor/Kazantseva.jpg" }, { role: "Ведущий специалист учебно-методического управления", name: "Кравченко Марина Алексеевна", roomLabel: "109 каб.", phone: "+7 (351) 216-10-18", photo: "photos/FirstFloor/Kravchenko.jpg" } ] },
      { id: 'Canz', number: '', name: 'Канцелярия', description: 'Магазин канцелярских предметов', x: 76, y: 23, icon: 'icons/FirstIcons/Pencil.svg', size: 'xs', workingHours: {
          title: 'Режим работы магазина канцелярии',
          items: [
            { days: 'Понедельник - Пятница', hours: '9:00 - 16:00' },
            { days: 'Суббота', hours: 'Выходной', isClosed: true },
            { days: 'Воскресенье', hours: 'Выходной', isClosed: true }
          ]
        } },
      { id: '111', number: 'Кабинет 111', name: 'Учебный отдел', x: 91, y: 80, icon: 'icons/FirstIcons/StudyOffice.svg', size: 'xs', staff: [ { role: "Начальник учебно-методического управления", name: "Михалина Алёна Владимировна", roomLabel: "111 каб.", phone: "+7 (351) 216-10-38", photo: "photos/FirstFloor/Mihalina.jpg" }, { role: "Диспетчер УМУ", name: "Докучаева Полина Алексеевна", roomLabel: "111 каб.", phone: "", photo: "photos/FirstFloor/Dokuchaeva.jpg" }, { role: "Диспетчер УМУ", name: "Боровинских Наталья Владимировна", roomLabel: "111 каб.", phone: "", photo: "photos/FirstFloor/Borovinskih.jpg" } ] },
      { id: 'WC1', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 35, y: 66, icon: 'icons/FirstIcons/Toilet.svg', size: 'xs' },
      { id: 'WC2', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 27, y: 66, icon: 'icons/FirstIcons/Toilet.svg', size: 'xs' },
      { id: 'WC3', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 69, y: 15, icon: 'icons/FirstIcons/Toilet.svg', size: 'xs' },
      { id: '104', number: 'Кабинет 104', name: 'Отдел безопасности', description: 'Отдел безопасности МИДиС', x: 34.6, y: 89, icon: 'icons/FirstIcons/Ohrana.svg', size: 'xs' },
      { id: 'Book', number: 'Кабинет 122', name: 'Библиотека', x: 40, y: 35, icon: 'icons/FirstIcons/Biblioteka.svg', size: 'xs', staff: [ { role: "Заведующая библиотекой", name: "Сигитова Юлия Николаевна", roomLabel: "122 каб.", phone: "+7 (351) 216-10-19", photo: "photos/FirstFloor/Sigitova.jpg" } ] },
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
      { icon: 'icons/SecondIcons/Finance.svg', label: 'Финансово-экономический отдел' },
      { icon: 'icons/SecondIcons/Restaurant.svg', label: 'Учебный ресторан' },
      { icon: 'icons/SecondIcons/Chef.svg', label: 'Учебная кухня' },
    ],
    rooms: [
      { id: '205', number: 'Кабинет 205', name: 'Касса', description: 'Здесь можно оплатить за учёбу', x: 45.5, y: 90, icon: 'icons/SecondIcons/kassa.svg', size: 'xs', workingHours: {
          title: 'Режим работы кассы',
          items: [
            { days: 'Понедельник - Пятница', hours: '9:00 - 16:00', subtitle: 'Обед: 13:45 - 14:15 | Технический перерыв: 15:30 - 16:00' },
            { days: 'Суббота', hours: 'Выходной', isClosed: true },
            { days: 'Воскресенье', hours: 'Выходной', isClosed: true }
          ]
        } },
      { id: '201', number: 'Кабинет 201', name: 'Финансово-экономический отдел', description: 'Финансово-экономический отдел', x: 35.5, y: 90, icon: 'icons/SecondIcons/Finance.svg', size: 'xs' },
      { id: '203', number: 'Кабинет 203', name: 'Бухгалтерия', description: 'Бухгалтерия', x: 40, y: 90, icon: 'icons/SecondIcons/Accounting.svg', size: 'xs' },
      { id: '208', number: 'Кабинет 208', name: 'Приёмная ректора', x: 59, y: 90, icon: 'icons/SecondIcons/Rector.svg', size: 'xs', staff: [ { role: "Ректор", name: "Усынин Максим Валерьевич", roomLabel: "208 каб.", phone: "+7 (351) 216-10-30", photo: "photos/SecondFloor/Rector.jpg" } ] },
      { id: 'WC4', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 35, y: 70, icon: 'icons/SecondIcons/Toilet.svg', size: 'xs' },
      { id: '209', number: 'Кабинет 209', name: 'Отдел воспитательной работы', x: 69, y: 90, icon: 'icons/SecondIcons/Vospitatel.svg', size: 'xs', staff: [ { role: "Проректор по воспитательной работе", name: "Истомина Александра Владиславовна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-14", photo: "photos/SecondFloor/Istomina.jpg" }, { role: "Проректор по развитию студенческих инициатив", name: "Факидий Линда Евгеньевна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-14", photo: "photos/SecondFloor/Fakidi.jpg" }, { role: "Специалист отдела по воспитательной работе", name: "Баталина Ольга Стефановна", roomLabel: "209 каб.", phone: "+7 (351) 216-10-14", photo: "photos/SecondFloor/Batalina.jpg" } ] },
      { id: 'To7Keys', number: '', name: 'Переход в школу', description: 'Переход в школьное здание. Территория второй обуви', x: 90, y: 18, icon: 'icons/SecondIcons/Arrow.svg', size: 'xs' },
      { id: '211', number: 'Кабинет 211', name: 'Проректор по учебно-проектной работе', x: 92, y: 88, icon: 'icons/SecondIcons/Director.svg', size: 'xs', staff: [ { role: "Проректор по учебно-проектной работе", name: "Попова Наталья Аркадьевна", roomLabel: "211 каб.", phone: "+7 (351) 216-10-20", photo: "photos/SecondFloor/Director.jpg" } ] },
      { id: '210', number: 'Кабинет 210', name: 'Проректор по научной работе', x: 74.5, y: 90, icon: 'icons/SecondIcons/Science.svg', size: 'xs', staff: [ { role: "Проректор по научной работе", name: "Дегтеренко Людмила Николаевна", roomLabel: "210 каб.", phone: "+7 (351) 216-10-25", photo: "photos/SecondFloor/Degterenko.png" } ] },
      { id: 'WC5', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 70, y: 14, icon: 'icons/SecondIcons/Toilet.svg', size: 'xs' },
      { id: '241', number: 'Кабинет 241', name: 'Кафедра математики и информатики', description: 'Преподавательская кафедры математики и информатики', x: 8, y: 40.5, icon: 'icons/SecondIcons/IT.svg', size: 'xs' },
      { id: '234', number: 'Кабинет 234', name: 'Кафедра гостеприимства и международных бизнес-коммуникаций', x: 57, y: 29, icon: 'icons/SecondIcons/Travel.svg', size: 'xs', staff: [ { role: "Директор учебно-производственного комбината (Школа гастрономии и гостиничного дела)", name: "Кажура Игорь Игоревич", roomLabel: "234 каб.", phone: "+7 (351) 216-10-06", photo: "photos/SecondFloor/Kazhura.jpg" }, { role: "Заведующий кафедрой гостеприимства и международных бизнес-коммуникаций", name: "Василиженко Мария Валерьевна", roomLabel: "234 каб.", phone: "+7 (351) 216-10-06", photo: "photos/SecondFloor/Vasilizhenko.jpg" } ] },
      { id: '222', number: 'Кабинет 222', x: 76, y: 41.5, icon: 'icons/SecondIcons/Business.svg', size: 'xs', staff: [ { role: "Проректор по маркетингу и развитию бизнес коммуникаций", name: "Полушина Ирина Сергеевна", roomLabel: "222 каб.", phone: "+7 (351) 216-10-48", photo: "photos/SecondFloor/Polushina.jpg" } ] },
      { id: '242', number: 'Кабинет 242', name: 'Учебная кухня', description: 'Учебная кухня', x: 39.5, y: 39, icon: 'icons/SecondIcons/Chef.svg', size: 'xs' },
      { id: '244', number: 'Кабинет 244', name: 'Учебный ресторан', description: 'Учебный ресторан', x: 39.5, y: 57, icon: 'icons/SecondIcons/Restaurant.svg', size: 'xs' },
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
      { icon: 'icons/SecondHalfIcons/Lamp.svg', label: 'Преподавательская кафедры экономики и управления' },
    ],
    rooms: [
      { id: 'WC6', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 60, y: 90, icon: 'icons/SecondHalfIcons/Toilet.svg', size: 'xs' },
      { id: '343', number: 'Кабинет 343', x: 35, y: 96.4, icon: 'icons/SecondHalfIcons/Calc.svg', size: 'xs', staff: [ { role: "Заведующий кафедрой экономики и управления", name: "Бодрова Екатерина Григорьевна", roomLabel: "343 каб.", phone: "+7 (351) 216-10-51", photo: "photos/SecondFloor/Bodrova.jpg" } ] },
      { id: '345', number: 'Кабинет 345', name: 'Преподавательская кафедры экономики и управления', description: 'Преподавательская кафедры экономики и управления', x: 49.5, y: 94, icon: 'icons/SecondHalfIcons/Lamp.svg', size: 'xs' },
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
      { icon: 'icons/ThirdIcons/Job.svg', label: 'Отдел практики и трудоустройства' },
      { icon: 'icons/ThirdIcons/Analytics.svg', label: 'Проектно-аналитический офис' },
    ],
    rooms: [
      { id: '303', number: 'Кабинет 303', name: 'Музей моды', description: 'Уникальная коллекция костюмов различных эпох', x: 24.5, y: 88, icon: 'icons/ThirdIcons/Museum.svg', size: 'xs' },
      { id: 'WC7', number: '', name: 'Туалеты', description: 'Мужской и женский туалет', x: 55, y: 18, icon: 'icons/ThirdIcons/Toilet.svg', size: 'xs' },
      { id: '339', number: 'Кабинет 339', name: 'Учебно-методическое управление', x: 11, y: 57, icon: 'icons/ThirdIcons/Metod.svg', size: 'xs', staff: [ { role: "Специалист по учебно-методической работе (кафедра дизайна, рисунка и живописи)", name: "Швецова Надежда Сергеевна", roomLabel: "339 каб.", phone: "+7 (351) 216-10-08", photo: "photos/ThirdFloor/Shvetsova.jpg" } ] },
      { id: '307', number: 'Кабинет 307', name: 'Кафедра дизайна', x: 44.5, y: 88, icon: 'icons/ThirdIcons/palette.svg', size: 'xs', staff: [ { role: "Заведующий кафедрой дизайна, рисунка и живописи", name: "Одношовина Юлия Владимировна", roomLabel: "307 каб.", phone: "+7 (351) 216-10-28", photo: "photos/ThirdFloor/Odnoshovina.png" } ] },
      { id: '322', number: 'Кабинет 322', name: 'Учебный бизнес-центр', x: 48, y: 31, icon: 'icons/ThirdIcons/business.svg', size: 'xs', staff: [ { role: "Руководитель учебного бизнес-центра", name: "Куликова Ольга Сергеевна", roomLabel: "322 каб.", phone: "+7 (351) 216-10-42", photo: "photos/ThirdFloor/Kulikova.jpg" } ] },
      { id: '312', number: 'Кабинет 312', name: 'Отдел практики и трудоустройства', x: 72.5, y: 45.5, icon: 'icons/ThirdIcons/Job.svg', size: 'xs', staff: [ { role: "Отдел практики и трудоустройства", name: "Аполовников Андрей Анатольевич", roomLabel: "312 каб.", phone: "+7 (351) 216-10-37", photo: "photos/ThirdFloor/Avatar.jpg" } ] },
      { id: '314', number: 'Кабинет 314', name: 'Проектно-аналитический офис', x: 72.5, y: 40, icon: 'icons/ThirdIcons/Analytics.svg', size: 'xs', staff: [ { role: "Руководитель проектно-аналитического центра", name: "Львов Леонид Васильевич", roomLabel: "314 каб.", phone: "+7 (351) 216-10-47", photo: "photos/ThirdFloor/Lvov.png" } ] },
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
      { icon: 'icons/FourthIcons/Camera.svg', label: 'Медиацентр' },
    ],
    rooms: [
      { id: '401', number: 'Кабинет 401', x: 9, y: 58, icon: 'icons/FourthIcons/fx.svg', size: 'xs', staff: [ { role: "Заведующий кафедрой математики и информатики", name: "Кондаков Сергей Александрович", roomLabel: "401 каб.", phone: "+7 (351) 216-10-05", photo: "photos/FourthFloor/Kondakov.jpg" } ] },
      { id: '403', number: 'Кабинет 403', name: 'Медиацентр', x: 34, y: 10, icon: 'icons/FourthIcons/Camera.svg', size: 'xs', staff: [ { role: "Медиацентр", name: "Жаров Алексей Геннадьевич", roomLabel: "403 каб.", phone: "https://vk.ru/studentmediaspace", photo: "photos/FourthFloor/Zharov.jpg" } ] },
      { id: '404', number: 'Кабинет 404', name: 'Психолог', x: 70, y: 24, icon: 'icons/FourthIcons/Neuro.svg', size: 'xs', staff: [ { role: "Психолог", name: "Долгих Алёна Александровна", roomLabel: "404 каб.", phone: "https://vk.ru/alena.dolgih86", photo: "photos/FourthFloor/Dolgih.jpg" } ] },
      { id: '405', number: 'Кабинет 405', name: 'Отдел СПО', x: 70, y: 33, icon: 'icons/FourthIcons/Book.svg', size: 'xs', staff: [ { role: "Заведующий отделением среднего профессионального образования", name: "Хаятова Лилия Рэхтямовна", roomLabel: "405 каб.", phone: "+7 (351) 216-10-15", photo: "photos/FourthFloor/Hayatova.jpg" } ] },
      { id: '406', number: 'Кабинет 406', name: 'Научно-методический отдел', x: 70, y: 46, icon: 'icons/FourthIcons/Highlighter.svg', size: 'xs', staff: [ { role: "Заведующий научно-методическим отделом", name: "Кокорин Сергей Александрович", roomLabel: "406 каб.", phone: "+7 (351) 216-10-50", photo: "photos/FourthFloor/Kokorin.jpg" }, { role: "Документовед", name: "Хаятова Лилия Рэхтямовна", roomLabel: "406 каб.", phone: "+7 (351) 216-10-15", photo: "photos/FourthFloor/Hayatova.jpg" }, { role: "Специалист научно-методического отдела", name: "Борисенко Екатерина Геннадьевна", roomLabel: "406 каб.", phone: "+7 (351) 216-10-??", photo: "photos/ThirdFloor/Avatar.jpg" } ] },
      { id: '407', number: 'Кабинет 407', name: 'Преподавательская кафедры психологии и гуманитарных дисциплин', description: 'Преподавательская кафедры психологии и гуманитарных дисциплин', x: 70, y: 63, icon: 'icons/FourthIcons/Mind.svg', size: 'xs' },
      { id: '408', number: 'Кабинет 408', name: 'Преподавательская кафедры математики и информатики', x: 73, y: 78, icon: 'icons/FourthIcons/Office.svg', size: 'xs' },
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
      { id: 'Cl1', number: '', name: 'Женская раздевалка бассейна', x: 70, y: 78, icon: 'icons/SchoolFirstIcons/Girl.svg', size: 'xs' },
      { id: 'Cl2', number: '', name: 'Мужская раздевалка бассейна', x: 87, y: 78, icon: 'icons/SchoolFirstIcons/Boy.svg', size: 'xs' },
      { id: 'Saun', number: '', name: 'Сауна', x: 94, y: 82, icon: 'icons/SchoolFirstIcons/Sauna.svg', size: 'xs' },
      { id: 'Med', number: 'Кабинет 107', name: 'Медпункт', x: 41, y: 95, icon: 'icons/SchoolFirstIcons/Medic.svg', size: 'xs', workingHours: {
          title: 'Часы приёма медпункта',
          items: [
            { days: 'Понедельник - Пятница', hours: '9:00 - 17:00', subtitle: 'Обед: 12:00 - 12:30' },
            { days: 'Суббота', hours: 'Выходной', isClosed: true },
            { days: 'Воскресенье', hours: 'Выходной', isClosed: true }
          ]
        } },
      { id: 'Cl3', number: '', name: 'Мужская раздевалка спортзала', x: 66, y: 53, icon: 'icons/SchoolFirstIcons/Boys.svg', size: 'xs' },
      { id: 'Cl4', number: '', name: 'Женская раздевалка спортзала', x: 55, y: 53, icon: 'icons/SchoolFirstIcons/Girls.svg', size: 'xs' },
      { id: 'Pool', number: '', name: 'Бассейн', x: 75, y: 94, icon: 'icons/SchoolFirstIcons/Pool.svg', size: 'xs' },
      { id: 'Sport', number: '', name: 'Спортзал', x: 71, y: 15, icon: 'icons/SchoolFirstIcons/Sport.svg', size: 'xs' },

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
      { id: 'ToMIDiS', number: '', name: 'Переход', description: 'Переход в здание института.', x: 41, y: 59, icon: 'icons/SchoolSecondIcons/Arrow.svg', size: 'xs' },
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
      { id: 'Scene', number: '', name: 'Сцена', description: '', x: 73, y: 64, icon: 'icons/SchoolThirdIcons/Mask.svg', size: 'xs' },
      { id: 'Kulisi', number: '', name: 'Кулисы', description: '', x: 73, y: 52, icon: 'icons/SchoolThirdIcons/Kulisi.svg', size: 'xs' },
      { id: 'Seat', number: '', name: 'Зрительный зал', description: '', x: 73, y: 85, icon: 'icons/SchoolThirdIcons/Seat.svg', size: 'xs' },
    ]
  }
];
