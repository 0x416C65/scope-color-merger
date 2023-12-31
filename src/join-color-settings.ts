type ColorSetting = {
  scope: string[];
  settings: {
    foreground: string;
  };
};

const hasSameSettings = (
  firstSetting: ColorSetting,
  secondSetting: ColorSetting
): boolean => {
  return (
    JSON.stringify(firstSetting.settings) ===
    JSON.stringify(secondSetting.settings)
  );
};

export const joinColorSettings = (
  colorSettings: ColorSetting[]
): ColorSetting[] => {
  return colorSettings.reduce((acc: ColorSetting[], cur: ColorSetting) => {
    const found = acc.find(el => hasSameSettings(el, cur));

    if (found) {
      found.scope.push(...cur.scope);
    } else {
      acc.push(cur);
    }

    return acc;
  }, []);
};
