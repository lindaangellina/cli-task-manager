export function formatTanggal(tanggal: Date): string {
    return tanggal.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

export function formatNama(nama: string): string {
    return nama.toUpperCase();
}