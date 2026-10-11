export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const name = String(body.fullName || body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || body.mobile || "").trim();

    if (!name || (!email && !phone)) {
      return res.status(400).json({
        ok: false,
        error: "Name and at least one contact method (email or phone) are required."
      });
    }

    const record = {
      id: body.id || `enq-${Date.now()}`,
      createdAt: body.createdAt || new Date().toISOString(),
      source: body.source || "Website",
      name,
      email,
      phone,
      service: body.service || "Interior Fit-Out",
      projectType: body.projectType || "",
      location: body.location || "",
      budget: body.budget || body.budgetRange || "",
      timeline: body.timeline || "",
      message: String(body.message || "").trim()
    };

    // Log structured lead event in serverless runtime logs
    console.info("[YFB Lead Enquiry Received]", JSON.stringify(record));

    // Optional webhook / email relay if configured in environment
    const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record)
      });
    }

    return res.status(200).json({
      ok: true,
      delivered: true,
      record
    });
  } catch (err) {
    console.error("[YFB Lead Enquiry Error]", err);
    return res.status(500).json({
      ok: false,
      error: "Failed to process enquiry submission."
    });
  }
}
