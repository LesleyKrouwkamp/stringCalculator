// function add(string_number){
    

//     if (string_numbers == "") 
//     return 0;}

       let sum = 0;
//     const individual_numbers = numbers.split(/[,\n]/);
//     individual_numbers.forEach(element => {
//       const num = parseInt(element);
//       if (!isNaN(num)) {
//         result = result + num;
//       }
//     });
  
//     return result;
  
// }


function add(){
}
add.prototype.add = function(string_numbers) {
  this.number = string_numbers;
  if (this.number.includes('-')) {
    throw new Error('negatives not allowed');
  }
  
  numbers = this.number.replace(/(\r\n|\n|\r)/gm,",");
  if (numbers == '') {
    return 0;
  } else if(numbers.length === 1) { 
    return (parseInt(numbers));
  } else {
    res = numbers.split(',');
    var total = 0;
    var arrayLength = res.length;
      for (var i = 0; i < res.length; i++) {
        total = total + parseInt(res[i]);
      }
      return total;   
  }
};