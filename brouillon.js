let array = [1, 2, 3];
Count = () => {
  for (let i = 0; i < array.length; i++) {
    // console.log(i);
  }
};
var count = 0;
incre = () => {
  count++;
  //   console.log(count);
};

cinq = () => {
  let ze = incre();
  for (ze = 0; ze < 6; ze++) console.log(ze);
};
// cinsq();

// cinq = () => {
//     for (ze = 0; ze < 5; ze++) incre();
//   };
//   cinq();

let obj = {
  name: 'francis',
  date: '01/09/2020',
  todo: true,
  id: 1,
};

myFunction = () => {
  const f = obj.date;
  //   console.log(f);
  return f;
};
// myFunction();

nyF = () => {
  const fun = myFunction();
  //   console.log('com', fun);
};
// nyF();

myFu = () => {
  let tab = [
    { id: 0, name: 'john', age: 12 },
    { id: 1, name: 'francis', age: 13 },
    { id: 2, name: 'arthur', age: 14 },
    { id: 3, name: 'davirak', age: 15 },
    { id: 4, name: 'neila', age: 16 },
  ];
  console.log('tab');

  for (i = 0; i < tab.length; i++) {
    console.log('tab', tab[i].name);
  }
  console.log('number', tab.length);
  let numbId = tab.length;
  tab.push({ id: numbId++, name: 'claire', age: 17 });
  tab.push({ id: numbId++, name: 'thomas', age: 31 });

  console.log('new', tab);
};
myFu();
