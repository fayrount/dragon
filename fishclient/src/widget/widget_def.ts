module widget {
    export function init_game_widget() {
        utils.widget_ins().register_widget(widget_enum.WIDGET_MAINUI, widget.main_ui);

        utils.widget_ins().register_widget(widget_enum.WIDGET_MAIN_VIEW, widget.main_view);
        utils.widget_ins().register_widget(widget_enum.WIDGET_WORLD_MAP, widget.world_map_ui);
        utils.widget_ins().register_widget(widget_enum.WIDGET_STRENGTHEN, widget.strengthen_ui);

        utils.widget_ins().register_widget(widget_enum.WIDGET_MAINTOPUI,widget.maintop_ui);
    }
}