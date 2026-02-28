'use client';

import { useState, useRef } from 'react';
import { CheckCircle2, Upload, FileText, X } from 'lucide-react';
import { motion } from 'framer-motion';

type FormState = 'idle' | 'submitting' | 'success';

export default function ApplicationForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowed.includes(selected.type)) {
      setError('Only PDF and DOC files are accepted');
      return;
    }
    if (selected.size > 5 * 1024 * 1024) {
      setError('File must be under 5MB');
      return;
    }

    setError('');
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFormState('submitting');

    const formData = new FormData();
    formData.append('job_id', jobId);
    formData.append('name', form.name.trim());
    formData.append('email', form.email.trim());
    formData.append('phone', form.phone.trim());
    formData.append('message', form.message.trim());
    if (file) formData.append('resume', file);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        setFormState('idle');
        return;
      }

      setFormState('success');
    } catch {
      setError('Network error. Please try again.');
      setFormState('idle');
    }
  };

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-10 rounded-3xl border border-green-100 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h4 className="text-xl font-bold text-green-900 mb-2">
          Application Submitted!
        </h4>
        <p className="text-green-700 text-sm">
          Thank you for applying for <strong>{jobTitle}</strong>. We will review
          your profile and get back to you within 3–5 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100" id="apply">
      <h4 className="text-lg font-bold mb-6">Apply for this position</h4>

      {error && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your full name"
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              placeholder="you@email.com"
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="+91 98765 43210"
            className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Resume (PDF/DOC, max 5MB)
          </label>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          {file ? (
            <div className="flex items-center gap-3 px-5 py-3.5 bg-white border border-gray-200 rounded-xl">
              <FileText size={18} className="text-primary" />
              <span className="text-sm text-gray-700 flex-1 truncate">
                {file.name}
              </span>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  if (fileRef.current) fileRef.current.value = '';
                }}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full px-5 py-6 rounded-xl border-2 border-dashed border-gray-200 bg-white hover:border-primary/40 transition-all text-center"
            >
              <Upload size={20} className="mx-auto text-gray-400 mb-1" />
              <span className="text-sm text-gray-500">
                Click to upload or drag and drop
              </span>
            </button>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            placeholder="Tell us why you're a great fit..."
            rows={4}
            className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all disabled:opacity-60"
        >
          {formState === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit Application'
          )}
        </button>
      </form>
    </div>
  );
}
