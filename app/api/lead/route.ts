import { NextResponse } from 'next/server';

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(req: Request) {
  const contentType = req.headers.get('content-type') || '';
  let data: Record<string, string> = {};

  if (contentType.includes('application/json')) {
    data = await req.json();
  } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const formData = await req.formData();
    formData.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });
  } else {
    // attempt best-effort
    try {
      data = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: 'Unsupported content type' }, { status: 415 });
    }
  }

  const role = (data.role || '').toLowerCase();
  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();

  if (!['lawyer', 'client'].includes(role)) {
    return NextResponse.json({ ok: false, error: 'Invalid role' }, { status: 400 });
  }
  if (!name || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid name or email' }, { status: 400 });
  }

  // Placeholder persistence: log only (replace with DB/CRM integration)
  console.log('[LEAD]', { ts: new Date().toISOString(), role, name, email, message, extra: data });

  return NextResponse.json({ ok: true });
}
