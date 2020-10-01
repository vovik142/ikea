const wishList = ['idd065', 'idd100', 'idd065', 'idd098'];
const cartList = [
    {
        id: 'idd015',
        count: 3

    },
    {
        id: 'idd065',
        count: 1
    },
    {
        id: 'idd075',
        count: 1
    },
];
import { getData } from './getData.js';


export const loadData = () => {
   
    if (location.search){
        const search = decodeURI (location.search);
        console.log(search);
        const prop = search.split('=')[0].substring(1);
        console.log('prop:' + prop);
        const value = search.split('=')[1];
        console.log('value:' + value);

        if (prop === 's') {
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.dir({wishlist: data}));
        } else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, (data) => console.log(data))
        }
    }

    if (location.hash){
        getData.item(location.hash.substring(1), (data) => console.log(data))
    }

    if (location.pathname.includes('cart')){
        getData.cart(cartList, (data) => console.log(data));
    }
    
    getData.catalog((data) => console.log(data))
    getData.subCatalog("Декор", (data) => console.log(data))
};