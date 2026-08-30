"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Contact {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  phoneNo?: string;
  projectName?: string;
  message?: string;
  status?: string;
  createdAt?: string;
}

type ContactStatus = "accept" | "reject";

export default function ContactInfo() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchContact = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await axios.get(`/api/contact/${id}`);

        setContact(data.contact ?? data.data ?? null);
      } catch {
        setError("Unable to load this contact enquiry.");
        setContact(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  const updateStatus = async (status: ContactStatus) => {
    if (!id || !contact) return;

    try {
      setUpdating(true);
      setError("");

      await axios.patch(`/api/contact/${id}`, {
        status,
      });

      setContact((current) => {
        if (!current) return null;

        return {
          ...current,
          status,
        };
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Unable to update the enquiry.",
        );
      } else {
        setError("Unable to update the enquiry.");
      }
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-950 text-slate-300">
        Loading enquiry...
      </main>
    );
  }

  if (!contact) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-950 p-6 text-rose-200">
        {error || "Contact not found."}
      </main>
    );
  }

  const details: Array<[string, string]> = [
    ["Email", contact.email],
    ["Phone", contact.phoneNo || "Not provided"],
    ["Project", contact.projectName || "General enquiry"],
    [
      "Received",
      contact.createdAt
        ? new Date(contact.createdAt).toLocaleString()
        : "Unknown",
    ],
  ];

  const normalizedStatus = contact.status?.toLowerCase() ?? "";

  const accepted =
    normalizedStatus === "accept" || normalizedStatus === "accepted";

  const rejected =
    normalizedStatus === "reject" || normalizedStatus === "rejected";

  let statusClass = "bg-amber-500/15 text-amber-200 ring-amber-400/30";

  if (accepted) {
    statusClass = "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30";
  } else if (rejected) {
    statusClass = "bg-rose-400/15 text-rose-300 ring-rose-400/30";
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/admin/contacts"
          className="inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to enquiries
        </Link>

        <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
          <header className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-transparent px-6 py-7 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact detail
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold">{contact.name}</h1>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${statusClass}`}
              >
                {contact.status || "pending"}
              </span>
            </div>
          </header>

          <div className="space-y-8 px-6 py-7 sm:px-8">
            <dl className="grid gap-5 sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div key={label} className="border-b border-white/10 pb-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {label}
                  </dt>

                  <dd className="mt-1 break-words text-sm text-slate-200">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Message
              </h2>

              <p className="mt-3 whitespace-pre-wrap rounded-xl border border-white/10 bg-black/20 p-4 leading-7 text-slate-200">
                {contact.message || "No message provided."}
              </p>
            </div>

            {error && (
              <div className="rounded-lg bg-rose-500/10 p-3 text-sm text-rose-200">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
              <button
                type="button"
                disabled={updating || accepted}
                onClick={() => updateStatus("accept")}
                className="rounded-lg bg-emerald-400 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updating ? "Updating..." : "Accept enquiry"}
              </button>

              <button
                type="button"
                disabled={updating || rejected}
                onClick={() => updateStatus("reject")}
                className="rounded-lg border border-rose-400/40 px-4 py-2.5 font-semibold text-rose-200 transition hover:bg-rose-500/15 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updating ? "Updating..." : "Reject enquiry"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
