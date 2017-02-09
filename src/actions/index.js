export function selectBook(book) {
  // selectBook is a action creator and needs to return an
  // action, an object with a type propery
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
