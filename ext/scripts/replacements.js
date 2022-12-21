const API_URL = 'http://localhost:8003/api/v1'

const replacementElementMap = {
    image: 'img',
    video: 'video'
}

const replacedElements = []
// const API_URL = 'http://5.187.7.184/api/v1'

/**
 * Replace content in html element with response from backend
 * @param {HTMLElement} el 
 */
export const replaceElContent = async el => {
    if(replacedElements.includes(el)) return

    const media = el.querySelector('img, video')

    fetch(API_URL + '/replace/', {
        method: 'POST',
        body: JSON.stringify({ media_url: media?.src || window.location.href }),
        headers: { 'Content-Type': 'application/json' }
    }).then(async res => {
        if(!res.ok) return
        
        const replacementParams = await res.json()

        el.innerHTML = ''
        
        const newMedia = document.createElement(
            replacementElementMap[replacementParams.content_type || 'image']
        )
        newMedia.src = replacementParams.url
        el.appendChild(newMedia)

        replacedElements.push(el)
    })
}