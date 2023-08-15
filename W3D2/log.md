# 6강 JS(ES6+) Part 2.1 and 2.2

- let , const var
<table border="0">
 <tr>
    <td><b style="font-size:20px"></b>let</td>
    <td><b style="font-size:20px"></b>const</td>
    <td><b style="font-size:20px"></b>var</td>
 </tr>
 <tr>
  <td>
es6이후

변수

블록 스코프

재선언x

호이스팅x

</td>
  <td>
  es6 이후

상수 (사용 권장)

블록 스코프

재선언x

호이스팅x

</td>
  <td>
  es5 이전

변수 (사용 권장x)

함수 스코프

재선언o

호이스팅o</td>

 </tr>
</table>

- Operator
  - Assignment
    - = += -= \*= /=
  - Comparison
    - ==(쓰지 마세요), === 타입까지 확인.
  - Arithmetic
    - num++ num—
  - Logical
    - and &&, or ||
  - Conditional
    - (condition) ? (then) : (else)

타입 변환과 타입 강제(type coercion)

```jsx
const birthYear = '1990'; // string type
console.log(Number(birthYear) + 10);
// 여기서 number를 wrapper라고 한다.

console.log(Number("hello");
//=> NaN ( 에러가 아니다. 바꾸지 못하면 이렇게 리턴)
//다른 언어의 경우는 에러

console.log("나는" + 30 + "살");
// num to string

const stringIsTrue ='true';
const booleanIsTrue = true;
const numberIsTrue = 1;

console.log(stringIsTrue == booleanIsTrue);
//=> 자동 형변환, string은 NaN으로
//=> true가 1로.
```

자동 형변환을 통해 발생하는 Truthy와 Falsy

자동형변환은 한쪽이 boolean일 때

```jsx
const a5 = "cat" && "dog"; //true && 'dog' -> 'dog'
//boolean이 아닐때, 왼쪽이 true면 오른쪽을 유지한다.
const a6 = false && "cat"; //false
const a7 = "cat" && false; //false

const o5 = "cat" || "dog"; //오른쪽이 truthy면 왼쪽 return
const o6 = false || "cat"; // or니까 true 있으니까 true로 가야함
// 그니까 'cat'
const o7 = "cat" || false; //cat
```

### Truthy

- Boolean으로 true로 인식
- Falsy 빼고 전부
- “0”
- “false”
- [] / { }

### Falsy

- false
- 0, 0n
- ‘’, “”(빈문자열)
- null undefined NaN

# 7강 JS(ES6+) Part 3.

- 함수
- 함수 선언식과 함수 표현식
- 화살표 함수

### 함수

: 함수는 **입력과 출력**이 존재하는 로직의 단위

자신의 외부 코드가 호출할 수 있는 하위 프로그램

함수는 일급 객체.

```jsx
function logger() {
  console.log("logging...");
}
// $ node app.js  실행x 왜? 선언은 했지만 호출은 안했다.

logger();
// $ node app.js
// -> logging...

logger();
logger();
// 재사용가능

function buyBananas(bananaCount) {
  // <<== parameter
  const fruits = `바나나 ${bananaCount}개를 샀다.`;
  return fruits;
}

console.log(buyBananas(5)); //<= arguments
```

### 함수 선언식과 함수 표현식

**function declaration**

function 함수명 () { 로직}

호이스팅 영향 받음

선언 위에서 호출 가능

함수 이름 중복 가능 위험.

**function expression**

const 함수명 = function () {}

호이스팅 영향 받지 않음

클로저, 콜백 사용 가

**화살표 함수**

:사용을 권장. 간결하기 때문.

## const 함수명 = () ⇒ { } ; (권장)

### 코드는 간결하게, 남이 알아볼 수 있게.

# 8강 JS(ES6+) Part 4.

- 배열
- 배열의 메서드
- 오브젝트
- 오브젝트의 메서드

<table border="0">
 <tr>
    <td><b style="font-size:20px">Array</b></td>
    <td><b style="font-size:20px">Object</b></td>
 </tr>
 <tr>
  <td>
  길이, 타입 제한 x

키를 가지고 있지 않다.

순서를 고려한다.

인덱스로 값을 참조한다.

const newArray = [1,2,3];

</td>

<td>
키를 가지고 있다.

순서를 고려하지 않는다.

키로 값을 참조한다.

const newObject = {a:2};</td>

 </tr>
</table>

```jsx
//배열이름에 복수형 좋다.
// arr.length : 길이
// index는 0부터.
// const 선언에서 배열 내부 변화 가능.. 왜? 어떻게?

// const agesArray = birthYearArray.map(
// birthYearValue => 2023 - birthYearValue);
**// map 진짜 많이 씁니다.**

//methods

//add element
arr.push('elem'); // 맨뒤
arr.unshift(elem): // 맨
//remove element
arr.pop(); // 맨뒤 제거
arr.shift();// 맨 앞 제거

//get index
arr.indexof(elem); // return index
// 동일한 값들의 경우 첫번째 index
arr.lastIndexof(elem);
//마지막 index

arr.includes(elem); // return boolean

// is contain
arr.includes(elem); // return boolean

//concat array
[...arr1, ...arr2]
// ... rest parameter, spread operator
```

```jsx
//Object

const profile = {
	firstName: 'Kev',
	lastNmae: 'Kim',
}
obj1[key] => value

//obj concat
{...obj1, ...obj2}

Object.keys(obj3).map(key => obj3[key]);
//return arr of values

```

## Q&A

1. short circuit evaluation  
   && || 연산에서 short circuit evaluation을 배웠는데 이 개념을 고려해서 코드를 짜야하는 경우가 있을까?

### 회고

타입 변환이 어렵다.
