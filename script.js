// Initial blood inventory
let bloodInventory = {
    'A+': 50,
    'A-': 30,
    'B+': 40,
    'B-': 20,
    'AB+': 15,
    'AB-': 10,
    'O+': 60,
    'O-': 35
};

// Blood type compatibility chart
const compatibilityChart = {
    'A+': ['A+', 'A-', 'O+', 'O-'],
    'A-': ['A-', 'O-'],
    'B+': ['B+', 'B-', 'O+', 'O-'],
    'B-': ['B-', 'O-'],
    'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    'AB-': ['A-', 'B-', 'AB-', 'O-'],
    'O+': ['O+', 'O-'],
    'O-': ['O-']
};

// Function to update the inventory table
function updateInventoryTable() {
    const table = document.getElementById('inventoryTable');
    table.innerHTML = '<tr><th>Blood Type</th><th>Quantity (units)</th></tr>';
    for (let [type, quantity] of Object.entries(bloodInventory)) {
        table.innerHTML += `<tr><td>${type}</td><td>${quantity}</td></tr>`;
    }
}

// Event listener for donation form submission
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bloodType = document.getElementById('bloodType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (bloodInventory.hasOwnProperty(bloodType)) {
        bloodInventory[bloodType] += quantity;
        updateInventoryTable();
        alert(`Successfully added ${quantity} units of ${bloodType} blood.`);
    } else {
        alert('Invalid blood type.');
    }
    
    this.reset();
});

// Event listener for search form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const patientBloodType = document.getElementById('patientBloodType').value;
    const compatibleTypes = compatibilityChart[patientBloodType];
    
    if (compatibleTypes) {
        let result = `Compatible blood types for ${patientBloodType}: `;
        result += compatibleTypes.join(', ');
        document.getElementById('searchResult').textContent = result;
    } else {
        document.getElementById('searchResult').textContent = 'Invalid blood type.';
    }
});

// Initial table population
updateInventoryTable();