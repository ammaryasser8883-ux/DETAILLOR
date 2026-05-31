// Import Supabase client
import { supabase } from "@/lib/supabase";

/**
 * Inquiry data structure
 */
export interface InquiryData {
  brandName: string;
  email: string;
  contactNumber: string;
  preferredContactMethod: string;
  productType: string;
  finishType: string;
  quantity: string;
  country: string;
  notes: string;
}

/**
 * Create inquiry record
 */
export async function submitInquiry(
  inquiry: InquiryData
) {
  // Insert inquiry into database
  const {
    data,
    error,
  } = await supabase
    .from("inquiries")
    .insert({
      brand_name: inquiry.brandName,
      contact_email: inquiry.email,
      contact_number: inquiry.contactNumber,
      preferred_contact_method:
        inquiry.preferredContactMethod,
      product_type: inquiry.productType,
      finish_type: inquiry.finishType,
      quantity: inquiry.quantity,
      country: inquiry.country,
      notes: inquiry.notes,
    })
    .select()
    .single();

  // Stop if database insert failed
  if (error) {
    throw error;
  }

  return data;
}