// 功能函式：九九乘法表
function multiTable() {
    for (i = 3; i < 16; i++) {
        for (j = 1; j < 16; j++) {
            console.log(i * j);
        }
    }
}

// 功能函式：BMI計算機
function BMICalculator() {
    let h = 178 / 100; // h = height
    let w = 70; // w = weight
    let BMI = (w / (h * h)).toFixed(1);
    console.log(BMI);
}

// 功能函式：加法累計
let sum=0;
function addTable() {
    for (i = 0; i < 11; i++) {
        sum+=i
        console.log(sum)
    }
}

function init() {
    multiTable();
    BMICalculator();
    addTable()
}

init()