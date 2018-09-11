/* global Mousetrap */

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
    searchField: 'mod+shift+f',
    expand: 'mod+shift+plus',
    collapse: 'mod+shift+-'
};


chrome.storage.sync.get(defaultkeys, function (keys) {
    Mousetrap.bind(keys.close, function () {
        const contentDocument = getContentDocument();
        const closeButton = contentDocument.querySelector('.t3js-editform-close');
        closeButton.click();
        return false;
    });
    Mousetrap.bind(keys.save, function () {
        const contentDocument = getContentDocument();
        const saveButton = contentDocument.querySelector('[name="_savedok"]');
        saveButton.click();
        return false;
    });
    Mousetrap.bind(keys.saveAndClose, function () {
        const contentDocument = getContentDocument();
        const saveAndCloseButton = contentDocument.querySelector('[data-name="_saveandclosedok"]');
        saveAndCloseButton.click();
        return false;
    });
    Mousetrap.bind(keys.saveAndViewPage, function () {
        const contentDocument = getContentDocument();
        const saveAndViewPageButton = contentDocument.querySelector('[data-name="_savedokview"]');
        saveAndViewPageButton.click();
        return false;
    });
    Mousetrap.bind(keys.saveAndCreateNewOne, function () {
        const contentDocument = getContentDocument();
        const saveAndCreateNewOneButton = contentDocument.querySelector('[data-name="_savedoknew"]');
        saveAndCreateNewOneButton.click();
        return false;
    });
    Mousetrap.bind(keys.delete, function () {
        const contentDocument = getContentDocument();
        const deleteButton = contentDocument.querySelector('.t3js-editform-delete-record');
        deleteButton.click();
        return false;
    });
    Mousetrap.bind(keys.edit, function () {
        const contentDocument = getContentDocument();
        const editButton = contentDocument.querySelector('.icon-actions-page-open').parentElement;
        editButton.click();
        return false;
    });
    Mousetrap.bind(keys.viewPage, function () {
        const contentDocument = getContentDocument();
        const viewPageButton = contentDocument.querySelector('.icon-actions-document-view').parentElement;
        viewPageButton.click();
        return false;
    });
    Mousetrap.bind(keys.flushFrontendCaches, function () {
        const flushFrontendCachesButton = parentDocument.querySelector('.icon-actions-system-cache-clear-impact-low').closest("a");
        flushFrontendCachesButton.click();
        return false;
    });
    Mousetrap.bind(keys.flushAllCaches, function () {
        const flushAllCachesButton = parentDocument.querySelector('.icon-actions-system-cache-clear-impact-high').closest("a");
        flushAllCachesButton.click();
        return false;
    });
    Mousetrap.bind(keys.searchField, function () {
        const searchField = parentDocument.getElementById("live-search-box");
        searchField.focus();
        return false;
    });
    Mousetrap.bind("a", function () {
        console.log("expand");
        const contentDocument = getContentDocument();
        const closed = contentDocument.querySelectorAll('.panel-collapsed');
        closed.forEach((el) => {
            const header = el.querySelector(".panel-heading");
            console.log(header.dataset);
            delete header.dataset.expandsingle;
        });
        closed.forEach((el) => {
            // if (el.offsetParent === null) {
            //     return false;
            // }
            const header = el.querySelector(".panel-heading");
            delete header.dataset.expandsingle;
            header.click();
        });
        return false;
    });
    Mousetrap.bind("b", function () {
        console.log("close");
        const contentDocument = getContentDocument();
        const opened = contentDocument.querySelectorAll('.panel-visible');
        opened.forEach((el) => {
            console.info(el);
            el.querySelector(".panel-heading").click();
        });
        return false;
    });

});
