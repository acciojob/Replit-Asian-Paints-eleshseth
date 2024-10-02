//your JS code here. If required.
// Function to change color of the block
document.getElementById('change_button').addEventListener('click', function() {
    // Get block ID and color from input fields
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    
    // Reset the background color of all grid items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the selected block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    }
});

// Function to reset the grid
document.getElementById('Reset').addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
