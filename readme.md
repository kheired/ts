# TypeScript 数据类型

### `boolean`  布尔值
```typescript
let isDon: boolean = false;
let isGood: boolean = true;
```
### `number`  数字（tsc中所有数字都是浮点数， 类型为`number`）
- 除了支持`十进制`和`十六进制`字面量， TypeScript还支持 ECMAScript2015 中引入的`二进制`和`八进制`字面量。
```typescript
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;
```
### string 字符串
```typescript
let name_s: string = 'Bob';
name_s = 'Smith';
```
- 也可以用模板字符串
```typescript
let name_ss: string = `Gene`;
let age_ss: number = 23;
let sentence_ss: string = `Hello, my name is ${name_ss}.
  I will be ${age_ss + 1} years old next year.`;
```
### 数组
- TypeScript有两种方式定义数组

1. 在元素类型后面直接加上[],表明由此类型元素组成的一个数组
```typescript
let list1: number[] = [1, 2, 3, 4];
```
2. 使用数组泛型：`Array<元素类型>`
```typescript
let list2: Array<number> = [1, 2, 3, 4, 5];
```
### 元祖 `Tuple`
- 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同：
```typescript
// Declare a tuple type
let x:[string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello'] // Error
```
- 这样，当访问一个已知索引的元素，会得到正确的类型：
```typescript
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```
- 当访问一个越界的元素，会使用联合类型替代（必须是前面声明过的）：
```typescript
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```
### 枚举
- ``enum``类型是对JavaScript标准数据类型的一个补充。像C#等其他语言一样。使用枚举类型可以为一组数值赋予有好的名字。
```typescript
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
```
- 默认情况下，下标从`0`开始；也可以手动指定成员的下标，




























