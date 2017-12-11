import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from './../services/global.service';
import { ToastComponent } from './../shared/toast/toast.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CatService } from './../services/cat.service';
import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
declare const ymaps: any;
declare const YMaps: any;
@Component({
    selector: 'add-apartments',
    templateUrl: './add-apartments.component.html',
    styleUrls: [
        './add-apartments.component.scss'
    ]
})
export class AddApartmentsComponent implements OnInit {
    constructor(
        private catService: CatService,
        private formBuilder: FormBuilder,
        private gs: GlobalService,
        private _sanitizer: DomSanitizer,
        public toast: ToastComponent,
        private router: Router,
        private auth: AuthService

    ) {
        console.log('addApartments here');
        this.addCatForm = this.formBuilder.group({
            location_address: this.location_address,
            rooms: this.rooms,
            size: this.size,
            price: this.price,
            description: this.description,
            level: this.level,
        });
        this.addBuyForm = this.formBuilder.group({
            buy_location_address1: this.buy_location_address1,
            buy_location_address2: this.buy_location_address2,
            buy_location_address3: this.buy_location_address3,
            buy_rooms_from: this.buy_rooms_from,
            buy_rooms_to: this.buy_rooms_to,
            buy_size_from: this.buy_size_from,
            buy_size_to: this.buy_size_to,
            buy_price_from: this.buy_price_from,
            buy_price_to: this.buy_price_to,
            buy_level_from: this.buy_level_from,
            buy_level_to: this.buy_level_to,
            buy_description: this.buy_description,
        });



        this.location_address.valueChanges.subscribe(val => {
            console.log('run autocomplete!');
            this.runAutocomplete(val, 'location_address');
        })
        this.buy_location_address1.valueChanges.subscribe(val => {
            this.runAutocomplete(val, 'buy_location_address1');
        })
        this.buy_location_address2.valueChanges.subscribe(val => {
            this.runAutocomplete(val, 'buy_location_address2');
        })
        this.buy_location_address3.valueChanges.subscribe(val => {
            this.runAutocomplete(val, 'buy_location_address3');
        })
    }

    location_address_x
    location_address_y
    buy_location_address1_x
    buy_location_address1_y
    buy_location_address2_x
    buy_location_address2_y
    buy_location_address3_x
    buy_location_address3_y
    user;
    ngOnInit() {
        console.log('current user,', this.auth.currentUser);
        this.user = this.auth.currentUser;
        let init = () => {
            this.map = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 10
            });
        }
        ymaps.ready(init);

        this.getCats('');
        this.price.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.size.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.level.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.rooms.valueChanges.subscribe(res => {
            console.log('rooms value changes', res, this.addCatForm.value);
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_rooms_from.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_rooms_to.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_size_from.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_size_to.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_price_from.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_price_to.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_level_from.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })
        this.buy_level_to.valueChanges.subscribe(res => {
            if (this.type == 'buy') this.gs.runOnTimeout(() => this.sortCats('buy'));
            if (this.type == 'sell') this.gs.runOnTimeout(() => this.sortCats('sell'));
        })



        // this.addBuyForm.valueChanges.subscribe(res => {
        //     this.gs.runOnTimeout(() => this.sortCats('buy'));
        // })
        // this.addCatForm.valueChanges.subscribe(res => {
        //     this.gs.runOnTimeout(() => this.sortCats('sell'));
        // })

    }

    sortCats(type) {
        this.filteredCats = [];
        this.map.geoObjects.removeAll()
        this.cats.forEach(cat => {
            let compareScore;


            let form = this.addCatForm.value;
            console.log('form here is ', form);
            if (type == 'buy') form = this.addBuyForm.value

            form['location_address_x'] = this.location_address_x
            form['location_address_y'] = this.location_address_y
            form['buy_location_address1_y'] = this.buy_location_address1_y
            form['buy_location_address1_x'] = this.buy_location_address1_x
            form['buy_location_address2_y'] = this.buy_location_address2_y
            form['buy_location_address2_x'] = this.buy_location_address2_x
            form['buy_location_address3_y'] = this.buy_location_address3_y
            form['buy_location_address3_x'] = this.buy_location_address3_x


            form['type'] = this.type;

            console.log('!!!!!before-compare', form);
            // setTimeout(() => {
            if (type == 'buy') compareScore = this.gs.getCompareBuy(form, cat);
            if (type == 'sell') compareScore = this.gs.getCompareSell(form, cat);
            console.log('compare_sore', compareScore);
            if (compareScore && compareScore.score) {
                cat['compare'] = compareScore.score;
                if (type == 'buy') this.addApartmentOnMap(cat);
                if (type == 'sell') {
                    cat.fit_address=cat['buy_location_address'+compareScore.fit_address_index];
                    cat.fit_x = cat['buy_location_address'+compareScore.fit_address_index+'_x'];
                    cat.fit_y = cat['buy_location_address'+compareScore.fit_address_index+'_y'];
                    this.addApartmentOnMap(cat);
                }
                this.filteredCats.push(cat);
            }
            // }, 100)

        })
        console.log('cats sorted', this.filteredCats);
        this.filteredCats.sort((a, b) => {
            if (a.compare > b.compare) return 1
            else if (a.compare < b.compare) return -1
            else return 0;
        })
    }


    runAutocomplete(val, type) {
        console.log('val changed', val);
        this.autocompleteList[type] = [];
        this.gs.runOnTimeout2(() => {
            console.log('run!', this.breakNextAutocomplete);
            if (this.breakNextAutocomplete) this.breakNextAutocomplete = false;
            else
                this.gs.geocode(val).subscribe(res => {

                    console.log('got res', res, res.response, );
                    res.response.GeoObjectCollection.featureMember.forEach(member => {
                        this.autocompleteList[type].push({ title: member.GeoObject.name, gps: member.GeoObject.Point.pos });
                    })
                    console.log('got autocompletelist', this.autocompleteList);
                })
        })
    }
    closeAutocomplete() {
        setTimeout(() => {
            this.autocompleteList = {
                location_address: [],
                buy_location_address1: [],
                buy_location_address2: [],
                buy_location_address3: []
            }
        }, 50)

    }
    breakNextAutocomplete = false;


    addApartmentOnMap(item) {
        console.log('addapartments on map');
        let myGeoObject;
        if (item.type == 'buy') {
            let shownProps = [];

            if (item.fit_address && item.fit_address != 'false') {
                shownProps.push(item.fit_address);
            }
            if (item.buy_price_from && item.buy_price_from != 'false') {
                shownProps.push('Цена от: ' + item.buy_price_from + 'руб.');
            }
            if (item.buy_price_to && item.buy_price_to != 'false') {
                shownProps.push('Цена до: ' + item.buy_price_to + 'руб.');
            }
            if (item.buy_size_from && item.buy_size_from != 'false') {
                shownProps.push('Площадь от: ' + item.buy_size_from + 'кв.м.');
            }
            if (item.buy_size_to && item.buy_size_to != 'false') {
                shownProps.push('Площадь до: ' + item.buy_size_to + 'кв.м.');
            }
            if (item.buy_rooms_from && item.buy_rooms_from != 'false') {
                shownProps.push('Комнат от: ' + item.buy_rooms_from);
            }
            if (item.buy_rooms_to && item.buy_rooms_to != 'false') {
                shownProps.push('Комнат до: ' + item.buy_rooms_to);
            }
            if (item.buy_description && item.buy_description != 'false') {
                shownProps.push('Доп. описание: ' + item.buy_description);
            }
            myGeoObject = new ymaps.Circle([[item.fit_x, item.fit_y], 3000], {
                // Контент метки.
                iconContent: shownProps[0],
                hintContent: shownProps.join('; ')
            }, {
                    geodesic: true
                })
        } else {
            let shownProps = [];

            if (item.location_address && item.location_address != 'false') {
                shownProps.push(item.location_address);
            }
            if (item.price && item.price != 'false') {
                shownProps.push('Цена: ' + item.price + 'руб.');
            }
            if (item.size && item.size != 'false') {
                shownProps.push('Площадь: ' + item.size + 'кв.м.');
            }
            if (item.rooms && item.rooms != 'false') {
                shownProps.push('Комнат: ' + item.rooms);
            }
            if (item.description && item.description != 'false') {
                shownProps.push('Доп. описание: ' + item.description);
            }
            myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [item.location_address_x, item.location_address_y]
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    iconContent: shownProps[0],
                    hintContent: shownProps.join('; ')
                }
            }, {
                    // Опции.
                    // Иконка метки будет растягиваться под размер ее содержимого.
                    preset: 'islands#blackStretchyIcon'
                })
            console.log('add apartment on map', item);
        }
        this.map.geoObjects.add(myGeoObject);
    }


    choseItem(item, input) {
        this.autocompleteList[input] = [];
        this.breakNextAutocomplete = true;
        this[input].setValue(item.title);
        let latLng = item.gps.split(' ');
        this[input + '_x'] = latLng[1];
        this[input + '_y'] = latLng[0];
        console.log('!!!!!choseItem latLng', latLng, this.buy_location_address1_x, this.buy_location_address1_y);
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [latLng[1], latLng[0]]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Это здесь',
                hintContent: item.title
            }
        }, {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon'
            })
        this.map.geoObjects.add(myGeoObject);
        // this.map.geoObjects.clear();
        this.map.setCenter([latLng[1], latLng[0]]);
        let metroSuggestions = [];
        this.gs.reverseGeocode(latLng).subscribe(res => {
            console.log('got reverse geocode!', res)

            res.response.GeoObjectCollection.featureMember.forEach(member => {
                if (metroSuggestions.indexOf(member.GeoObject.name) == -1) {

                    let latLngPoint = member.GeoObject.Point.pos.split(' ');
                    // console.log('distance between apartment and ' + member.GeoObject.name,
                    // this.gs.getDistanceFromLatLonInKm(latLng[0], latLng[1], latLngPoint[0], latLngPoint[1]));
                    metroSuggestions.push({ title: member.GeoObject.name, distance: this.gs.getDistanceFromLatLonInKm(latLng[0], latLng[1], latLngPoint[0], latLngPoint[1]) });
                }
            })


            this.metroSuggestions[input] = metroSuggestions;
        })
        if (input.indexOf('buy') == -1)
            this.gs.runOnTimeout(() => this.sortCats('sell'));
        else this.gs.runOnTimeout(() => this.sortCats('buy'));
    }
    map;
    autocompleteList = {
        location_address: [],
        buy_location_address1: [],
        buy_location_address2: [],
        buy_location_address3: []
    };
    addCatForm: FormGroup;
    location_address = new FormControl('', []);
    rooms = new FormControl('', []);
    size = new FormControl('', []);
    price = new FormControl('', []);
    description = new FormControl('', []);
    level = new FormControl('', []);

    metroSuggestions = {
        location_address: [],
        buy_location_address1: [],
        buy_location_address2: [],
        buy_location_address3: []
    };

    addBuyForm: FormGroup;
    buy_location_address1 = new FormControl('', []);
    buy_location_address2 = new FormControl('', []);
    buy_location_address3 = new FormControl('', []);
    buy_rooms_from = new FormControl('', []);
    buy_rooms_to = new FormControl('', []);
    buy_size_from = new FormControl('', []);
    buy_size_to = new FormControl('', []);
    buy_price_from = new FormControl('', []);
    buy_price_to = new FormControl('', []);
    buy_level_from = new FormControl('', []);
    buy_level_to = new FormControl('', []);
    buy_description = new FormControl('', []);



    type: string;
    filteredCats = [];
    cats = [];
    catsCounter = 0;

    getCats(type: string) {
        this.catService.getCats().subscribe(
            data => {
                this.cats = data;

            },
            error => console.log(error),

        );

    }


    addCat(buy = false) {
        let form = this.addCatForm.value;
        if (buy) form = this.addBuyForm.value
        form['added_by'] = this.user.username;
        form['location_address_x'] = this.location_address_x
        form['location_address_y'] = this.location_address_y
        form['buy_location_address1_y'] = this.buy_location_address1_y
        form['buy_location_address1_x'] = this.buy_location_address1_x
        form['buy_location_address2_y'] = this.buy_location_address2_y
        form['buy_location_address2_x'] = this.buy_location_address2_x
        form['buy_location_address3_y'] = this.buy_location_address3_y
        form['buy_location_address3_x'] = this.buy_location_address3_x


        form['type'] = this.type;
        console.log('add cat ', form);
        this.catService.addCat(form).subscribe(
            res => {
                const newCat = res.json();
                // this.cats.push(newCat);
                this.addCatForm.reset();
                this.toast.setMessage('Добавили квартиру на продажу!', 'success');
                this.router.navigateByUrl('/cats');
            },
            error => console.log(error)
        );
    }

    cat = {};
    isLoading = true;
    isEditing = -1;
    enableEditing(cat, i) {
        this.isEditing = i;
        this.cat = cat;
    }

    cancelEditing(i) {
        this.isEditing = -1;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats('');
    }

    editCat(cat) {
        this.catService.editCat(cat).subscribe(
            res => {
                this.isEditing = -1;
                this.cat = cat;
                this.toast.setMessage('item edited successfully.', 'success');
            },
            error => console.log(error)
        );
    }

    deleteCat(cat) {
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.catService.deleteCat(cat).subscribe(
                res => {
                    const pos = this.cats.map(elem => elem._id).indexOf(cat._id);
                    this.cats.splice(pos, 1);
                    this.toast.setMessage('item deleted successfully.', 'success');
                },
                error => console.log(error)
            );
        }
    }

}

