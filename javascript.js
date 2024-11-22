let currentModel = 1; // Track the current model

// Function to filter the table rows based on the search input
function searchTable() {
    let input = document.getElementById('searchInput');
    if (!input) return; // Check if the input exists

    let filter = input.value.toLowerCase(); // Convert to lowercase to make the search case-insensitive
    let table = document.getElementById('motorcycleTable');
    if (!table) return; // Check if the table exists

    let tr = table.getElementsByTagName('tr'); // Get all the rows of the table

    // Loop through all table rows
    for (let i = 1; i < tr.length; i++) { // Start at 1 to avoid header row
        let rowVisible = false; // Flag to track if the row should be visible
        let tds = tr[i].getElementsByTagName('td'); // Get all cells in the current row

        // Loop through all cells in the row
        for (let j = 0; j < tds.length; j++) {
            let td = tds[j];
            if (td) {
                let txtValue = td.textContent || td.innerText;
                // If the text in any cell matches the search input, display the row
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    rowVisible = true; // Set the flag to true
                    break; // No need to check other cells
                }
            }
        }

        // Show or hide the row based on the flag
        tr[i].style.display = rowVisible ? "" : "none"; // Show or hide the row
    }
}

// Function to go to the first model
function goToHome() {
    currentModel = 1; // Reset to the first model
    updateContent();
}

// Function to go to the previous model
function goToPrevious() {
    if (currentModel > 1) { // Prevent going below model 1
        currentModel--;
        updateContent();
    }
}

// Function to go to the next model
function goToNext() {
    const table = document.getElementById('motorcycleTable');
    if (table) {
        if (currentModel < table.rows.length - 1) { // Ensure there are more rows
            currentModel++;
            updateContent();
        }
    }
}

// Function to update the content based on the current model
function updateContent() {
    const content = document.getElementById('content');
    if (!content) return;

    switch (currentModel) {
        case 1:
            content.innerHTML = `
                <h2>Modelo 1</h2>
                <p>Detalhes sobre o Modelo 1: Uma moto de alto desempenho, ideal para competições.</p>
            `;
            break;
        case 2:
            content.innerHTML = `
                <h2>Modelo 2</h2>
                <p>Detalhes sobre o Modelo 2: Uma moto confiável, perfeita para trilhas leves.</p>
            `;
            break;
        case 3:
            content.innerHTML = `
                <h2>Modelo 3</h2>
                <p>Detalhes sobre o Modelo 3: Uma moto versátil, adequada para todos os tipos de terreno.</p>
            `;
            break;
        case 4:
            content.innerHTML = `
                <h2>Modelo 4</h2>
                <p>Detalhes sobre o Modelo 4: Uma moto compacta e leve, ideal para iniciantes.</p>
            `;
            break;
        default:
            content.innerHTML = `
                <h2>Página Não Encontrada</h2>
                <p>Você está tentando acessar um modelo que não existe.</p>
            `;
            break;
    }

}
 // 3. Avaliação de Atendimento (Estrelas)
 const stars = document.querySelectorAll('#starRating .star');
 const ratingMessage = document.getElementById('ratingMessage');
 let selectedRating = 0;

 stars.forEach(star => {
     star.addEventListener('mouseover', () => highlightStars(star.dataset.star));
     star.addEventListener('click', () => setRating(star.dataset.star));
     star.addEventListener('mouseout', () => resetStars());
 });

 function highlightStars(rating) {
     stars.forEach(star => {
         star.style.color = star.dataset.star <= rating ? '#FFD700' : '#888888';  // Dourado para as estrelas destacadas
     });
 }

 function setRating(rating) {
     selectedRating = rating;
     ratingMessage.textContent = `Obrigado pela sua avaliação de ${rating} estrelas!`;
     highlightStars(rating);  // Destaca as estrelas após a seleção
 }

 function resetStars() {
     stars.forEach(star => {
         star.style.color = star.dataset.star <= selectedRating ? '#FFD700' : '#888888';  // Mantém as estrelas destacadas
     });
 }
   // 2. Formulário de Contato
   const contactForm = document.getElementById('contactForm');
   const confirmationMessage = document.getElementById('confirmationMessage');

   contactForm.addEventListener('submit', function (event) {
       event.preventDefault();  // Impede o envio padrão do formulário

       // Obtém os dados do formulário
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;

       // Cria a mensagem de confirmação
       const messageContent = `
           Obrigado, ${name}!<br>
           Sua mensagem foi enviada com sucesso.<br>
           <strong>Email:</strong> ${email}<br>
           <strong>Mensagem:</strong> ${message}
       `;
       
       // Exibe a mensagem de confirmação
       confirmationMessage.innerHTML = messageContent;
       confirmationMessage.style.display = 'block';

       // Reseta o formulário
       contactForm.reset();
   });
