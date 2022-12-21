import traceback

from fastapi import APIRouter, HTTPException

from ..models.replacements import AdBanner
from ..services.replacements import get_replacement_url

router = APIRouter(
    prefix='/replace',
    tags=['replacements']
)

# endpoint to decide which link will be used for replacement of ad banner
# here POST method is used because we need to provide existing information about ad banner
@router.post('/')
async def replace(ad_banner: AdBanner):
    try:
        replacements_url, content_type = await get_replacement_url(ad_banner.media_url)
    except Exception as exp:
        traceback.print_exc()
        raise HTTPException(400, str(exp))

    return { 'url': replacements_url, 'content_type': content_type }