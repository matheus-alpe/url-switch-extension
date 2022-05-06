export function get(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, resolve);
        } catch (error) {
            reject(error);
        }
    });
}

export function set(key, value) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.set({ [key]: value }, resolve);
        } catch (error) {
            reject(error);
        }
    });
}
