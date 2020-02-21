function onOpen() {
    // Add a menu with some items, some separators, and a sub-menu.
    DocumentApp.getUi().createMenu('Utilities')
        .addItem('Insert Date', 'insertAtCursor')
        .addToUi();
}

/** 
* Inserts the date at the current cursor location in boldface. 
*/

function insertAtCursor() {
    var cursor = DocumentApp.getActiveDocument().getCursor();
    if (cursor) {
        // Attempt to insert text at the cursor position. If insertion returns null,
        // then the cursor's containing element doesn't allow text insertions.
        var date = Utilities.formatDate(new Date(), "GMT", "dd-MMMM-yyyy"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
        var element = cursor.insertText(date);

        if (element) {
            element.setBold(false);
        } else {
            DocumentApp.getUi().alert('Cannot insert text at this cursor location.');
        }

    } else {
        DocumentApp.getUi().alert('Cannot find a cursor in the document.');
    }
}