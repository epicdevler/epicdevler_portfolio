

const paletteShades = [
  0, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000,
] as const;

export const genPalette = (color: string) => {
  const scale = Object.fromEntries([
    [
      "DEFAULT",
      {
        value: `{colors.${color}.DEFAULT}`,
      },
    ],

    ...paletteShades.map((shade) => [
      shade,
      {
        value: `{colors.${color}.${shade}}`,
      },
    ]),
  ]);

  return {
    ...scale,

    solid: {
      value: `{colors.${color}.700}`,
    },

    contrast: {
      value: `{colors.${color}.0}`,
    },

    fg: {
      value: `{colors.${color}.700}`,
    },

    muted: {
      value: `{colors.${color}.100}`,
    },

    subtle: {
      value: `{colors.${color}.50}`,
    },

    emphasized: {
      value: `{colors.${color}.200}`,
    },

    focusRing: {
      value: `{colors.${color}.500}`,
    },
  };
};
