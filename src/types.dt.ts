
/* 工具类型 */
type ArrayElement<T> = T extends readonly (infer B)[] ? B : never
