import descriptor from './Descriptor.json';

const {content} = descriptor;
const descriptorMessages = content.reduce((map, descriptorMessage) => {
    const {itemId, value} = descriptorMessage;
    map[itemId] = {
        id: itemId,
        defaultMessage: value
    };
    return map;
}, {});

export default descriptorMessages;
