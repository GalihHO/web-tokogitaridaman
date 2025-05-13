const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');
const harga = urlParams.get('harga');

// Fungsi format angka ke format Rupiah Indonesia tanpa simbol Rp
function formatRupiah(angka) {
    if (!angka) return '-';
    return parseInt(angka).toLocaleString('id-ID');
}

// Tampilkan data nama dan harga gitar segera setelah halaman dim
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('NamaGitar').textContent = nama || '-';
    document.getElementById('HargaGitar').textContent = harga ? formatRupiah(harga) : '-';
});

function tampilkanStruk() {
    const metode = document.getElementById('metode').value;
    document.getElementById('sNama').textContent = nama || '-';
    document.getElementById('sHarga').textContent = harga ? formatRupiah(harga) : '-';
    document.getElementById('sMetode').textContent = metode;
    document.getElementById('struk').style.display = 'block';
}

function downloadPDF() {
    const struk = document.getElementById('struk');
    html2pdf().from(struk).save('struk-pembelian.pdf');
}