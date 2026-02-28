jest.mock('eventsource-parser/stream', () => ({}));

import { act, renderHook } from '@testing-library/react';
import { useScrollToBottom } from '../logic-hooks';

function createMockContainer({ atBottom = true } = {}) {
  const scrollTop = atBottom ? 100 : 0;
  const clientHeight = 100;
  const scrollHeight = 200;
  const listeners = {};
  return {
    current: {
      scrollTop,
      clientHeight,
      scrollHeight,
      addEventListener: jest.fn((event, cb) => {
        listeners[event] = cb;
      }),
      removeEventListener: jest.fn(),
    },
    listeners,
  } as any;
}

async function flushAll() {
  jest.runAllTimers();
  await Promise.resolve();
  jest.runAllTimers();
  await Promise.resolve();
}

describe('useScrollToBottom', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should set isAtBottom true when user is at bottom', () => {
    const containerRef = createMockContainer({ atBottom: true });
    const { result } = renderHook(() => useScrollToBottom([], containerRef));
    expect(result.current.isAtBottom).toBe(true);
  });

  it('should set isAtBottom false when user is not at bottom', () => {
    const containerRef = createMockContainer({ atBottom: false });
    const { result } = renderHook(() => useScrollToBottom([], containerRef));
    expect(result.current.isAtBottom).toBe(false);
  });

  it('should scroll to bottom when isAtBottom is true and messages change', async () => {
    const containerRef = createMockContainer({ atBottom: true });
    const mockScroll = jest.fn();

    function useTestScrollToBottom(messages: any, containerRef: any) {
      const hook = useScrollToBottom(messages, containerRef);
      hook.scrollRef.current = { scrollIntoView: mockScroll } as any;
      return hook;
    }

    const { rerender } = renderHook(
      ({ messages }) => useTestScrollToBottom(messages, containerRef),
      { initialProps: { messages: [] } },
    );

    rerender({ messages: ['msg1'] });
    await flushAll();

    expect(mockScroll).toHaveBeenCalled();
  });

  it('should NOT scroll to bottom when isAtBottom is false and messages change', async () => {
    const containerRef = createMockContainer({ atBottom: false });
    const mockScroll = jest.fn();

    function useTestScrollToBottom(messages: any, containerRef: any) {
      const hook = useScrollToBottom(messages, containerRef);
      hook.scrollRef.current = { scrollIntoView: mockScroll } as any;
      console.log('HOOK: isAtBottom:', hook.isAtBottom);
      return hook;
    }

    const { result, rerender } = renderHook(
      ({ messages }) => useTestScrollToBottom(messages, containerRef),
      { initialProps: { messages: [] } },
    );

    await act(async () => {
      containerRef.current.scrollTop = 0;
      containerRef.current.addEventListener.mock.calls[0][1]();
      await flushAll();
      jest.advanceTimersByTime(10);
      console.log('AFTER SCROLL: isAtBottom:', result.current.isAtBottom);
    });

    rerender({ messages: ['msg1'] });
    await flushAll();

    console.log('AFTER RERENDER: isAtBottom:', result.current.isAtBottom);

    expect(mockScroll).not.toHaveBeenCalled();

    await flushAll();
  });

  it('should indicate button should appear when user is not at bottom', () => {
    const containerRef = createMockContainer({ atBottom: false });
    const { result } = renderHook(() => useScrollToBottom([], containerRef));
    expect(result.current.isAtBottom).toBe(false);
  });
});

const originalRAF = global.requestAnimationFrame;
beforeAll(() => {
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
});
afterAll(() => {
  global.requestAnimationFrame = originalRAF;
});
