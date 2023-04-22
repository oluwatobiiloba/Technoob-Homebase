
const xss = require('xss');

//  list of safe HTML tags and attributes
const xssOptions = {
  whiteList: {
    a: ['href', 'title', 'target'],
    img: ['src', 'alt'],
    p: [],
    div: [],
    ul: [],
    ol: [],
    li: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    br: [],
    hr: []
  }
};

module.exports = {
    sanitize(req, res, next) {
        //  loop through all the request body properties
        for (const key in req.body) {
            //  if the property is an object, loop through its properties
            if (typeof req.body[key] === 'object') {
                for (const innerKey in req.body[key]) {
                    //  if the property is an array, loop through its elements
                    if (Array.isArray(req.body[key][innerKey])) {
                        req.body[key][innerKey].forEach((element, index) => {
                            req.body[key][innerKey][index] = xss(element, xssOptions);
                        });
                    } else {
                        req.body[key][innerKey] = xss(req.body[key][innerKey], xssOptions);
                    }
                }
            } else {
                req.body[key] = xss(req.body[key], xssOptions);
            }
        }
        next();
    }
} 
