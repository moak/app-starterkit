var state = [
  {
    name: 'maxime',
    age: 12,
  },
  {
    name: 'steven',
    age: 21,
  },
  {
    name: 'bob',
    age: 14,
  }
]

var filtered = state.filter((item) => {
  return item.name !== 'maxime'
})


console.log(filtered);
