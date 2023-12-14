# Script To Assist Us in Viewing User-Service Diffy

- grab response from user-service-diffy in Network tab for request http://user-service.diffy.svc.intra.ifit.com:8888/api/1/endpoints?exclude_noise=false
- substitube into `json` variable in `parse.json`
- substitute your request path match pattern in `MATCH_PATTERN` in `parse.json`
- run `node parse.js`
- view results in parsed.txt (it will be overwritten everytime you run `parse.js`)
