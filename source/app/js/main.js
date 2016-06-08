/**
 * Created by Ed on 06/06/2016.
 */
var main = new function () {
    /*Allows for refactoring*/
    var self = this;
    self.data = {};

    this.load_carousel = function () {
        $.getJSON('merchandise.json', function (data) {
            self.data = data;
            $('#page').html(Haymarket.main(self.data));
            $(function(){
                $('#haymarket-carousel').carousel();
            });
        });
    };
};