function slugifyName(str) {
    let lstr = str.toLowerCase();
    let arrStr = lstr.split(" ");
    for (let i = 0; i < arrStr.length - 1; i++) {
        lstr = lstr.replace(" ", "-");
    }
    return lstr;
}

module.exports = {
    slugifyName
}