        const str1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        const str2 = 'BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza2345678901';
        while (line = readline()) {
            var res = '';
            for(var i = 0; i<line.length; i++){
                res += str2[str1.indexOf(line[i])];
            }
            console.log(res);
            line = readline();
            res = '';
            for(var i = 0; i<line.length; i++){
                res += str1[str2.indexOf(line[i])];
            }
            console.log(res);
        }