// let buf = Buffer.from("Hello");
// console.log(buf.toString());
// console.log(buf[0]);
let buf1=Buffer.alloc(10);
console.log(buf1.length);
// let buf2=Buffer.allocUnsafe(10);
// console.log(buf2);
// let buf=Buffer.from("Node-Js");
// console.log(buf);
// console.log(buf.toString());
// 5 bytes ची safe buffer तयार कर
// आणि:
// त्याचा length print कर
// complete buffer print कर
// 👉 वापर: Buffer.alloc()
// let buf=Buffer.alloc(5);
// console.log(buf.length);
// 10 bytes ची buffer तयार कर
// त्यात "Hi" लिही
// आणि output "Hi" असा येईल असं कर
// 👉 वापर: alloc + write + toString
// let buf=Buffer.alloc(5);
// buf="Hi";
// console.log(buf);
// array [72, 101, 108, 108, 111] पासून buffer तयार कर
// आणि output "Hello" print कर
// 👉 hint: ASCII values
// let arr=[72,101,108,108,111];
// let buf=Buffer.from(arr);
// console.log(buf.toString());
// Buffer वापरून:
// "Hello Node" ला binary मध्ये convert कर
// मग परत text मध्ये आण

// let buf=Buffer.from("hello node");
// let ascii=buf
// let str=Buffer.from(ascii)
// console.log(str.toString());
