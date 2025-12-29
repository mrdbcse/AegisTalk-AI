export const USER_TYPES = ["ADMIN", "USER"] as const;
export type UserTypes = (typeof USER_TYPES)[number];
