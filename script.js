const HEADER = document.querySelector('.header');
const MAIN = document.querySelector('.main');

const DOM = {
  ENTRY_FORM: 'entry-form',
  FILTERS: 'filters',
  TABLE: 'goal-table',
};

const DATA_ENTRY_INPUTS = {
  NAME_INPUT: 'nameInput',
  MIDDLE_NAME_INPUT: 'middleNameInput',
  SURNAME_INPUT: 'surNameInput',
  BIRTHDAY_INPUT: 'birthdayInput',
  START_STUDY_INPUT: 'startStudyInput',
  FACULTY_INPUT: 'facultyInput',
};

const DATA_ENTRY_ATTR = {
  NAME_ATTR: 'entry-name',
  MIDDLE_NAME_ATTR: 'entry-middle',
  SURNAME_ATTR: 'entry-surname',
  BIRTHDAY_ATTR: 'entry-birthday',
  START_YEAR_ATTR: 'entry-start',
  FACULTY_ATTR: 'entry-faculty',
};

const FILTERS_INPUTS = {
  FULL_NAME_FILTER: 'fullNameFilter',
  FACULTY_FILTER: 'facultyFilter',
  START_STUDY_FILTER: 'startStudyFilter',
  END_STUDY_FILTER: 'endStudyFilter',
};

const FILTERS_ATTR = {
  FULLNAME_ATTR: 'filter-fullname',
  FACULTY_ATTR: 'filter-faculty',
  START_YEAR_ATTR: 'filter-start',
  END_YEAR_ATTR: 'filter-end',
};

const TABLE_CAPTIONS = {
  ORDER_CAPTION: '#',
  FULLNAME_CAPTION: 'ФИО',
  FACULTY_CAPTION: 'Факультет',
  BIRTH_AGE_CAPTION: 'ДР и возраст',
  PERIOD_CAPTION: 'Годы обучения',
};

const students = [];
const keyLS = 'students';

function createAppTitle(title) {
  const appTitle = document.createElement('h1');
  appTitle.classList.add('py-4', 'border-bottom', 'border-2');
  appTitle.innerHTML = title;
  return appTitle;
}

function createEntryForm() {
  const entryForm = document.createElement('form');
  const entryFormTitle = document.createElement('h3');
  const entryFormBtnWrap = document.createElement('div');
  const entryFormBtn = document.createElement('button');

  entryForm.classList.add('row', 'g-3', 'mb-5', 'pb-3', 'rounded', 'shadow-sm');
  entryForm.setAttribute('id', DOM.ENTRY_FORM);
  entryFormTitle.textContent = 'Ввод данных';

  entryForm.append(entryFormTitle);
  // ---- инпуты  ----

  const items = [DATA_ENTRY_ATTR.NAME_ATTR, DATA_ENTRY_ATTR.MIDDLE_NAME_ATTR,
    DATA_ENTRY_ATTR.SURNAME_ATTR, DATA_ENTRY_ATTR.BIRTHDAY_ATTR,
    DATA_ENTRY_ATTR.START_YEAR_ATTR, DATA_ENTRY_ATTR.FACULTY_ATTR];

  for (const item of items) {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.classList.add('form-label');
    input.classList.add('form-control');
    input.setAttribute('type', 'text');
    input.setAttribute('name', item);

    switch (item) {
      case DATA_ENTRY_ATTR.NAME_ATTR:
        wrapper.classList.add('col-md-4');
        input.setAttribute('id', DATA_ENTRY_INPUTS.NAME_INPUT);
        label.setAttribute('for', DATA_ENTRY_INPUTS.NAME_INPUT);
        label.textContent = 'Имя';
        break;
      case DATA_ENTRY_ATTR.MIDDLE_NAME_ATTR:
        wrapper.classList.add('col-md-4');
        input.setAttribute('id', DATA_ENTRY_INPUTS.MIDDLE_NAME_INPUT);
        label.setAttribute('for', DATA_ENTRY_INPUTS.MIDDLE_NAME_INPUT);
        label.textContent = 'Отчество';
        break;
      case DATA_ENTRY_ATTR.SURNAME_ATTR:
        wrapper.classList.add('col-md-4');
        input.setAttribute('id', DATA_ENTRY_INPUTS.SURNAME_INPUT);
        label.setAttribute('for', DATA_ENTRY_INPUTS.SURNAME_INPUT);
        label.textContent = 'Фамилия';
        break;
      case DATA_ENTRY_ATTR.BIRTHDAY_ATTR:
        wrapper.classList.add('col-md-2');
        input.setAttribute('id', DATA_ENTRY_INPUTS.BIRTHDAY_INPUT);
        label.setAttribute('for', DATA_ENTRY_INPUTS.BIRTHDAY_INPUT);
        label.textContent = 'Дата рождения';
        input.setAttribute('type', 'date');
        break;
      case DATA_ENTRY_ATTR.START_YEAR_ATTR:
        wrapper.classList.add('col-md-2');
        input.setAttribute('id', DATA_ENTRY_INPUTS.START_STUDY_INPUT);
        label.setAttribute('for', DATA_ENTRY_INPUTS.START_STUDY_INPUT);
        label.textContent = 'Год начала обучения';
        break;
      case DATA_ENTRY_ATTR.FACULTY_ATTR:
        wrapper.classList.add('col-md-8');
        input.setAttribute('id', DATA_ENTRY_INPUTS.FACULTY_INPUT);
        label.setAttribute('for', DATA_ENTRY_INPUTS.FACULTY_INPUT);
        label.textContent = 'Факультет';
        break;
      default:
        break;
    }

    entryForm.append(wrapper);
    wrapper.append(label);
    wrapper.append(input);
  }

  entryFormBtnWrap.classList.add('col-12');
  entryFormBtn.classList.add('btn', 'btn-primary');
  entryFormBtn.setAttribute('type', 'submit');
  entryFormBtn.textContent = 'Добавить студента';
  entryForm.append(entryFormBtnWrap);
  entryFormBtnWrap.append(entryFormBtn);

  return entryForm;
}

function createFiltersForm() {
  const filtersForm = document.createElement('form');
  const filtersFormTitle = document.createElement('h3');

  filtersForm.classList.add('row', 'g-3', 'mb-5', 'pb-3', 'rounded', 'shadow-sm');
  filtersForm.setAttribute('id', DOM.FILTERS);
  filtersFormTitle.textContent = 'Фильтровать по:';

  filtersForm.append(filtersFormTitle);

  // ---- инпуты  ----

  const items = ['filter-fullname', 'filter-faculty', 'filter-start', 'filter-end'];

  for (const item of items) {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.classList.add('form-label');
    input.classList.add('form-control');
    input.setAttribute('type', 'text');
    input.setAttribute('name', item);

    switch (item) {
      case FILTERS_ATTR.FULLNAME_ATTR:
        wrapper.classList.add('col-md-4');
        input.setAttribute('id', FILTERS_INPUTS.FULL_NAME_FILTER);
        label.setAttribute('for', FILTERS_INPUTS.FULL_NAME_FILTER);
        label.textContent = 'ФИО';
        break;
      case FILTERS_ATTR.FACULTY_ATTR:
        wrapper.classList.add('col-md-4');
        input.setAttribute('id', FILTERS_INPUTS.FACULTY_FILTER);
        label.setAttribute('for', FILTERS_INPUTS.FACULTY_FILTER);
        label.textContent = 'Факультет';
        break;
      case FILTERS_ATTR.START_YEAR_ATTR:
        wrapper.classList.add('col-md-2');
        input.setAttribute('id', FILTERS_INPUTS.START_STUDY_FILTER);
        label.setAttribute('for', FILTERS_INPUTS.START_STUDY_FILTER);
        label.textContent = 'Год начала обучения';
        break;
      case FILTERS_ATTR.END_YEAR_ATTR:
        wrapper.classList.add('col-md-2');
        input.setAttribute('id', FILTERS_INPUTS.END_STUDY_FILTER);
        label.setAttribute('for', FILTERS_INPUTS.END_STUDY_FILTER);
        label.textContent = 'Год окончания обучения';
        break;
      default:
        break;
    }

    filtersForm.append(wrapper);
    wrapper.append(label);
    wrapper.append(input);
  }
  return filtersForm;
}

function createTable() {
  const tWrap = document.createElement('div');
  const tTitle = document.createElement('h3');
  const table = document.createElement('table');
  const tHead = document.createElement('tHead');
  const tRow = document.createElement('tr');
  const tBody = document.createElement('tbody');

  const captions = [
    TABLE_CAPTIONS.ORDER_CAPTION, TABLE_CAPTIONS.FULLNAME_CAPTION,
    TABLE_CAPTIONS.FACULTY_CAPTION, TABLE_CAPTIONS.BIRTH_AGE_CAPTION,
    TABLE_CAPTIONS.PERIOD_CAPTION,
  ];

  tTitle.classList.add('mb-3');
  tTitle.textContent = 'Список студентов';
  table.classList.add('table', 'table-striped', 'table-hover');
  table.setAttribute('id', DOM.TABLE);

  tWrap.append(tTitle);
  tWrap.append(table);
  table.append(tHead);
  tHead.append(tRow);
  table.append(tBody);

  for (const caption of captions) {
    const th = document.createElement('th');
    th.setAttribute('scope', 'col');
    th.style.cursor = 'pointer';
    th.textContent = caption;
    th.classList.add('table-caption');
    tRow.append(th);
  }
  return tWrap;
}

function validate() {
  const ERR = {
    INVALID_EMPTY_NAME: 'пустое поле Имя',
    INVALID_EMPTY_MIDDLE_NAME: 'пустое поле Отчество',
    INVALID_EMPTY_SURNAME: 'пустое поле Фамилия',
    INVALID_EMPTY_BIRTHDAY: 'пустое поле Дата рождения',
    INVALID_EMPTY_START_STUDY: 'пустое поле Год начала обучения',
    INVALID_EMPTY_FACULTY: 'пустое поле Факультет',
    INVALID_BIRTHDAY: 'Дата рождения должна быть в диапазоне от 01.01.1900 до текущей даты',
    INVALID_START_STUDY: 'Год начала обучения должен находиться в диапазоне от 2000-го до текущего года',
    INVALID_START_STUDY_NAN: 'в поле Год начала обучения не число',
    INVALID_START_STUDY_TOO_EARLY: 'в этом году студент ещё не поступил',
  };

  let isValid = true;
  const errors = [];

  function isEmpty(item, err) {
    if ((item.value.trim()).length === 0) {
      errors.push(err);
      item.classList.add('is-invalid');
    }
  }

  function isTrueDate(item, err) {
    const date = new Date(item.value);
    if (date.getFullYear() < 1900 || date > new Date()) {
      errors.push(err);
      item.classList.add('is-invalid');
    }
  }

  function isNan(item, err) {
    if (Number.isNaN(Number.parseInt(item.value, 10))) {
      errors.push(err);
      item.classList.add('is-invalid');
    }
  }

  function isMatchYear(item, err) {
    if (+item.value < 2000
      || +item.value > new Date().getFullYear()) {
      errors.push(err);
      item.classList.add('is-invalid');
    }
  }

  function isTooEarly(item, err) {
    if (+item.value === new Date().getFullYear()
      && new Date().getMonth() < 9) {
      errors.push(err);
      item.classList.add('is-invalid');
    }
  }

  isEmpty(document.querySelector([`[name="${DATA_ENTRY_ATTR.NAME_ATTR}"]`]), ERR.INVALID_EMPTY_NAME);
  isEmpty(document.querySelector([`[name="${DATA_ENTRY_ATTR.MIDDLE_NAME_ATTR}"]`]), ERR.INVALID_EMPTY_MIDDLE_NAME);
  isEmpty(document.querySelector([`[name="${DATA_ENTRY_ATTR.SURNAME_ATTR}"]`]), ERR.INVALID_EMPTY_SURNAME);
  isEmpty(document.querySelector([`[name="${DATA_ENTRY_ATTR.BIRTHDAY_ATTR}"]`]), ERR.INVALID_EMPTY_BIRTHDAY);
  isEmpty(document.querySelector([`[name="${DATA_ENTRY_ATTR.START_YEAR_ATTR}"]`]), ERR.INVALID_EMPTY_START_STUDY);
  isEmpty(document.querySelector([`[name="${DATA_ENTRY_ATTR.FACULTY_ATTR}"]`]), ERR.INVALID_EMPTY_FACULTY);
  isTrueDate(document.querySelector([`[name="${DATA_ENTRY_ATTR.BIRTHDAY_ATTR}"]`]), ERR.INVALID_BIRTHDAY);
  isNan(document.querySelector([`[name="${DATA_ENTRY_ATTR.START_YEAR_ATTR}"]`]), ERR.INVALID_START_STUDY_NAN);
  isMatchYear(document.querySelector([`[name="${DATA_ENTRY_ATTR.START_YEAR_ATTR}"]`]), ERR.INVALID_START_STUDY);
  isTooEarly(document.querySelector([`[name="${DATA_ENTRY_ATTR.START_YEAR_ATTR}"]`]), ERR.INVALID_START_STUDY_TOO_EARLY);

  if (errors.length > 0) {
    isValid = false;
  }

  return {
    isValid,
    errors,
  };
}

function clearEntryFeedbacks() {
  const items = document.querySelectorAll('.is-invalid');
  items.forEach((item) => {
    item.classList.remove('is-invalid');
  });

  const feedback = document.querySelector('.invalid-feedback');
  if (feedback) feedback.remove();
}

function clearForm(form) {
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    input.value = '';
  });
}

function invalidFeedback(text) {
  const entryForm = document.getElementById(DOM.ENTRY_FORM);
  const feedback = document.createElement('div');

  feedback.classList.add('invalid-feedback');
  feedback.textContent = text.join(', ');
  entryForm.lastChild.before(feedback);
  feedback.previousSibling.classList.add('is-invalid');

  const invalids = document.querySelectorAll('.is-invalid');

  invalids.forEach((invalid) => {
    invalid.addEventListener('change', () => {
      clearEntryFeedbacks();
      const validation = validate();
      invalidFeedback(validation.errors);
    });
  });
}

function getStudentData() {
  const name = document.getElementById(DATA_ENTRY_INPUTS.NAME_INPUT).value.trim();
  const middleName = document.getElementById(DATA_ENTRY_INPUTS.MIDDLE_NAME_INPUT).value.trim();
  const surName = document.getElementById(DATA_ENTRY_INPUTS.SURNAME_INPUT).value.trim();
  const birthday = document.getElementById(DATA_ENTRY_INPUTS.BIRTHDAY_INPUT).value;
  const yearStart = document.getElementById(DATA_ENTRY_INPUTS.START_STUDY_INPUT).value.trim();
  const faculty = document.getElementById(DATA_ENTRY_INPUTS.FACULTY_INPUT).value.trim();

  function upperCase(str) {
    const newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
  }

  const student = {
    name: upperCase(name),
    middleName: upperCase(middleName),
    surName: upperCase(surName),
    birthday: new Date(birthday),
    yearStart: +yearStart,
    faculty: upperCase(faculty),
  };

  students.push(student);
  clearForm(document.getElementById(DOM.ENTRY_FORM));
}

function modifyForTable() {
  function getFullName(student) {
    const fullName = `${student.surName} ${student.name} ${student.middleName}`;
    return fullName;
  }

  function getDateAge(student) {
    const date = new Date(student.birthday);
    const dateAdj = date
      .toISOString()
      .split('T')[0]
      .split('-')
      .reverse()
      .join('.');

    const age = new Date().getFullYear() - date.getFullYear();
    const arrY = ['лет', 'год', 'года', 'года', 'года', 'лет', 'лет', 'лет', 'лет', 'лет'];
    const dateAge = `${dateAdj} (${age} ${arrY[age % 10]})`;
    return {
      date,
      age,
      dateAge,
    };
  }

  function getStudyYears(student) {
    const startYear = student.yearStart;
    const endYear = startYear + 4;

    function getCourse() {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const qYears = currentYear - startYear;
      let course;

      let adj = 0;
      if (currentMonth >= 9) adj = 1;

      if (qYears + adj <= 4) {
        course = `(${qYears + adj} курс)`;
      } else course = '(закончил/а)';

      return course;
    }

    const period = `${startYear}-${endYear} ${getCourse()}`;

    return {
      startYear,
      endYear,
      period,
    };
  }

  const modifiedArr = students.map((e) => ({
    fullName: getFullName(e),
    birthday: getDateAge(e).date,
    dateAge: getDateAge(e).dateAge,
    startYear: getStudyYears(e).startYear,
    endYear: getStudyYears(e).endYear,
    period: getStudyYears(e).period,
    faculty: e.faculty,
  }));
  return modifiedArr;
}

function fillTable(studentsForTable) {
  const table = document.querySelector('.table');
  const tBody = table.tBodies[0];

  while (tBody.rows[0]) tBody.deleteRow(0);

  for (const student of studentsForTable) {
    const tRow = document.createElement('tr');
    const th = document.createElement('th');
    const tdName = document.createElement('td');
    const tdFaculty = document.createElement('td');
    const tdBirthday = document.createElement('td');
    const tdStudy = document.createElement('td');

    th.setAttribute('scope', 'row');
    th.textContent = studentsForTable.indexOf(student) + 1;
    tdName.textContent = student.fullName;
    tdFaculty.textContent = student.faculty;
    tdBirthday.textContent = student.dateAge;
    tdStudy.textContent = student.period;

    tBody.append(tRow);
    tRow.append(th);
    tRow.append(tdName);
    tRow.append(tdFaculty);
    tRow.append(tdBirthday);
    tRow.append(tdStudy);
  }
}

function sortBy(arr, column) {
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  switch (column) {
    case TABLE_CAPTIONS.FULLNAME_CAPTION:
      arr.sort(byField('fullName'));
      break;
    case TABLE_CAPTIONS.FACULTY_CAPTION:
      arr.sort(byField('faculty'));
      break;
    case TABLE_CAPTIONS.BIRTH_AGE_CAPTION:
      arr.sort(byField('birthday'));
      break;
    case TABLE_CAPTIONS.PERIOD_CAPTION:
      arr.sort(byField('startYear'));
      break;
    default:
      break;
  }
  return (arr);
}

function applyFilter(arr) {
  const filtersForm = document.getElementById(DOM.FILTERS);
  const filters = filtersForm.querySelectorAll('input');
  let newArr = arr;

  filters.forEach((item) => {
    switch (item.getAttribute('id')) {
      case FILTERS_INPUTS.FULL_NAME_FILTER:
        newArr = newArr.filter((student) => student.fullName.toLowerCase()
          .includes(item.value.trimStart().toLowerCase()));
        break;
      case FILTERS_INPUTS.FACULTY_FILTER:
        newArr = newArr.filter((student) => student.faculty.toLowerCase()
          .includes(item.value.trimStart().toLowerCase()));
        break;
      case FILTERS_INPUTS.START_STUDY_FILTER:
        if (item.value !== '') {
          newArr = newArr.filter((student) => student.startYear === +item.value);
        }
        break;
      case FILTERS_INPUTS.END_STUDY_FILTER:
        if (item.value !== '') {
          newArr = newArr.filter((student) => student.endYear === +item.value);
        }
        break;
      default:
        break;
    }
  });

  return (newArr);
}

function updateStudentsTable(columnToSort) {
  const studentsMod = modifyForTable();
  const studentsFiltered = applyFilter(studentsMod);
  const studentsForTable = sortBy(studentsFiltered, columnToSort);
  fillTable(studentsForTable);
}

function addToStorage(key, toLS) {
  localStorage.setItem(key, JSON.stringify(toLS));
}

function initialState(key) {
  const dataFromLS = JSON.parse(localStorage.getItem(key));
  if (dataFromLS) {
    dataFromLS.forEach((item) => {
      students.push(item);
      fillTable(modifyForTable(students));
    });
  }
}

function createControlPanelApp() {
  const controlTitle = createAppTitle('Панель управления студентами');
  const controlEntryForm = createEntryForm();
  const controlFiltersForm = createFiltersForm();
  const controlTable = createTable();

  HEADER.append(controlTitle);
  MAIN.append(controlEntryForm);
  MAIN.append(controlFiltersForm);
  MAIN.append(controlTable);

  initialState(keyLS);

  controlEntryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearEntryFeedbacks();
    const validity = validate();
    if (validity.isValid) {
      getStudentData();
      fillTable(modifyForTable(students));
      addToStorage(keyLS, students);
    } else invalidFeedback(validity.errors);
  });

  const tableCaptions = document.querySelectorAll('.table-caption');
  tableCaptions.forEach((el) => {
    el.addEventListener('click', () => updateStudentsTable(el.textContent));
  });

  controlFiltersForm.addEventListener('input', updateStudentsTable);
}

window.createControlPanelApp = createControlPanelApp;
