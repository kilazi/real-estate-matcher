import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http'

@Injectable()
export class GlobalService {
    timeoutCooldown;
    constructor(
        private http: Http,
        private jsonp: Jsonp
    ) { }
    runOnTimeout(callback) {
        if (this.timeoutCooldown) clearTimeout(this.timeoutCooldown)
        this.timeoutCooldown = setTimeout(callback, 500);
    }
    timeoutCooldown2
    runOnTimeout2(callback) {
        if (this.timeoutCooldown2) clearTimeout(this.timeoutCooldown2)
        this.timeoutCooldown2 = setTimeout(callback, 500);
    }

    geocode(address) {
        return this.http.get('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + address + ',Москва').map(res => <any>res.json())
    }

    reverseGeocode(latLng) {
        return this.http.get('https://geocode-maps.yandex.ru/1.x/?geocode=' + latLng[0] + ',' + latLng[1] + '&spn=0.1,0.1&kind=metro&rspn=1&format=json').map(res => res.json())
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    removeEmptyKeys(object) {
        for (const key in object) {
            if (key != 'type' && key != 'description' && key.indexOf('location') == -1) {
                //console.log('iterate through object', object, key, 'value of the key is [' + object[key] + ']', typeof object[key]);
                if (!object[key] || object[key] == "") {
                    //console.log('this key sucks!', key);
                    object[key] = false;
                } else object[key] = parseInt(object[key]);
            }
        }
        return object
    }

    getCompareBuy(inputData, apt) {
        inputData = this.removeEmptyKeys(inputData);
        apt = this.removeEmptyKeys(apt);
        console.log('comparedatabuy', inputData, apt);
        if (apt.type == 'buy') return;

        let compare = 0;

        //geo
        if (inputData.buy_location_address1 || inputData.buy_location_address2 || inputData.buy_location_address3) {
            console.log('geo 1');
            if(inputData.buy_location_address1_x && inputData.buy_location_address1_y) {
                console.log('geo 2');
                let distance = this.getDistanceFromLatLonInKm(inputData.buy_location_address1_x, inputData.buy_location_address1_y, apt.location_address_x, apt.location_address_y)
                if(distance<=1) compare = compare + 3;
                else if (distance <=5) compare++;
                else if (distance <=7) compare--;
                // else return;
                console.log('geo 3', compare);
            }
            if(inputData.buy_location_address2_x && inputData.buy_location_address2_y) {
                let distance = this.getDistanceFromLatLonInKm(inputData.buy_location_address2_x, inputData.buy_location_address2_y, apt.location_address_x, apt.location_address_y)
                if(distance<=1) compare = compare + 3;
                else if (distance <=5) compare++;
                else if (distance <=7) compare--;
                // else return;
            }
            if(inputData.buy_location_address3_x && inputData.buy_location_address3_y) {
                let distance = this.getDistanceFromLatLonInKm(inputData.buy_location_address3_x, inputData.buy_location_address3_y, apt.location_address_x, apt.location_address_y)
                if(distance<=1) compare = compare + 3;
                else if (distance <=5) compare++;
                else if (distance <=7) compare--;
                // else return;
            }            
        }

        //rooms
        if (inputData.buy_rooms_from || inputData.buy_rooms_to) {
            if (inputData.buy_rooms_from) {
                if (apt.rooms >= inputData.buy_rooms_from) compare = compare + 2;
                else if (apt.rooms >= inputData.buy_rooms_from - 1) compare = compare + 1;
                else return;
            }
            if (inputData.buy_rooms_to) {
                if (apt.rooms <= inputData.buy_rooms_to) compare = compare + 2;
                else if (apt.rooms <= inputData.buy_rooms_to + 1) compare = compare + 1;
                else return;
            }
        }

        //price
        if (inputData.buy_price_from || inputData.buy_price_to) {
            if (inputData.buy_price_from) {
                if (apt.price >= inputData.buy_price_from) compare = compare + 2;
                else if (apt.price >= inputData.buy_price_from - 1000000) compare = compare + 1;
                else return;
            }
            if (inputData.buy_price_to) {
                if (apt.price <= inputData.buy_price_to) compare = compare + 2;
                else if (apt.price <= inputData.buy_price_to + 1000000) compare = compare + 1;
                else return;
            }
        }

        //size
        if (inputData.buy_size_from || inputData.buy_size_to) {
            //console.log('going to compare prices !');
            if (inputData.buy_size_from) {
                //console.log('going to compare FROM size !');
                if (apt.size >= inputData.buy_size_from) {
                    //console.log('size+2');
                    compare = compare + 2;
                }
                else if (apt.size >= inputData.buy_size_from - 10) {
                    //console.log('size+1');
                    compare = compare + 1;
                }
                else {
                    //console.log('fuck it');
                    return;
                }
            }
            if (inputData.buy_size_to) {
                //console.log('compare 1');
                if (apt.size <= inputData.buy_size_to) compare = compare + 2;
                else if (apt.size <= inputData.buy_size_to + 10) compare = compare + 1;
                else return;
            }
        }

        //level
        if (inputData.buy_level_from || inputData.buy_level_to) {
            if (inputData.buy_level_from) {
                //console.log('compare 11');
                if (apt.level >= inputData.buy_level_from) compare = compare + 2;
                // else if (apt.level >= inputData.buy_level_from - 1) compare = compare + 1;
                else return;
            }
            if (inputData.buy_level_to) {
                //console.log('compare 111');
                if (apt.level <= inputData.buy_level_to) compare = compare + 2;
                // else if (apt.level <= inputData.buy_level_to + 1) compare = compare + 1;
                else return;
            }
        }
        //console.log('compare now is', compare);

        return compare;
    }

    getCompareSell(inputData, apt) {
        inputData = this.removeEmptyKeys(inputData);
        apt = this.removeEmptyKeys(apt);
        console.log('comparedatasell', inputData, apt);
        if (apt.type == 'sell') return;

        let compare = 0;

        //geo
        if (inputData.location_address_x && inputData.location_address_y) {
            if(apt.buy_location_address1_x && apt.location_address1_y) {
                let distance = this.getDistanceFromLatLonInKm(apt.buy_location_address1_x, apt.buy_location_address1_y, inputData.location_address_x, inputData.location_address_y)
                if(distance<=1) compare = compare + 3;
                else if (distance <=5) compare++;
                else if (distance <=7) compare--;
                else return;
            }
            if(apt.buy_location_address2_x && apt.location_address2_y) {
                let distance = this.getDistanceFromLatLonInKm(apt.buy_location_address2_x, apt.buy_location_address2_y, inputData.location_address_x, inputData.location_address_y)
                if(distance<=1) compare = compare + 3;
                else if (distance <=5) compare++;
                else if (distance <=7) compare--;
                else return;
            }
            if(apt.buy_location_address3_x && apt.location_address3_y) {
                let distance = this.getDistanceFromLatLonInKm(apt.buy_location_address3_x, apt.buy_location_address3_y, inputData.location_address_x, inputData.location_address_y)
                if(distance<=1) compare = compare + 3;
                else if (distance <=5) compare++;
                else if (distance <=7) compare--;
                else return;
            }      
        }

        //rooms
        if (inputData.rooms) {
            if (apt.buy_rooms_from || apt.buy_rooms_to) {
                if (apt.buy_rooms_from) {
                    if (inputData.rooms >= apt.buy_rooms_from) compare = compare + 2;
                    else if (inputData.rooms >= apt.buy_rooms_from - 1) compare = compare + 1;
                    else return;
                }
                if (apt.buy_rooms_to) {
                    if (inputData.rooms <= apt.buy_rooms_to) compare = compare + 2;
                    else if (inputData.rooms <= apt.buy_rooms_to + 1) compare = compare + 1;
                    else return;
                }
            }
        }

        //price
        if (inputData.price) {
            console.log('price 1', apt.buy_price_from, apt.buy_price_to);
            if (apt.buy_price_from || apt.buy_price_to) {
                console.log('price 2');
                if (apt.buy_price_from) {
                    console.log('price 3', apt.buy_price_from, typeof apt.buy_price_from);
                    if (inputData.price >= apt.buy_price_from) {
                        console.log('price 4');
                        compare = compare + 2;
                    }
                    else if (inputData.price >= apt.buy_price_from - 1000000) {
                        console.log('price 5');
                        compare = compare + 1;
                    }
                    else return;
                }
                if (apt.buy_price_to) {
                    console.log('price 22');
                    if (inputData.price <= apt.buy_price_to) {
                        console.log('price 23');
                        compare = compare + 2;
                    }
                    else if (inputData.price <= apt.buy_price_to + 1000000) {
                        console.log('price 24');
                        compare = compare + 1;
                    }
                    else return;
                }
            }
        }

        //size
        if (inputData.size) {
            if (apt.buy_size_from || apt.buy_size_to) {
                if (apt.buy_size_from) {
                    if (inputData.size >= apt.buy_size_from) compare = compare + 2;
                    else if (inputData.size >= apt.buy_size_from - 10) compare = compare + 1;
                    else return;
                }
                if (apt.buy_size_to) {
                    if (inputData.size <= apt.buy_size_to) compare = compare + 2;
                    else if (inputData.size <= apt.buy_size_to + 10) compare = compare + 1;
                    else return;
                }
            }
        }

        //level
        if (inputData.level) {
            if (apt.buy_level_from || apt.buy_level_to) {
                if (apt.buy_level_from) {
                    if (inputData.level >= apt.buy_level_from) compare = compare + 2;
                    // else if (inputData.level >= apt.buy_level_from - 1) compare = compare + 1;
                    else return;
                }
                if (apt.buy_level_to) {
                    if (inputData.level <= apt.buy_level_to) compare = compare + 2;
                    // else if (inputData.level <= apt.buy_level_to + 1) compare = compare + 1;
                    else return;
                }
            }
        }



        return compare;
    }
} 