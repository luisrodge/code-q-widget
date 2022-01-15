import habitat from "preact-habitat";

import Widget from "./Widget";

const { render } = habitat(Widget);

render({
  selector: '[data-widget-host="q-widget"]',
  clean: true,
});
