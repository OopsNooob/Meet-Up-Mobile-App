/**
 * useTheme — Trả về color token theo theme hiện tại (light/dark)
 * Dùng trong tất cả màn hình và component thay cho màu hardcode
 */
import { useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';

export type ColorTokens = {
  background: string;
  surface: string;    // card, panel
  surfaceAlt: string; // input, chip, subtle
  text: string;
  subtext: string;
  placeholder: string;
  border: string;
  divider: string;
  // Semantic
  primary: string;
  primaryLight: string;
  success: string;
  successLight: string;
  warning: string;
  warningLight: string;
  danger: string;
  dangerLight: string;
  purple: string;
  purpleLight: string;
  // Special
  ownBubble: string;     // chat bubble gửi đi
  otherBubble: string;   // chat bubble nhận
  ownBubbleText: string;
  otherBubbleText: string;
  overlay: string;       // modal backdrop
};

const LIGHT: ColorTokens = {
  background: '#f5f7fa',
  surface: '#ffffff',
  surfaceAlt: '#f3f4f6',
  text: '#111111',
  subtext: '#374151',
  placeholder: '#9ca3af',
  border: '#d1d5db',
  divider: '#f0f0f0',
  primary: '#3b82f6',
  primaryLight: '#eff6ff',
  success: '#22c55e',
  successLight: '#dcfce7',
  warning: '#f97316',
  warningLight: '#fffbeb',
  danger: '#ef4444',
  dangerLight: '#fee2e2',
  purple: '#6366f1',
  purpleLight: '#ede9fe',
  ownBubble: '#3b82f6',
  otherBubble: '#f3f4f6',
  ownBubbleText: '#ffffff',
  otherBubbleText: '#111111',
  overlay: 'rgba(0,0,0,0.5)',
};

const DARK: ColorTokens = {
  background: '#0f172a',
  surface: '#1e293b',
  surfaceAlt: '#334155',
  text: '#f1f5f9',
  subtext: '#cbd5e1',
  placeholder: '#64748b',
  border: '#475569',
  divider: '#1e293b',
  primary: '#60a5fa',
  primaryLight: '#1e3a5f',
  success: '#4ade80',
  successLight: '#14532d',
  warning: '#fb923c',
  warningLight: '#431407',
  danger: '#f87171',
  dangerLight: '#450a0a',
  purple: '#a5b4fc',
  purpleLight: '#312e81',
  ownBubble: '#2563eb',
  otherBubble: '#334155',
  ownBubbleText: '#ffffff',
  otherBubbleText: '#f1f5f9',
  overlay: 'rgba(0,0,0,0.7)',
};

export function useTheme() {
  const theme = useAppStore((s) => s.theme);
  const colors = useMemo(() => (theme === 'dark' ? DARK : LIGHT), [theme]);
  const isDark = theme === 'dark';
  return { colors, isDark, theme };
}
