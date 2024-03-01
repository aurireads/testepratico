//cliente

document.getElementById('customerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Recupera os dados do formulário
    const formData = new FormData(this);
    const customerData = {};
    formData.forEach((value, key) => {
        customerData[key] = value;
    });

    // Envia os dados para o backend
    fetch('/api/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })
        .then(response => {
            if (response.ok) {
                alert('Cliente cadastrado com sucesso!');
                // Limpa o formulário após o cadastro
                document.getElementById('customerForm').reset();
            } else {
                alert('Erro ao cadastrar cliente.');
            }
        })
        .catch(error => {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Erro ao cadastrar cliente. Verifique o console para mais detalhes.');
        });
});

//produto
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    // Recupera os dados do formulário
    const formData = new FormData(this);
    const productData = {};
    formData.forEach((value, key) => {
        productData[key] = value;
    });
    
    // Envia os dados para o backend
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => {
        if (response.ok) {
            alert('Produto cadastrado com sucesso!');
            // Limpa o formulário após o cadastro
            document.getElementById('productForm').reset();
        } else {
            alert('Erro ao cadastrar produto.');
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar produto:', error);
        alert('Erro ao cadastrar produto. Verifique o console para mais detalhes.');
    });
});

//venda
document.getElementById('saleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    // Recupera os dados do formulário
    const formData = new FormData(this);
    const saleData = {};
    formData.forEach((value, key) => {
        saleData[key] = value;
    });
    
    // Envia os dados para o backend
    fetch('/api/sales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(saleData)
    })
    .then(response => {
        if (response.ok) {
            alert('Venda registrada com sucesso!');
            // Limpa o formulário após o registro da venda
            document.getElementById('saleForm').reset();
        } else {
            alert('Erro ao registrar venda.');
        }
    })
    .catch(error => {
        console.error('Erro ao registrar venda:', error);
        alert('Erro ao registrar venda. Verifique o console para mais detalhes.');
    });
});

//vendedores
document.getElementById('sellerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    // Recupera os dados do formulário
    const formData = new FormData(this);
    const sellerData = {};
    formData.forEach((value, key) => {
        sellerData[key] = value;
    });
    
    // Envia os dados para o backend
    fetch('/api/sellers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sellerData)
    })
    .then(response => {
        if (response.ok) {
            alert('Vendedor cadastrado com sucesso!');
            // Limpa o formulário após o cadastro do vendedor
            document.getElementById('sellerForm').reset();
        } else {
            alert('Erro ao cadastrar vendedor.');
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar vendedor:', error);
        alert('Erro ao cadastrar vendedor. Verifique o console para mais detalhes.');
    });
});

