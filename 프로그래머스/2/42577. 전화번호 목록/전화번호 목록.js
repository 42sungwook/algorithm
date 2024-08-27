function solution(phone_book) {
    phone_book.sort();
    const len = phone_book.length - 1;
    
    for (let i = 0; i < len; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}