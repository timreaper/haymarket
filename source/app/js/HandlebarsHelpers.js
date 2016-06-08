/**
 * Created by Ed on 06/06/2016.
 */

/**
 *  Price Formatter
 *      Gets passed prices in pence & formats them into GBP format.
 ***/
Handlebars.registerHelper('price_formatter', function (price) {
    var temp = price;
    temp = temp / 100;
    return '£' + temp;
});