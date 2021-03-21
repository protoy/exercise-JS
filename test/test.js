console.log("test run JS");
let sourceArr = ["a", "b", "c", "d", "e", "f"];
let resArr = ["a", "d", "e", "g"];
console.log("startime:",new Date())
let sourceObj = {};
let resObj = {};
var addArr = [];
var deleteArr = [];
for (let i = 0; i < sourceArr.length; i++) {
  sourceObj[sourceArr[i]] = true;
}
for (let i = 0; i < resArr.length; i++) {
  resObj[resArr[i]] = true;
}
for (let sourcekey in sourceObj) {
  if (sourceObj[sourcekey] && resObj[sourcekey]) {
  } else {
    //原来选中，新的没有选，则为删除
    if (sourceObj[sourcekey] && !resObj[sourcekey]) {
      deleteArr.push(sourcekey);
    }
  }
}
for(let reskey in resObj){
  if (sourceObj[reskey] && resObj[reskey]) {
  } else{
    if(!sourceObj[reskey] && resObj[reskey]){
      addArr.push(reskey)
    }
  }
}
console.log("endtime:",new Date())
console.log("add:", addArr);
console.log("delete:", deleteArr);

// input 'node xxx.js' to run the JS
// var createPet = function(name) {
//     var sex;

//     return {
//       setName: function(newName) {
//         name = newName;
//       },

//       getName: function() {
//         return name;
//       },

//       getSex: function() {
//         return sex;
//       },

//       setSex: function(newSex) {
//         if(typeof newSex == "string"
//           && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
//           sex = newSex;
//         }
//       }
//     }
//   }

//   var pet = createPet("Vivie");
//   pet.getName();                  // Vivie

//   pet.setName("Oliver");
//   pet.setSex("male");
//   pet.getSex();                   // male
//   pet.getName();                  // Oliver
//   console.log('11111',pet.getSex());
//   console.log('2222',pet.getName());
