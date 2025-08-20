const inventory = [];

export function addItem(item) {
  inventory.push(item);
  console.log(`Item added: ${item}`);
}
export function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index > -1) {
    inventory.splice(index, 1);
    console.log(`Item removed: ${item}`);
  } else {
    console.log(`Item not found: ${item}`);
  }
}
export function listItems() {
  if (inventory.length === 0) {
    console.log("No items in inventory.");
  } else {
    console.log("Current inventory:");
    inventory.forEach((item, index) => {
      console.log(`${index + 1}: ${item}`);
    });
  }
}
