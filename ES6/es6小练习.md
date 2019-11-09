1. 写一个函数dig,

```js
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));

//输出
//some data
//undefined
//https://images.dog.ceo/breeds/african/n02116738_1105.jpg
```

2. 写一个函数matches,比较两个对象 看是否第一个对象包含第二个对象的所有属性

```js
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
```

3. 根据所传参数筛选数组,返回筛选的数组

```js
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));  //["b","b"]
let arra2 =  ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra2, 'b')); //["a","c","a","c"]
```

4. 从数组里面截取一段元素

```js
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3]));  //["b","d"]
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));  //[5]
```

5. 深度克隆（用es6语法）

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log(b)
//输出
//{"foo":"bar","obj":{"a":1,"b":2}}
```