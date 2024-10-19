import React from 'react';

export function mergeStateObject(
  setter: React.Dispatch<React.SetStateAction<object>> | any,
  object: object,
): void {
  setter((prevState: object) => ({
    ...prevState,
    ...object,
  }));
}
