console.log('Hello, world!');
let book = {
    title: 'JavaScrip本も入門',
    price: 2980,
    publisher: '技術評論社',
};
console.log(book.title);

let x = 15;
if (x >= 10){
    console.log('変数xは10以上です。');
} else {
    console.log('変数xは10未満です。');
}
let rank = 'B';
switch(rank) {
    case 'A' :
        console.log('Aクラスです。');
        break;
        case 'B' :
            console.log('Bクラスです。');
            break;
            case 'C' :
                console.log('Cくらすです。');
                break;
                default :
                console.log('クラス外です。');
                break;
}

let i = 5;

while(i < 10) {
    console.log(`iの値は${i}`);
    i++;

}
let ij = 5;
do {
    console.log(`iの値は${ij}`);
    i++;

}while(ij < 10);
for (let i = 5; i < 10; i++) {
    console.log(`iの値は${i}`); 
    
}



for (let i =0; i < 15; i++) {
    console.log("おはよう");
}

const person = {
    name: "田中",
    age: "41"
};
console.log(person.name + "さんは" + person.age + "さいです");