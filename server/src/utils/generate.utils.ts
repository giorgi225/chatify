import { addMinutes, addHours, addDays } from "date-fns";

/**
 * Generates a random 6-digit verification code as a string.
 *
 * @returns {string} A 6-digit code (e.g., "482193").
 */
export const generate6Digit = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


/**
 * Converts a duration string into a future Date using date-fns
 * @param duration e.g. "15m", "2h", "1d"
 * @returns Date object that is duration ahead of now
 */
export function generateFutureDateFromDuration(duration: string): Date {
    const match = duration.match(/^(\d+)([mhd])$/i);

    if (!match) {
        throw new Error('Invalid duration format. Use "15m", "2h", or "1d".');
    }

    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();

    switch (unit) {
        case "m":
            return addMinutes(new Date(), value);
        case "h":
            return addHours(new Date(), value);
        case "d":
            return addDays(new Date(), value);
        default:
            throw new Error("Invalid unit. Use m, h, or d.");
    }
}

export function generateMilesecondsFromTimeString(duration: string): number {
    const match = duration.match(/^(\d+)([smhd])$/i);
    if (!match) {
        throw new Error('Invalid time format. Use "30s", "1m", "2h", or "1d".');
    }

    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();

    switch (unit) {
        case "s":
            return value * 1000;
        case "m":
            return value * 60 * 1000;
        case "h":
            return value * 60 * 60 * 1000;
        case "d":
            return value * 24 * 60 * 60 * 1000;
        default:
            throw new Error("Invalid unit. Use s, m, h, or d.");
    }
}