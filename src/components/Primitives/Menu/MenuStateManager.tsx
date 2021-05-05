import { isUndefined } from 'lodash';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import { usePrevious } from 'react-use';

interface MenuStateManagerProps {
  children: ReactNode;
  isExpanded: boolean;
  onChange: (isExpanded: boolean) => void;
}

export const MenuStateManager = ({ children, isExpanded, onChange }: MenuStateManagerProps) => {
  const isPreviouslyExpanded = usePrevious(isExpanded);

  useEffect(() => {
    if (isExpanded !== isPreviouslyExpanded && !isUndefined(isPreviouslyExpanded)) {
      onChange(isExpanded);
    }
  }, [isExpanded, onChange, isPreviouslyExpanded]);

  return children as ReactElement;
};
