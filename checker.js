let request = require('request');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Simple IP Checker')
readline.question('IP : ', ip => {
    if (!ip) {
        return console.log(`please put the ip you want to check`)
    } else {
        request.get(`https://ipapi.co/${ip}/region`, function(err, response, region) {
            request.get(`https://ipapi.co/${ip}/timezone`, function(err, response, timezone) {
                request.get(`https://ipapi.co/${ip}/currency`, function(err, response, currency) {
                    request.get(`https://ipapi.co/${ip}/country_name`, function(err, response, country) {
                        request.get(`https://ipapi.co/${ip}/country_calling_code`, function(err, response, country_code) {
                            request.get(`https://ipapi.co/${ip}/version`, function(err, response, version) {
                                request.get(`https://ipapi.co/${ip}/city`, function(err, response, city) {
                                    request.get(`https://ipapi.co/${ip}/region_code`, function(err, response, region_code) {
                                        request.get(`https://ipapi.co/${ip}/country_code`, function(err, response, country_code) {
                                            request.get(`https://ipapi.co/${ip}/country_code_iso3`, function(err, response, country_code_iso3) {
                                                request.get(`https://ipapi.co/${ip}/country_tld`, function(err, response, country_tld) {
                                                    request.get(`https://ipapi.co/${ip}/continent_code`, function(err, response, continent_code) {
                                                        request.get(`https://ipapi.co/${ip}/postal`, function(err, response, postal) {
                                                            request.get(`https://ipapi.co/${ip}/latitude`, function(err, response, latitude) {
                                                                request.get(`https://ipapi.co/${ip}/timezone`, function(err, response, timezone) {
                                                                    request.get(`https://ipapi.co/${ip}/currency_name`, function(err, response, currency_name) {
                                                                        request.get(`https://ipapi.co/${ip}/languages`, function(err, response, languages) {
                                                                            request.get(`https://ipapi.co/${ip}/country_population`, function(err, response, country_population) {
                                                                                request.get(`https://ipapi.co/${ip}/country_area`, function(err, response, country_area) {
                                                                                    request.get(`https://ipapi.co/${ip}/longitude`, function(err, response, longitude) {
                                                                                        console.log(`Region: ${region}\nTimeZone: ${timezone}\nCurrency: ${currency}\nCountry: ${country}\ncountry code: ${country_code}\nCountry code3: ${country_code_iso3}\nCountry LTD: ${country_tld}\nCont_Code: ${continent_code}\nPostal Code: ${postal}\nLatitude: ${latitude}\ntimezone: ${timezone}\ncurrency name: ${currency_name}\nlanguages: ${languages}\ncountry population: ${country_population}\ncountry area: ${country_area}\nlongitude: ${longitude}`);
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
});
