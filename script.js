// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
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
        throw new Error("At least one character type must be selected.");
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

