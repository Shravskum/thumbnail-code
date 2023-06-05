import JSON_DATA from '../data/index.js'

export const getThumbnailsData = (req, res) => {
    if(JSON_DATA.templateData){
        return res.status(200).json(JSON_DATA.templateData);
    }
    return res.status(200).json([]);
}

export const getExtendedThumbnailsData = (req, res) => {
    if(JSON_DATA.extendedTemplateData){
        return res.status(200).json(JSON_DATA.extendedTemplateData);
    }
    return res.status(200).json([]);
}