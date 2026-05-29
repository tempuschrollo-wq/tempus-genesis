// Discord guild widget — public, no auth. presence_count = members online now
// (NOT total members; that would require a bot token). We cache the upstream
// call ~60s and never throw to the client: any failure returns { online: null }
// so the UI can fall back gracefully.
const WIDGET_URL =
  "https://discord.com/api/guilds/1173769966856699925/widget.json";

export async function GET() {
  try {
    const res = await fetch(WIDGET_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
      return Response.json({ online: null });
    }
    const data = await res.json();
    const online =
      typeof data?.presence_count === "number" ? data.presence_count : null;
    return Response.json({ online });
  } catch {
    return Response.json({ online: null });
  }
}
