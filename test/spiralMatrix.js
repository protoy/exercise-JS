let num = 7 //length of matrix

let total = num * num
//initial the matrix
let arr = []
for(let i = 0 ; i< num; i++){
    arr[i] = []
}
let line = 0 
let column = 0

let count = 1

//boundary of matrix array
rightBorder = num-1
bottomBorder = num-1
leftBorder = 0
topBorder = 0

let levelOfMatrix = num/2 + num%2

for(;levelOfMatrix>0;levelOfMatrix--){
    topBorder++
    while(column<=rightBorder){
        arr[line][column] = count
        column++
        count++
    }
    //
    column--//clear overflow column
    rightBorder--
    line++
    while(line<=bottomBorder){
        arr[line][column] = count
        line++
        count++
    }
    line--//clear overflow line
    bottomBorder--
    column--
    while(column>=leftBorder){
        arr[line][column] = count
        column--
        count++
    }
    column++//clear overflow column
    leftBorder++
    line--
    while(line>=leftBorder){
        arr[line][column] = count
        line--
        count++
    }
    line++//clear overflow line
    topBorder++
    column++
}