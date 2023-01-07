import { GDRIVE_BASE_URL } from "../data";

export function getGDriveUrl(id: string): string {
  return `${GDRIVE_BASE_URL}${id}`;
}