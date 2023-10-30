"use client";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import Image from "next/image";

export default function Home() {

  const [files, setFiles] = useState();
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex justify-center items-center  w-full h-screen  ">
      <div
        className="border-[2px] border-dashed flex flex-col border-black justify-center items-center w-1/3 h-1/3 rounded-xl bg-gray-300"
        {...getRootProps()}
      >
        <Image className="pb-2" src={"/upload.png"} width={40} height={40} alt="pic" />
        
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-sm">Drop the files here ...</p>
        ) : (
          <p className="font-extralight ">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
}
