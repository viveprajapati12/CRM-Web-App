let customers = [];
let nextId = 1;
let activeFilter = 'All';

// default customers
const sampleData = [
  { name: 'Aditya Birla', email: 'aditya@birla.com', phone: '9999999999', plan: 'Enterprise' },
  { name: 'Taco Bell India', email: 'contact@tacobell.in', phone: '8888888888', plan: 'Premium' },
  { name: 'FabIndia', email: 'info@fabindia.com', phone: '7777777777', plan: 'Premium' },
  { name: 'Rahul Sharma', email: 'rahul@startup.com', phone: '9876543210', plan: 'Basic' },
  { name: 'Priya Mehta', email: 'priya@techcorp.com', phone: '9123456780', plan: 'Enterprise' }
];

// add sample customers
sampleData.forEach(customer => {
  customers.push({
    id: nextId++,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    plan: customer.plan
  });
});

// add new customer
function addCustomer() {
  const name = document.getElementById('inp-name').value.trim();
  const email = document.getElementById('inp-email').value.trim();
  const phone = document.getElementById('inp-phone').value.trim();
  const plan = document.getElementById('inp-plan').value;

  if (name === '' || email === '' || phone === '') {
    showToast('Please fill all fields', true);
    return;
  }

  if (!email.includes('@')) {
    showToast('Please enter a valid email', true);
    return;
  }

  const customer = {
    id: nextId++,
    name: name,
    email: email,
    phone: phone,
    plan: plan
  };

  customers.push(customer);

  document.getElementById('inp-name').value = '';
  document.getElementById('inp-email').value = '';
  document.getElementById('inp-phone').value = '';

  showToast('Customer added successfully');
  renderTable();
  updateStats();
}

// delete customer using id
function deleteCustomer(id) {
  const customer = customers.find(item => item.id === id);

  if (customer === undefined) {
    return;
  }

  customers = customers.filter(item => item.id !== id);

  showToast('Deleted: ' + customer.name);
  renderTable();
  updateStats();
}

// change selected filter
function setFilter(button) {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  button.classList.add('active');
  activeFilter = button.dataset.plan;

  renderTable();
}

// show customers in table
function renderTable() {
  const searchInput = document.getElementById('search-inp').value.toLowerCase();
  const tableBody = document.getElementById('table-body');
  const emptyState = document.getElementById('empty-state');

  const filteredCustomers = customers.filter(customer => {
    const isPlanMatched = activeFilter === 'All' || customer.plan === activeFilter;

    const isSearchMatched =
      customer.name.toLowerCase().includes(searchInput) ||
      customer.email.toLowerCase().includes(searchInput);

    return isPlanMatched && isSearchMatched;
  });

  if (filteredCustomers.length === 0) {
    tableBody.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  tableBody.innerHTML = filteredCustomers.map(customer => {
    return `
      <tr>
        <td>#${customer.id}</td>
        <td class="name">${customer.name}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
        <td><span class="plan-badge plan-${customer.plan}">${customer.plan}</span></td>
        <td>
          <button class="btn-del" onclick="deleteCustomer(${customer.id})">
            Delete
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// update top cards
function updateStats() {
  const basicCount = customers.filter(customer => customer.plan === 'Basic').length;
  const premiumCount = customers.filter(customer => customer.plan === 'Premium').length;
  const enterpriseCount = customers.filter(customer => customer.plan === 'Enterprise').length;

  document.getElementById('stat-total').textContent = customers.length;
  document.getElementById('stat-basic').textContent = basicCount;
  document.getElementById('stat-premium').textContent = premiumCount;
  document.getElementById('stat-enterprise').textContent = enterpriseCount;
}

// small popup message
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');

  toast.textContent = message;

  if (isError) {
    toast.className = 'toast show error';
  } else {
    toast.className = 'toast show';
  }

  setTimeout(() => {
    toast.className = 'toast';
  }, 2800);
}

// add customer on Enter key
['inp-name', 'inp-email', 'inp-phone'].forEach(inputId => {
  document.getElementById(inputId).addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      addCustomer();
    }
  });
});

// first load
renderTable();
updateStats();