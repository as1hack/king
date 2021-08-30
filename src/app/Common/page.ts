/**
 * An object used to get page information from the server
 */
 export class Page {
    //The number of elements in the page
    pageIndex: number = 0;
    //The total number of elements
    totalCount: number = 0;
    //The current page number
    pageSize: any = 10;
    // size:any=10;
    //The total number of pages
    totalPages: number = this.pageSize / this.totalCount;
}