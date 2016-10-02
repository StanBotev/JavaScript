function makingUsernames(emails) {
    let result =[];
    for (let email of emails) {
        let [firstPart, secondPart] = email.split('@');
        let username = firstPart + '.';
        let parts = secondPart.split('.');
        parts.forEach(p => username += p[0]);
        result.push(username);
    }
    console.log(result.join(', '));
}

makingUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);