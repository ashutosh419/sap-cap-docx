# 📄 SAP CAP DOCX Export Example

This project demonstrates how to build a Fiori Elements List Report based on SAP CAP (Cloud Application Programming Model), with the ability to **export data to a Word `.docx` file** using [docx.js](https://docx.js.org/) and [FileSaver.js](https://github.com/eligrey/FileSaver.js/).

---

## 📦 Project Structure

```bash
sap-cap-docx/
├── app/
│   └── bookshop/         # Fiori Elements List Report app
├── db/
│   └── data-model.cds        # Data model definition
│   └── data/                 # Sample CSV data
├── srv/
│   └── cat-service.cds       # OData service definition
├── package.json
├── README.md
└── ...
```

---

## 🚀 Features

- 📚 List Report of Books with CAP backend
- 🧾 Export to Word (`.docx`) from UI
- ⚙️ Uses `docx.js` for document generation
- 💾 Uses `FileSaver.js` for client-side download
- 🧩 Fully compatible with RAP-style Fiori Elements as well

---

## 🛠️ How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start CAP backend

```bash
cds watch
```

### 3. Open Fiori app

Access the List Report app at:

```bash
http://localhost:4004/bookshop/webapp/index.html
```

Or use the default CAP preview link if deployed to SAP BTP.

---

## 📤 Export to Word

- The "Export as Word" button is available in the List Report toolbar.
- On click:
  - It loads `docx.js` and `FileSaver.js` from CDN (if not already loaded).
  - Generates a nicely formatted `.docx` document containing table data.
  - Triggers download using `saveAs()`.

---

## 📚 Technologies Used

| Layer          | Stack                            |
|----------------|----------------------------------|
| Backend        | SAP CAP (Node.js)                |
| Frontend       | SAP Fiori Elements (UI5)         |
| Word Export    | [docx.js](https://docx.js.org)   |
| File Download  | [FileSaver.js](https://filesaverjs.com) |
| Data Storage   | CSV or HANA (optional)           |

---

## 📎 Useful Links

- [docx.js Docs](https://docx.js.org/)
- [SAP CAP Docs](https://cap.cloud.sap/docs/)
- [Fiori Tools Guide](https://sap.github.io/fiori-tools/)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js)

---

## 📄 License

This project is for demo and learning purposes. MIT-style license.

---

Enjoy exporting your Fiori data to Word! 📝
