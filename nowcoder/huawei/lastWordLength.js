        line = 'hello wrold';
        var arr = line.split('');
        var temp = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != ' ') {
                temp++;
            } else {
                temp = 0;
            }
        }
        console.log(temp);