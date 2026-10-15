import React, { useState } from "react";
import { Save, Check, Building2, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SettingsContent({ webDetails, onSaveWebDetails }) {
  const [form, setForm] = useState(webDetails || {});
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveWebDetails?.(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-7 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-foreground">Studio &amp; Factory Settings</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage official corporate contact details, studio addresses, and communication lines
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-semibold">
            <Check className="size-3.5" /> Details Saved Successfully
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 rounded-2xl border bg-card space-y-5 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-foreground block mb-1">Company Legal Name</label>
            <input
              type="text"
              value={form.companyName || ""}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1">Founder &amp; Managing Director</label>
            <input
              type="text"
              value={form.founderName || ""}
              onChange={(e) => setForm({ ...form, founderName: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-4 pt-3 border-t">
          <div>
            <label className="text-xs font-medium text-foreground block mb-1">
              Design Studio (Head Office) Address
            </label>
            <input
              type="text"
              value={form.studioAddress || ""}
              onChange={(e) => setForm({ ...form, studioAddress: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1">
              In-House Joinery Plant (Al Quoz 3) Address
            </label>
            <input
              type="text"
              value={form.factoryAddress || ""}
              onChange={(e) => setForm({ ...form, factoryAddress: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t">
          <div>
            <label className="text-xs font-medium text-foreground block mb-1">Official Studio Phone</label>
            <input
              type="text"
              value={form.phone || ""}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1">WhatsApp Business Number</label>
            <input
              type="text"
              value={form.whatsapp || ""}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground block mb-1">Official Enquiries Email</label>
            <input
              type="email"
              value={form.email || ""}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button type="submit" className="rounded-xl gap-2 font-semibold">
            <Save className="size-4" /> Save Configuration
          </Button>
        </div>
      </form>
    </div>
  );
}
