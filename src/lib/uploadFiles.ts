// Import Supabase client
import { supabase } from "@/lib/supabase";

/**
 * Upload multiple files to Supabase Storage
 *
 * @param files Selected files from the form
 * @returns Array of uploaded file paths
 */
export async function uploadFiles(
  files: FileList
): Promise<string[]> {
  // Store uploaded file paths
  const uploadedPaths: string[] = [];

  // Loop through selected files
  for (const file of Array.from(files)) {
    // Create unique filename
    const filePath =
      `${Date.now()}-${Math.random()}-${file.name}`;

    // Upload file to storage bucket
    const { error } =
      await supabase.storage
        .from("reference-files")
        .upload(filePath, file);

    // Stop if upload failed
    if (error) {
      throw error;
    }

    // Save path for later use
    uploadedPaths.push(filePath);
  }

  // Return uploaded paths
  return uploadedPaths;
}