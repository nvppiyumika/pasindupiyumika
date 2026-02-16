/**
 * Get the base path for the application
 * Returns empty string for local development, '/pasindupiyumika' for production
 */
export const getBasePath = () => {
    return process.env.NODE_ENV === 'production' ? '/pasindupiyumika' : '';
};

/**
 * Get the full path for an asset
 * @param {string} path - The relative path to the asset (e.g., '/assets/images/profile.jpg')
 * @returns {string} - The full path with base path prepended if in production
 */
export const getAssetPath = (path) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${getBasePath()}${cleanPath}`;
};
