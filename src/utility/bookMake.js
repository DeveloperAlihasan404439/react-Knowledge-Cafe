const getBookMark = ()=>{
    const getData = localStorage.getItem('bookMake')
    if(getData){
        return JSON.parse(getData)
    }
    return []
}

const saveBookMark = bookMark=>{
 const bookMarkData = JSON.stringify(bookMark)
 localStorage.setItem('bookMake',bookMarkData)
}
const addBookMark = id=>{
    const bookData = getBookMark()
    bookData.push(id)
    saveBookMark(bookData)
}
export{addBookMark, getBookMark}