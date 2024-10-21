// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let passwordSet = "";
    if (options.includeUppercase) passwordSet += uppercase;
    if (options.includeLowercase) passwordSet += lowercase;
    if (options.includeNumbers) passwordSet += numbers;
    if (options.includeSpecialChars) passwordSet += specialChars;

    if(passwordSet === "") {
        alert("silahkan masukan satu atau lebih kategori");
        return "";
    }

    if (length < 8 || length > 128) {
        alert ('silahkan masukan sesuai dengan rentang dari 8 sampai 128');
        return '';
    }

    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * passwordSet.length);
        password += passwordSet[randomIndex];
    }
     return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
    document.getElementById("generateBtn").addEventListener("click", function() {
    // Get the desired length of the password
    const length = parseInt(document.getElementById("length").value);

    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked
    };
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').innerText = password;
 });
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', function() {
    const password = document.getElementById('passwordOutput').innerText;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text', err);
        });
    }
});
