from aiohttp.client import ClientSession
import magic

replacements_map = { 
    'image': 'https://memepedia.ru/wp-content/uploads/2021/07/vy-prodaete-rybov.jpg',
    'video': 'https://ia601509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4' 
}

# in my opinion will be better to do this in Chrome extension, but okay
async def get_replacement_url(ad_banner_url: str):
    session = ClientSession()
    try:
        async with session.get(ad_banner_url) as response:
            response.raise_for_status()

            body = await response.read()

            content_type = magic.Magic(mime=True).from_buffer(body)
    finally:
        await session.close()

    return replacements_map.get(content_type.split('/')[0])
