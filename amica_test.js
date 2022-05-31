process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function(data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function solve(prices, k, X) {
    return (prices.length - 1 - k) * X;
}

process.stdin.on('end', function() {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");

    var idx_ = 0;
    var T = parseInt(input_[idx_++].trim(), 10);
    for (var t_i = 0; t_i < T; t_i++) {
        var N = parseInt(input_[idx_++].trim(), 10);
        var k = parseInt(input_[idx_++].trim(), 10);
        var X = parseInt(input_[idx_++].trim(), 10);
        var prices = input_[idx_++].trim().split(' ').map(function(el) {
            return parseInt(el, 10);
        });

        var out_ = solve(prices, k, X);
        process.stdout.write(out_.toString());
        process.stdout.write('\n');
    }

    process.exit();

});