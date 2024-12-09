document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.quantity');
    const removeButtons = document.querySelectorAll('.remove');
    const subtotalElement = document.getElementById('subtotal');

    const updateSubtotal = () => {
        let subtotal = 0;
        const rows = document.querySelectorAll('.cart-table tbody tr');
        rows.forEach(row => {
            const price = parseFloat(row.cells[1].innerText.replace('PKR', '').trim());
            const quantity = parseInt(row.querySelector('.quantity').value);
            const total = price * quantity;
            row.cells[3].innerText = `PKR ${total}`; // Update total for each row
            subtotal += total;
        });
        subtotalElement.innerText = `PKR ${subtotal}`; // Update subtotal
    };

    // Update subtotal when quantity is changed
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateSubtotal);
    });

    // Remove item from cart
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('tr').remove();
            updateSubtotal(); // Recalculate subtotal
        });
    });

    // Initial calculation on page load
    updateSubtotal();
});
