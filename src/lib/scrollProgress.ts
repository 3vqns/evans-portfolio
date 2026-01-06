export function calculateScrollProgress(
  element: HTMLElement,
  viewportHeight: number
): number {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementHeight = rect.height;
  const elementBottom = elementTop + elementHeight;

  // Element is completely above viewport
  if (elementBottom < 0) {
    return 0;
  }

  // Element is completely below viewport
  if (elementTop > viewportHeight) {
    return 0;
  }

  // Element is in viewport - calculate normalized progress (0 to 1)
  // 0 = element top at viewport top
  // 1 = element bottom at viewport bottom
  const scrollRange = viewportHeight + elementHeight;
  const scrolled = viewportHeight - elementTop;
  const progress = scrolled / scrollRange;

  return Math.max(0, Math.min(1, progress));
}

