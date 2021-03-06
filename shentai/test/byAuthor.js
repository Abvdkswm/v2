const API = require('../')
const sHentai = new API

async function test() {
    // Getting Doujins byAuthor
    let doujins = await sHentai.byAuthor('namehere')
    console.log(doujins.results);

    // or

    await sHentai.byAuthor('namehere').then(doujins => console.log(doujins.results));

    // Next Page
    let nextPage = await doujins.next()
    console.log(nextPage.results);

    // or

    let nextPage = await doujins.next().then(doujins => console.log(doujins.results))

    // Previous Page
    let prevPage = await doujins.prev()
    console.log(prevPage.results);

    // Last Page
    let lastPage = await doujins.last()
    console.log(lastPage.results);

    // First Page
    let firstPage = await doujins.first()
    console.log(firstPage.results);

    // getPage
    let selectedPage = await doujins.getPage(2)
    console.log(selectedPage.results);
    
    // Check for all errors in a library without catch(i stop using reject, when after 15^ node.js, Promise use default strict mode for reject)
    if (doujins.status) return doujin.message;
}
test()