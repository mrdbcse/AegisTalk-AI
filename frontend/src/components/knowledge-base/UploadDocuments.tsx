// import { useState, type ChangeEvent, type DragEvent } from "react";

// interface FileUploadProps {
//   accept?: string;
//   maxSizeMB?: number;
//   onUpload: (file: File) => Promise<void>;
// }

// const UploadDocuments = ({
//   accept = ".pdf",
//   maxSizeMB = 10,
//   onUpload,
// }: FileUploadProps) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const validateFile = (file: File) => {
//     if (!file.name.endsWith(accept)) {
//       return `Only ${accept} files are allowed`;
//     }

//     if (file.size > maxSizeMB * 1024 * 1024) {
//       return `File size should be less than ${maxSizeMB}MB`;
//     }

//     return null;
//   };

//   const handleFile = (file: File) => {
//     const validationError = validateFile(file);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setError(null);
//     setFile(file);
//   };

//   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);

//     if (e.dataTransfer.files.length > 0) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.length) {
//       handleFile(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;
//     try {
//       setIsUploading(true);
//       await onUpload(file);
//       setFile(null);
//     } catch {
//       setError("Upload failed. Please try again.");
//     } finally {
//       setIsUploading(false);
//     }
//   };
//   return (
//     <div className="bg-white p-6 rounded-xl shadow">
//       <h2 className="text-lg font-semibold mb-4">Upload Document</h2>

//       {/* Drop Zone */}
//       <div
//         onDragOver={(e) => {
//           e.preventDefault();
//           setIsDragging(true);
//         }}
//         onDragLeave={() => setIsDragging(false)}
//         onDrop={handleDrop}
//         className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition
//           ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}`}
//       >
//         <p className="text-sm text-gray-600">Drag & drop your file here, or</p>

//         <label className="mt-2 inline-block text-indigo-600 font-medium cursor-pointer">
//           Browse
//           <input
//             type="file"
//             accept={accept}
//             className="hidden"
//             onChange={handleFileChange}
//           />
//         </label>

//         <p className="text-xs text-gray-400 mt-2">
//           {accept.toUpperCase()} only · Max {maxSizeMB}MB
//         </p>
//       </div>

//       {/* Selected File */}
//       {file && (
//         <div className="mt-4 flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md">
//           <span className="text-sm text-gray-700 truncate">{file.name}</span>
//           <button
//             onClick={() => setFile(null)}
//             className="text-sm text-red-500 hover:underline"
//           >
//             Remove
//           </button>
//         </div>
//       )}

//       {/* Error */}
//       {error && <p className="text-sm text-red-600 mt-3">{error}</p>}

//       {/* Upload Button */}
//       <button
//         onClick={handleUpload}
//         disabled={!file || isUploading}
//         className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center gap-2"
//       >
//         {isUploading && (
//           <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//         )}
//         {isUploading ? "Uploading..." : "Upload"}
//       </button>
//     </div>
//   );
// };

// export default UploadDocuments;
