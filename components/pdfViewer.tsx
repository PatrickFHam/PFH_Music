'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Button } from '@heroui/button';


// Set the workerSrc using new URL
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

interface PdfViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }


  return (
    <div className='max-w-full'>
      <div
        style={{
          height: '80vh',           // Lock height
          width: '50vw',
          overflowY: 'auto',        // Make scrollable
          overflowX: 'auto',
          border: '1px solid #ccc', // Optional visual border
          margin: '0 auto',
          maxWidth: '800px',        // Optional max width
        }}
      >
        {numPages && (
          <div style={{ marginTop: '1rem' }}>
            <Button type='button' onPress={() => setPageNumber(p => Math.max(1, p - 1))} disabled={pageNumber === 1}>
              Prev
            </Button>
            <span style={{ margin: '0 1rem' }}>
              Page {pageNumber} of {numPages}
            </span>
            <Button type='button' onPress={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber === numPages}>
              Next
            </Button>
          </div>
        )}

        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
          error="Could not load PDF"
        >
          <Page pageNumber={pageNumber} scale={1} />
        </Document>

        
      </div>
    </div>
  );
};