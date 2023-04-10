'use strict';

const Applet = imports.ui.applet;
const GLib = imports.gi.GLib;

const UUID = 'endeavour@markevich.org';

function EndeavourApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

EndeavourApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name("endeavour");
        this.set_applet_tooltip(_("Launch Endeavour"));
    },

    on_applet_clicked: function() {
        try {
            GLib.spawn_command_line_async('endeavour');
        } catch (e) {
            logError(e);
        }
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new EndeavourApplet(orientation, panel_height, instance_id);
}
