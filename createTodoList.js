const fs = require('fs')
const moment = require('moment')

const todoList = [
    {
        text: 'Go shopping',
        date: moment('19.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
    },
    {
        text: 'Go shoppingc',
        date: moment('1.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 2,
        done: true
    },
    {
        text: 'Go shopping B',
        date: moment('9.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 3,
        done: true
    },
    {
        text: 'Go shopping7',
        date: moment('20.12.2020, 21:10', 'DD.MM.YYYY, hh:mm'),
        id: 4,
        done: false
    }
  ]

  const json = JSON.stringify(todoList)

  fs.writeFileSync('todo.json', json)