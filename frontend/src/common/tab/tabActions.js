export function selectTab(tabId) {
    console.log();
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}