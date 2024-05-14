function sorting(word) {
    let slowo = word.split("");
    let sortuj = slowo.sort();
    let posortowane = sortuj.join("");
    console.log(posortowane);
};

sorting("Akademia108");