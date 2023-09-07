export function generateRandomFirstName() {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const firstNameLength = Math.floor(Math.random() * 3) + 4; // Random length between 4 and 6 characters
    let firstName = '';

    for (let i = 0; i < firstNameLength; i++) {
        if (i % 2 === 0) {
            // Add a consonant for even positions
            firstName += consonants.charAt(Math.floor(Math.random() * consonants.length));
        } else {
            // Add a vowel for odd positions
            firstName += vowels.charAt(Math.floor(Math.random() * vowels.length));
        }
    }

    // Capitalize the first letter
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    return firstName;
};

export function generateRandomLastName() {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const lastNameLength = Math.floor(Math.random() * 3) + 5; // Random length between 5 and 7 characters
    let lastName = '';

    for (let i = 0; i < lastNameLength; i++) {
        if (i % 2 === 0) {
            // Add a consonant for even positions
            lastName += consonants.charAt(Math.floor(Math.random() * consonants.length));
        } else {
            // Add a vowel for odd positions
            lastName += vowels.charAt(Math.floor(Math.random() * vowels.length));
        }
    }

    // Capitalize the first letter
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return lastName;
};