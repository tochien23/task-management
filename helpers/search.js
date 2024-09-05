module.exports = (query) => {
    let objectSearch = {
        keyword: "",
        regex: ""
    }

    if (query.keyword) {
        objectSearch.keyword = query.keyword;

        const regax = new RegExp(objectSearch.keyword, "i");

        objectSearch.regex = regax;
    }

    return objectSearch;
}