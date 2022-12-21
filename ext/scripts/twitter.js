import { getParentByTagName } from "./utils.js"
import { replaceElContent } from "./replacements.js"

const adTexts = ['Promoted', 'Реклама']


/**
 * Goes through all span elements on page and find ad articles
 * @returns {Array}
*/
const getAllAdsArticles = () => {
    const allSpans = document.querySelectorAll('span')
    
    const allAdsArticles = []
    allSpans.forEach(spanEl => {
        if(!adTexts.includes(spanEl.innerText)) return
        
        const parentArticle = getParentByTagName(spanEl, 'article')
        if(parentArticle) allAdsArticles.push(parentArticle)
    })

    return allAdsArticles
}

const handle = () => {
    console.log('Do big things');
    const adElements = getAllAdsArticles()
    
    console.log(adElements);
    adElements.forEach(replaceElContent)
}

export default () => {
    handle()

    let lastScrollTop = 0;
    document.addEventListener('scroll', () => {
        if(
            Math.abs(
                lastScrollTop - document.documentElement.scrollTop
            ) < 200
        ) return
        
        lastScrollTop = document.documentElement.scrollTop
        handle()
    })
}