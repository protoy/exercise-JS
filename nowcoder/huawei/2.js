        line = "qhbrivaighqmgafhthxicdiixpefhwwefdebwczswqqdjxulhuhceqrxechddtlbbltddhcexrqechuhluxjdqqwszcwenakceymkxfqpqxctbsousrwwhooxjtcqnvb"
        if (line.length <= 1) {
            console.log(line.length);
        }
        var arr = line.split('');
        var res = 0;
        for (var i = 1; i < arr.length - 1; i++) {
            if (arr[i] == arr[i+1]) {
                var start = i;
                var end = i + 1;
                var len = 0;
                while (start >= 0 && end <= arr.length && (arr[start] == arr[end])) {
                    len += 2;
                    start--;
                    end++;
                }
                if (len > res) {
                    res = len;
                }
            }
            if (arr[i-1] == arr[i+1]) {
                start = i - 1;
                end = i + 1;
                var len = 1;
                while (start >= 0 && end <= arr.length && (arr[start] == arr[end])) {
                    len += 2
                    start--;
                    end++;
                }
                if (len > res) {
                    res = len;
                }
            }
        }
        console.log(res);