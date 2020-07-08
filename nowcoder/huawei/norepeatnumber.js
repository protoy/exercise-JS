        line="9876673";
        var arr = line.split('').reverse();
        var res = new Array;
        for (var i = 0; i < arr.length; i++) {
            if (!res.includes(arr[i])) {
                console.log(arr[i]);
                res.push(arr[i]);
                console.log(res);
            }
        }
        console.log(res.join(''));