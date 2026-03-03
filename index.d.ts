/**
 * js-library-detector - Detects JavaScript libraries running on a page
 */

declare const UNKNOWN_VERSION: null;

interface LibraryTest {
    id: string;
    icon: string;
    url: string;
    npm?: string;
    test: (win: Window & typeof globalThis) => LibraryDetectionResult | false;
}

interface LibraryDetectionResult {
    version: string | null;
    [key: string]: unknown;
}

interface LibraryDetectorTests {
    [libraryName: string]: LibraryTest;
}

declare const d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests: LibraryDetectorTests;

export = d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests;
