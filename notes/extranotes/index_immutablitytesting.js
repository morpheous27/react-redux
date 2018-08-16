//mutable version
/* function updateCity(employee,city) {
  
   employee.city = city;
   return employee; 
} */
//immutable version
function updateCity(employee, city) {
  //  return Object.assign({}, employee, { city });
  return { ...employee, city };
}
let employee = {
  id: 1,
  name: "Subramanian",
  city: "Chennai"
};
Object.freeze(employee);
let updatedEmployee = updateCity(employee, "Delhi");
console.log(employee);
console.log(updatedEmployee);

let list = [1, 2, 3];
//Test whether list is mutable or not
Object.freeze(list);
//list.push(4);
console.log(list.concat([4]));
//console.log(list);
