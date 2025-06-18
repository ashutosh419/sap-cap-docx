sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
  "use strict";

  return {
    downloadDocx: function (oEvent) {
      MessageToast.show("Generating Word report...");

      const aItems = this.getEditFlow()
        .getView()
        .byId("bookshop::BooksList--fe::table::Books::LineItem-innerTable")
        .getItems();

      const aObjects = aItems.map((item) =>
        item.getBindingContext().getObject()
      );

      const {
        Document,
        Packer,
        Paragraph,
        Table,
        TableRow,
        TableCell,
        TextRun,
        WidthType,
        AlignmentType,
        HeadingLevel,
      } = window.docx;

      // Custom Header Paragraph
      const header = new Paragraph({
        children: [
          new TextRun({
            text: "Book Inventory Report",
            bold: true,
            size: 32,
            font: "Calibri",
          }),
        ],
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
      });

      // Report data
      const metadata = new Paragraph({
        children: [
          new TextRun({
            text: `Generated on: ${new Date().toLocaleString()}`,
            italics: true,
            size: 20,
          }),
        ],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 300 },
      });

      // Line break
      const lineBreak = new Paragraph({
        children: [],
        spacing: { after: 200 },
      });

      // Header row
      const headerRow = new TableRow({
        children: ["ID", "Title", "Stock"].map(
          (text) =>
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text, bold: true, size: 22 })],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            })
        ),
      });

      // Data rows
      const dataRows = aObjects.map(
        (book) =>
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    text: String(book.ID),
                    size: 22,
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
              new TableCell({
                children: [new Paragraph({ text: book.title, size: 22 })],
              }),
              new TableCell({
                children: [
                  new Paragraph({ text: String(book.stock), size: 22 }),
                ],
              }),
            ],
          })
      );

      // Table
      const table = new Table({
        rows: [headerRow, ...dataRows],
        width: { size: 100, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
      });

      // Assemble the document
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [header, metadata, lineBreak, table],
          },
        ],
      });

      // 📌 Generate and download
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "Book_Inventory_Report.docx");
        console.log("Document created and downloaded successfully");
      });
    },
  };
});

// this.getEditFlow().getView().byId('bookshop::BooksList--fe::table::Books::LineItem-innerTable').getItems()[0].getBindingContext().getObject()
