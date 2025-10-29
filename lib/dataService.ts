// Import data directly from TypeScript files for local fallback
import { noticesData } from './data/notices';

// This URL is used for fetching live 'Notices' data.
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ukhF8GqkwiCN4oYvT6FcO3RBMuk8c56emdFrN0EY9j5HA5oZkLzLQX6JQXRFA5BNQC4jc0Z8nJ5R/pub?output=csv';

// Define and export shared interfaces
export interface Notice {
    title: string;
    type: string;
    description: string;
    date: string;
    gdriveLink: string;
}

/**
 * Normalizes a CSV header string to a camelCase property name.
 * Example: "GDrive Link" becomes "gdriveLink".
 * This is used for parsing the live Google Sheet data.
 * @param header The header string from the CSV file.
 * @returns A camelCase version of the header.
 */
function normalizeHeader(header: string): string {
    return header
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map((word, index) => 
            index === 0 
                ? word.toLowerCase() 
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}


/**
 * Parses a CSV string into an array of objects, correctly handling quoted values
 * and normalizing headers to camelCase.
 * This is used for parsing the live Google Sheet data.
 * @param csv The CSV content as a string.
 * @returns An array of objects representing the CSV rows.
 */
function parseCsvRobust(csv: string): any[] {
  const lines = csv.trim().replace(/\r\n/g, '\n').split('\n');
  if (lines.length < 2) return [];

  const headers = lines.shift()!.trim().split(',').map(normalizeHeader);

  return lines.map(line => {
    // Regex to split by comma, but ignore commas inside double quotes.
    const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    
    const obj: { [key: string]: string } = {};
    headers.forEach((header, i) => {
      let value = (values[i] || '').trim();
      // Remove surrounding quotes if they exist
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      // Replace double-double-quotes with a single double-quote
      value = value.replace(/""/g, '"');
      obj[header] = value;
    });
    return obj;
  });
}

/**
 * Fetches and parses notice data from the public Google Sheet URL.
 * If the fetch fails, it loads data from the local notices.ts file as a fallback.
 * @returns A promise that resolves to an array of Notice objects.
 */
export async function fetchNoticesData(): Promise<Notice[]> {
    try {
        console.log("Attempting to fetch live notices from Google Sheet...");
        const response = await fetch(GOOGLE_SHEET_URL);
        if (!response.ok) {
            throw new Error(`Failed to fetch from Google Sheet: ${response.statusText}`);
        }
        const csvText = await response.text();
        const data = parseCsvRobust(csvText);
        console.log("Successfully fetched live notices.");
        return data as Notice[];
    } catch (error) {
        console.warn('Live notices fetch failed:', error);
        console.log("Loading local fallback notices from imported TS file instead.");
        // Use the imported local TS data as a fallback
        return Promise.resolve(noticesData);
    }
}