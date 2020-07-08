        var N = 4;
        var arr = new Array();
        for (var i = 0; i < N; i++) {
            arr[i] = new Array(N - i)
        }
        var max = (N + 1) * N / 2
        var q = p = 0
        for (var i = 1; i <= max; i++) {
            arr[q][p] = i
            if (q == 0) {
                q = p + 1
                p = 0
            } else {
                q--
                p++
            }
        }
        for(i = 0; i< N; i++){
            console.log(arr[i].join(' '));
        }