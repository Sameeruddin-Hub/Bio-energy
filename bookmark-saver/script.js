const addBookmarkBtn = document.getElementById('add-bookmark');
const bookmarkList = document.getElementById('bookmark-list');
const bookmarkNameInput = document.getElementById('bookmark-name');
const bookmarkUrlInput = document.getElementById('bookmark-url');

// document.addEventListener('DOMContentLoaded', loadBookmarks)

// addBookmarkBtn.addEventListener('click', function () {
//     const name = bookmarkNameInput.value.trim()
//     const url = bookmarkUrlInput.value.trim()
//     if (!name || !url) {
//         alert("please enetr both Name and url")
//         return
//     } else {
//         if (!url.startsWith('https://') || !url.startsWith("https://")) {
//             alert('Please eneter a valid URL starting with http:// or https://')
//             return
//         }

//         addBookmark(name, url)
//         saveBookmark(name, url)
//         bookmarkNameInput.value = ''
//         bookmarkUrlInput.value = ''
//     }
// })

// function addBookmark(name, url) {
//     const li = document.createElement('li')
//     const link = document.createElement('a')
//     link.href = url;
//     link.textContent = name;

//     link.target = "_blank";

//     const removeButton = document.createElement('button')
//     removeButton.textContent = "Remove"
//     removeButton.addEventListener('click', function () {
//         bookmarkList.removeChild(li)
//         removeBookmarkFromStorage(name, url)
//     })

//     li.appendChild(link)
//     li.appendChild(removeButton)

//     bookmarkList.appendChild(li);
// }
// function getBookmarksFromStorage() {
//     const bookmarks = localStorage.getItem('bookmarks')
//     return bookmarks ? JSON.parse(bookmarks) : []
// }
// function saveBookmark(name, ulr) {
//     let bookmarks = getBookmarksFromStorage()
//     bookmarks.push({ name, ulr })
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
// }

// function loadBookmarks() {
//     const bookmarks = getBookmarksFromStorage()
//     bookmarks.forEach((bookmark) => {
//         addBookmark(bookmark.name, bookmark.url)

//     })
// }
// function removeBookmarkFromStorage(name, url) {
//     let bookmarks = getBookmarksFromStorage()
//     bookmarks = bookmarks.filter((bookmark) => bookmark.name !== name || bookmark.url !== url);
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
// }

// document.addEventListener('DOMContentLoaded', loadBookmarks)
let bookMarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
console.log(bookMarks)


addBookmarkBtn.addEventListener('click', loadBookmarks)

function loadBookmarks() {
    let name = bookmarkNameInput.value;
    let url = bookmarkUrlInput.value

    if (!bookmarkNameInput.value && !bookmarkUrlInput.value) {
        alert('Please add the Name and URL')
    } else {
        if (url.startsWith('https://') || url.startsWith('http://')) {


            bookMarks.push(
                {
                    name,
                    url
                }
            )

            savetoLocalstorage(bookMarks)
            let li = document.createElement('li');
            let link = document.createElement('a')
            link.href = url;
            link.textContent = name;
            li.appendChild(link)
            bookmarkList.appendChild(li);
            bookmarkNameInput.value = '';
            bookmarkUrlInput.value = '';

            const removeBtn = document.createElement('button')
            removeBtn.textContent = 'X';
            li.appendChild(removeBtn);
            savetoLocalstorage(bookMarks);
            removeBtn.addEventListener('click', removebookmark)
        } else {
            alert('give correct url')
        }
    }

    function savetoLocalstorage(bookmarks) {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    // let bookMarks = getBookmarksFromStorage()
    // if (bookMarks.length === 0) {
    //     alert('No bookmarks. Start Creating your favourite bookmarks !')
    //     return
    // } else {



    // }

    // console.log('came down');

    // bookMarks.forEach((bookMark) => {


    // })
}

// function getBookmarksFromStorage() {

//     const bookMarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
//     return bookMarks
//     // console.log(bookMarks, 'working')
// }