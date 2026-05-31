// Import Supabase client
import { supabase } from "@/lib/supabase";

/**
 * Upload multiple files to Supabase Storage
 *
 * Performance Improvement:
 * ------------------------
 * Upload all files in parallel instead of
 * uploading them one-by-one.
 *
 * This significantly reduces total upload time.
 *
 * @param files Selected files from the form
 * @returns Array of uploaded file paths
 */
export async function uploadFiles(
  files: FileList
): Promise<string[]> {

  // Convert FileList into a normal array
  const fileArray = Array.from(files);

  // Create one upload promise per file
  const uploadPromises = fileArray.map(
    async (file) => {

      // Generate unique file name
      const filePath =
        `${Date.now()}-${Math.random()}-${file.name}`;

      // Upload file to Supabase Storage
      const { error } =
        await supabase.storage
          .from("reference-files")
          .upload(filePath, file);

      // Stop if upload failed
      if (error) {
        throw error;
      }

      // Return uploaded path
      return filePath;
    }
  );

  // Execute all uploads simultaneously
  const uploadedPaths =
    await Promise.all(uploadPromises);

  // Return uploaded file paths
  return uploadedPaths;
}