import { generatePerson, generateCompany } from "./generation";
import { KennitalaInfo, ValidationOptions } from "./types";
export declare const isValid: (kennitala: string, options?: ValidationOptions) => boolean;
export declare const isPersonKennitala: (kennitala: string, options?: ValidationOptions) => boolean;
export declare const isCompanyKennitala: (kennitala: string) => boolean;
export declare const isTemporaryKennitala: (kennitala: string) => boolean;
export declare const sanitize: (kennitala: string) => string | undefined;
export declare const formatKennitala: (kennitala: string, spacer?: boolean) => string | undefined;
export declare const info: (kennitala: string) => KennitalaInfo | undefined;
export { generatePerson, generateCompany };
