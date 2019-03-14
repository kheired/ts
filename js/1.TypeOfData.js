// TypeScript 数据类型
// boolean  布尔值
var isDon = false;
var isGood = true;
// number  数字（浮点数）
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// string 字符串
var name_s = 'Bob';
name_s = 'Smith';
// 也可以用模板字符串
var name_ss = "Gene";
var age_ss = 23;
var sentence_ss = "Hello, my name is " + name_ss + ".\n  I will be " + (age_ss + 1) + " years old next year.\n";
// 数组
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
console.log('c', c, colorName);
//# sourceMappingURL=1.TypeOfData.js.map