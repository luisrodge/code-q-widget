import habitat from "preact-habitat";

import Widget from "./Widget";

const _habitat = habitat(Widget);

_habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true,
});
