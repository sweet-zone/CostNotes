

export default {
    get(key, type) {
        type = type || 'localStorage';
        return window[type].getItem(key);
    },

    set(key, value, type) {
        type = type || 'localStorage';
        window[type].setItem(key, value);
    },

    remove(key, type) {
        type = type || 'localStorage';
        window[type].remove(key);
    },

    clear(key, type) {
        type = type || 'localStorage';
        window[type].clear();
    }
}