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

    document.getElementById("saved").style.display = "block";
}

function restoreOptions() {

    Object.entries(keys).forEach(([key, value]) => {
        chrome.storage.sync.get(key, function (result) {
            console.info(result);
            document.getElementById(key).value = result[key] || value;
        });
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
