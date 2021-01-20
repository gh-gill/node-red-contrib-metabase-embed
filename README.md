# node-red-contrib-mb-embed
Node-RED UI LED

A simple LED status indicator for the Node-RED Dashboard

CI FOSSA Status

dependencies peer-dependencies dev-dependencies optional-dependencies

Examples Image

The node uses msg.payload's value to determine status. By default:

    msg.payload === true - Green
    msg.payload === false - Red
    no msg received yet or msg.payload !== true and msg.payload !== false - Gray

Install

To install the node run the following from your Node-RED user directory (~/.node-red):

npm install node-red-contrib-ui-led

Or install the node from the Palette section of your Node-RED editor by searching by name (node-red-contrib-ui-led).
Custom Statuses

Although true => Green and false => Red is the default, one can map other payload values to any color.

To customize the mappings open the node's configuration panel and scroll to the Colors for Values list.

Colors for Values Image

To add a value mapping press the +Color button at the bottom of the list.

Next fill in a color in a CSS format (color name, hex, rgb, rgba...), select the value type (string, boolean...) and fill in an appropriate value.

Similarly existing Value => Color maps can be modified.

Finally to delete a mapping simply press the X button on the far right!
Custom Statuses in msg

By enabling Allow Color For Value map in msg in a node that node will use dictionaries passed via msg.colorForValue to override any previous color to value mappings.

The format should be value => color, ie an object whose key values return color values.

Example:

msg.colorForValue = {}
msg.colorForValue[true] = 'purple'
msg.colorForValue[false] = 'orange'

Further Examples

To see usages already set up check out the examples included with the project by using Import in your Node-RED editor!
License

FOSSA Status
Thanks to
