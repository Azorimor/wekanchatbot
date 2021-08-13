const world = "world";

export function hello(world = "testworl"): string {
  return `Hello ${world}! `;
}
