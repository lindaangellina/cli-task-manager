export function isEmailValid(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isNamaValid(nama: string): boolean {
    return nama.trim().length >= 3;
}

export function isNilaiValid(nilai: number): boolean {
    return nilai >= 0 && nilai <= 100;
}