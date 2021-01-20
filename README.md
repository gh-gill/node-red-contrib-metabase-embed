# node-red-contrib-mb-embed

A simple node to embed Metabase Dashboards and Queries for the Node-RED Dashboard


![Examples Image](images/examples.png)

The node uses on the input `msg.token`'s value to determine status. By default:

- `msg.payload` === `true` - **Green**
- `msg.payload` === `false` - **Red**
- no `msg` received yet or `msg.payload` !== `true` and `msg.payload` !== `false` - **Gray**

## Install

To install the node run the following from your Node-RED user directory (`~/.node-red`):

```bash
npm install node-red-contrib-mb-embed
```

Or install the node from the Palette section of your Node-RED editor by searching by name (`node-red-contrib-mb-embed`).

## Custom Statuses

Although `true` => Green and `false` => Red is the default, one can map other payload values to any color.

To customize the mappings open the node's configuration panel and scroll to the _Colors for Values_ list.

![Colors for Values Image](images/colorsForValues.png)



Similarly existing Value => Color maps can be modified.

Finally to delete a mapping simply press the X button on the far right!



