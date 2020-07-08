    var line='021Abc9000';
    console.log(check(line));


function check(str){
    if(str.length<=8){
        return 'NG';
    }
        for (let i = 0; i < str.length - 3; i++) {
        let tempStr = str.substr(i, 3)
        if (str.lastIndexOf(tempStr) > i) {
            return 'NG'
        }
    }
    var count = 0;
    const upperCaseReg = /[A-Z]/
    const lowerCaseReg = /[a-z]/
    const numCaseReg = /[0-9]/
    if (upperCaseReg.test(str)) {
        count++;
        str.replace(upperCaseReg,'');
    }
    if (lowerCaseReg.test(str)) {
        count++;
        str.replace(upperCaseReg,'');
    }
    if (numCaseReg.test(str)) {
        count++;
        str.replace(upperCaseReg,'');
    }
    if(count<3 && str.length == 0){
        return 'NG';
    }
    return 'OK';
}