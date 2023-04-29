var generator = require('generate-password');

function generateRandomPassword() {
var password = generator.generate({
	length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
});

console.log(password);
}

generateRandomPassword()