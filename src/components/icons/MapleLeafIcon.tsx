import type { SVGProps } from 'react';

export function MapleLeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5" // Thinner stroke for a more delicate look
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.589 2.067a1.5 1.5 0 0 0-1.178 0L5.438 5.21a1.5 1.5 0 0 0-.7 1.296v1.958c.002.051-.004.102.002.153.054.442.29.83.644 1.097l2.306 1.766L5.21 14.295a1.5 1.5 0 0 0 .593 2.203l5.497 3.434a1.5 1.5 0 0 0 1.4 0l5.497-3.434a1.5 1.5 0 0 0 .593-2.203l-2.478-2.815 2.306-1.766a1.5 1.5 0 0 0 .646-1.097c.006-.05.001-.102.002-.153V6.506a1.5 1.5 0 0 0-.7-1.296L12.589 2.067zM12 14.45l-2.5-3.95h5L12 14.45z" />
    </svg>
  );
}
