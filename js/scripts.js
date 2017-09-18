function Button(text) {
    this.text = text || 'Hello';
};

Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        })
        this.$element.appendTo($('body'));

    }
};

var btn1 = new Button('Hello!');
var btn2 = new Button('Allegro');

btn1.create();
btn2.create();