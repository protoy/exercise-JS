        function combine(n, k) {
            if (k == 1 || k==n*2-1) {
                return 1;
            }
            if (k<1 || k>n*2-1) {
                return 0;
            } else { // 其他情况用公式实现
                return combine(n-1,k-2) + combine(n-1, k-1) + combine(n-1, k);
            }
        }

        function put(len) {
            for(let i=1; i<len; i++){
                for (let j =1; j <= 2*i-1; j++) { // 遍历每一行
                    if(combine(i,j)%2 == 0){
                        console.log(i+' '+j);
                    }
                    document.write(combine(i,j)+" ");
                }
                document.write("<br/>");
            }
        }
        put(6);