process.stdin.resume()
console.log('Enter the data to be displayed ');
process.stdin.on('data', function(data) {
    let str = data.reverse().toString();
    process.stdout.write(str.trim() + '\n');
})