let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  if(typeof firstNum != 'number'){
    throw new IncorrectNumError('First num is not a number', firstNum);
  }
  if(typeof secondNum != 'number'){
    throw new IncorrectNumError('Second num is not a number', secondNum);
  }
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
let output = document.querySelector('output').textContent;


// Console log
errorBtns[0].addEventListener('click', e => {
  // Recalculate output
  output = document.querySelector('output').textContent; 
  console.log("Arithmetic output:" + output);
});

// Console error
errorBtns[1].addEventListener('click', e => {
  output = document.querySelector('output').textContent; 
  console.error("Arithmetic output:" + output);
});

// Console count
errorBtns[2].addEventListener('click', e => {
  console.count("arithmetic");
});

// Console warn
errorBtns[3].addEventListener('click', e => {
  output = document.querySelector('output').textContent; 
  if(output > 10){
    console.warn("Output is greater than 10!");
  }else {
    console.warn("Output is not greater than 10!");
  }
  
});

// Console assert
errorBtns[4].addEventListener('click', e => {
  output = document.querySelector('output').textContent; 
  const reason = "We do not like the number 5"; 
  const badVal = 5; 
  console.assert(output != badVal , {output, badVal, reason});
});

// Console clear
errorBtns[5].addEventListener('click', e => {
  console.clear();
});

// Console dir
errorBtns[6].addEventListener('click', e => {
  output = document.querySelector('output'); 
  console.dir(output);
});

// Console dirxml
errorBtns[7].addEventListener('click', e => {
  let oForm = document.querySelector('fieldset');
  console.dirxml(oForm);
});

// Console group start
errorBtns[8].addEventListener('click', e => {
  console.group("Errors");
});

// Console group end
errorBtns[9].addEventListener('click', e => {
  console.groupEnd("Errors");
});

// Console table
errorBtns[10].addEventListener('click', e => {
  console.table([
    {
      name: 'Rhubarb pie',
      contributer_id: '75346189',
      recipe_id: '79578623'
    },
    {
      name: 'sweet salty grilled cheese sandwich',
      contributer_id: '80498782',
      recipe_id: '27205316'
    },
    {
      name: 'taco pie in pie crust',
      contributer_id: '23850148',
      recipe_id: '15313464'
    }
  ]);
});

// Start timer
errorBtns[11].addEventListener('click', e => {
  // Check time between clicking 'Start Timer' button and 'End Timer' button
  console.time('clicking');
});

// End timer
errorBtns[12].addEventListener('click', e => {
  console.timeEnd('clicking');
});

// Console trace
errorBtns[13].addEventListener('click', e => {
  console.trace();
});

// Trigger global error
errorBtns[14].addEventListener('click', e => {
  nonExistantFunction();
});

// Try and catch button 
errorBtns[15].addEventListener('click', e => {
  let data = '{"name": "Super Hot Red Truck", "catalog_id" : 198293}';
  try {
    let item = JSON.parse(data);
    let usage = item.usage;
    if(item.usage == undefined){
      throw error
    }
  } catch (error) {
    console.log("We have an error:" + error);
  }
});

class IncorrectNumError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause; 
    this.name = "IncorrectNumError";
  }
}

