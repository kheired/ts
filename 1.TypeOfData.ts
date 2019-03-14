// TypeScript 数据类型

// boolean  布尔值
let isDon: boolean = false;
let isGood: boolean = true;

// number  数字（浮点数）
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;

// string 字符串
let name_s: string = 'Bob';
name_s = 'Smith';
// 也可以用模板字符串
let name_ss: string = `Gene`;
let age_ss: number = 23;
let sentence_ss: string = `Hello, my name is ${name_ss}.
  I will be ${age_ss + 1} years old next year.
`;
// 数组
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

 // 枚举
enum Color {Red = 2, Green = 5, Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log('c',c, colorName);









