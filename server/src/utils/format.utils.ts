import { ParsedUrlQuery } from "querystring";

/**
 * This function formats the `req.query` object into a standard key-value object.
 * - If a query parameter has multiple values (e.g., `tags=tag1&tags=tag2`), it keeps them as an array.
 * - Otherwise, it keeps the value as a string.
 * 
 * @param queries - The `req.query` object, which is typically a key-value pair or array of values.
 * @returns A formatted object where each key maps to either a string or an array of strings.
 */
export function formatQuery(queries: ParsedUrlQuery): { [key: string]: string | string[] } {
    const formattedQuery: Record<string, string | string[]> = {};

    // Iterate over each key-value pair in the `queries` object
    for (const [key, value] of Object.entries(queries)) {
        // Check if the value is an array (i.e., multiple values for the same query parameter)
        if (Array.isArray(value)) {
            formattedQuery[key] = value; // Store the value as an array
        } else if (typeof value === 'string') {
            formattedQuery[key] = value; // Store the value as a string
        } else {
            // If it's not a string or array (e.g., undefined or ParsedQs), we ignore or handle it as needed.
            formattedQuery[key] = value || ''; // Default to empty string if undefined
        }
    }

    return formattedQuery; // Return the formatted query object
}