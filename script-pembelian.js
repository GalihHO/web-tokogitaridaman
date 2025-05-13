// Ambil data dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');
const harga = urlParams.get('harga');

// Tampilkan di halaman
document.getElementById('namaGitar').textContent = nama || '-';
document.getElementById('hargaGitar').textContent = harga ? parseInt(harga).toLocaleString('id-ID') : '-';

function tampilkanStruk() {
    const metode = document.getElementById('metode').value;
    document.getElementById('sNama').textContent = nama;
    document.getElementById('sHarga').textContent = parseInt(harga).toLocaleString('id-ID');
    document.getElementById('sMetode').textContent = metode;
    document.getElementById('struk').style.display = 'block';
}

function downloadPDF() {
    const struk = document.getElementById('struk');
    html2pdf().from(struk).save('struk-pembelian.pdf');
}
