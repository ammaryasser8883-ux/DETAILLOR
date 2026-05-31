// Import Supabase client
import { supabase } from "@/lib/supabase";

/**
 * Save uploaded file references
 *
 * @param inquiryId Inquiry database ID
 * @param fileNames Original filenames
 * @param filePaths Uploaded storage paths
 */
export async function saveInquiryFiles(
  inquiryId: number,
  fileNames: string[],
  filePaths: string[]
) {
  // Create rows for database
  const rows = filePaths.map(
    (filePath, index) => ({
      inquiry_id: inquiryId,
      file_name: fileNames[index],
      file_path: filePath,
    })
  );

  // Save all rows
  const { error } =
    await supabase
      .from("inquiry_files")
      .insert(rows);

  if (error) {
    throw error;
  }
}