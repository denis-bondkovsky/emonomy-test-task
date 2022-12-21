/**
 * @param {String} tagName 
 * @param {HTMLElement} el 
 */
export const getParentByTagName = (el, tagName) => {
    if(el.tagName == tagName.toUpperCase()) return el
    
    if(!el.parentElement) return
    
    return getParentByTagName(el.parentElement, tagName)
}
