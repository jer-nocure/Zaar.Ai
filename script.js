
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function processInput() {
    const userText = userInput.value.trim();
    if (userText === '') return;

    // Tampilkan pesan pengguna
    displayMessage(userText, 'user');
    userInput.value = '';

    // respons AI setelah 1 detik
    setTimeout(() => {
        const response = generateAIResponse(userText);
        displayMessage(response, 'ai');
    }, 1000);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Gulir otomatis ke bawah
}

    function generateAIResponse(input) {
      const lowerInput = input.toLowerCase();
    
      // 1. Salam & sapaan
      if (
        lowerInput.includes('hai') || lowerInput.includes('halo') ||
        lowerInput.includes('apa kabar') || lowerInput.includes('selamat pagi') ||
        lowerInput.includes('selamat siang') || lowerInput.includes('selamat sore') ||
        lowerInput.includes('selamat malam') || lowerInput.includes('ada orang') ||
        lowerInput.includes('kamu di sana') || lowerInput.includes('bisa bantu aku')
      ) {
        return 'Halo! Ada yang bisa saya bantu hari ini?';
      }
    
      // 2. Pertanyaan tentang identitas bot
      else if (
        lowerInput.includes('siapa kamu') || lowerInput.includes('namamu') ||
        lowerInput.includes('kamu itu siapa') || lowerInput.includes('kamu robot') ||
        lowerInput.includes('kamu ai') || lowerInput.includes('asisten saya') ||
        lowerInput.includes('asisten pribadi') || lowerInput.includes('kenalkan dirimu') ||
        lowerInput.includes('kamu siapa') || lowerInput.includes('punya nama')
      ) {
        return 'Saya adalah asisten AI kamu!';
      }
    
      // 3. Pertanyaan tentang kondisi bot
      else if (
        lowerInput.includes('apa kabar kamu') || lowerInput.includes('kabarmu') ||
        lowerInput.includes('baik-baik saja') || lowerInput.includes('kamu sehat') ||
        lowerInput.includes('lagi sibuk') || lowerInput.includes('sedang apa') ||
        lowerInput.includes('hari ini') || lowerInput.includes('menyenangkan') ||
        lowerInput.includes('lagi senang') || lowerInput.includes('semoga kamu baik')
      ) {
        return 'Saya baik-baik saja! Terima kasih sudah bertanya.';
      }
    
      // 4. Pertanyaan tentang tujuan/kemampuan bot
      else if (
        lowerInput.includes('apa tujuanmu') || lowerInput.includes('kamu dibuat') ||
        lowerInput.includes('bisa bantu apa') || lowerInput.includes('kenapa kamu ada') ||
        lowerInput.includes('fungsi kamu') || lowerInput.includes('tujuan kamu') ||
        lowerInput.includes('di sini buat apa') || lowerInput.includes('bisa lakukan') ||
        lowerInput.includes('pekerjaanmu') || lowerInput.includes('tugasmu')
      ) {
        return 'Tujuan saya adalah membantu kamu menjawab pertanyaan!';
      }
    
      // 5. Pertanyaan kombinasi/umum lainnya
      else if (
        lowerInput.includes('bisa bantu') || lowerInput.includes('menjawab pertanyaan') ||
        lowerInput.includes('asisten ai') || lowerInput.includes('bantu aku belajar') ||
        lowerInput.includes('siapa kamu dan kenapa') || lowerInput.includes('program apa') ||
        lowerInput.includes('ngapain') || lowerInput.includes('merasa capek') ||
        lowerInput.includes('cara kamu bantu') || lowerInput.includes('selalu di sini')
      ) {
        return 'Saya di sini untuk jadi teman ngobrol dan membantu kamu!';
      }
    
      // Jika tidak cocok dengan pertanyaan apapun
      else {
        return 'Maaf, saya belum mengerti maksudmu. Coba tanya hal lain ya!';
      }
    }
    
