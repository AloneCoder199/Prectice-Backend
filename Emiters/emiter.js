function Emiter() {
    this.events = {};
}

Emiter.prototype.on = function(type, fn) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(fn);
}

Emiter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(element) {
            if (typeof element === 'function') {
                element();
            }
        });
    }
}

module.exports = Emiter;
