'use client'; // this makes it a client component

import dynamic from 'next/dynamic';

// Dynamically import the actual PDF viewer with SSR disabled
const PdfViewer = dynamic(() => import('./pdfViewer'), { ssr: false });

interface Props {
  fileUrl: string;
}

export default function PdfViewerWrapper({ fileUrl }: Props) {
  return <PdfViewer fileUrl={fileUrl} />;
}