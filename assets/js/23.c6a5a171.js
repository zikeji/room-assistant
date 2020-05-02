(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{236:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"home-assistant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#home-assistant"}},[t._v("#")]),t._v(" Home Assistant")]),t._v(" "),e("p",[e("strong",[t._v("Integration Key:")]),t._v(" "),e("code",[t._v("homeAssistant")])]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"https://www.home-assistant.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home Assistant"),e("OutboundLink")],1),t._v(" integration shares data with the home automation software over "),e("a",{attrs:{href:"https://www.home-assistant.io/integrations/mqtt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("strong",[t._v("Running on Hass.io?")]),t._v(" If you are also using the MQTT server add-on room-assistant will automatically pick up the correct credentials - no configuration needed!")])]),t._v(" "),e("p",[t._v("You will need to setup an MQTT broker that both your instance of Home Assistant and all instances of room-assistant can connect to. If you are using Hass.io you can install the "),e("a",{attrs:{href:"https://github.com/home-assistant/hassio-addons/tree/master/mosquitto",target:"_blank",rel:"noopener noreferrer"}},[t._v("official mosquitto add-on"),e("OutboundLink")],1),t._v(" to get started quickly.")]),t._v(" "),e("p",[t._v("room-assistant makes use of the "),e("a",{attrs:{href:"https://www.home-assistant.io/docs/mqtt/discovery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT auto discovery"),e("OutboundLink")],1),t._v(" features provided by Home Assistant to automatically create all entities for you. It is strongly recommended that you enable this feature when setting up the MQTT integration in Home Assistant.")]),t._v(" "),e("h2",{attrs:{id:"device-trackers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#device-trackers"}},[t._v("#")]),t._v(" Device Trackers")]),t._v(" "),e("p",[t._v("Some integrations, such as "),e("RouterLink",{attrs:{to:"/integrations/bluetooth-classic.html"}},[t._v("Bluetooth Classic")]),t._v(" or "),e("RouterLink",{attrs:{to:"/integrations/bluetooth-low-energy.html"}},[t._v("Bluetooth Low Energy")]),t._v(" support the "),e("a",{attrs:{href:"https://www.home-assistant.io/integrations/device_tracker.mqtt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT device tracker"),e("OutboundLink")],1),t._v(" in Home Assistant. This is for example useful if you want to integrate the room-assistant presence detection with others in the form of a "),e("a",{attrs:{href:"https://www.home-assistant.io/integrations/person/",target:"_blank",rel:"noopener noreferrer"}},[t._v("person"),e("OutboundLink")],1),t._v(". Unfortunately, device trackers can not be auto discovered by Home Assistant. To enable this feature you will have to edit your Home Assistant configuration manually and add a few lines as shown in the example below. You can get all your available device tracker topics from the room-assistant logs.")],1),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("device_tracker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("platform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mqtt\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("devices")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apple_watch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'room-assistant/device_tracker/bluetooth-classic-aa-aa-aa-aa-aa-aa-tracker/state'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("payload_home")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("payload_not_home")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'false'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source_type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bluetooth\n")])])]),e("h2",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("mqttUrl")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("code",[t._v("mqtt://localhost:1883")])]),t._v(" "),e("td",[t._v("Connection string for your MQTT broker.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mqttOptions")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#mqtt-options"}},[t._v("MQTT Options")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Additional options for the MQTT connection.")])])])]),t._v(" "),e("h3",{attrs:{id:"mqtt-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-options"}},[t._v("#")]),t._v(" MQTT Options")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("username")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Username for authentication")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("password")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Password for authentication")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rejectUnauthorized")])]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Whether MQTTS connections should fail for invalid certificates or not. Set this to "),e("code",[t._v("false")]),t._v(" if you are using a self-signed certificate and connect via TLS.")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example Config")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" homeAssistant\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homeAssistant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqttUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mqtt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//hassio.local"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqttOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" youruser\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yourpass\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);