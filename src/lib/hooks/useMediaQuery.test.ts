import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery hook', () => {
  afterEach(async () => {
    await GlobalRegistrator.unregister();
  });

  it('should display the bool values according to the window 360x640', () => {
    GlobalRegistrator.register({
      width: 360,
      height: 640,
    });

    const { result } = renderHook(() => useMediaQuery());

    expect(result.current.width).toEqual(360);
    expect(result.current.height).toEqual(640);
    expect(result.current.isPortrait).toBeTruthy();
    expect(result.current.isLandscape).toBeFalsy();
    expect(result.current.isCompact).toBeTruthy();
    expect(result.current.isMedium).toBeFalsy();
    expect(result.current.isExpanded).toBeFalsy();
    expect(result.current.isExtraLarge).toBeFalsy();
    expect(result.current.isGreaterThanCompact).toBeFalsy();
    expect(result.current.isGreaterThanMedium).toBeFalsy();
    expect(result.current.isGreaterThanExpanded).toBeFalsy();
    expect(result.current.isGreaterThanLarge).toBeFalsy();
    expect(result.current.isLessThanMedium).toBeTruthy();
    expect(result.current.isLessThanExpanded).toBeTruthy();
    expect(result.current.isLessThanLarge).toBeTruthy();
    expect(result.current.isLessThanExtraLarge).toBeTruthy();
  });

  it('should display the bool values according to the window 1024x768', () => {
    GlobalRegistrator.register({
      width: 1024,
      height: 768,
    });

    const { result } = renderHook(() => useMediaQuery());

    expect(result.current.width).toEqual(1024);
    expect(result.current.height).toEqual(768);
    expect(result.current.isPortrait).toBeFalsy();
    expect(result.current.isLandscape).toBeTruthy();
    expect(result.current.isCompact).toBeFalsy();
    expect(result.current.isMedium).toBeFalsy();
    expect(result.current.isExpanded).toBeTruthy();
    expect(result.current.isExtraLarge).toBeFalsy();
    expect(result.current.isGreaterThanCompact).toBeTruthy();
    expect(result.current.isGreaterThanMedium).toBeTruthy();
    expect(result.current.isGreaterThanExpanded).toBeFalsy();
    expect(result.current.isGreaterThanLarge).toBeFalsy();
    expect(result.current.isLessThanMedium).toBeFalsy();
    expect(result.current.isLessThanExpanded).toBeFalsy();
    expect(result.current.isLessThanLarge).toBeTruthy();
    expect(result.current.isLessThanExtraLarge).toBeTruthy();
  });
});
