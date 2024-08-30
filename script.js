function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const message = document.getElementById('message');

    // Menampilkan pesan dan foto
    message.style.display = 'block';

    // Menghilangkan kotak hadiah
    giftBox.style.display = 'none';
}