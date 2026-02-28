'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Lock, Mail, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

type FormState = 'idle' | 'submitting';
type Tab = 'signin' | 'signup';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 60 * 1000;

export default function AdminLoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('signin');
  const [formState, setFormState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [attempts, setAttempts] = useState(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    const now = Date.now();
    if (lockedUntil && now < lockedUntil) {
      const secs = Math.ceil((lockedUntil - now) / 1000);
      setError(`Too many failed attempts. Try again in ${secs} second${secs === 1 ? '' : 's'}.`);
      return;
    }

    setFormState('submitting');

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= MAX_ATTEMPTS) {
        setLockedUntil(Date.now() + LOCKOUT_MS);
        setError('Too many failed attempts. Please wait 60 seconds before trying again.');
      } else {
        const remaining = MAX_ATTEMPTS - newAttempts;
        setError(`Invalid email or password. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`);
      }
      setFormState('idle');
      return;
    }

    router.push('/admin');
    router.refresh();
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setFormState('submitting');

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      setError(authError.message);
      setFormState('idle');
      return;
    }

    setSuccess('Account created successfully! You can now sign in.');
    setForm({ email: '', password: '' });
    setFormState('idle');
    setTimeout(() => setTab('signin'), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/logo.jpeg"
            alt="Solvifie"
            width={160}
            height={48}
            className="mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-gray-900 font-heading">
            Admin Portal
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {tab === 'signin'
              ? 'Sign in to manage jobs and applications'
              : 'Create your admin account'}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
            <button
              type="button"
              onClick={() => { setTab('signin'); resetMessages(); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                tab === 'signin'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setTab('signup'); resetMessages(); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                tab === 'signup'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm mb-6">
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl text-sm mb-6">
              <CheckCircle2 size={16} className="shrink-0" />
              {success}
            </div>
          )}

          <form onSubmit={tab === 'signin' ? handleSignIn : handleSignUp} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="admin@solvifie.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, password: e.target.value }))
                  }
                  placeholder={tab === 'signup' ? 'Min. 6 characters' : 'Enter your password'}
                  className="w-full pl-11 pr-11 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all disabled:opacity-60"
            >
              {formState === 'submitting' ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {tab === 'signin' ? 'Signing in...' : 'Creating account...'}
                </span>
              ) : (
                tab === 'signin' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Solvifie Consultancy Admin Panel
        </p>
      </div>
    </div>
  );
}
