document.addEventListener('DOMContentLoaded', function(){
  let person = [{
    id: 1,
    name: 'Jan Kowalski',
    phone: 372458659,
    age:412
  },
  {
    id: 2,
    name: 'Zdzisława Majchrzak',
    phone: 214360051,
    age:24
  },
  {
    id: 3,
    name: 'Karolina Paprotka',
    phone: 635190000,
    age: 12
  },
  {
    id: 4,
    name: 'Janusz Typowy',
    phone: 453874137,
    age: 55
  }];
  let tbody = document.getElementById('list');
  let row = [];
  function getData(item,index){
    row.push(`<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.phone}</td>
          <td>${item.age}</td>
         </tr>`);
    tbody.innerHTML=row.join("");
  }
  person.forEach(getData);
});
