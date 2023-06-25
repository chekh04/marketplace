export function calculate(value: number): string | null {
    const start = Date.now();

    while ((Date.now() - start) / 1000 < value);
    return value !== null ? `Some result for value ${value}` : null;
 }