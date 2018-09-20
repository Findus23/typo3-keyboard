const keys = {
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


function saveOptions(e) {
    e.preventDefault();

    Object.entries(keys).forEach(([key]) => {
        const obj = {};
        obj[key] = document.getElementById(key).value;
        chrome.storage.sync.set(obj);
    });

    document.getElementById('saved').style.visibility = 'visible';
}

function restoreOptions() {

    Object.entries(keys).forEach(([key, defaultKey]) => {
        chrome.storage.sync.get(key, function (result) {
            console.info(result);
            document.getElementById(key).value = result[key] || defaultKey;
        });
    });
}

const translatableIDs = ["close-label", "save-label", "saveAndClose-label", "saveAndViewPage-label", "saveAndCreateNewOne-label", "delete-label", "edit-label", "viewPage-label", "flushFrontendCaches-label", "flushAllCaches-label", "searchField-label", "save-button", "saved"];
translatableIDs.forEach(function (id) {
    const translateKey = id.replace(/-/g, "_");
    console.info(translateKey);
    console.log(document.getElementById(translateKey));
    document.getElementById(id).innerText = chrome.i18n.getMessage(translateKey);
});

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
