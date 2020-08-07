const students=[
    {id:21,name:'manna'},
    {id:31,name:'bojo hori'},
    {id:41,name:'abol kamal'},
    {id:51,name:'pasa bai'}
]
const student=students.map(x=>x.name);
const ids=students.map(x=>x.id);
console.log(student, ids);

const isThere=students.filter(x=>x.id>21);
console.log(isThere);

const isFind=students.find(x=>x.id>21);
console.log(isFind);