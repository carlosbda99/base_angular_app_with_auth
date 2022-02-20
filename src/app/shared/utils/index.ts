export function isNullOrUndefined(valor: any): valor is undefined | null {
  return valor === null ||  valor === undefined;
}

export function isNotNullOrUndefined<T>(valor: T): valor is T {
  return !isNullOrUndefined(valor);
}

export function isEmpty(valor: any): valor is undefined | null | '' {
  return isNullOrUndefined(valor) || valor === '';
}
