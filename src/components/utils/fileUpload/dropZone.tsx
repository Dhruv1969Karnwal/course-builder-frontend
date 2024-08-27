import React, { useState, useCallback } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { CloudUpload } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DropZone: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const singleFile = acceptedFiles[0];
      setFile(singleFile);
    }
  }, []);

  // Define the acceptable file types
  const accept: Accept = {
    'image/*': []
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1 // Allow only a single file
  });

  const handleUploadClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (file) {
      console.log('File Information:', {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      });
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div 
      {...getRootProps()} 
      className="border-2 border-dashed border-gray-300 p-5 flex items-center justify-center h-60 relative"
    >
      <input {...getInputProps()} className="absolute inset-0 opacity-0 cursor-pointer" />
      {isDragActive ? (
        <p className="text-sm">Drop the file here ...</p>
      ) : file ? (
        <div className="flex flex-col gap-2 items-center">
          <p className="text-base font-semibold text-blue-600">File Selected</p>
          <Button 
            className="bg-blue-500 hover:bg-blue-600"
            variant="default"
            onClick={handleUploadClick}
          >
            Upload
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <CloudUpload size={32} />
          <p className="text-base font-semibold text-blue-600">Choose file or drag and drop</p>
          <p className="text-sm">Image (4MB)</p>
        </div>
      )}
    </div>
  );
};

export default DropZone;
