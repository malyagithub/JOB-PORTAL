import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri =(file) => {
    const parser =  new DataUriParser();
    if (!file || !file.originalname || !file.buffer) {
        throw new Error("File is missing required properties.");
      }
    
    const extName = path.extname(file.originalname).toString();
    const dataUri =  parser.format(extName,file.buffer);
    return dataUri;  // Return the full data URI object
}

export default getDataUri;
