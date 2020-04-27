let str = String.raw`Hi\n${2 + 3}!`
console.log(str)// 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"
