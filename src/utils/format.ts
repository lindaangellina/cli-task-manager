export function formatTanggal(tanggal: Date): string {
    return tanggal.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// TODO: tambahkan fungsi format lain sesuai kebutuhan (misal formatStatus, formatPrioritas)