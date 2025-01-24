Project Overview
This project aims to develop a web application that closely mimics Google Sheets' UI and core functionalities. The focus is on mathematical and data quality functions, data entry, and key UI interactions.

Features
1. Spreadsheet Interface
Google Sheets-like UI with a toolbar, formula bar, and structured cells.
Drag functionality for cell content, formulas, and selections.
Dynamic cell dependency updates for formulas and references.
Basic cell formatting (bold, italics, font size, color).
Ability to add, delete, and resize rows and columns.
2. Mathematical Functions
The application supports the following built-in mathematical functions:

SUM(range) – Returns the sum of the selected range.
AVERAGE(range) – Returns the average of the selected range.
MAX(range) – Returns the maximum value in the selected range.
MIN(range) – Returns the minimum value in the selected range.
COUNT(range) – Returns the number of numerical values in the selected range.
3. Data Quality Functions
The following functions improve data consistency and correctness:

TRIM(cell) – Removes extra spaces from text.
UPPER(cell) – Converts text to uppercase.
LOWER(cell) – Converts text to lowercase.
REMOVE_DUPLICATES(range) – Removes duplicate rows.
FIND_AND_REPLACE(range, find, replace) – Replaces specific text occurrences.
4. Data Entry & Validation
Supports multiple data types (numbers, text, dates).
Implements basic validation (e.g., restricting numeric fields to numbers).
5. Testing
Provides a testing environment where users can execute functions on sample data.
Displays computed function results for clarity.
Bonus Features (Optional)
Additional mathematical and data quality functions.
Advanced formula handling (relative/absolute references).
Ability to save and load spreadsheets.
Data visualization features (charts, graphs).
Tech Stack & Data Structures
Frontend
React.js: For dynamic UI rendering and spreadsheet interactions.
Bootstrap/Tailwind CSS: For UI styling.
Handsontable.js (or similar library): For managing spreadsheet-like functionality.
Backend
Node.js with Express.js: Handles business logic and API endpoints.
Python (Flask/FastAPI, optional): If additional data processing is needed.
Data Storage
MongoDB: For storing spreadsheet data in a flexible JSON format.
PostgreSQL/MySQL: For structured tabular storage.
Data Structures Used
2D Arrays: Represent spreadsheet cells.
