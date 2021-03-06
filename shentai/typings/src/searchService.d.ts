export = searchResult

declare class searchResult {
    constructor(url: string, results: Array<Object>, pagesCount: number, allDoujinsCount: number)

    results: Array<{id: String, titles: { english: String }, cover: String}>
    allDoujinsCount: number
    lastPage: number
    currentPage: number

    /**
     * 
     * **Method return a Promise, use .then(), or variable**
     * @returns Next Page of Search
     */

    next(): Promise<searchResult>
    
    /**
     * 
     * **Method return a Promise, use .then(), or variable**
     * @returns Previous Page of Search
     */

    prev(): Promise<searchResult>

    /**
     * 
     * **Method return a Promise, use .then(), or variable**
     * @returns indicated page
     */

    getPage(page: number): Promise<searchResult>

    /**
     * 
     * **Method return a Promise, use .then(), or variable**
     * @returns First Page of Search
     */

    first(): Promise<searchResult>

    /**
     * 
     * **Method return a Promise, use .then(), or variable**
     * @returns Last Page of Search
     */

    last(): Promise<searchResult>
}