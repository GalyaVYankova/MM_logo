function solve(input) {
    let n = +input;
    if (n <= 2 || n >= 10000 || n%2 == 0) {
     console.log(`Имаш ограничение: 2 < N < 10000, N е винаги нечетно число`); 
     return;
    } 

    for (let i = 0; i <= n/2; i++) {
        console.log(("-".repeat(n - i))
            + ("*".repeat(2*n/2 + i))
            + ("*".repeat(i))
            + ("-".repeat(n - 2*i))
            + ("*".repeat(2*n/2 + i))
            + ("*".repeat(i))
            + ("-".repeat(2*n - 2*i))
            + ("*".repeat(2*n/2 + i))
            + ("*".repeat(i))
            + ("-".repeat(n - 2*i))
            + ("*".repeat(2*n/2 + i))
            + ("*".repeat(i))
            + ("-".repeat(n - i)))
    }
    for (let i = 0; i <= n/2; i++) {
        console.log(("-".repeat(n/2 - i))
            + ("*".repeat(n))
            + ("-".repeat(i+1))
            + ("-".repeat(i))
            + ("*".repeat(2*n - 2*i-1))
            + ("-".repeat(i+1))
            + ("-".repeat(i))
            + ("*".repeat(n))

            + ("-".repeat(n - 2*i - 1))
            + ("*".repeat(n))
            + ("-".repeat(i+1))
            + ("-".repeat(i))
            + ("*".repeat(2*n - 2*i-1))
            + ("-".repeat(i+1))
            + ("-".repeat(i))
            + ("*".repeat(n))
            + ("-".repeat(n/2 - i)))
    }
}

solve(5)