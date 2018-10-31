/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for(let i=0;i<array.length;i++){
        fn.call(this,array[i],i,array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArr=[];
    for(let i = 0;i<array.length;i++){
        newArr.push(fn.call(this,array[i],i,array));
    }
    return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let res = initial||array[0];
    for(let i = (res==array[0])?1:0;i<array.length;i++){
        res = fn.call(null,res,array[i],i,array);
    }
    return res;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arrUpperProps = [];
    for(var key in obj){
        arrUpperProps.push(key.toUpperCase());
    }
    return arrUpperProps;
}
//console.log(upperProps({ name: 'Сергей', lastName: 'Петров' }));
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from , to) {
    let resultArr = [];
    from = (from === undefined)?0:((from < 0)?((array.length + from >= 0) ? array.length + from : 0):from);
    to = (to === undefined)?array.length:((to > array.length - 1)?array.length:((to < 0)?array.length + to:to));

    for (let i = from; i < to; resultArr.push(array[i++])) {}
    return resultArr;
}
//console.log(slice([1,2,3,4],0,-99999));
//console.log([1,2,3,4].slice(0, 0));

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj,{
        set(obj,prop,value){
            obj[prop]=value*value;
            return true;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
