"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const badgeClass = (status?: string) => {
  const normalizedStatus = status?.toLowerCase() ?? "";

  if (["accept", "accepted"].includes(normalizedStatus)) {
    return "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30";
  }

  if (["reject", "rejected"].includes(normalizedStatus)) {
    return "bg-rose-400/15 text-rose-300 ring-rose-400/30";
  }

  return "bg-amber-400/15 text-amber-200 ring-amber-400/30";
};

interface Contact {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  projectName?: string;
  phoneNo?: string;
  createdAt?: string;
  status?: string;
}

interface Counts {
  total: number;
  pending: number;
  accepted: number;
}

export default function Contact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [counts, setCounts] = useState<Counts>({
    total: 0,
    pending: 0,
    accepted: 0,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/contact")
      .then(({ data }) => {
        setContacts(data.contact || []);

        setCounts({
          total: data.totalContact || 0,
          pending: data.pendingContact || 0,
          accepted: data.acceptedContact || 0,
        });
      })
      .catch(() => {
        setError("Failed to load contacts. Please try again later.");
      });
  }, []);

  const stats = [
    ["Total enquiries", counts.total, "text-white"],
    ["Pending review", counts.pending, "text-amber-300"],
    ["Accepted", counts.accepted, "text-emerald-300"],
  ] as const;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Admin dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact enquiries
            </h1>

            <p className="mt-2 text-slate-400">
              Review and manage messages from potential clients.
            </p>
          </div>

          <span className="w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200 ring-1 ring-inset ring-cyan-400/20">
            {counts.total} total
          </span>
        </header>

        {/* Statistics */}
        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          {stats.map(([label, value, accent]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10"
            >
              <p className="text-sm font-medium text-slate-400">{label}</p>

              <p className={`mt-2 text-3xl font-bold ${accent}`}>{value}</p>
            </div>
          ))}
        </section>

        {/* Error */}
        {error ? (
          <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-5 text-rose-200">
            {error}
          </div>
        ) : contacts.length === 0 ? (
          /* Empty State */
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-14 text-center">
            <h2 className="text-lg font-semibold">No contact enquiries yet</h2>

            <p className="mt-2 text-sm text-slate-400">
              New messages will appear here.
            </p>
          </div>
        ) : (
          /* Contact List */
          <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            {/* Table Header */}
            <div className="hidden grid-cols-[1.25fr_1.4fr_1fr_0.8fr_auto] gap-4 border-b border-white/10 bg-white/[0.04] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 md:grid">
              <span>Contact</span>
              <span>Project</span>
              <span>Received</span>
              <span>Status</span>
              <span />
            </div>

            {/* Contacts */}
            <div className="divide-y divide-white/10">
              {contacts.map((contact) => {
                const contactId = contact._id || contact.id;

                return (
                  <article
                    key={contactId}
                    className="grid gap-3 px-5 py-5 transition hover:bg-white/[0.045] md:grid-cols-[1.25fr_1.4fr_1fr_0.8fr_auto] md:items-center md:gap-4 md:px-6"
                  >
                    {/* Contact */}
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-white">
                        {contact.name}
                      </p>

                      <p className="truncate text-sm text-slate-400">
                        {contact.email}
                      </p>
                    </div>

                    {/* Project */}
                    <div className="min-w-0">
                      <p className="truncate text-sm text-slate-200">
                        {contact.projectName || "General enquiry"}
                      </p>

                      <p className="mt-1 truncate text-xs text-slate-500">
                        {contact.phoneNo || "No phone provided"}
                      </p>
                    </div>

                    {/* Date */}
                    <p className="text-sm text-slate-400">
                      {contact.createdAt
                        ? new Date(contact.createdAt).toLocaleDateString()
                        : "Unknown date"}
                    </p>

                    {/* Status */}
                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${badgeClass(
                        contact.status,
                      )}`}
                    >
                      {contact.status || "pending"}
                    </span>

                    {/* View Button */}
                    {contactId && (
                      <Link
                        href={`/admin/contacts/${contactId}`}
                        className="w-fit rounded-lg bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                      >
                        View
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
