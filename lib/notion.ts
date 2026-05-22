// Notion access-link stub for post-purchase delivery.
// Real flow: duplicate the FlyPro member-workspace template per buyer, share via email link.
// This module returns either a real Notion-duplicated URL (when configured) or a generic placeholder.

export type NotionAccess = {
  url: string;
  source: "notion" | "placeholder";
};

export async function createMemberAccess(email: string): Promise<NotionAccess> {
  const token = process.env.NOTION_TOKEN;
  const templateId = process.env.NOTION_TEMPLATE_ID;
  const publicMemberUrl = process.env.NOTION_PUBLIC_MEMBER_URL;

  if (!token || !templateId) {
    const fallback = publicMemberUrl || "https://www.notion.so/flypro-members-placeholder";
    console.log("[notion:fallback]", { email, fallback, reason: "missing NOTION_TOKEN or NOTION_TEMPLATE_ID" });
    return { url: fallback, source: "placeholder" };
  }

  // Real implementation would call Notion's API to duplicate the template and grant access.
  // Kept as a stub here — the user (Itay) will wire the real duplication flow when ready.
  console.log("[notion:stub]", { email, templateId, note: "real duplication not yet implemented" });
  return { url: publicMemberUrl || `https://www.notion.so/${templateId}`, source: "notion" };
}
