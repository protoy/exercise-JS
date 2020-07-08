        var cin1 = 'abc';
        var cin2 = '123456789';

        while (cin1.length > 8) {
            console.log(cin1.substr(0, 8));
            cin1 = cin1.substr(8);
        };
        if (cin1.length > 0) {
            console.log((cin1 + '00000000').substr(0, 8));
        }
        while (cin2.length > 8) {
            console.log(cin2.substr(0, 8));
            cin2 = cin2.substr(8);
        }
        if (cin2.length > 0) {
            console.log((cin2 + '00000000').substr(0, 8));
        }