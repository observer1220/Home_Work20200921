// 功能函式：九九乘法表
function multiTable() {
    for (i = 3; i < 16; i++) {
        for (j = 1; j < 16; j++) {
            console.log(i * j);
        }
    }
}

function init() {
    multiTable();
}

init()