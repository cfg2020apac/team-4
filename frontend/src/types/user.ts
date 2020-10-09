export interface UserData {
  name: string | null;
  profile: string | null;
  password?: string;
  file?: string;
  file_helper?: string;
  fullname?: string | null;
  date_of_birth?: string | null;
  gender?: string | null;
  race?: string | null;
  nationality?: string | null;
  address_streetname?: string | null;
  address_postal_code?: string | null;
  address_unit_number?: string | null;
  spoken_languages?: string | null;
  written_languages?: string | null;
  interests?: string | null;
  help?: string | null;
  current_occupation?: string | null;
}
