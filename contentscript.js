function getContentDocument() {
    const iframe = document.getElementById("typo3-contentIframe");
    return iframe ? iframe.contentDocument : document;
}

const parentDocument = window.frameElement ? top.document : document;

const defaultkeys = {
    close: 'escape',
    save: 'mod+s',
    saveAndClose: 'mod+shift+s',
    saveAndViewPage: '',
    saveAndCreateNewOne: '',
    delete: 'del',
    edit: 'e',
    viewPage: 'v',
    flushFrontendCaches: 'mod+del',
    flushAllCaches: 'mod+shift+del',
    searchField: 'mod+shift+f'
};


chrome.storage.sync.get(defaultkeys, function (keys) {
    Mousetrap.bind(keys.close, function () {
        const contentDocument = getContentDocument();
        let closeButton = contentDocument.querySelector('.t3js-editform-close');
        closeButton.click();
        return false;
    });
    Mousetrap.bind(keys.save, function () {
        const contentDocument = getContentDocument();
        let saveButton = contentDocument.querySelector('[name="_savedok"]');
        saveButton.click();
        return false;
    });
    Mousetrap.bind(keys.saveAndClose, function () {
        const contentDocument = getContentDocument();
        let saveAndCloseButton = contentDocument.querySelector('[data-name="_saveandclosedok"]');
        saveAndCloseButton.click();
        return false;
    });
    Mousetrap.bind(keys.saveAndViewPage, function () {
        const contentDocument = getContentDocument();
        let saveAndViewPageButton = contentDocument.querySelector('[data-name="_savedokview"]');
        saveAndViewPageButton.click();
        return false;
    });
    Mousetrap.bind(keys.saveAndCreateNewOne, function () {
        const contentDocument = getContentDocument();
        let saveAndCreateNewOneButton = contentDocument.querySelector('[data-name="_savedoknew"]');
        saveAndCreateNewOneButton.click();
        return false;
    });
    Mousetrap.bind(keys.delete, function () {
        const contentDocument = getContentDocument();
        let deleteButton = contentDocument.querySelector('.t3js-editform-delete-record');
        deleteButton.click();
        return false;
    });
    Mousetrap.bind(keys.edit, function () {
        const contentDocument = getContentDocument();
        let editButton = contentDocument.querySelector('.icon-actions-page-open').parentElement;
        editButton.click();
        return false;
    });
    Mousetrap.bind(keys.viewPage, function () {
        const contentDocument = getContentDocument();
        let viewPageButton = contentDocument.querySelector('.icon-actions-document-view').parentElement;
        viewPageButton.click();
        return false;
    });
    Mousetrap.bind(keys.flushFrontendCaches, function () {
        let flushFrontendCachesButton = parentDocument.querySelector('.icon-actions-system-cache-clear-impact-low').closest("a");
        flushFrontendCachesButton.click();
        return false;
    });
    Mousetrap.bind(keys.flushAllCaches, function () {
        let flushAllCachesButton = parentDocument.querySelector('.icon-actions-system-cache-clear-impact-high').closest("a");
        flushAllCachesButton.click();
        return false;
    });
    Mousetrap.bind(keys.searchField, function () {
        let searchField = parentDocument.getElementById("live-search-box");
        searchField.focus();
        return false;
    });

});
