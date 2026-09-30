export const paletteShades = [
  0, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000,
] as const;

export type PaletteShade = (typeof paletteShades)[number];

type PaletteKey =
  | "solid"
  | "contrast"
  | "fg"
  | "muted"
  | "subtle"
  | "emphasized"
  | "border"
  | "focusRing";

/**
 * Generates the semantic "palette" keys Chakra recipes read through
 * `colorPalette.*` (solid, contrast, fg, muted, subtle, emphasized, border,
 * focusRing) for a colour scale defined under `tokens.colors.<color>`.
 *
 * Numeric shades (`<color>.500`) are NOT re-declared as semantic tokens —
 * they already exist as raw tokens and re-declaring them would create
 * self-referencing tokens.
 *
 * `overrides` lets a palette point a key at a different shade or token
 * reference (e.g. `{ solid: "{colors.ink}" }`).
 */
export const genPalette = (
  color: string,
  overrides: Partial<Record<PaletteKey, string>> = {},
) => {
  const ref = (shade: PaletteShade) => `{colors.${color}.${shade}}`;

  const defaults: Record<PaletteKey, string> = {
    solid: ref(700),
    contrast: ref(0),
    fg: ref(700),
    muted: ref(100),
    subtle: ref(50),
    emphasized: ref(200),
    border: ref(300),
    focusRing: ref(500),
  };

  return Object.fromEntries(
    Object.entries({ ...defaults, ...overrides }).map(([key, value]) => [
      key,
      { value },
    ]),
  ) as Record<PaletteKey, { value: string }>;
};
