// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const date = new Date().getFullYear()
const isSomeoneOlderThan18 = people.some((person)=>{
 return (date-person.year>=18)
})
console.table(isSomeoneOlderThan18)

const date1 = new Date().getFullYear()
const isEveryoneOlderThan19 = people.every((person)=>{
 return ((date1-person.year)>=19)
})
console.table(isEveryoneOlderThan19)


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const idComment823423 = comments.find((comment)=>{
  return comment.id == 823423
})
console.log(idComment823423)
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
 const index = comments.findIndex((comment)=>{
     return comment.id == 823423
 }) 
  comments.splice(index, 1)
  console.table(comments)