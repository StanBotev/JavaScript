function emailValidation([email]) {
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
    let result = emailPattern.test(email);

    if (result) {
        return  "Valid";
    } else {
        return 'Invalid';
    }
}