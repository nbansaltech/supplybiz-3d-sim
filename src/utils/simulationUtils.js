// Shared simulation constants and utilities
export const SupplyBiz_BLUE = '#0071ce';
export const SupplyBiz_YELLOW = '#ffc220';
export const SupplyBiz_ORANGE = '#ff6900';
export const TRUCK_SPEED = 0.02;
export const FORKLIFT_SPEED = 0.015;
export const WORKER_SPEED = 0.008;

export const lerp = (start, end, t) => start + (end - start) * t;
export const generateId = () => Date.now() + Math.random(); 