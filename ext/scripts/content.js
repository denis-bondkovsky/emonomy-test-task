const main = async () => {
    
    if(window.location.href.includes('twitter')){
        const { default: twitterActions } = await import('./twitter.js')
        twitterActions()
    }else if(window.location.href.includes('facebook')){
        const { default: facebookActions } = await import('./facebook.js')
        facebookActions()
        
    }
}

window.addEventListener('load', main)