import noUiSlider from "nouislider/dist/nouislider";
const dayRange = document.getElementById('day-range');


if(dayRange){
  const input0= document.getElementById('day-0');
  const input1= document.getElementById('day-1');
  const btnReset = document.querySelector('.form-filter__reset');
  const inputArr = [input0, input1];
  const startRange = [0, 30]
  noUiSlider.create(dayRange, {
    start: startRange,
    connect: true,
    range: {
      'min': [0],
      'max': [30]
    }
  });
  dayRange.noUiSlider.on('update', function(values, handle){
    inputArr[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    dayRange.noUiSlider.set(arr);
  };

  inputArr.forEach((el, index) => {
    el.addEventListener('input', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
  btnReset.addEventListener('click', (e)=>{
    dayRange.noUiSlider.set(startRange)
  })

}
