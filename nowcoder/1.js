        var num = 6;
        var cub = num * num * num;
        var arr = new Array();
        var sum = 0
        //通项公式为cub = num*arr[0]+n*(n-1);
        arr[0] = (cub - num * (num - 1)) / num;
        for (var i = 0; i < num; i++) {
            arr[i] = arr[0] + 2 * i;
            sum += arr[i];
        }
        if (sum === cub) {
            console.log(arr.join('+'));
        }