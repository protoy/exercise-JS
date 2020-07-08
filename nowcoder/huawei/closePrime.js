        var input = 54;

        var middle = Math.floor(input / 2);

        for (let i = middle; i>=1; i--) {
            if(isPrime(i)){
                let j = input - i;
                if(isPrime(j)){
                    console.log(i);
                    console.log(j);
                    break;
                }
            }
        }

        function isPrime(num) {
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num%i == 0) {
                    return false;
                }
                
            }
            return true;
        }