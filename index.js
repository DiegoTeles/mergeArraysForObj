const mock = require("./mock-principal.json");
const mock2 = require("./mock-2.json").content
  .deliveryTimeTupleZipcodeRangeDtos[0].deliveryTimeTupleDtos;

/* 
   Removidos do Array (mock2)
{
    "id": 447743,
    "warehouse": "BA-31",
    "valueTerm": 1
},
{
    "id": 447742,
    "warehouse": "CE-67",
    "valueTerm": 2
},
*/

/* 
Steps:
1 - Pegar o obj que é igual em ambos os arrays
2 - Mesclar esses objs
3 - Inserir os demais

*/
console.time("Mapper timer"); //Mapper timer: 0.156ms
const merged = mock.map((item) => {
  const x = mock2.find((val) => val.id === item.id);
  const res = {
    id: item.id,
    warehouse: item.name,
    valueTerm: item.valueTerm ? item.valueTerm : null,
  };
  return { ...res, ...x };
});
console.timeEnd("Mapper timer");
console.log("mapper :>> ", merged);

/*  MESMA COISA COM REDUCE */

// console.time('Reduced timer') // Reduced timer: 0.143ms
// const reduced = mock.reduce((acc, val) => {
//   const exist = mock2.find((item) => item.id === val.id);

//   if (exist) {
//     acc.push(exist);
//   } else {
//     const res = {
//       id: val.id,
//       warehouse: val.name,
//       valueTerm: null,
//     };
//     acc.push(res);
//   }
//   return acc;
// }, []);
// console.timeEnd('Reduced timer')

// console.log("reduced :>> ", reduced);
