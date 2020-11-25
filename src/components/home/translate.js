export const translate = [
    {id: 0, date: "12/1/20-12/5/20", lang: "Spanish", happy: "felices vacaciones", img: "spain", audio: "spanish", backupLink: "https://translate.google.com/?ui=tob&sl=en&tl=es&text=happy%20holidays&op=translate"},
    {id: 1, date: "12/6/20-12/10/20", lang: "French", happy: "joyeuses fêtes", img: "france", audio: "french", backupLink: "https://translate.google.com/?ui=tob&sl=en&tl=fr&text=happy%20holidays&op=translate"},
    {id: 2, date: "12/11/20-12/15/20", lang: "Chinese", happy: "节日快乐", img: "china", audio: 'chinese', backupLink: "https://translate.google.com/?ui=tob&sl=en&tl=zh-CN&text=happy%20holidays&op=translate"},
    {id: 3, date: "12/16/20-12/20/20", lang: "German", happy: "schöne Ferien", img: "germany", audio: "german", backupLink: "https://translate.google.com/?ui=tob&sl=en&tl=de&text=happy%20holidays&op=translate"},
    {id: 4, date: "12/21/20-12/25/20", lang: "Italian", happy: "Buone vacanze", img: "italy", audio: "italian", backupLink: "https://translate.google.com/?ui=tob&sl=en&tl=it&text=happy%20holidays&op=translate"},
]

export const questionProgress = (obj) => {
    let completionStatus = [];
    let counter = 0;
    let item = 1;
    
    for (let i = 0; i <= 4; i++) {
        for (let i = item; i <= (item + 4); i++) {
            if( obj[i] === true) {
                counter++;
            }
        }
        completionStatus.push(counter);
        counter = 0;
        item += 5;
    }   
    return completionStatus;
}